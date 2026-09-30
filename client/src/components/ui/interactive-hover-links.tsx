import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { ArrowRight } from "lucide-react";

export interface InteractiveLinkItem {
  heading: string;
  subheading: string;
  imgSrc: string;
  href: string;
}

interface InteractiveHoverLinksProps {
  links: InteractiveLinkItem[];
  className?: string;
}

export function InteractiveHoverLinks({
  links,
  className = "",
}: InteractiveHoverLinksProps) {
  return (
    <div className={`w-full ${className}`}>
      <div className="w-full">
        {links.map((link) => (
          <LinkItem key={link.heading} {...link} />
        ))}
      </div>
    </div>
  );
}

function LinkItem({ heading, imgSrc, subheading, href }: InteractiveLinkItem) {
  const ref = useRef<HTMLAnchorElement | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["35%", "65%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["65%", "35%"]);

  const handleMouseMove = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.a
      href={href}
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      initial="initial"
      whileHover="whileHover"
      className="group relative flex items-center justify-between border-b border-white/15 py-4 transition-colors duration-300 hover:border-red-500/60 md:py-6"
    >
      <div>
        <motion.span
          variants={{
            initial: { x: 0 },
            whileHover: { x: -10 },
          }}
          transition={{
            type: "spring",
            stiffness: 250,
            damping: 20,
          }}
          className="relative z-10 block text-2xl font-bold uppercase tracking-tight text-white/70 transition-colors duration-300 group-hover:text-white sm:text-3xl md:text-5xl"
        >
          {heading}
        </motion.span>
        <span className="relative z-10 mt-1 block text-xs md:text-sm text-white/40 transition-colors duration-300 group-hover:text-white/80">
          {subheading}
        </span>
      </div>

      <motion.img
        style={{
          top,
          left,
          translateX: "-50%",
          translateY: "-50%",
        }}
        variants={{
          initial: { scale: 0, rotate: "-10deg", opacity: 0 },
          whileHover: { scale: 1, rotate: "5deg", opacity: 1 },
        }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        src={imgSrc}
        className="pointer-events-none absolute z-20 h-28 w-44 rounded-xl object-cover shadow-2xl ring-1 ring-white/20 md:h-44 md:w-64"
        alt={`Serviço ${heading}`}
      />

      <div className="overflow-hidden">
        <motion.div
          variants={{
            initial: { x: "100%", opacity: 0 },
            whileHover: { x: "0%", opacity: 1 },
          }}
          transition={{ type: "spring", stiffness: 250, damping: 20 }}
          className="relative z-10 p-2 text-red-500"
        >
          <ArrowRight className="size-6 md:size-8" />
        </motion.div>
      </div>
    </motion.a>
  );
}