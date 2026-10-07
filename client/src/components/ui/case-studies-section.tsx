"use client";

import React, { useState, useCallback, useEffect, useRef } from "react";

interface CaseStudy {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  role: string;
  stack: string;
  image: string;
  imageAlt: string;
  description: string;
  problem: string[];
  process: { step: string; description: string }[];
  solution: { tags: string[]; features: string[] };
  result: { lead: string; items: { label: string; description: string }[] };
  modal: {
    problem: string;
    process: string;
    solution: string;
    result: string;
  };
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: "cs-modal-1",
    number: "01",
    title: "SKILLA.",
    subtitle: "FREELANCE PLATFORM · ANGOLA",
    role: "Produto + Desenvolvimento Full-stack",
    stack: "Laravel · Blade · MySQL/PostgreSQL · WebSockets · Cron/Scheduler",
    image: "/assets/skilla-home.png",
    imageAlt: "Screenshot da homepage da Skilla",
    description: "Uma plataforma freelance voltada ao mercado angolano para conectar clientes e freelancers com mais confiança, organização e segurança nos pagamentos.",
    problem: [
      "Baixa confiança entre clientes e freelancers.",
      "Comunicação, ficheiros e prazos dispersos entre WhatsApp e redes sociais.",
      "Pagamentos sem garantias para ambas as partes.",
      "Falta de disputas, auditoria e rastreabilidade financeira.",
    ],
    process: [
      { step: "01", description: "Mapeamento do fluxo: job → proposta → contrato → entrega → aprovação/disputa → avaliação." },
      { step: "02", description: "Modelagem de dados para auditoria, histórico e transações." },
      { step: "03", description: "Regras para retenção, liberação, reembolso e expiração." },
      { step: "04", description: "Desenvolvimento modular: perfis → jobs → contratos → financeiro → chat → automações." },
    ],
    solution: {
      tags: ["ESCROW", "CHAT REAL-TIME", "DISPUTAS", "AUTOMAÇÕES"],
      features: [
        "Wizard de jobs em 5 etapas com rascunhos.",
        "Sistema de propostas com créditos.",
        "Wallet e pagamento escrow transacional.",
        "Chat em tempo real e partilha de ficheiros.",
        "Disputas, reembolsos e avaliações bilaterais.",
        "Cron Jobs para expiração de vagas e automações.",
      ],
    },
    result: {
      lead: "Um fluxo de contratação mais seguro, centralizado e rastreável para clientes e freelancers.",
      items: [
        { label: "SEGURANÇA", description: "Mais proteção através de wallet, escrow e disputas." },
        { label: "CENTRALIZAÇÃO", description: "Propostas, comunicação, entregas e histórico num único ambiente." },
        { label: "ESCALABILIDADE", description: "Arquitetura modular pronta para monetização, KYC, 2FA e integração com Multicaixa." },
      ],
    },
    modal: {
      problem: "A contratação de freelancers em Angola acontecia sobretudo fora de um ambiente estruturado, com baixa confiança entre as partes, comunicação e ficheiros dispersos entre WhatsApp e redes sociais, pagamentos sem garantias e ausência de disputas, auditoria e rastreabilidade financeira.",
      process: "Mapeei o fluxo completo (job → proposta → contrato → entrega → aprovação/disputa → avaliação), modelei os dados para auditoria, histórico e transações, defini regras de retenção, liberação, reembolso e expiração, e desenvolvi de forma modular: perfis, jobs, contratos, financeiro, chat e automações.",
      solution: "Wizard de jobs em 5 etapas com rascunhos, propostas com créditos, wallet e pagamento escrow transacional, chat em tempo real com partilha de ficheiros, disputas, reembolsos e avaliações bilaterais, e Cron Jobs para expiração de vagas e automações.",
      result: "Um fluxo de contratação mais seguro, centralizado e rastreável para clientes e freelancers, com uma arquitetura modular pronta para monetização, KYC, 2FA e integração com Multicaixa.",
    },
  },
  {
    id: "cs-modal-2",
    number: "02",
    title: "CRM PERSONALIZADO.",
    subtitle: "CRM PERSONALIZADO · B2B / FERRAMENTA INTERNA (SALES CRM)",
    role: "UI/UX + Frontend + Arquitetura",
    stack: "Next.js 16 · React 19 · TypeScript",
    image: "/assets/crm-home.png",
    imageAlt: "Screenshot do CRM Personalizado",
    description: "CRM interno de prospecção e gestão de clientes, focado em pipeline claro, follow-ups automáticos e histórico centralizado para equipas de vendas.",
    problem: [
      "Leads espalhados por WhatsApp, Sheets e notas soltas.",
      "Falta de pipeline claro (em que etapa cada lead está).",
      "Follow-ups esquecidos → oportunidades perdidas.",
      "Ausência de histórico e rastreio (quem falou com quem, quando, e o que ficou combinado).",
    ],
    process: [
      { step: "01", description: "Mapeamento do fluxo de vendas: desde lead frio até conversão." },
      { step: "02", description: "Definição do pipeline: etapas, regras, campos essenciais e \"próxima ação\"." },
      { step: "03", description: "UI/UX: interface rápida (menos cliques, mais operação), foco em produtividade." },
      { step: "04", description: "Implementação web app: componentes reutilizáveis, tipagem forte (TS) e estado previsível." },
      { step: "05", description: "Testes com uso real: ajustes por fricção e tempo de operação." },
      { step: "06", description: "Entrega: deploy + documentação mínima para uso diário." },
    ],
    solution: {
      tags: ["PIPELINE/KANBAN", "HISTÓRICO DO LEAD", "TAREFAS & LEMBRETES", "PESQUISA & FILTROS", "NOTAS & TAGS", "PERMISSÕES", "EXPORTAÇÃO CSV"],
      features: [
        "Pipeline/Kanban por etapas (Lead → Qualificação → Proposta → Fechado).",
        "Perfil do lead/cliente com histórico completo.",
        "Tarefas & lembretes automáticos de follow-up.",
        "Pesquisa e filtros rápidos.",
        "Notas e tags para segmentação.",
        "Permissões por papel (se houver equipa).",
        "Exportação (CSV) / importação de dados.",
      ],
    },
    result: {
      lead: "Organização imediata da operação comercial: tudo num só lugar, menos leads perdidos por esquecimento e velocidade de decisão com pipeline claro e histórico acessível.",
      items: [
        { label: "ORGANIZAÇÃO", description: "Centralização de leads, tarefas e comunicação." },
        { label: "EFICIÊNCIA", description: "Follow-up integrado ao fluxo, redução de horas manuais." },
        { label: "ESCALABILIDADE", description: "Arquitetura modular pronta para automações, scoring e integrações (e‑mail/WhatsApp)." },
      ],
    },
    modal: {
      problem: "Leads espalhados por WhatsApp, Sheets e notas soltas; ausência de pipeline claro; follow-ups esquecidos gerando oportunidades perdidas; nenhum histórico centralizado de interações.",
      process: "Mapeamento do funil de vendas (lead frio → conversão), definição de etapas e \"próxima ação\", design de UI focada em velocidade (menos cliques), implementação com Next.js 16, React 19 e TypeScript, componentes reutilizáveis e estado tipado, testes de usabilidade com a equipa de vendas, deploy e documentação mínima.",
      solution: "Pipeline/Kanban (Lead → Qualificação → Proposta → Fechado), ficha do lead com histórico, tarefas e lembretes automáticos de follow-up, pesquisa/filtros rápidos, notas e tags, permissões por papel, exportação/importação CSV. Arquitetura preparada para automações (e‑mail/WhatsApp) e scoring futuro.",
      result: "Operação comercial organizada num único local, redução drástica de leads perdidos por esquecimento, decisões mais rápidas graças a pipeline visível e histórico acessível. Base sólida para adicionar integrações e métricas (tempo de follow-up, taxa de conversão, horas poupadas).",
    },
  },
];

