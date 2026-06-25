import { useEffect, useState } from "react";
import Navbar from "./components/Navbar.tsx";
import Footer from "./components/Footer.tsx";
import HeroSection from "./sections/HeroSection.tsx";
/* import ExperienceTimeLine from "./sections/ExperienceTimeLine.tsx"; */

import { lazy, Suspense } from "react";

// Carga perezosa de secciones que no se ven en el primer pantallazo
const ProjectsSection = lazy(() => import("./sections/Projects.tsx"));
const AboutSection = lazy(() => import("./sections/About.tsx"));

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(true);

  // Toggle dark mode class on the root
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  // Listen to scroll events to toggle the scrolled state
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Function to scroll to a section by id
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const body = { fontFamily: "'DM Sans', system-ui, sans-serif" } as const;

  return (
    <div className="min-h-screen bg-background text-foreground" style={body}>
      {/* header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500  ${
          scrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border"
            : "bg-transparent"
        } `}
      >
        <Navbar dark={dark} setDark={setDark} scrollTo={scrollTo} />
      </header>
      {/* realizar el main */}
      <main className="max-w-5xl mx-auto px-6 sm:px-10">
        {/* HERO SECTION */}
        <HeroSection />

        {/* ── Divider ── */}
        {/* <div className="border-t border-border" /> */}

        {/* experience / time line*/}
        {/* <ExperienceTimeLine/> */}

        <Suspense
          fallback={
            <div className="space-y-12 py-10 animate-pulse">
              {/* Simula el título de la sección */}
              <div className="h-8 bg-secondary rounded w-48" />

              {/* Simula una o dos tarjetas de proyectos */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="h-64 bg-secondary rounded-xl" />
                <div className="h-64 bg-secondary rounded-xl" />
              </div>
            </div>
          }
        >
          {/* ── Divider ── */}
          <div className="border-t border-border" />

          {/* projects */}
          <ProjectsSection dark={dark} />

          {/* ── Divider ── */}
          <div className="border-t border-border" />

          {/* sobre mí */}
          <AboutSection />
        </Suspense>
      </main>

      {/* footer */}
      <Footer />
    </div>
  );
}

export default App;
