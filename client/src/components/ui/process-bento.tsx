"use client";

import React, { useMemo } from "react";

const STAMP_POINTS = Array.from({ length: 120 }, (_, i) => {
  const a = (i / 120) * 2 * Math.PI;
  const r = 22 + 1.9 * Math.cos(10 * a);
  return `${(24 + r * Math.cos(a)).toFixed(1)},${(24 + r * Math.sin(a)).toFixed(1)}`;
}).join(" ");

interface StampProps {
  children: React.ReactNode;
  isBig?: boolean;
}

function Stamp({ children, isBig = false }: StampProps) {
  return (
    <div
      className={`relative shrink-0 grid place-items-center ${
        isBig ? "w-[60px] h-[60px] md:w-[68px] md:h-[68px]" : "w-[44px] h-[44px]"
      }`}
    >
      <svg className="absolute inset-0 size-full fill-white" viewBox="0 0 48 48">
        <polygon points={STAMP_POINTS} />
      </svg>
      <div className="relative z-10 size-[44%] flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}

export function ProcessBento() {
  return (
    <div className="w-full flex flex-col justify-between py-2 md:py-4 font-sans text-white">
      <div className="mb-6 md:mb-8 border-b border-white/10 pb-4">
        <p className="text-xs uppercase tracking-[0.25em] mb-2 font-mono text-xs font-bold uppercase tracking-[0.25em] text-white">
          06 — Metodologia & Processo
        </p>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
          <h2
            className="text-[clamp(2.8rem,6vw,5.5rem)] font-normal leading-[0.95] tracking-tight text-white"
            style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
          >
            Da ideia à interface.
          </h2>
          <p className="max-w-[55ch] text-sm md:text-base text-white/70 font-light leading-relaxed">
            Um processo simples, estratégico e iterativo para transformar ideias em experiências digitais que funcionam, convertem e escalam com precisão matemática.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-[280px_280px_280px] gap-3">
        <article
          className="relative overflow-hidden flex flex-col justify-between p-6 rounded-[26px] text-white transition-transform duration-300 hover:-translate-y-1 lg:col-start-1 lg:row-start-1 min-h-[260px] lg:min-h-0"
          style={{ backgroundColor: "#cf6a64", color: "#cf6a64" }}
        >
          <svg className="absolute inset-0 size-full pointer-events-none" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice">
            <g transform="rotate(-62 200 200)" stroke="rgba(120,30,30,.25)" strokeWidth="5" strokeDasharray="7 15" fill="none" strokeLinecap="round">
              <path d="M-40 70H440M-40 100H440M-40 130H440M-40 160H440M-40 190H440M-40 220H440M-40 250H440" />
            </g>
          </svg>
          <header className="relative z-10 flex justify-between items-start">
            <span className="text-xs font-semibold tracking-wider text-white/90">01 / Briefing</span>
            <Stamp>
              <svg className="size-full stroke-current fill-none stroke-[2] stroke-round" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </Stamp>
          </header>
          <div className="relative z-10 text-white">
            <h3 className="text-2xl font-normal leading-tight mb-1" style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}>
              Descobrir
            </h3>
            <p className="text-xs text-white/85 leading-relaxed mb-3">
              Entender a essência do problema antes de redigir qualquer linha de código. Diagnóstico de mercado, auditoria e metas claras.
            </p>
            <p className="text-[11px] text-white/70 font-mono tracking-wide">
              100% Imersão · Brief · Metas
            </p>
          </div>
        </article>

        <article
          className="relative overflow-hidden flex flex-col justify-between p-6 rounded-[26px] text-white transition-transform duration-300 hover:-translate-y-1 lg:col-start-2 lg:row-start-1 min-h-[260px] lg:min-h-0"
          style={{ backgroundColor: "#388a76", color: "#388a76" }}
        >
          <svg className="absolute inset-0 size-full pointer-events-none" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice">
            <g stroke="rgba(10,50,40,.35)" strokeWidth="9" fill="none" strokeLinecap="round">
              <path d="M-10 60Q90 50 190 66" /><path d="M-10 100Q80 92 150 104" /><path d="M-10 140Q100 128 200 146" />
              <path d="M-10 180Q70 170 130 182" /><path d="M-10 220Q90 212 170 224" /><path d="M-10 260Q80 252 120 262" />
            </g>
          </svg>
          <header className="relative z-10 flex justify-between items-start">
            <span className="text-xs font-semibold tracking-wider text-white/90">02 / Arquitetura</span>
            <Stamp>
              <svg className="size-full stroke-current fill-none stroke-[2] stroke-round" viewBox="0 0 24 24">
                <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" />
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
              </svg>
            </Stamp>
          </header>
          <div className="relative z-10 text-white">
            <h3 className="text-2xl font-normal leading-tight mb-1" style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}>
              Estratégia
            </h3>
            <p className="text-xs text-white/85 leading-relaxed mb-3">
              Definição de jornada, sitemap e hierarquia de conversão para máxima retenção de usuários.
            </p>
            <p className="text-[11px] text-white/70 font-mono tracking-wide">
              User Flow · Mapa · Wireframe
            </p>
          </div>
        </article>

        <article
          className="relative overflow-hidden flex flex-col justify-between p-7 md:p-9 rounded-[30px] text-white transition-transform duration-300 hover:-translate-y-1 lg:col-span-2 lg:row-span-2 min-h-[360px] lg:min-h-0"
          style={{ backgroundColor: "#d26ba8", color: "#d26ba8" }}
        >
          <svg className="absolute inset-0 size-full pointer-events-none" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice">
            <g stroke="rgba(130,20,90,.3)" strokeWidth="11" fill="none" strokeLinecap="round">
              <circle cx="430" cy="-20" r="110" /><circle cx="430" cy="-20" r="170" /><circle cx="430" cy="-20" r="232" />
              <circle cx="430" cy="-20" r="296" /><circle cx="430" cy="-20" r="362" />
            </g>
          </svg>
          <header className="relative z-10 flex justify-between items-start">
            <span className="text-sm md:text-base font-semibold tracking-wider text-white/95">03 / Experiência Visual</span>
            <Stamp isBig>
              <svg className="size-full stroke-current fill-none stroke-[2] stroke-round" viewBox="0 0 24 24">
                <path d="M12 19l7-7 3 3-7 7-3-3z" />
                <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
                <path d="M2 2l7.586 7.586" />
                <circle cx="11" cy="11" r="2" />
              </svg>
            </Stamp>
          </header>
          <div className="relative z-10 text-white">
            <h3 className="text-4xl md:text-5xl font-normal leading-none mb-1" style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}>
              Design
            </h3>
            <p className="text-xl md:text-2xl text-white/95 mb-3" style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}>
              Dar forma à experiência.
            </p>
            <p className="text-xs md:text-sm text-white/90 font-light leading-relaxed max-w-[42ch] mb-4">
              Transformo estratégia em interfaces claras, consistentes e visualmente memoráveis. Defino tipografia, composição, hierarquia e sistema visual antes de transformar cada decisão em interface real.
            </p>
            <p className="text-xs text-white/70 font-mono tracking-wide">
              Figma → Código · 100% Responsivo · Design System
            </p>
          </div>
        </article>

        <article
          className="relative overflow-hidden flex flex-col justify-between p-7 md:p-9 rounded-[30px] text-white transition-transform duration-300 hover:-translate-y-1 lg:col-span-2 lg:row-span-2 min-h-[360px] lg:min-h-0"
          style={{ backgroundColor: "#d17f2f", color: "#d17f2f" }}
        >
          <svg className="absolute inset-0 size-full pointer-events-none" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice">
            <g stroke="rgba(150,60,0,.32)" strokeWidth="15" fill="none" strokeLinecap="round">
              <path d="M60 340C30 220 190 70 300 140S390 310 250 262 110 120 220 60 360 40 395 115" />
              <path d="M120 380C90 300 230 190 320 230" strokeWidth="10" />
            </g>
          </svg>
          <header className="relative z-10 flex justify-between items-start">
            <span className="text-sm md:text-base font-semibold tracking-wider text-white/95">04 / Engenharia & IA</span>
            <Stamp isBig>
              <svg className="size-full stroke-current fill-none stroke-[2] stroke-round" viewBox="0 0 24 24">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
            </Stamp>
          </header>
          <div className="relative z-10 text-white">
            <h3 className="text-4xl md:text-5xl font-normal leading-none mb-1" style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}>
              Desenvolver
            </h3>
            <p className="text-xl md:text-2xl text-white/95 mb-3" style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}>
              Do design para software.
            </p>
            <p className="text-xs md:text-sm text-white/90 font-light leading-relaxed max-w-[42ch] mb-4">
              Transformo interfaces em produtos digitais rápidos, responsivos e escaláveis, combinando desenvolvimento web moderno, integrações de API e automações com IA.
            </p>
            <p className="text-xs text-white/70 font-mono tracking-wide">
              React · Laravel · JavaScript · API · IA · Next.js
            </p>
          </div>
        </article>

        <article
          className="relative overflow-hidden flex flex-col justify-between p-6 rounded-[26px] text-white transition-transform duration-300 hover:-translate-y-1 lg:col-start-3 lg:row-start-3 min-h-[260px] lg:min-h-0"
          style={{ backgroundColor: "#5878d6", color: "#5878d6" }}
        >
          <svg className="absolute inset-0 size-full pointer-events-none" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice">
            <g stroke="rgba(20,40,150,.35)" strokeWidth="4" fill="none" strokeLinecap="round">
              <circle cx="330" cy="430" r="70" /><circle cx="330" cy="430" r="115" /><circle cx="330" cy="430" r="160" />
              <circle cx="330" cy="430" r="205" /><circle cx="330" cy="430" r="250" />
            </g>
          </svg>
          <header className="relative z-10 flex justify-between items-start">
            <span className="text-xs font-semibold tracking-wider text-white/90">05 / QA & Testes</span>
            <Stamp>
              <svg className="size-full stroke-current fill-none stroke-[2] stroke-round" viewBox="0 0 24 24">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
            </Stamp>
          </header>
          <div className="relative z-10 text-white">
            <h3 className="text-2xl font-normal leading-tight mb-1" style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}>
              Ajustar
            </h3>
            <p className="text-xs text-white/85 leading-relaxed mb-3">
              Refinamento obsessivo de SEO, acessibilidade, performance e microinterações.
            </p>
            <p className="text-[11px] text-white/70 font-mono tracking-wide">
              99+ Core Vitals · SEO · A11y
            </p>
          </div>
        </article>

        <article
          className="relative overflow-hidden flex flex-col justify-between p-6 rounded-[26px] text-white transition-transform duration-300 hover:-translate-y-1 lg:col-start-4 lg:row-start-3 min-h-[260px] lg:min-h-0"
          style={{ backgroundColor: "#8b63c9", color: "#8b63c9" }}
        >
          <svg className="absolute inset-0 size-full pointer-events-none" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice">
            <g stroke="rgba(55,20,120,.3)" strokeWidth="10" fill="none" strokeLinecap="round">
              <path d="M200 420V250" /><path d="M226 420V200" /><path d="M252 420V150" /><path d="M278 420V90" />
              <path d="M304 420V40" /><path d="M330 420V110" /><path d="M356 420V170" /><path d="M382 420V230" />
            </g>
          </svg>
          <header className="relative z-10 flex justify-between items-start">
            <span className="text-xs font-semibold tracking-wider text-white/90">06 / Go-Live</span>
            <Stamp>
              <svg className="size-full stroke-current fill-none stroke-[2] stroke-round" viewBox="0 0 24 24">
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
              </svg>
            </Stamp>
          </header>
          <div className="relative z-10 text-white">
            <h3 className="text-2xl font-normal leading-tight mb-1" style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}>
              Lançar
            </h3>
            <p className="text-xs text-white/85 leading-relaxed mb-3">
              Deploy global, domínio, SSL e produto pronto a faturar. Transição fluida para ambiente de produção.
            </p>
            <p className="text-[11px] text-white/70 font-mono tracking-wide">
              Sistema Online · Zero-Downtime
            </p>
          </div>
        </article>
      </div>

      <div className="mt-6 flex flex-wrap gap-4 items-center justify-between border-t border-white/10 pt-3 text-xs text-white/40 font-mono">
        <span>Iterações contínuas em ambiente de staging dedicado.</span>
        <span>Figma · Git · React · Vercel · AWS</span>
      </div>
    </div>
  );
}

export default ProcessBento;