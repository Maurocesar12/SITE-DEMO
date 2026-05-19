import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#242424",
        espresso: "#3A3A37",
        wine: "#8A8B6A",
        brass: "#A7A77D",
        sage: "#6E7155",
        porcelain: "#F8F8F4",
        pearl: "#E9E9E1"
      },
      fontFamily: {
        display: ["Cormorant Garamond", "Georgia", "serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        soft: "0 24px 70px rgba(36, 36, 36, 0.12)",
        glow: "0 18px 50px rgba(138, 139, 106, 0.24)"
      },
      backgroundImage: {
        "hero-stage":
          "linear-gradient(90deg, rgba(42,42,40,.86), rgba(90,90,86,.62), rgba(42,42,40,.28)), url('/site-images/shantala-familia.jpg')",
        "piano-room":
          "linear-gradient(180deg, rgba(36,36,36,.08), rgba(36,36,36,.68)), url('/site-images/musicalizacao-7-a-10.jpeg')"
      }
    }
  },
  plugins: []
} satisfies Config;
