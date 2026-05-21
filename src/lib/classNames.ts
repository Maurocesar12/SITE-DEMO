type ClassValue = false | null | string | undefined;

// Keeps conditional Tailwind classes readable without adding another dependency.
export function cn(...classes: ClassValue[]) {
  return classes.filter(Boolean).join(" ");
}
