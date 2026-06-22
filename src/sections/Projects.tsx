import { Code2, ExternalLink, ArrowUpRight } from "lucide-react";

const PROJECTS = [
  {
    id: 1,
    title: "Nexus Dashboard",
    tags: ["React", "TypeScript", "Express", "PostgreSQL"],
    description:
      "A real-time analytics dashboard for SaaS metrics with customizable widgets and role-based access controls. Built for teams that need full visibility without the noise.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop&auto=format",
    code: "#",
    live: "#",
  },
  {
    id: 2,
    title: "Folio Commerce",
    tags: ["Next.js", "Tailwind CSS", "Stripe", "Prisma"],
    description:
      "A headless e-commerce platform crafted for independent creators — fast checkout, inventory management, and Stripe-powered payouts unified in one clean package.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop&auto=format",
    code: "#",
    live: "#",
  },
  {
    id: 3,
    title: "Relay API",
    tags: ["Node.js", "Express", "Redis", "Docker"],
    description:
      "A high-throughput REST API gateway with rate limiting, intelligent caching, and request queuing. Reduced third-party API costs by 60% for a client's production system.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=600&fit=crop&auto=format",
    code: "#",
    live: "#",
  },
];

function Projects({ dark }: { dark: boolean }) {
  const mono = { fontFamily: "'JetBrains Mono', monospace" } as const;
  const display = { fontFamily: "'Epilogue', system-ui, sans-serif" } as const;

  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="mb-14">
        <p
          className="text-xs tracking-[0.22em] uppercase text-muted-foreground mb-3"
          style={mono}
        >
          01 / Proyectos
        </p>
        <h2
          className="text-3xl sm:text-4xl font-bold text-foreground"
          style={display}
        >
          Proyectos Destacados
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {PROJECTS.map((project) => (
          <article
            key={project.id}
            className="group flex flex-col md:flex-row rounded-xl border border-border bg-card overflow-hidden transition-all duration-300 hover:border-border hover:shadow-2xl"
            style={{ boxShadow: "none" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = dark
                ? "0 24px 60px rgba(0,0,0,0.6)"
                : "0 24px 60px rgba(0,0,0,0.1)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
            }}
          >
            {/* Preview image */}
            <div className="aspect-[16/7] md:aspect-auto md:w-[40%] md:min-h-[280px] overflow-hidden bg-secondary shrink-0">
              <img
                src={project.image}
                alt={`${project.title} preview`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>

            {/* Card body */}
            {/* 3. MODIFICACIÓN: 'flex-grow flex flex-col justify-between' para estirar el contenido de forma pareja */}
            <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between">
              <div>
                <h3
                  className="text-xl font-bold text-foreground mb-3"
                  style={display}
                >
                  {project.title}
                </h3>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-full text-xs border border-border text-muted-foreground bg-secondary"
                      style={mono}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
                  {project.description}
                </p>
              </div>

              {/* Links */}
              <div className="flex items-center gap-6 mt-6 pt-6 border-t border-border">
                {[
                  {
                    icon: <Code2 size={11} />,
                    label: "Code",
                    href: project.code,
                  },
                  {
                    icon: <ExternalLink size={11} />,
                    label: "Live Preview",
                    href: project.live,
                  },
                ].map(({ icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors duration-200 group/link"
                    style={mono}
                  >
                    {icon}
                    {label}
                    <ArrowUpRight
                      size={9}
                      className="opacity-0 -translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-200"
                    />
                  </a>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
