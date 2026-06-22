import avatar from "../assets/avatar.png";

const SKILLS = [
  "React",
  "TypeScript",
  "Node.js",
  "Express",
  "PostgreSQL",

  "Tailwind CSS",
];

export default function About() {
  const mono = { fontFamily: "'JetBrains Mono', monospace" } as const;

  return (
    <section id="about" className="py-22  ">
      <div className="mb-7">
        <p
          className="text-xs tracking-[0.22em] uppercase text-muted-foreground "
          style={mono}
        >
          02 / Sobre Mí
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center">
        {/* 1. MODIFICACIÓN: Agregamos order-2 para celulares y lg:order-1 para pantallas grandes */}
        {/* Text column */}
        <div className="order-2 lg:order-1">
          <div className="space-y-4 text-muted-foreground text-[0.95rem] leading-[1.8]">
            <p>
              ¡Hola! Soy{" "}
              <strong className="font-semibold text-foreground">Lucas</strong>,
              <strong className="font-semibold text-foreground">
                {" "}
                desarrollador web Full Stack
              </strong>{" "}
              enfocado en construir{" "}
              <strong className="font-medium text-foreground">
                aplicaciones dinámicas y eficientes
              </strong>
              . Mis herramientas principales son{" "}
              <strong className="font-semibold text-foreground">React</strong>{" "}
              para dar vida a interfaces de usuario intuitivas y{" "}
              <strong className="font-semibold text-foreground">
                Express/Node.js
              </strong>{" "}
              para diseñar arquitecturas de backend sólidas.
            </p>
            <p>
              Me considero una persona curiosa y con una gran capacidad de
              adaptación. Disfruto el proceso de transformar una idea abstracta
              en un producto funcional y optimizado, cuidando tanto el
              <strong className="font-medium text-foreground">
                {" "}
                rendimiento del código
              </strong>{" "}
              como la{" "}
              <strong className="font-medium text-foreground">
                experiencia del usuario
              </strong>
              .
            </p>
            <p>
              Estoy listo para integrarme a un equipo donde pueda sumar desde el
              primer día, enfrentar nuevos desafíos técnicos y continuar mi
              evolución profesional.
            </p>
          </div>

          {/* Skills grid */}
          <div className="mt-8 flex flex-wrap gap-2">
            {SKILLS.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1.5 text-xs border border-border rounded-full text-muted-foreground bg-secondary hover:text-foreground hover:border-foreground/20 transition-colors duration-200 cursor-default"
                style={mono}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* 2. MODIFICACIÓN: Agregamos order-1 para celulares y lg:order-2 para pantallas grandes */}
        {/* Illustration column */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
          <img
            src={avatar}
            width={200}
            height={200}
            alt="LR"
            /* Limpié las clases 'order-1' y 'md:order-2' que estaban sueltas acá adentro de la imagen para evitar conflictos */
            className="object-cover w-64 h-full p-1 rotate-3 lg:p-2 lg:w-64 aspect-square rounded-2xl bg-black/20 dark:bg-yellow-500/5 ring-1 ring-black/70 dark:ring-white/20"
          />
        </div>
      </div>
    </section>
  );
}
