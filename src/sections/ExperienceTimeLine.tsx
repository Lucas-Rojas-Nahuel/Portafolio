const TIMELINE = [
  {
    period: "2024 — Present",
    role: "Senior Full Stack Developer",
    place: "Meridian Labs",
    desc: "Leading frontend architecture for a B2B SaaS platform, serving 12,000+ active users across 40 countries.",
  },
  {
    period: "2022 — 2024",
    role: "Full Stack Developer",
    place: "Flux Agency",
    desc: "Built and maintained client web applications across React, Node.js, and cloud infrastructure on AWS.",
  },
  {
    period: "2018 — 2022",
    role: "B.Sc. Computer Science",
    place: "University of Porto",
    desc: "Graduated with honors. Thesis focused on distributed systems and RESTful API design patterns.",
  },
];

function ExperienceTimeLine() {
  const mono = { fontFamily: "'JetBrains Mono', monospace" } as const;
  const display = { fontFamily: "'Epilogue', system-ui, sans-serif" } as const;

  return (
    <section className="py-24 sm:py-32">
      <div className="mb-14">
        <p
          className="text-xs tracking-[0.22em] uppercase text-muted-foreground mb-3"
          style={mono}
        >
          01 / Journey
        </p>
        <h2
          className="text-3xl sm:text-4xl font-bold text-foreground"
          style={display}
        >
          Experience & Education
        </h2>
      </div>

      <div className="relative">
        {/* Vertical spine */}
        <div className="absolute left-0 top-2 bottom-2 w-px bg-border hidden sm:block" />

        <div>
          {TIMELINE.map((item, i) => (
            <div key={i} className="sm:pl-10 relative group">
              {/* Dot */}
              <div
                className="hidden sm:block absolute left-0 top-7 w-2 h-2 rounded-full -translate-x-[3.5px] transition-transform duration-200 group-hover:scale-[1.5]"
                style={{ backgroundColor: "#10b981" }}
              />

              <div
                className={`py-8 ${i < TIMELINE.length - 1 ? "border-b border-border" : ""}`}
              >
                <p
                  className="text-xs text-muted-foreground mb-2.5"
                  style={mono}
                >
                  {item.period}
                </p>
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 mb-2">
                  <h3
                    className="text-base font-semibold text-foreground"
                    style={display}
                  >
                    {item.role}
                  </h3>
                  <span className="text-sm text-muted-foreground">
                    — {item.place}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-lg">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExperienceTimeLine;
