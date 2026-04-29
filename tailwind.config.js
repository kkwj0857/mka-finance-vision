import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      /* =========================
         COLORS (DESIGN SYSTEM)
      ========================= */
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        card: "hsl(var(--card))",
        "card-foreground": "hsl(var(--card-foreground))",

        popover: "hsl(var(--popover))",
        "popover-foreground": "hsl(var(--popover-foreground))",

        primary: "hsl(var(--primary))",
        "primary-foreground": "hsl(var(--primary-foreground))",

        secondary: "hsl(var(--secondary))",
        "secondary-foreground": "hsl(var(--secondary-foreground))",

        muted: "hsl(var(--muted))",
        "muted-foreground": "hsl(var(--muted-foreground))",

        accent: "hsl(var(--accent))",
        "accent-foreground": "hsl(var(--accent-foreground))",

        destructive: "hsl(var(--destructive))",
        "destructive-foreground": "hsl(var(--destructive-foreground))",

        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",

        /* =========================
           BRAND SYSTEM (IMPORTANT)
        ========================= */
        navy: "var(--navy)",
        gold: "var(--gold)",
        charcoal: "var(--charcoal)",
      },

      /* =========================
         TYPOGRAPHY SYSTEM
      ========================= */
      fontFamily: {
        sans: ["var(--font-sans)"],
        display: ["var(--font-display)"],
      },

      /* =========================
         BORDER RADIUS SCALE
      ========================= */
      borderRadius: {
        sm: "0.3rem",
        md: "0.5rem",
        lg: "0.75rem",
        xl: "1rem",
      },

      /* =========================
         SHADOW SYSTEM
      ========================= */
      boxShadow: {
        elegant: "var(--shadow-elegant)",
        card: "var(--shadow-card)",
        gold: "var(--shadow-gold)",
      },
    },
  },
  plugins: [],
} satisfies Config;