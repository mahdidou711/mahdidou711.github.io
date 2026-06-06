import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { ProjectsGrid } from "@/components/sections/ProjectsGrid";
import { Experience } from "@/components/sections/Experience";
import { Education } from "@/components/sections/Education";
import { Contact } from "@/components/sections/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bouama Mehdi — Étudiant en électronique, FPGA et logiciel embarqué" },
      {
        name: "description",
        content:
          "Portfolio de Bouama Mehdi, étudiant à l'Université Paris-Saclay : électronique, FPGA, logiciel embarqué, systèmes autonomes et traitement du signal.",
      },
      { property: "og:title", content: "Bouama Mehdi — Electronics, FPGA & Embedded Software" },
      {
        property: "og:description",
        content:
          "Premium engineering portfolio: FPGA, embedded systems, autonomous vehicles and scientific Python.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

function Portfolio() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <FeaturedWork />
        <Skills />
        <ProjectsGrid />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
