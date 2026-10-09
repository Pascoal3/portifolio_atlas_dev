"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";

const SOCIALS = [
  { name: "Instagram", href: "https://instagram.com/atlasdev", icon: <InstagramIcon /> },
  { name: "LinkedIn", href: "https://linkedin.com/in/atlasdev", icon: <LinkedInIcon /> },
  { name: "WhatsApp", href: "https://wa.me/244900000000", icon: <WhatsAppIcon /> },
  { name: "GitHub", href: "https://github.com/atlasdev", icon: <GitHubIcon /> },
];

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21l1.65-4.9A9 9 0 1 1 8 19.4L3 21Z" />
      <path d="M9 10c0 3 2 5 5 5l1.5-1.5-2-1-1 .8a3.5 3.5 0 0 1-1.6-1.6l.8-1-1-2L9 10Z" fill="currentColor" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.9a3.4 3.4 0 0 0-1-2.6c3.1-.3 6.4-1.5 6.4-7a5.4 5.4 0 0 0-1.5-3.8 5 5 0 0 0-.1-3.7s-1.2-.4-3.9 1.4a13.4 13.4 0 0 0-7 0C6.2 2.8 5 3.2 5 3.2a5 5 0 0 0-.1 3.7A5.4 5.4 0 0 0 3.500 10.700c0 5.400 3.300 6.600 6.400 7a3.400 3.400 0 0 0-1 2.600V22" />
    </svg>
  );
}

const PROJECT_TYPES = [
  "Desenvolvimento de website",
  "Landing page",
  "Design UI/UX",
  "Automação com IA",
  "Outro",
];

const BUDGET_OPTIONS = [
  { value: "", label: "{ seleciona um intervalo }" },
  { value: "Até 100 000 Kz", label: "Até 100 000 Kz" },
  { value: "100 000 – 300 000 Kz", label: "100 000 – 300 000 Kz" },
  { value: "300 000 – 800 000 Kz", label: "300 000 – 800 000 Kz" },
  { value: "Acima de 800 000 Kz", label: "Acima de 800 000 Kz" },
  { value: "Ainda não sei", label: "Ainda não sei" },
];

const MARQUEE_WORDS = ["Website", "Landing Page", "UI/UX", "Automação com IA", "Desenvolvimento", "Design", "Freelance"];

