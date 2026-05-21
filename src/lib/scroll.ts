const HEADER_OFFSET = 92;
const DEFAULT_SCROLL_DURATION = 850;
let activeScrollFrame = 0;

function easeOutQuart(progress: number) {
  return 1 - Math.pow(1 - progress, 4);
}

function shouldReduceMotion() {
  return (
    window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
    document.documentElement.dataset.viewMotion === "calm"
  );
}

export function smoothScrollTo(top: number, duration = DEFAULT_SCROLL_DURATION) {
  window.cancelAnimationFrame(activeScrollFrame);

  if (shouldReduceMotion()) {
    window.scrollTo({ top });
    return;
  }

  const startTop = window.scrollY;
  const distance = top - startTop;
  const startTime = performance.now();

  const animateScroll = (currentTime: number) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    window.scrollTo(0, startTop + distance * easeOutQuart(progress));

    if (progress < 1) {
      activeScrollFrame = window.requestAnimationFrame(animateScroll);
    }
  };

  activeScrollFrame = window.requestAnimationFrame(animateScroll);
}

export function scrollToSection(id: string) {
  const target = document.getElementById(id);

  if (!target) {
    return;
  }

  const targetTop = target.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;

  smoothScrollTo(Math.max(targetTop, 0));
}
