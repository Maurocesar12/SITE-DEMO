import { ArrowRight, ChevronDown, LockKeyhole, Menu, X } from "lucide-react";
import { useCallback, useRef, useState } from "react";
import { navItems, schoolMenuItems } from "../content";
import { useClickOutside } from "../hooks/useClickOutside";
import { cn } from "../lib/classNames";
import { ResponsiveImage } from "./ResponsiveImage";

type SiteHeaderProps = {
  isMenuOpen: boolean;
  onNavigate: (id: string) => void;
  onOpenLogin: () => void;
  onShowShows: () => void;
  onShowHome: () => void;
  onShowTeam: () => void;
  onShowTestimonials: () => void;
  onToggleMenu: () => void;
};

const NAV_BUTTON_CLASS =
  "rounded-full px-4 py-2 text-sm font-semibold text-ink/62 transition hover:bg-white hover:text-ink";
const MOBILE_NAV_BUTTON_CLASS = "rounded-xl px-4 py-3 text-left text-sm font-bold text-ink/70 hover:bg-porcelain";
const menuKey = (item: { id: string; label: string }) => `${item.id}-${item.label}`;

export function SiteHeader({
  isMenuOpen,
  onNavigate,
  onOpenLogin,
  onShowShows,
  onShowHome,
  onShowTeam,
  onShowTestimonials,
  onToggleMenu
}: SiteHeaderProps) {
  const [isSchoolMenuOpen, setIsSchoolMenuOpen] = useState(false);
  const schoolMenuRef = useRef<HTMLDivElement>(null);

  const closeSchoolMenu = useCallback(() => setIsSchoolMenuOpen(false), []);
  const toggleSchoolMenu = () => setIsSchoolMenuOpen((currentState) => !currentState);

  useClickOutside(schoolMenuRef, closeSchoolMenu);

  const openLoginFromMenu = () => {
    onOpenLogin();
    onToggleMenu();
  };

  const handleNavClick = (id: string) => {
    closeSchoolMenu();

    if (id === "depoimentos") {
      onShowTestimonials();
      return;
    }

    if (id === "espetaculos") {
      onShowShows();
      return;
    }

    if (id === "equipe") {
      onShowTeam();
      return;
    }

    onShowHome();
    window.requestAnimationFrame(() => onNavigate(id));
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ink/10 bg-white/95 px-4 py-3 text-ink shadow-[0_8px_30px_rgba(36,36,36,0.06)] backdrop-blur-xl md:px-8">
      <div className="mx-auto flex max-w-[88rem] items-center justify-between gap-5">
        <button
          aria-label="Ir para o inicio"
          className="group flex items-center gap-3 text-left"
          onClick={onShowHome}
          type="button"
        >
          <span className="grid h-12 w-12 place-items-center overflow-hidden rounded-full border border-wine/25 bg-porcelain">
            <ResponsiveImage
              alt="Agnes Moco"
              className="h-full w-full object-cover"
              loading="eager"
              sizes="48px"
              src="/site-images/logo-agnes-moco.jpg"
            />
          </span>
          <span className="min-w-0">
            <strong className="block font-display text-xl leading-none">Agnes Moco</strong>
            <small className="text-xs uppercase tracking-[0.16em] text-ink/50 sm:tracking-[0.22em]">
              Escola de Musica
            </small>
          </span>
        </button>

        <nav className="hidden items-center gap-1 rounded-full border border-ink/10 bg-porcelain p-1 lg:flex">
          <div className="relative" ref={schoolMenuRef}>
            <button
              aria-expanded={isSchoolMenuOpen}
              aria-haspopup="menu"
              className={cn(
                "inline-flex rounded-full px-4 py-2 text-sm font-semibold transition",
                isSchoolMenuOpen ? "bg-white text-ink" : "text-ink/62 hover:bg-white hover:text-ink"
              )}
              onClick={toggleSchoolMenu}
              type="button"
            >
              Escola
              <ChevronDown
                className={cn("ml-2 h-4 w-4 transition-transform duration-300", isSchoolMenuOpen && "rotate-180")}
              />
            </button>
            <div
              className={cn(
                "absolute left-0 top-full z-20 w-60 border-t-2 border-wine bg-white py-2 text-left shadow-soft transition duration-200",
                isSchoolMenuOpen
                  ? "visible translate-y-2 opacity-100"
                  : "invisible translate-y-3 opacity-0"
              )}
              role="menu"
            >
              {schoolMenuItems.map((item) => (
                <button
                  className="block w-full px-4 py-3 text-left text-sm font-medium text-ink/76 transition hover:bg-porcelain hover:text-wine"
                  key={menuKey(item)}
                  onClick={() => handleNavClick(item.id)}
                  role="menuitem"
                  type="button"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
          {navItems.map((item) => (
            <button
              className={NAV_BUTTON_CLASS}
              key={menuKey(item)}
              onClick={() => handleNavClick(item.id)}
              type="button"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <button
            className="inline-flex h-11 items-center gap-2 rounded-full border border-ink/15 px-4 text-sm font-bold text-ink transition hover:border-wine hover:bg-wine/10"
            onClick={onOpenLogin}
            type="button"
          >
            <LockKeyhole className="h-4 w-4" />
            Login aluno
          </button>
          <button
            className="inline-flex h-11 items-center gap-2 rounded-full bg-wine px-5 text-sm font-black text-white shadow-glow transition hover:-translate-y-0.5"
            onClick={() => handleNavClick("contato")}
            type="button"
          >
            Agendar aula
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <button
          aria-label="Abrir menu"
          className="grid h-11 w-11 place-items-center rounded-full border border-ink/15 lg:hidden"
          onClick={onToggleMenu}
          type="button"
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="mx-auto mt-3 grid max-h-[calc(100dvh-5.5rem)] max-w-[88rem] gap-2 overflow-y-auto rounded-2xl border border-ink/10 bg-white p-3 shadow-soft lg:hidden">
          {navItems.map((item) => (
            <button
              className={MOBILE_NAV_BUTTON_CLASS}
              key={menuKey(item)}
              onClick={() => handleNavClick(item.id)}
              type="button"
            >
              {item.label}
            </button>
          ))}
          {schoolMenuItems.map((item) => (
            <button
              className={MOBILE_NAV_BUTTON_CLASS}
              key={menuKey(item)}
              onClick={() => handleNavClick(item.id)}
              type="button"
            >
              Escola - {item.label}
            </button>
          ))}
          <button
            className="rounded-xl bg-wine px-4 py-3 text-left text-sm font-black text-white"
            onClick={() => handleNavClick("contato")}
            type="button"
          >
            Agendar aula
          </button>
          <button
            className="rounded-xl border border-ink/10 px-4 py-3 text-left text-sm font-black text-ink/70"
            onClick={openLoginFromMenu}
            type="button"
          >
            Login aluno
          </button>
        </div>
      )}
    </header>
  );
}
