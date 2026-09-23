# Auditoria do Projeto

## 1. Stack
- **Framework**: React 18 (via Vite)
- **Linguagens**: TypeScript, TSX, CSS
- **CSS**: Tailwind CSS v4 (importado via `@import "tailwindcss"`), `tw-animate-css` para animações
- **Build tool**: Vite (config `vite.config.ts`)
- **Outras tecnologias**: `wouter` (roteamento leve), `radix-ui` (componentes de UI), `lucide-react` (ícones), `clsx`/`tailwind-merge` (utilitários de classe), `embla-carousel-react` (carrossel), `react-hook-form` + `zod` (formulários)

## 2. Estrutura relevante
```
client/
 ├─ public/
 │   ├─ hero_cabeca_radio.webm   (vídeo a ser usado)
 │   ├─ BG_IMAGEs_2.png          (imagem de background atual)
 │   └─ __manus__/               (assets gerados automaticamente)
 ├─ src/
 │   ├─ pages/
 │   │   └─ Home.tsx             (contém o Hero)
 │   ├─ index.css                (estilos globais + estilos do Hero)
 │   ├─ main.tsx                 (bootstrap da aplicação)
 │   ├─ components/ui/           (componentes de UI reutilizáveis)
 │   ├─ hooks/                   (hooks customizados)
 │   ├─ contexts/                (ThemeContext)
 │   └─ lib/utils.ts
```

## 3. Hero atual
**Arquivo**: `client/src/pages/Home.tsx`  
**Componente**: `Home` (export default) – o `<main id="home" class="hero-shell">` é o container do Hero.

### Estrutura JSX (resumo)
```tsx
<main id="home" className="hero-shell" ref={heroRef} ...>
  <video className="hero-video" src="/hero_cabeca_radio.webm" autoPlay loop muted playsInline aria-hidden="true" preload="metadata" />
  <img className="hero-background" src="/BG_IMAGEs_2.png" alt="" aria-hidden="true" />
  <div className="hero-veil" aria-hidden="true" />
  <div className="hero-noise" aria-hidden="true" />
  <div className={`hero-reveal${isRevealVisible ? " hero-reveal--visible" : ""}`} ... />

  <header className="hero-header">
    <nav className="hero-nav"> … </nav>
  </header>

  <section className="hero-content" aria-labelledby="hero-title">
    <p className="hero-eyebrow">Portefólio Web dev</p>
    <h1 id="hero-title" className="hero-title">…</h1>
    <p className="hero-description">…</p>
    <a className="work-cta" href="#work">…</a>
  </section>

  <div className="discipline-rail">…</div>

  <span id="work" className="anchor-target" />
  <span id="about" className="anchor-target" />
  <span id="contact" className="anchor-target" />
</main>
```

### Classes principais
- `hero-shell` – container principal, `position: relative`, `min-height: 100svh`, `isolation: isolate`, `overflow: hidden`, background sólido `#11102a`.
- `hero-video` – `<video>` absoluta, `z-index: -5`, `object-fit: cover`, `object-position: center center` (39% center ≤700px), `autoplay loop muted playsinline`, `preload="metadata"`.
- `hero-background` – `<img>` absoluta, `z-index: -4`, `object-fit: cover`.
- `hero-veil` – overlay com gradientes radiais/lineares, `z-index: -3`.
- `hero-noise` – textura de ruído SVG, `z-index: -2`, `mix-blend-mode: soft-light`.
- `hero-reveal` – máscara radial controlada por CSS custom properties (`--reveal-x`, `--reveal-y`), `z-index: -1`, opacidade animada.
- `hero-header` – cabeçalho fixo no topo, `z-index: 2`.
- `hero-content` – área de conteúdo central, `z-index: 1`.
- `discipline-rail` – rail lateral direita, `z-index: 2`.

### IDs
- `home` (no `<main>`), `hero-title` (no `<h1>`), `work`, `about`, `contact` (âncoras).

