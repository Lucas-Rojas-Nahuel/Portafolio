import { Moon, Sun } from "lucide-react";
import type React from "react";

function Navbar({
  dark,
  setDark,
  scrollTo,
}: {
  dark: boolean;
  setDark: React.Dispatch<React.SetStateAction<boolean>>;
  scrollTo: (id: string) => void;
}) {
  const display = { fontFamily: "'Epilogue', system-ui, sans-serif" } as const;

  return (
    <nav className="max-w-5xl mx-auto px-2 sm:px-10 h-16 flex items-center justify-between">
      {/* Logo / Name */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="text-xs cursor-pointer sm:text-sm font-bold tracking-widest uppercase text-foreground hover:opacity-60 transition-opacity duration-200"
        style={{ ...display, letterSpacing: "0.18em" }}
      >
        LUCAS <span className="hidden sm:inline">ROJAS</span>
      </button>

      {/* Right side */}
      <div className="flex items-center gap-4 sm:gap-7">
        <div className=" flex items-center gap-4 sm:gap-7">
          {["Proyectos", "Sobre mí", "Contacto"].map((label) => (
            <button
              key={label}
              onClick={() => scrollTo(label.toLowerCase())}
              className="text-xs cursor-pointer sm:text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {label}
            </button>
          ))}
        </div>
        <button
          onClick={() => setDark((d) => !d)}
          aria-label="Toggle theme"
          className="relative inline-flex h-5 w-10 shrink-0 cursor-pointer items-center rounded-full bg-switch-background p-0.5 transition-colors duration-300 focus:outline-hidden dark:bg-input"
        >
          <span className="sr-only">Cambiar tema</span>
          {/* El círculo móvil */}
          <span
            className={`
          flex h-4 w-4 items-center justify-center rounded-full bg-card text-foreground shadow-sm transition-transform duration-300
          ${dark ? "translate-x-5" : "translate-x-0"}
        `}
          >
            {/* Renderiza el sol o la luna según el estado con transiciones suaves */}
            {dark ? (
              <Moon className="h-3.5 w-3.5 animate-fade-in" />
            ) : (
              <Sun className="h-3.5 w-3.5 animate-fade-in" />
            )}
          </span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
