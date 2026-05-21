import { useState } from "react";
import { AdvancedViewControls } from "./components/AdvancedViewControls";
import { LoginModal } from "./components/LoginModal";
import { ScrollProgress } from "./components/ScrollProgress";
import { SiteHeader } from "./components/SiteHeader";
import { useScrollReveal } from "./hooks/useScrollReveal";
import { scrollToSection, smoothScrollTo } from "./lib/scroll";
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

type Page = "home" | "testimonials" | "shows" | "team";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<Page>("home");

  useScrollReveal(currentPage);

  const closeLogin = () => setIsLoginOpen(false);
  const openLogin = () => setIsLoginOpen(true);

  const closeMenu = () => setIsMenuOpen(false);
  const scrollPageToTop = () => smoothScrollTo(0, 700);

  const showPage = (page: Page) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
  };

  const showHome = () => {
    showPage("home");
    window.requestAnimationFrame(() => scrollToSection("inicio"));
  };

  const showInnerPage = (page: Exclude<Page, "home">) => {
    showPage(page);
    scrollPageToTop();
  };

  const toggleMenu = () => setIsMenuOpen((current) => !current);

  const handleNavigate = (id: string) => {
    scrollToSection(id);
    closeMenu();
  };

  return (
    <div className="min-h-screen bg-porcelain text-ink">
      <ScrollProgress />
      <SiteHeader
        isMenuOpen={isMenuOpen}
        onNavigate={handleNavigate}
        onOpenLogin={openLogin}
        onShowShows={() => showInnerPage("shows")}
        onShowHome={showHome}
        onShowTeam={() => showInnerPage("team")}
        onShowTestimonials={() => showInnerPage("testimonials")}
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

      <AdvancedViewControls />
      {isLoginOpen && <LoginModal onClose={closeLogin} />}
    </div>
  );
}

export default App;
