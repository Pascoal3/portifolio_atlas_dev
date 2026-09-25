import { useEffect, useRef, useState, Fragment } from "react";
import type { CSSProperties, MouseEvent } from "react";
import { WorksWheel, type WorksWheelItem } from "@/components/ui/works-wheel";
import FlowArt, { FlowSection } from "@/components/ui/story-scroll";

const WORKS: WorksWheelItem[] = [
  { title: "Projeto 01", image: "/works/img_componente_1.jpg", href: "#" },
  { title: "Projeto 02", image: "/works/img_componente_2.jpg", href: "#" },
  { title: "Projeto 03", image: "/works/img_componente_3.jpg", href: "#" },
  { title: "Projeto 04", image: "/works/img_componente_4.jpg", href: "#" },
  { title: "Projeto 05", image: "/works/img_componente_5.jpg", href: "#" },
  { title: "Projeto 06", image: "/works/img_componente_6.jpg", href: "#" },
  { title: "Projeto 07", image: "/works/img_componente_7.jpg", href: "#" },
  { title: "Projeto 08", image: "/works/img_componente_8.jpg", href: "#" },
  { title: "Quem eu sou", image: "/works/img_componente_9.jpg", href: "#" },
];

const navItems = [
  { label: "Inicio", href: "#home" },
  { label: "Trabalhos", href: "#works" },
  { label: "Quem sou eu", href: "#quem-sou" },
  { label: "Contato", href: "#contact" },
];

const disciplines = ["Websites", "Apps", "Branding", "UI/UX"];

function ArrowUpRight() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none">
      <path d="M5 19 19 5M8 5h11v11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}



