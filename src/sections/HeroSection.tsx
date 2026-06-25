import { FiLinkedin, FiGithub } from "react-icons/fi";
import { TbFileCv } from "react-icons/tb";
import avatar from "../assets/avatar.webp";

function HeroSection() {
  const mono = { fontFamily: "'JetBrains Mono', monospace" } as const;
  const display = { fontFamily: "'Epilogue', system-ui, sans-serif" } as const;

  return (
    <section className="pt-25 pb-18 sm:pt-30 sm:pb-16">
      {/* Avatar + badge */}
      <div className="flex items-center gap-4 mb-10">
        <div
          className="w-16 h-16 sm:w-23 sm:h-23 rounded-full bg-secondary border border-border flex items-center justify-center shrink-0 select-none overflow-hidden"
          aria-label="Lucas Rojas avatar"
        >
          <img
            fetchpriority="high"
            src={avatar}
            alt="LR"
            className="w-full h-full  "
          />
        </div>
        <span
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-medium"
          style={{
            ...mono,
            color: "#10b981",
            borderColor: "rgba(16,185,129,0.3)",
            backgroundColor: "rgba(16,185,129,0.08)",
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{
              backgroundColor: "#10b981",
              animation: "pulse 2s cubic-bezier(0.4,0,0.6,1) infinite",
            }}
          />
          Disponible para trabajar
        </span>
      </div>

      {/* Headline */}
      <h1
        className="text-5xl sm:text-6xl lg:text-[5.5rem] font-black leading-[1.02] tracking-tight text-foreground mb-6"
        style={{ ...display, fontWeight: 900 }}
      >
        Hola, soy Lucas.
      </h1>

      {/* Subtitle */}
      <p className="text-lg sm:text-xl text-muted-foreground max-w-[520px] leading-relaxed mb-10">
        Desarrollador web full stack especializado en la creación de
        aplicaciones web únicas con{" "}
        <span className="text-foreground font-medium">React</span> y{" "}
        <span className="text-foreground font-medium">Express</span>. Transformo
        problemas complejos en soluciones limpias y escalables.
      </p>

      {/* CTA row */}
      <div className="flex flex-wrap gap-3">
        {[
          {
            icon: <FiLinkedin size={13} />,
            label: "LinkedIn",
            href: "https://www.linkedin.com/in/lucas-nahuel-rojas/",
          },
          {
            icon: <FiGithub size={13} />,
            label: "GitHub",
            href: "https://github.com/Lucas-Rojas-Nahuel",
          },
          {
            icon: <TbFileCv size={13} />,
            label: "Ver Currículum",
            href: "/CV-Lucas-Rojas.pdf",
          },
        ].map(({ icon, label, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border text-sm text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all duration-200"
          >
            {icon}
            {label}
          </a>
        ))}
      </div>
    </section>
  );
}

export default HeroSection;
