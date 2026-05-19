import { useState } from "react";
import { LoginModal } from "./components/LoginModal";
import { ScrollProgress } from "./components/ScrollProgress";
import { SiteHeader } from "./components/SiteHeader";
import { useScrollReveal } from "./hooks/useScrollReveal";
import { scrollToSection } from "./lib/scroll";
import { TestimonialsPage } from "./pages/TestimonialsPage";
import { ShowsPage } from "./pages/ShowsPage";
import { TeamPage } from "./pages/TeamPage";
import { BenefitsSection } from "./sections/BenefitsSection";
import { ContactSection } from "./sections/ContactSection";
import { CoursesSection } from "./sections/CoursesSection";
import { DiagnosisSection } from "./sections/DiagnosisSection";
import { ExperienceSection } from "./sections/ExperienceSection";
import { HeroSection } from "./sections/HeroSection";
import { HighlightsBar } from "./sections/HighlightsBar";
import { PortalSection } from "./sections/PortalSection";
import { ProjectSection } from "./sections/ProjectSection";
import { ReferenceGallerySection } from "./sections/ReferenceGallerySection";
import { UserJourneySection } from "./sections/UserJourneySection";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<"home" | "testimonials" | "shows" | "team">("home");

  useScrollReveal(currentPage);

  const closeLogin = () => setIsLoginOpen(false);
  const openLogin = () => setIsLoginOpen(true);
  const showHome = () => {
    setCurrentPage("home");
    setIsMenuOpen(false);
    window.requestAnimationFrame(() => scrollToSection("inicio"));
  };
  const showTestimonials = () => {
    setCurrentPage("testimonials");
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const showShows = () => {
    setCurrentPage("shows");
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const showTeam = () => {
    setCurrentPage("team");
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const toggleMenu = () => setIsMenuOpen((current) => !current);

  const handleNavigate = (id: string) => {
    scrollToSection(id);
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-porcelain text-ink">
      <ScrollProgress />
      <SiteHeader
        isMenuOpen={isMenuOpen}
        onNavigate={handleNavigate}
        onOpenLogin={openLogin}
        onShowShows={showShows}
        onShowHome={showHome}
        onShowTeam={showTeam}
        onShowTestimonials={showTestimonials}
        onToggleMenu={toggleMenu}
      />

      {currentPage === "home" && (
        <main>
          <HeroSection onNavigate={handleNavigate} onOpenLogin={openLogin} />
          <HighlightsBar />
          <UserJourneySection />
          <DiagnosisSection />
          <CoursesSection />
          <ReferenceGallerySection />
          <ExperienceSection />
          <ProjectSection />
          <PortalSection onOpenLogin={openLogin} />
          <BenefitsSection />
          <ContactSection />
        </main>
      )}
      {currentPage === "testimonials" && <TestimonialsPage onBackHome={showHome} />}
      {currentPage === "shows" && <ShowsPage onBackHome={showHome} />}
      {currentPage === "team" && <TeamPage onBackHome={showHome} />}

      {isLoginOpen && <LoginModal onClose={closeLogin} />}
    </div>
  );
}

export default App;
