import { useEffect, useRef, useState, Fragment } from "react";
import type { CSSProperties, MouseEvent } from "react";
import { WorksWheel, type WorksWheelItem } from "@/components/ui/works-wheel";

const WORKS: WorksWheelItem[] = [
  { title: "Projeto 01", image: "/works/img_componente_1.jpg" },
  { title: "Projeto 02", image: "/works/img_componente_2.jpg" },
  { title: "Projeto 03", image: "/works/img_componente_3.jpg" },
  { title: "Projeto 04", image: "/works/img_componente_4.jpg" },
  { title: "Projeto 05", image: "/works/img_componente_5.jpg" },
  { title: "Projeto 06", image: "/works/img_componente_6.jpg" },
  { title: "Projeto 07", image: "/works/img_componente_7.jpg" },
  { title: "Projeto 08", image: "/works/img_componente_8.jpg" },
  { title: "Quem eu sou", image: "/works/img_componente_9.jpg" },
];

const navItems = [
  { label: "Inicio", href: "#home" },
  { label: "Trabalhos", href: "#work" },
  { label: "Sobre mim", href: "#about" },
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
          <a className="work-cta" href="#work">
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
        id="works-wheel-section"
        items={WORKS}
        label="Meus Trabalhos"
        className="h-[100svh]"
      />
    </>
  );
}
