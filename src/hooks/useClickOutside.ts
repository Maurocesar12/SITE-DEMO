import { useEffect, type RefObject } from "react";

// Reusable outside-click behavior for dropdowns, panels, and popovers.
export function useClickOutside<TElement extends HTMLElement>(
  ref: RefObject<TElement>,
  onOutsideClick: () => void
) {
  useEffect(() => {
    const handlePointerDown = (event: MouseEvent) => {
      if (!ref.current?.contains(event.target as Node)) {
        onOutsideClick();
      }
    };

    document.addEventListener("mousedown", handlePointerDown);

    return () => document.removeEventListener("mousedown", handlePointerDown);
  }, [onOutsideClick, ref]);
}
