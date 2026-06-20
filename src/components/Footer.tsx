import { FiLinkedin, FiGithub } from "react-icons/fi";
import { MdEmail } from "react-icons/md";

function Footer() {
  const mono = { fontFamily: "'JetBrains Mono', monospace" } as const;

  return (
    <footer id="contact" className="border-t border-border mt-4">
      <div className="max-w-5xl mx-auto px-6 sm:px-10 py-14">
        <div className="flex sm:flex-row flex-col-reverse  items-center justify-between gap-5 text-center">
          <p className="text-xs text-muted-foreground" style={mono}>
            © 2026 Lucas Rojas. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-5">
            <a
              href="#"
              className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              <FiGithub size={11} /> GitHub
            </a>
            <span className="text-border select-none">·</span>
            <a
              href="#"
              className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              <FiLinkedin size={11} /> LinkedIn
            </a>
            <span className="text-border select-none">·</span>
            <a
              href="#"
              className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              <MdEmail size={11} /> Contacto
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
