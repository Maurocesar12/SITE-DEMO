import { useEffect } from "react";

const revealStyles = ["rise", "fade", "slide-left", "slide-right", "scale"] as const;

// Applies scroll-entry animations to every element marked with data-reveal.
export function useScrollReveal(dependency: unknown) {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.16 }
    );

    elements.forEach((element, index) => {
      const currentStyle = element.dataset.reveal;

      if (!currentStyle) {
        element.dataset.reveal = revealStyles[index % revealStyles.length];
      }

      if (!element.style.getPropertyValue("--reveal-delay")) {
        element.style.setProperty("--reveal-delay", `${Math.min(index % 6, 5) * 80}ms`);
      }

      observer.observe(element);
    });

    return () => observer.disconnect();
  }, [dependency]);
}