### Posicionamento & z-index
| Elemento            | position | z-index |
|---------------------|----------|--------|
| hero-shell          | relative | —      |
| hero-video          | absolute | -5     |
| hero-background     | absolute | -4     |
| hero-veil           | absolute | -3     |
| hero-noise          | absolute | -2     |
| hero-reveal         | absolute | -1     |
| hero-header         | absolute | 2      |
| hero-content        | relative | 1      |
| discipline-rail     | absolute | 2      |

### Responsividade & Breakpoints
- Media queries em `index.css`:
  - `@media (max-width: 700px)` – ajustes de `object-position`, navegação, largura do conteúdo, esconde `discipline-rail`.
  - `@media (max-width: 460px)` – ajustes finos de padding, tipografia, nav.
- Unidades fluidas (`clamp`, `vw`, `svh`) usadas extensivamente.

## 4. Estilização atual
- Tailwind v4 com `@theme inline` definindo fontes (`Inter`, `Space Grotesk`) e cores CSS custom.
- Variáveis CSS (`--background`, `--foreground`, `--primary`, etc.) definidas em `:root` e `.dark`.
- Camadas `@layer base` para reset global.
- Animações via `@keyframes` (`hero-reveal`, `rise-in`) e `tw-animate-css`.
- Efeitos visuais: gradientes multi‑camada (`hero-veil`), ruído SVG (`hero-noise`), máscara radial dinâmica (`hero-reveal`).
- `isolation: isolate` no shell para garantir stacking context próprio.

## 5. Background atual (pós-implementação)
1. **Cor base** no `.hero-shell`: `background: #11102a;`.
2. **Vídeo** `<video class="hero-video" src="/hero_cabeca_radio.webm">` – cobre todo o viewport, `object-fit: cover`, `z-index: -5`, `autoplay loop muted playsinline`.
3. **Imagem (fallback)** `<img class="hero-background" src="/BG_IMAGEs_2.png">` – mesma cobertura, `z-index: -4`.
4. **Véu gradiente** `.hero-veil` – três gradientes sobrepostos, `z-index: -3`.
5. **Ruído** `.hero-noise` – SVG `feTurbulence`, `mix-blend-mode: soft-light`, `z-index: -2`.
6. **Reveal** `.hero-reveal` – mesma imagem de background (via `background-image: url("/manus-storage/BG_IMAGEs_2_f2989422.png")`) mas mascarada radialmente, `z-index: -1`, controlada por JS (mouse).

O background final é a composição dessas 5 camadas absolutas atrás do conteúdo.

## 6. Vídeo (implementado)
- **Caminho**: `client/public/hero_cabeca_radio.webm` → servido em `/hero_cabeca_radio.webm`
- **Nome**: `hero_cabeca_radio.webm`
- **Formato**: WebM (VP8/VP9)
- **Existência**: Confirmado (arquivo presente em `public/` e copiado para `dist/public/` no build)
- **Tamanho**: ~1.93 MB (1 934 908 bytes)
- **Duração**: Não verificada (requer `ffprobe`); estimada < 10 s dado o tamanho.
- **Atributos**: `autoplay`, `loop`, `muted`, `playsInline`, `preload="metadata"`, `aria-hidden="true"`
- **Classe CSS**: `.hero-video` com `z-index: -5`, `object-fit: cover`, responsivo (39% center ≤700px)

## 7. Pontos de integração (implementado)
**Abordagem adotada:** Inserido `<video class="hero-video">` **imediatamente antes** da `<img class="hero-background">` dentro do `.hero-shell`.

- O vídeo recebe classe dedicada `.hero-video` (não reutiliza `.hero-background` para manter z-index independente).
- Posicionamento absoluto herdado do seletor compartilhado (`.hero-background, .hero-video, .hero-veil, .hero-noise, .hero-reveal`).
- `z-index: -5` coloca o vídeo **atrás** da imagem de fallback (`-4`), que por sua vez fica atrás do véu (`-3`), ruído (`-2`) e reveal (`-1`).
- A imagem original permanece como fallback caso o vídeo falhe ou não carregue.
- Nenhuma estrutura de conteúdo foi alterada.