export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const targetPoint = useRef({ x: 0, y: 0 });
  const currentPoint = useRef({ x: 0, y: 0 });
  const [isRevealVisible, setIsRevealVisible] = useState(false);
  const [revealPoint, setRevealPoint] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let animationFrame = 0;

    const followCursor = () => {
      currentPoint.current.x += (targetPoint.current.x - currentPoint.current.x) * 0.14;
      currentPoint.current.y += (targetPoint.current.y - currentPoint.current.y) * 0.14;
      setRevealPoint({ ...currentPoint.current });
      animationFrame = requestAnimationFrame(followCursor);
    };

    animationFrame = requestAnimationFrame(followCursor);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  const updateRevealPoint = (event: MouseEvent<HTMLElement>) => {
    const bounds = heroRef.current?.getBoundingClientRect();
    if (!bounds) return;

    targetPoint.current = {
      x: event.clientX - bounds.left,
      y: event.clientY - bounds.top,
    };
    setIsRevealVisible(true);
  };

  return (
    <>
      <main
        id="home"
        ref={heroRef}
        className="hero-shell"
        onMouseEnter={updateRevealPoint}
        onMouseMove={updateRevealPoint}
        onMouseLeave={() => setIsRevealVisible(false)}
      > 
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
        <div className="hero-veil" aria-hidden="true" />
        <div className="hero-noise" aria-hidden="true" />
        <div
          className={`hero-reveal${isRevealVisible ? " hero-reveal--visible" : ""}`}
          aria-hidden="true"
          style={{ "--reveal-x": `${revealPoint.x}px`, "--reveal-y": `${revealPoint.y}px` } as CSSProperties}
        />

        <header className="hero-header">
          
          <nav className="hero-nav" aria-label="Primary navigation">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="hero-nav__link">
                {item.label}
              </a>
            ))}
          </nav>
        </header>

        <section className="hero-content" aria-labelledby="hero-title">
          <p className="hero-eyebrow">Portifólio Web dev</p>
          <h1 id="hero-title" className="hero-title">
            Sites não deviam
            <br />
            ser <em>aborrecidos</em>
          </h1>
          <p className="hero-description">
            Eu crio experiências digitais que unem design, <br className="hidden sm:block" />
            motion e imaginação.
          </p>
          <a className="work-cta" href="#works">
            <span>Veja o meu trabalho</span>
            <span className="work-cta__icon"><ArrowUpRight /></span>
          </a>
        </section>

        <div className="discipline-rail" aria-label="Capabilities">
          <span className="discipline-rail__label">Minhas competências</span>
          <div className="discipline-rail__items">
            {disciplines.map((discipline, index) => (
              <span key={discipline} className={index === disciplines.length - 1 ? "discipline-rail__item discipline-rail__item--active" : "discipline-rail__item"}>
                {discipline}
              </span>
            ))}
          </div>
        </div>

        <span id="work" className="anchor-target" />
        <span id="about" className="anchor-target" />
        <span id="contact" className="anchor-target" />
      </main>
      <WorksWheel
        id="works"
        items={WORKS}
        label="Meus Trabalhos"
        className="h-[100svh] min-h-[100svh]"
      />
      <FlowArt aria-label="Sobre mim">
        {/* Secção 1: Headline forte / Quem sou */}
        <FlowSection id="quem-sou" aria-label="Quem sou" style={{ backgroundColor: '#000000', color: '#ffffff' }}>
          <p className="text-xs font-bold uppercase tracking-[0.2em] opacity-70">01 — Quem sou</p>
          <hr className="my-[2vw] border-none border-t border-white/20" />
          <div>
            <h1 className="text-[clamp(3.5rem,12vw,14rem)] font-bold leading-[0.85] uppercase tracking-tight">
              Transformo<br />ideias em<br />software. <i className="bi bi-rocket-takeoff-fill rocket-icon" />
            </h1>
          </div>
          <hr className="my-[2vw] border-none border-t border-white/20" />
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <p className="max-w-[50ch] text-[clamp(1rem,1.5vw,1.25rem)] font-normal leading-relaxed opacity-90">
              Sou o Atlas, dev web e arquiteto de IA, obcecado por transformar ideias em soluções reais. 
              Trabalho na interseção entre Inteligência Artificial, Desenvolvimento Web, UI/UX e Automação.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a href="https://github.com/Pascoal3" target="_blank" rel="noopener noreferrer" className="rounded-full bg-white px-6 py-3 text-sm font-bold text-black transition hover:bg-gray-200">
                Ver projetos no GitHub
              </a>
              <a href="https://wa.me/244933621858?text=Ol%C3%A1%2C%20vim%20do%20teu%20portf%C3%B3lio%2C%20estou%20interessado%20em%20tirar%20uma%20ideia%20do%20papel%21" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/30 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10">
                Bora tirar a tua ideia do papel?
              </a>
            </div>
          </div>
        </FlowSection>

        {/* Secção 2: Por quê eu? */}
        <FlowSection aria-label="Diferencial" style={{ backgroundColor: '#ffffff', color: '#000000' }}>
          <p className="text-xs font-bold uppercase tracking-[0.2em] opacity-70">02 — Diferencial</p>
          <hr className="my-[2vw] border-none border-t border-black/20" />
          <div>
            <h2 className="text-[clamp(3.5rem,12vw,14rem)] font-bold leading-[0.85] uppercase tracking-tight">
              Por quê<br />eu? <i className="bi bi-search section-icon section-icon--light" />
            </h2>
          </div>
          <hr className="my-[2vw] border-none border-t border-black/20" />
          <div className="flex flex-wrap gap-[3vw]">
            <div className="min-w-[250px] flex-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider">Arquiteto de Soluções</p>
              <p className="text-[clamp(0.9rem,1.2vw,1.1rem)] leading-relaxed opacity-75">
                Não sou só developer. Penso no sistema como um todo, desde a UI/UX até à arquitetura de IA. 
                Junto a isso, a automação para que tudo funcione sem fricção.
              </p>
            </div>
            <div className="min-w-[250px] flex-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider">Design Premium</p>
              <p className="text-[clamp(0.9rem,1.2vw,1.1rem)] leading-relaxed opacity-75">
                Além do meu gosto incrível em design, não faço sites "normais". Todos são focados em ser premium, 
                tal como o meu próprio portfólio. Entrego pensamento estratégico aplicado.
              </p>
            </div>
          </div>
        </FlowSection>

        {/* Secção 3: Design + Desenvolvimento (Com foto pessoal) */}
        <FlowSection aria-label="Processo" style={{ backgroundColor: '#111111', color: '#ffffff' }}>
          <p className="text-xs font-bold uppercase tracking-[0.2em] opacity-70">03 — Processo</p>
          <hr className="my-[2vw] border-none border-t border-white/20" />
          <div>
            <h2 className="text-[clamp(3.5rem,12vw,14rem)] font-bold leading-[0.85] uppercase tracking-tight">
              Design +<br />dev <i className="bi bi-palette2 section-icon section-icon--dark" />
            </h2>
          </div>
          <hr className="my-[2vw] border-none border-t border-white/20" />
          <p className="max-w-[50ch] text-[clamp(1rem,1.5vw,1.25rem)] font-normal leading-relaxed opacity-90">
            Acredito que um bom produto nasce do equilíbrio entre forma e função. 
            Design e desenvolvimento não são etapas separadas no meu processo, são a mesma conversa.
          </p>
          <hr className="my-[2vw] border-none border-t border-white/20" />
          <div className="mt-auto grid gap-6 md:grid-cols-2 md:items-end">
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <p className="text-sm italic opacity-75">
                "Nos bastidores: onde as ideias viram protótipos, e os protótipos viram produtos."
              </p>
            </div>
            <div className="relative overflow-hidden rounded-xl border border-white/10">
              <video
                src="/apresentacao_skila.webm"
                className="h-[60vh] w-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
          </div>
        </FlowSection>

        {/* Secção 4: Pequena história */}
        <FlowSection aria-label="História" style={{ backgroundColor: '#ffffff', color: '#000000' }}>
          <p className="text-xs font-bold uppercase tracking-[0.2em] opacity-70">04 — Jornada</p>
          <hr className="my-[2vw] border-none border-t border-black/20" />
          <div>
            <h2 className="text-[clamp(3.5rem,12vw,14rem)] font-bold leading-[0.85] uppercase tracking-tight">
              A minha<br /> <span id="titulo_historia">história</span> <i className="bi bi-journal-text section-icon section-icon--light" />
            </h2>
          </div>
          <hr className="my-[2vw] border-none border-t border-black/20" />
          <p className="max-w-[60ch] text-[clamp(1rem,1.5vw,1.25rem)] font-normal leading-relaxed opacity-90">
            Comecei como muita gente começa: curioso, a tentar perceber como as coisas funcionam por trás do ecrã. 
            Essa curiosidade virou estudo, o estudo virou prática, e a prática virou uma missão: usar tecnologia e IA 
            para resolver problemas reais, em Angola e além. Hoje, cada projeto público que construo é um pedaço 
            dessa jornada, partilhado abertamente para quem quiser aprender ou colaborar.
          </p>
        </FlowSection>
      </FlowArt>
    </>
  );
}