export function ContactSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const barcodeRef = useRef<HTMLDivElement>(null);
  const copyLabelRef = useRef<HTMLSpanElement>(null);
  const toastRef = useRef<HTMLDivElement>(null);
  const toastMsgRef = useRef<HTMLSpanElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const msgElRef = useRef<HTMLTextAreaElement>(null);
  const countRef = useRef<HTMLSpanElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const spinnerRef = useRef<HTMLDivElement>(null);
  const btnLabelRef = useRef<HTMLSpanElement>(null);
  const successRef = useRef<HTMLDivElement>(null);
  const checkPathRef = useRef<SVGPathElement>(null);
  const againBtnRef = useRef<HTMLButtonElement>(null);
  const yearRef = useRef<HTMLSpanElement>(null);
  const toTopBtnRef = useRef<HTMLButtonElement>(null);
  const nomeElRef = useRef<HTMLInputElement>(null);

  const [reducedMotion, setReducedMotion] = useState(false);
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [touchedFields, setTouchedFields] = useState<Record<string, boolean>>({});
  const [messageLength, setMessageLength] = useState(0);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // Pixel mosaic background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const drawPixels = () => {
      const size = 46;
      const dpr = window.devicePixelRatio || 1;
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.fillStyle = "#e5d3b2";
      ctx.fillRect(0, 0, w, h);
      for (let y = 0; y < h; y += size) {
        for (let x = 0; x < w; x += size) {
          const r = Math.random();
          if (r < 0.55) continue;
          ctx.fillStyle = r > 0.8
            ? `rgba(255,247,230,${0.12 + Math.random() * 0.22})`
            : `rgba(150,115,70,${0.05 + Math.random() * 0.12})`;
          ctx.fillRect(x, y, size, size);
        }
      }
    };

    drawPixels();
    let rt: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(rt);
      rt = setTimeout(drawPixels, 200);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(rt);
    };
  }, []);

  // Marquee
  useEffect(() => {
    if (!marqueeRef.current) return;
    const unit = MARQUEE_WORDS.map((w) => `<span class="px-6">${w}</span><span class="text-accent-dark">✦</span>`).join("");
    marqueeRef.current.innerHTML = `<div class="flex items-center">${unit.repeat(3)}</div><div class="flex items-center">${unit.repeat(3)}</div>`;
  }, []);

  // Barcode
  useEffect(() => {
    if (!barcodeRef.current) return;
    let html = "";
    for (let i = 0; i < 42; i++) {
      const widths = [1, 1, 2, 3];
      html += `<span style="display:block;height:100%;width:${widths[Math.floor(Math.random() * 4)]}px;background:#1d2557"></span>`;
    }
    barcodeRef.current.innerHTML = html;
  }, []);

  // Socials - rendered via JSX in the component, no useEffect needed

  // Copy email
  const copyEmail = useCallback(async () => {
    const label = copyLabelRef.current;
    if (!label) return;
    try {
      await navigator.clipboard.writeText("contacto@atlasdev.com");
    } catch {
      const t = document.createElement("textarea");
      t.value = "contacto@atlasdev.com";
      document.body.appendChild(t);
      t.select();
      document.execCommand("copy");
      t.remove();
    }
    label.textContent = "Copiado!";
    setTimeout(() => {
      if (label) label.textContent = "Copiar email";
    }, 1800);
  }, []);

  // Toast
  const showToast = useCallback((msg: string) => {
    if (!toastMsgRef.current || !toastRef.current) return;
    toastMsgRef.current.textContent = msg;
    toastRef.current.classList.remove("translate-y-24", "opacity-0");
    setTimeout(() => {
      toastRef.current?.classList.add("translate-y-24", "opacity-0");
    }, 5000);
  }, []);

  // Validation
  const validateField = useCallback((name: string, value?: string): boolean => {
    const form = formRef.current;
    if (!form) return false;
    const getVal = (n: string) =>
      n === "tipo"
        ? (form.querySelector('input[name="tipo"]:checked') as HTMLInputElement)?.value || ""
        : (form.elements.namedItem(n) as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement)?.value || "";

    const val = value ?? getVal(name);
    let msg = "";
    switch (name) {
      case "nome":
        if (val.trim().length < 2) msg = "Por favor, diz-me o teu nome.";
        break;
      case "email":
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(val.trim())) msg = "Por favor, insere um email válido.";
        break;
      case "tipo":
        if (!form.querySelector('input[name="tipo"]:checked')) msg = "Seleciona o tipo de projeto.";
        break;
      case "mensagem":
        if (val.trim().length < 10) msg = "Descreve o projeto com pelo menos 10 caracteres.";
        break;
    }
    setFormErrors((prev) => ({ ...prev, [name]: msg }));
    const wrap = form.querySelector(`[data-field="${name}"]`);
    if (wrap) wrap.classList.toggle("has-error", !!msg);
    const input = form.elements.namedItem(name) as HTMLElement;
    if (input?.setAttribute) input.setAttribute("aria-invalid", msg ? "true" : "false");
    return !msg;
  }, []);

  const handleBlur = useCallback((e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const name = e.target.name;
    setTouchedFields((prev) => ({ ...prev, [name]: true }));
    validateField(name);
  }, [validateField]);

  const handleInput = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name === "mensagem") {
      setMessageLength(value.length);
    }
    if (touchedFields[name] || formErrors[name]) {
      validateField(name, value);
    }
  }, [validateField, touchedFields, formErrors]);

  const handleTipoChange = useCallback(() => {
    validateField("tipo");
  }, [validateField]);

  // Submit
  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const honeypot = form.elements.namedItem("empresa") as HTMLInputElement;
    if (honeypot?.value) return; // bot

    const ok = ["nome", "email", "tipo", "mensagem"].map(validateField).every(Boolean);
    if (!ok) {
      const first = form.querySelector('[aria-invalid="true"]') as HTMLElement | null;
      first?.scrollIntoView?.({ behavior: "smooth", block: "center" });
      first?.focus?.();
      return;
    }

    setFormSubmitting(true);
    const data = Object.fromEntries(new FormData(form));
    delete (data as Record<string, unknown>).empresa;

    try {
      // Simulated submission (no endpoint configured)
      await new Promise((r) => setTimeout(r, 1600));
      console.log("Dados do formulário (simulado):", data);
      setShowSuccess(true);
      setTimeout(() => {
        checkPathRef.current && (checkPathRef.current.style.strokeDashoffset = "0");
      }, 50);
    } catch (err) {
      console.error(err);
      showToast("Algo correu mal. Tenta novamente ou contacta-me por email.");
    } finally {
      setFormSubmitting(false);
    }
  }, [validateField, showToast]);

  const handleAgain = useCallback(() => {
    const form = formRef.current;
    if (!form) return;
    form.reset();
    setMessageLength(0);
    setFormErrors({});
    setTouchedFields({});
    setShowSuccess(false);
    checkPathRef.current && (checkPathRef.current.style.strokeDashoffset = "30");
    document.querySelectorAll(".underline-wrap").forEach((w) => w.classList.remove("has-error"));
    setTimeout(() => nomeElRef.current?.focus(), 100);
  }, []);

  // Footer year
  useEffect(() => {
    if (yearRef.current) yearRef.current.textContent = new Date().getFullYear().toString();
  }, []);

  // Scroll to top
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Scroll reveal (IntersectionObserver)
  useEffect(() => {
    if (reducedMotion) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("in");
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll(".ct-09 .reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [reducedMotion]);

  // Focus first field on mount
  useEffect(() => {
    nomeElRef.current?.focus();
  }, []);

  return (
    <section className="ct-09 min-h-screen w-full overflow-x-hidden" id="contact" style={{ backgroundColor: "#e5d3b2", color: "#1d2557" }}>
      <header className="cs-head">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-navy">
           09 - Contactos & CTA
        </p>
        <p className="cs-sub">Tens um projeto em mente? Vamos transformar a tua ideia em algo extraordinário.</p>
      </header>
      <style>{`
        .ct-09 {
          font-family: "DM Sans", sans-serif;
          background: #e5d3b2;
          color: #1d2557;
        }
        .ct-09 ::selection { background: #f7a01e; color: #1d2557; }

        .ct-09 .cs-head {
          max-width: 1200px;
          margin: 0 auto 32px;
        }
        .ct-09 .cs-sub {
          margin: 0;
          font-size: 1rem;
          max-width: 60ch;
          color: #1d2557;
        }

        /* Marquee */
        .ct-09 .marquee-track { display: flex; width: max-content; animation: ct09-marquee 28s linear infinite; will-change: transform; }
        @keyframes ct09-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }

        /* Form fields */
        .ct-09 .field {
          width: 100%; background: transparent; border: 0;
          border-bottom: 1px solid rgba(29, 37, 87, .55);
          padding: .55rem 0;
          font-family: "Syne", sans-serif; font-weight: 600;
          font-size: clamp(1.25rem, 2.2vw, 1.75rem); color: #1d2557;
          outline: none; border-radius: 0; transition: border-color .25s ease;
        }
        .ct-09 .field::placeholder { color: rgba(29, 37, 87, .55); font-weight: 600; transition: opacity .25s ease, transform .25s ease; }
        .ct-09 .field:focus::placeholder { opacity: .35; transform: translateX(6px); }
        .ct-09 textarea.field { resize: none; min-height: 7.5rem; line-height: 1.3; }
        .ct-09 select.field { appearance: none; cursor: pointer; }

        .ct-09 .underline-wrap { position: relative; }
        .ct-09 .underline-wrap::after {
          content: ''; position: absolute; left: 0; bottom: 0; height: 2px; width: 100%;
          background: #f7a01e; transform: scaleX(0); transform-origin: left; transition: transform .35s ease;
        }
        .ct-09 .underline-wrap:focus-within::after { transform: scaleX(1); }
        .ct-09 .underline-wrap.has-error .field { border-bottom-color: #c0392b; }

        .ct-09 .err { color: #b3261e; font-size: .8rem; margin-top: .35rem; min-height: 1.1rem; }

        /* Chips */
        .ct-09 .chip input { position: absolute; opacity: 0; pointer-events: none; }
        .ct-09 .chip span {
          display: inline-block; padding: .5rem 1rem; border-radius: 999px;
          border: 1px solid rgba(29, 37, 87, .55); font-size: .85rem; font-weight: 500;
          cursor: pointer; transition: all .2s ease; user-select: none;
        }
        .ct-09 .chip span:hover { transform: translateY(-2px); border-color: #1d2557; }
        .ct-09 .chip input:checked + span { background: #1d2557; color: #efe2c8; border-color: #1d2557; }
        .ct-09 .chip input:focus-visible + span { outline: 2px solid #f7a01e; outline-offset: 2px; }

        /* Buttons */
        .ct-09 .btn-lift { transition: transform .25s ease, box-shadow .25s ease, background-color .25s ease; }
        .ct-09 .btn-lift:hover { transform: translateY(-3px); box-shadow: 0 10px 22px -8px rgba(29, 37, 87, .45); }
        .ct-09 .btn-lift:active { transform: translateY(0); }

        /* Social */
        .ct-09 .social {
          width: 44px; height: 44px; border-radius: 999px; display: grid; place-items: center;
          border: 1px solid rgba(29, 37, 87, .6); transition: all .25s ease;
        }
        .ct-09 .social:hover { background: #1d2557; color: #efe2c8; transform: translateY(-3px) rotate(-6deg); }

        /* Spinner */
        .ct-09 .spinner {
          width: 18px; height: 18px; border-radius: 50%;
          border: 2px solid rgba(29, 37, 87, .3); border-top-color: #1d2557;
          animation: ct09-spin .7s linear infinite;
        }
        @keyframes ct09-spin { to { transform: rotate(360deg); } }

        /* Reveal */
        .ct-09 .reveal { opacity: 0; transform: translateY(24px); transition: opacity .8s ease, transform .8s cubic-bezier(.2,.7,.2,1); }
        .ct-09 .reveal.in { opacity: 1; transform: none; }

        .ct-09 :focus-visible { outline: 2px solid #f7a01e; outline-offset: 3px; }

        @media (prefers-reduced-motion: reduce) {
          .ct-09 *, .ct-09 *::before, .ct-09 *::after { animation-duration: .01ms !important; transition-duration: .01ms !important; }
          .ct-09 .reveal { opacity: 1; transform: none; }
          .ct-09 .marquee-track { animation: none !important; }
        }
      `}</style>

      {/* Pixel mosaic background */}
      <canvas ref={canvasRef} className="fixed inset-0 -z-10 w-full h-full" aria-hidden="true" />

      {/* 1. HERO */}
      <section id="top" className="px-5 md:px-8 pt-6 md:pt-10 pb-8">
        <h1 className="font-display font-extrabold uppercase leading-[.9] tracking-tight text-navy animate-rise"
            style={{ fontFamily: '"Syne", sans-serif', fontSize: "clamp(1rem, 9.2vw, 5rem)", animationDelay: "0.08s" }}>
          Tem um projeto<br />em mente?
        </h1>

        <div className="mt-8 grid md:grid-cols-2 gap-4 md:gap-10 max-w-5xl animate-rise" style={{ animationDelay: "0.18s" }}>
          <p className="font-display font-bold text-xl md:text-2xl leading-snug" style={{ fontFamily: '"Syne", sans-serif' }}>
            Vamos transformar a tua ideia em algo extraordinário.
          </p>
          <p className="text-base md:text-lg text-navy/80">
            Conta-me o que estás a imaginar e vamos construir algo juntos.
          </p>
        </div>
      </section>

      {/* Marquee */}
      <div className="overflow-hidden border-y border-navy/20 py-3 my-6 select-none" aria-hidden="true">
        <div ref={marqueeRef} className="marquee-track text-xs tracking-[.2em] uppercase font-medium" style={{ fontFamily: '"DM Sans", sans-serif' }} />
      </div>

      {/* 2. MAIN AREA */}
      <section className="px-5 md:px-8 py-8 md:py-14 grid lg:grid-cols-12 gap-12 lg:gap-10">

        {/* LEFT: direct contact + social */}
        <aside className="lg:col-span-4 order-2 lg:order-1 space-y-10 reveal">
          <div>
            <p className="text-xs tracking-[.18em] uppercase text-navy/70 mb-3" style={{ fontFamily: '"DM Sans", sans-serif' }}>Contacto direto</p>
            <a id="emailLink" href="mailto:contacto@atlasdev.com" className="font-display font-bold text-xl md:text-2xl break-all hover:text-accent-dark transition-colors" style={{ fontFamily: '"Syne", sans-serif' }}>contacto@atlasdev.com</a>

            <div className="flex flex-wrap gap-3 mt-5">
              <button ref={copyLabelRef} type="button" onClick={copyEmail} className="btn-lift inline-flex items-center gap-2 rounded-full border border-navy px-4 py-2 text-sm font-medium hover:bg-navy hover:text-sand-light" style={{ fontFamily: '"DM Sans", sans-serif' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>
                <span>Copiar email</span>
              </button>
              <a href="mailto:contacto@atlasdev.com?subject=Novo%20projeto" className="btn-lift inline-flex items-center gap-2 rounded-full border border-navy px-4 py-2 text-sm font-medium hover:bg-navy hover:text-sand-light" style={{ fontFamily: '"DM Sans", sans-serif' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 6L2 7" /></svg>
                Abrir no email
              </a>
            </div>

            <a href="https://wa.me/244900000000?text=Ol%C3%A1!%20Tenho%20um%20projeto%20em%20mente."
               target="_blank" rel="noopener"
               className="btn-lift mt-5 inline-flex items-center gap-3 rounded-full bg-[#25D366] text-navy px-6 py-3 font-bold hover:bg-[#1fbd5a]" style={{ fontFamily: '"DM Sans", sans-serif' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 3.5A11.9 11.9 0 0 0 12 0C5.4 0 .1 5.3.1 11.9c0 2.1.6 4.1 1.6 5.9L0 24l6.4-1.7a11.9 11.9 0 0 0 5.6 1.4c6.6 0 11.9-5.3 11.9-11.9 0-3.2-1.2-6.2-3.4-8.3ZM12 21.7c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.8 1 1-3.7-.2-.4a9.8 9.8 0 0 1-1.5-5.2C2.1 6.4 6.6 2 12 2c2.6 0 5.1 1 6.9 2.9a9.7 9.7 0 0 1 2.9 6.9c0 5.4-4.4 9.9-9.8 9.9Zm5.4-7.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1l-.9 1.1c-.2.2-.3.2-.6.1a8 8 0 0 1-4-3.5c-.3-.5.3-.5.8-1.6.1-.2 0-.4 0-.5l-.9-2.1c-.2-.5-.4-.5-.6-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5 1.9.8 2.6.9 3.6.7.6-.1 1.7-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3Z"/></svg>
              Falar no WhatsApp
            </a>

            {/* decorative barcode */}
            <div className="mt-8 inline-block" aria-hidden="true" style={{ display: "none" }}>
              <div ref={barcodeRef} className="flex items-end h-12 gap-[2px]" />
              <p className="text-[10px] tracking-[.25em] mt-1" style={{ fontFamily: '"DM Sans", sans-serif' }}>+244 900 000 000</p>
            </div>
          </div>

          <div>
            <p className="text-xs tracking-[.18em] uppercase text-navy/70 mb-4" style={{ fontFamily: '"DM Sans", sans-serif' }}>Redes sociais</p>
            <ul className="flex gap-3" aria-label="Redes sociais">
              {SOCIALS.map((s) => (
                <li key={s.name}>
                  <a className="social" href={s.href} target="_blank" rel="noopener" aria-label={s.name} title={s.name}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      {s.icon}
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-sm text-navy/80 leading-relaxed" style={{ fontFamily: '"DM Sans", sans-serif' }}>
            <p className="font-bold text-navy">Atlas Dev</p>
            <p>Angola</p>
          </div>
        </aside>

        {/* RIGHT: form */}
        <div className="lg:col-span-8 order-1 lg:order-2 reveal" style={{ transitionDelay: "0.1s" }}>
          <div className="relative">
            <form ref={formRef} id="contactForm" noValidate onSubmit={handleSubmit} className="grid gap-9 max-w-3xl lg:ml-auto">
              {/* honeypot */}
              <input type="text" name="empresa" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

              <div className="grid md:grid-cols-2 gap-9">
                <div>
                  <label htmlFor="nome" className="block text-xs font-medium mb-1" style={{ fontFamily: '"DM Sans", sans-serif' }}>Quem és tu?</label>
                  <div className="underline-wrap" data-field="nome">
                    <input ref={nomeElRef} id="nome" name="nome" type="text" className="field" placeholder="{ o teu nome }" autoComplete="name" required onBlur={handleBlur} onChange={handleInput} />
                  </div>
                  <p className="err" data-err="nome" aria-live="polite">{formErrors.nome || (touchedFields.nome ? "" : "")}</p>
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-medium mb-1" style={{ fontFamily: '"DM Sans", sans-serif' }}>Como comunicamos?</label>
                  <div className="underline-wrap" data-field="email">
                    <input id="email" name="email" type="email" className="field" placeholder="{ o teu email }" autoComplete="email" required onBlur={handleBlur} onChange={handleInput} />
                  </div>
                  <p className="err" data-err="email" aria-live="polite">{formErrors.email || (touchedFields.email ? "" : "")}</p>
                </div>
              </div>

              <fieldset>
                <legend className="block text-xs font-medium mb-3" style={{ fontFamily: '"DM Sans", sans-serif' }}>Tipo de projeto</legend>
                <div className="flex flex-wrap gap-2.5" id="chips">
                  {PROJECT_TYPES.map((type, i) => (
                    <label key={type} className="chip" style={{ fontFamily: '"DM Sans", sans-serif' }}>
                      <input type="radio" name="tipo" value={type} onChange={handleTipoChange} />
                      <span>{type}</span>
                    </label>
                  ))}
                </div>
                <p className="err" data-err="tipo" aria-live="polite">{formErrors.tipo || (touchedFields.tipo ? "" : "")}</p>
              </fieldset>

              <div>
                <label htmlFor="orcamento" className="block text-xs font-medium mb-1" style={{ fontFamily: '"DM Sans", sans-serif' }}>
                  Orçamento estimado <span className="text-navy/60 font-normal">(opcional)</span>
                </label>
                <div className="underline-wrap relative">
                  <select id="orcamento" name="orcamento" className="field" onChange={handleInput}>
                    {BUDGET_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                  <svg className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                </div>
              </div>

              <div>
                <label htmlFor="mensagem" className="block text-xs font-medium mb-1" style={{ fontFamily: '"DM Sans", sans-serif' }}>Descrição do projeto</label>
                <div className="underline-wrap" data-field="mensagem">
                  <textarea ref={msgElRef} id="mensagem" name="mensagem" className="field" placeholder="{ conta-me a tua ideia }" required onBlur={handleBlur} onChange={handleInput} maxLength={1000} style={{ height: "auto" }} />
                </div>
                <div className="flex justify-between">
                  <p className="err" data-err="mensagem" aria-live="polite">{formErrors.mensagem || (touchedFields.mensagem ? "" : "")}</p>
                  <span ref={countRef} className="text-xs text-navy/60 mt-1" style={{ fontFamily: '"DM Sans", sans-serif' }}>{messageLength} / 1000</span>
                </div>
              </div>

              <div className="flex justify-end">
                <button ref={btnRef} type="submit" disabled={formSubmitting}
                  className="btn-lift relative inline-flex items-center justify-center gap-3 min-w-[240px] rounded-full bg-accent hover:bg-accent-dark text-navy font-bold text-sm tracking-[.14em] uppercase px-10 py-4 disabled:opacity-80 disabled:cursor-wait disabled:hover:translate-y-0" style={{ fontFamily: '"DM Sans", sans-serif', backgroundColor: "#f7a01e" }}>
                  <span ref={spinnerRef} className={`spinner ${formSubmitting ? "" : "hidden"}`} aria-hidden="true" />
                  <span ref={btnLabelRef}>{formSubmitting ? "A enviar..." : "Vamos conversar"}</span>
                </button>
              </div>
            </form>

            {/* Success state */}
            <div ref={successRef} id="success" className={`max-w-3xl lg:ml-auto rounded-3xl border border-navy/30 bg-sand-light/70 backdrop-blur p-8 md:p-12 text-center ${showSuccess ? "" : "hidden"}`} role="status" style={{ backgroundColor: "#efe2c8", borderColor: "rgba(29,37,87,0.3)" }}>
              <div className="mx-auto w-16 h-16 rounded-full bg-accent grid place-items-center mb-6" style={{ backgroundColor: "#f7a01e" }}>
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#1d2557" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path ref={checkPathRef} id="checkPath" d="M20 6 9 17l-5-5" style={{ strokeDasharray: "30", strokeDashoffset: "30", transition: "stroke-dashoffset .6s .2s ease" }} />
                </svg>
              </div>
              <h2 className="font-display font-extrabold text-3xl md:text-4xl uppercase" style={{ fontFamily: '"Syne", sans-serif' }}>Mensagem enviada!</h2>
              <p className="mt-3 text-navy/80" style={{ fontFamily: '"DM Sans", sans-serif' }}>Obrigado pelo contacto. Respondo-te em breve — normalmente em 24 horas.</p>
              <button ref={againBtnRef} type="button" onClick={handleAgain} className="btn-lift mt-8 rounded-full border border-navy px-6 py-2.5 text-sm font-medium hover:bg-navy hover:text-sand-light" style={{ fontFamily: '"DM Sans", sans-serif' }}>Enviar outra mensagem</button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FOOTER */}
      <footer className="px-5 md:px-8 pt-10 pb-8 mt-10 border-t border-navy/20" style={{ borderColor: "rgba(29,37,87,0.2)" }}>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          <a href="#top" className="font-display font-extrabold text-2xl tracking-tight" style={{ fontFamily: '"Syne", sans-serif' }}>
            Atlas<span className="text-accent-dark">.</span>Dev
          </a>
          <ul className="flex gap-3" aria-label="Redes sociais do rodapé">
            {SOCIALS.map((s) => (
              <li key={s.name}>
                <a className="social" href={s.href} target="_blank" rel="noopener" aria-label={s.name} title={s.name}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {s.icon}
                  </svg>
                </a>
              </li>
            ))}
          </ul>
          <button ref={toTopBtnRef} type="button" onClick={scrollToTop} className="btn-lift self-start md:self-auto inline-flex items-center gap-2 rounded-full border border-navy px-5 py-2.5 text-sm font-medium hover:bg-navy hover:text-sand-light" style={{ fontFamily: '"DM Sans", sans-serif' }}>
            Voltar ao topo
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19V5M5 12l7-7 7 7" /></svg>
          </button>
        </div>
        <div className="mt-8 flex flex-col sm:flex-row justify-between gap-2 text-xs text-navy/70" style={{ fontFamily: '"DM Sans", sans-serif' }}>
          <p>© <span ref={yearRef}>2026</span> Atlas Dev. Todos os direitos reservados.</p>
          <p>Angola 🇦🇴</p>
        </div>
      </footer>

      {/* Toast */}
      <div ref={toastRef} className="fixed left-1/2 bottom-6 -translate-x-1/2 translate-y-24 opacity-0 transition-all duration-300 z-50 max-w-[92vw] rounded-2xl bg-navy text-sand-light px-5 py-3.5 text-sm shadow-xl flex items-center gap-3" role="alert" style={{ backgroundColor: "#1d2557", color: "#efe2c8" }}>
        <span className="w-2.5 h-2.5 rounded-full bg-red-400 shrink-0" />
        <span ref={toastMsgRef} />
      </div>
    </section>
  );
}

export default ContactSection;