export function CaseStudiesSection() {
  const [openModalId, setOpenModalId] = useState<string | null>(null);
  const [lastFocused, setLastFocused] = useState<HTMLElement | null>(null);
  const reducedMotion = useRef(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    reducedMotion.current = mq.matches;
    const update = () => {
      reducedMotion.current = mq.matches;
    };
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const openModal = useCallback((id: string) => {
    setLastFocused(document.activeElement as HTMLElement);
    setOpenModalId(id);
    const root = document.getElementById("case-studies-section");
    if (root) {
      const top = root.getBoundingClientRect().top;
      if (top < 0 || top > window.innerHeight * 0.5) {
        root.scrollIntoView({ behavior: reducedMotion.current ? "auto" : "smooth", block: "start" });
      }
    }
  }, []);

  const closeAllModals = useCallback(() => {
    setOpenModalId(null);
    if (lastFocused && typeof lastFocused.focus === "function") {
      lastFocused.focus();
    }
  }, [lastFocused]);

  const handleModalOverlayClick = useCallback((e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeAllModals();
    }
  }, [closeAllModals]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeAllModals();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [closeAllModals]);

  return (
    <section id="case-studies-section" aria-labelledby="cs-heading">
      <style>{`
        #case-studies-section {
          --cs-navy: #030817;
          --cs-lime: #C8FF00;
          --cs-blue: #2F68FF;
          --cs-off: #F5F4EE;
          --cs-ink: #0B0B0B;
          --cs-r: 16px;
          --cs-gap: 20px;
          box-sizing: border-box;
          position: relative;
          width: 100%;
          padding: clamp(36px, 5vw, 72px) clamp(16px, 4vw, 56px);
          background: var(--cs-off);
          color: var(--cs-ink);
          font-family: "Helvetica Neue", Arial, sans-serif;
          line-height: 1.45;
          overflow-x: hidden;
        }
        #case-studies-section *,
        #case-studies-section *::before,
        #case-studies-section *::after {
          box-sizing: border-box;
        }
        #case-studies-section .cs-head {
          max-width: 1200px;
          margin: 0 auto 32px;
        }
        #case-studies-section .cs-eyebrow {
          margin: 0 0 6px;
          font-weight: 800;
          font-size: .78rem;
          letter-spacing: .16em;
          color: var(--cs-blue);
        }
        #case-studies-section .cs-sub {
          margin: 0;
          font-size: 1rem;
          max-width: 60ch;
        }
        #case-studies-section .cs-grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: var(--cs-gap);
        }
        #case-studies-section .cs-card {
          padding: 14px;
          background: #fff;
          border: 2px solid var(--cs-ink);
          border-radius: 20px;
          display: flex;
          flex-direction: column;
          gap: 14px;
          min-width: 0;
          overflow: hidden;
          width: 100%;
        }
        #case-studies-section .cs-topbar {
          display: flex;
          align-items: center;
          background: var(--cs-navy);
          color: #fff;
          border-radius: 999px;
          padding: 5px;
        }
        #case-studies-section .cs-topbar-label {
          flex: 1;
          font-weight: 700;
          font-size: .66rem;
          letter-spacing: .1em;
          text-align: right;
          padding-right: 4px;
        }
        #case-studies-section .cs-pill {
          display: inline-block;
          margin: 0;
          padding: 8px 14px;
          border-radius: 999px;
          font-weight: 800;
          font-size: .68rem;
          letter-spacing: .1em;
          white-space: nowrap;
        }
        #case-studies-section .cs-pill--lime {
          background: var(--cs-lime);
          color: var(--cs-ink);
        }
        #case-studies-section .cs-round {
          flex: none;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          border: 0;
          cursor: pointer;
          background: var(--cs-blue);
          color: #fff;
          font-size: 1.1rem;
          font-weight: 700;
          transition: transform .2s, background .2s, color .2s;
        }
        #case-studies-section .cs-round:hover {
          transform: rotate(45deg);
          background: var(--cs-lime);
          color: var(--cs-ink);
        }
        #case-studies-section .cs-shot {
          margin: 0;
          padding: 12px;
          background: var(--cs-navy);
          border-radius: var(--cs-r);
          min-height: 220px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        #case-studies-section .cs-shot img {
          display: block;
          max-width: 100%;
          height: auto;
          object-fit: contain;
          border-radius: 12px;
          border: 2px solid var(--cs-lime);
          background: var(--cs-off);
        }
        #case-studies-section .cs-intro {
          display: grid;
          gap: 10px;
          width: 100%;
          max-width: 100%;
        }
        #case-studies-section .cs-title {
          margin: 0;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: -.03em;
          line-height: .95;
          font-size: clamp(2rem, 4vw, 3.2rem);
          text-wrap: balance;
          overflow-wrap: anywhere;
          word-break: normal;
          width: 100%;
          max-width: 100%;
        }
        #case-studies-section .cs-desc {
          margin: 0;
          font-size: .88rem;
          overflow-wrap: anywhere;
          word-break: break-word;
          width: 100%;
          max-width: 100%;
        }
        #case-studies-section .cs-meta {
          margin: 0;
          display: grid;
          gap: 4px;
          border-top: 2px solid var(--cs-ink);
          padding-top: 8px;
          width: 100%;
          max-width: 100%;
          overflow: hidden;
        }
        #case-studies-section .cs-meta div {
          display: grid;
          grid-template-columns: 62px 1fr;
          gap: 8px;
          font-size: .8rem;
        }
        #case-studies-section .cs-meta dt {
          font-weight: 800;
          letter-spacing: .1em;
          font-size: .66rem;
          padding-top: 2px;
          color: var(--cs-blue);
        }
        #case-studies-section .cs-meta dd {
          margin: 0;
        }
        #case-studies-section .cs-block-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }
        #case-studies-section .cs-block {
          border-radius: var(--cs-r);
          padding: 14px;
          border: 2px solid var(--cs-ink);
          transition: transform .2s, background .2s, color .2s, border-color .2s;
        }
        #case-studies-section .cs-block:hover,
        #case-studies-section .cs-block:focus-visible {
          transform: translateY(-3px);
        }
        #case-studies-section .cs-block-title {
          margin: 0 0 10px;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: .02em;
          font-size: 1.15rem;
          line-height: 1;
        }
        #case-studies-section .cs-block ul,
        #case-studies-section .cs-block ol {
          margin: 0;
          padding: 0;
          list-style: none;
          display: grid;
          gap: 7px;
          font-size: .78rem;
        }
        #case-studies-section .cs-block ul li {
          position: relative;
          padding-left: 15px;
        }
        #case-studies-section .cs-block ul li::before {
          content: "";
          position: absolute;
          left: 0;
          top: .5em;
          width: 6px;
          height: 6px;
          border-radius: 2px;
          background: currentColor;
        }
        #case-studies-section .cs-block--problem {
          background: var(--cs-lime);
          color: var(--cs-ink);
        }
        #case-studies-section .cs-block--problem:hover,
        #case-studies-section .cs-block--problem:focus-visible {
          background: var(--cs-ink);
          color: var(--cs-lime);
        }
        #case-studies-section .cs-block--process {
          background: var(--cs-navy);
          color: #fff;
        }
        #case-studies-section .cs-block--process:hover,
        #case-studies-section .cs-block--process:focus-visible {
          border-color: var(--cs-lime);
        }
        #case-studies-section .cs-block--process ol li {
          display: grid;
          grid-template-columns: 30px 1fr;
          gap: 8px;
          align-items: start;
        }
        #case-studies-section .cs-num {
          display: inline-block;
          text-align: center;
          font-weight: 900;
          font-size: .66rem;
          background: var(--cs-lime);
          color: var(--cs-ink);
          border-radius: 999px;
          padding: 3px 0;
        }
        #case-studies-section .cs-block--solution {
          grid-column: 1 / -1;
          background: var(--cs-off);
          color: var(--cs-ink);
        }
        #case-studies-section .cs-block--solution:hover,
        #case-studies-section .cs-block--solution:focus-visible {
          background: #fff;
          border-color: var(--cs-blue);
        }
        #case-studies-section .cs-block--solution ul {
          grid-template-columns: 1fr 1fr;
          column-gap: 14px;
        }
        #case-studies-section .cs-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 12px;
        }
        #case-studies-section .cs-tag {
          padding: 5px 10px;
          border-radius: 999px;
          font-weight: 800;
          font-size: .62rem;
          letter-spacing: .1em;
          background: var(--cs-blue);
          color: #fff;
        }
        #case-studies-section .cs-tag:nth-child(even) {
          background: var(--cs-navy);
          color: var(--cs-lime);
        }
        #case-studies-section .cs-block--result {
          grid-column: 1 / -1;
          background: var(--cs-blue);
          color: #fff;
        }
        #case-studies-section .cs-block--result:hover,
        #case-studies-section .cs-block--result:focus-visible {
          background: var(--cs-lime);
          color: var(--cs-ink);
        }
        #case-studies-section .cs-result-lead {
          margin: 0 0 12px;
          font-weight: 800;
          font-size: 1rem;
          line-height: 1.25;
        }
        #case-studies-section .cs-mini {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 8px;
        }
        #case-studies-section .cs-mini-item {
          background: var(--cs-navy);
          color: #fff;
          border-radius: 12px;
          padding: 10px;
          display: grid;
          gap: 4px;
          font-size: .72rem;
          align-content: start;
        }
        #case-studies-section .cs-mini-item strong {
          color: var(--cs-lime);
          letter-spacing: .1em;
          font-size: .62rem;
          font-weight: 800;
        }
        #case-studies-section .cs-cta-row {
          display: flex;
          justify-content: flex-end;
          margin-top: auto;
        }
        #case-studies-section .cs-cta {
          font: inherit;
          font-weight: 800;
          font-size: .9rem;
          cursor: pointer;
          padding: 13px 22px;
          border-radius: 999px;
          border: 2px solid var(--cs-ink);
          background: var(--cs-ink);
          color: var(--cs-lime);
          transition: background .2s, color .2s, transform .2s;
        }
        #case-studies-section .cs-cta:hover {
          background: var(--cs-lime);
          color: var(--cs-ink);
          transform: translateY(-2px);
        }
        #case-studies-section .cs-modal {
          position: absolute;
          inset: 0;
          z-index: 20;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          padding: clamp(12px, 3vw, 40px);
          background: rgba(3, 8, 23, .82);
          overflow-y: auto;
        }
        #case-studies-section .cs-modal[hidden] {
          display: none;
        }
        #case-studies-section .cs-modal-panel {
          width: 100%;
          max-width: 820px;
          background: var(--cs-off);
          color: var(--cs-ink);
          border: 2px solid var(--cs-ink);
          border-radius: 20px;
          padding: clamp(18px, 3vw, 36px);
          outline: none;
        }
        #case-studies-section .cs-modal-head {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 16px;
          margin-bottom: 20px;
        }
        #case-studies-section .cs-modal-title {
          margin: 10px 0 0;
          font-weight: 900;
          text-transform: uppercase;
          font-size: clamp(2.4rem, 7vw, 4.5rem);
          line-height: .9;
          letter-spacing: -.03em;
        }
        #case-studies-section .cs-close {
          font: inherit;
          font-weight: 800;
          cursor: pointer;
          padding: 12px 20px;
          border-radius: 999px;
          border: 2px solid var(--cs-ink);
          background: var(--cs-lime);
          color: var(--cs-ink);
        }
        #case-studies-section .cs-close:hover {
          background: var(--cs-ink);
          color: var(--cs-lime);
        }
        #case-studies-section .cs-modal-body {
          display: grid;
          gap: 14px;
        }
        #case-studies-section .cs-modal-body section {
          border: 2px solid var(--cs-ink);
          border-radius: 14px;
          padding: 18px;
          background: #fff;
        }
        #case-studies-section .cs-modal-body section:nth-child(1) {
          background: var(--cs-lime);
        }
        #case-studies-section .cs-modal-body section:nth-child(2) {
          background: var(--cs-navy);
          color: #fff;
        }
        #case-studies-section .cs-modal-body section:nth-child(4) {
          background: var(--cs-blue);
          color: #fff;
        }
        #case-studies-section .cs-modal-body h4 {
          margin: 0 0 8px;
          font-weight: 900;
          letter-spacing: .06em;
          font-size: 1.1rem;
        }
        #case-studies-section .cs-modal-body p {
          margin: 0;
        }
        @media (max-width: 900px) {
          #case-studies-section .cs-grid {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 560px) {
          #case-studies-section .cs-block-grid {
            grid-template-columns: 1fr;
          }
          #case-studies-section .cs-block--solution ul {
            grid-template-columns: 1fr;
          }
          #case-studies-section .cs-mini {
            grid-template-columns: 1fr;
          }
          #case-studies-section .cs-topbar {
            flex-wrap: wrap;
            border-radius: 18px;
          }
          #case-studies-section .cs-topbar-label {
            order: 3;
            flex-basis: 100%;
            text-align: left;
            padding: 2px 10px 8px;
          }
          #case-studies-section .cs-round {
            margin-left: auto;
          }
          #case-studies-section .cs-meta div {
            grid-template-columns: 1fr;
            gap: 2px;
          }
          #case-studies-section .cs-cta-row {
            justify-content: stretch;
          }
          #case-studies-section .cs-cta {
            width: 100%;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          #case-studies-section * {
            transition: none !important;
          }
        }
      `}</style>

      <header className="cs-head">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-black">
           08 - Caso de estudos e Resultados
        </p>
        <p className="cs-sub">Projetos reais, contados pelo problema, pelo processo e pelo impacto.</p>
      </header>

      <div className="cs-grid">
        {CASE_STUDIES.map((cs) => (
          <article key={cs.id} className="cs-card">
            <div className="cs-topbar">
              <span className="cs-topbar-label">{cs.subtitle}</span>
              <button
                className="cs-round"
                type="button"
                aria-label={`Ver detalhes do case ${cs.number}`}
                onClick={() => openModal(cs.id)}
              >
                ↗
              </button>
            </div>

            <figure className="cs-shot">
              <img src={cs.image} alt={cs.imageAlt} loading="lazy" />
            </figure>

            <div className="cs-intro">
              <h3 className="cs-title">{cs.title}</h3>
              <p className="cs-desc">{cs.description}</p>
              <dl className="cs-meta">
                <div>
                  <dt>PAPEL</dt>
                  <dd>{cs.role}</dd>
                </div>
                <div>
                  <dt>STACK</dt>
                  <dd>{cs.stack}</dd>
                </div>
              </dl>
            </div>

            <div className="cs-block-grid">
              <section
                className="cs-block cs-block--problem"
                tabIndex={0}
                aria-labelledby={`cs-h-problem-${cs.number}`}
              >
                <h4 id={`cs-h-problem-${cs.number}`} className="cs-block-title">
                  PROBLEMA
                </h4>
                <ul>
                  {cs.problem.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </section>

              <section
                className="cs-block cs-block--process"
                tabIndex={0}
                aria-labelledby={`cs-h-process-${cs.number}`}
              >
                <h4 id={`cs-h-process-${cs.number}`} className="cs-block-title">
                  PROCESSO
                </h4>
                <ol>
                  {cs.process.map((item, i) => (
                    <li key={i}>
                      <span className="cs-num">{item.step}</span>
                      <span>{item.description}</span>
                    </li>
                  ))}
                </ol>
              </section>

              <section
                className="cs-block cs-block--solution"
                tabIndex={0}
                aria-labelledby={`cs-h-solution-${cs.number}`}
              >
                <h4 id={`cs-h-solution-${cs.number}`} className="cs-block-title">
                  SOLUÇÃO
                </h4>
                <div className="cs-tags">
                  {cs.solution.tags.map((tag, i) => (
                    <span key={i} className="cs-tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <ul>
                  {cs.solution.features.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </section>

              <section
                className="cs-block cs-block--result"
                tabIndex={0}
                aria-labelledby={`cs-h-result-${cs.number}`}
              >
                <h4 id={`cs-h-result-${cs.number}`} className="cs-block-title">
                  RESULTADO
                </h4>
                <p className="cs-result-lead">{cs.result.lead}</p>
                <div className="cs-mini">
                  {cs.result.items.map((item, i) => (
                    <div key={i} className="cs-mini-item">
                      <strong>{item.label}</strong>
                      <span>{item.description}</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <div className="cs-cta-row">
              <button
                className="cs-cta"
                type="button"
                onClick={() => openModal(cs.id)}
              >
                Ver detalhes do case ↗
              </button>
            </div>
          </article>
        ))}
      </div>

      {CASE_STUDIES.map((cs) => (
        <div
          key={cs.id}
          className="cs-modal"
          id={cs.id}
          role="dialog"
          aria-modal="true"
          aria-labelledby={`cs-modal-title-${cs.number}`}
          hidden={openModalId !== cs.id}
          onClick={handleModalOverlayClick}
        >
          <div className="cs-modal-panel" tabIndex={-1}>
            <div className="cs-modal-head">
              <div>
                <p className="cs-pill cs-pill--lime">CASE STUDY {cs.number}</p>
                <h3 id={`cs-modal-title-${cs.number}`} className="cs-modal-title">
                  {cs.title}
                </h3>
              </div>
              <button
                type="button"
                className="cs-close"
                data-cs-close
                onClick={closeAllModals}
              >
                Fechar
              </button>
            </div>
            <div className="cs-modal-body">
              <section>
                <h4>PROBLEMA</h4>
                <p>{cs.modal.problem}</p>
              </section>
              <section>
                <h4>PROCESSO</h4>
                <p>{cs.modal.process}</p>
              </section>
              <section>
                <h4>SOLUÇÃO</h4>
                <p>{cs.modal.solution}</p>
              </section>
              <section>
                <h4>RESULTADO</h4>
                <p>{cs.modal.result}</p>
              </section>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default CaseStudiesSection;