## 8. Riscos
| Risco | Descrição |
|-------|-----------|
| **z-index** | Adicionar vídeo com z-index incorreto pode ocultar a máscara `hero-reveal` ou o véu. |
| **overflow** | `.hero-shell` tem `overflow: hidden`; vídeo deve respeitar `object-fit: cover` igual à imagem. |
| **Responsividade** | `object-position` ajustado em `@media (max-width: 700px)` para a imagem; vídeo deve replicar o mesmo comportamento (ou usar `object-position: center`). |
| **Performance** | Vídeo ~2 MB – OK, mas deve ter `preload="metadata"` e `playsinline` para mobile. |
| **Contraste/legibilidade** | O véu e o ruído já escurecem o fundo; vídeo muito claro pode reduzir contraste do texto. |
| **Autoplay policy** | Navegadores exigem `muted` para autoplay sem interação; incluir `muted`. |
| **Mobile data** | `preload="none"` ou `metadata` evita download desnecessário em conexões lentas. |
| **Reduced motion** | `@media (prefers-reduced-motion: reduce)` desativa animações; vídeo não é animação CSS, mas pode-se pausar via JS se desejado. |

## 9. Estratégia de implementação (executada)
**Arquivos modificados**
1. `client/src/pages/Home.tsx` – adicionado `<video class="hero-video">` antes da `<img class="hero-background">`.
2. `client/src/index.css` – adicionada classe `.hero-video` e inclusão no seletor compartilhado de posicionamento; media query `@media (max-width: 700px)` estendida para `.hero-video`.

**Elemento adicionado em Home.tsx**
```tsx
<video
  className="hero-video"
  src="/hero_cabeca_radio.webm"
  autoPlay
  loop
  muted
  playsInline
  aria-hidden="true"
  preload="metadata"
/>
```

**Estilos adicionados em index.css**
```css
.hero-video {
  z-index: -5;
  object-fit: cover;
  object-position: center center;
  user-select: none;
  pointer-events: none;
}
```
Media query estendida:
```css
@media (max-width: 700px) {
  .hero-background,
  .hero-video {
    object-position: 39% center;
  }
}
```

**Partes preservadas (inalteradas)**
- Estrutura JSX dos elementos de conteúdo (`hero-header`, `hero-content`, `discipline-rail`, anchors).
- Classes CSS existentes (`.hero-shell`, `.hero-veil`, `.hero-noise`, `.hero-reveal`, `.hero-header`, `.hero-content`, `.discipline-rail`, etc.).
- Animações, transições, media queries, variáveis de cor.
- Lógica JS de reveal (mouse tracking) – permanece inalterada.
- Imagem `BG_IMAGEs_2.png` mantida como fallback.

## 10. Garantia de preservação
Durante a futura implementação, os seguintes itens devem permanecer **intocados**:
- HTML/JSX dos elementos: `hero-header`, `hero-nav`, `hero-content`, `hero-title`, `hero-description`, `work-cta`, `discipline-rail`, anchors.
- Todas as classes CSS atuais (`.hero-shell`, `.hero-veil`, `.hero-noise`, `.hero-reveal`, `.hero-header`, `.hero-content`, `.discipline-rail`, etc.).
- Variáveis CSS custom (`--reveal-x`, `--reveal-y`, cores, fontes).
- Keyframes e animações (`hero-reveal`, `rise-in`).
- Media queries e breakpoints (700px, 460px).
- Lógica React de `heroRef`, `targetPoint`, `currentPoint`, `isRevealVisible`, `revealPoint`.
- Imagem atual `BG_IMAGEs_2.png` (pode ficar como fallback ou camada extra).
- Configurações de build, Tailwind, Vite, dependências.

---
*Auditoria atualizada após implementação do vídeo WebM no Hero. Implementação concluída em 23/09/2026.*