export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  darkMode: ["class"],

  theme: {
    extend: {
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

        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",

        navy: "#0a1f44",
        "navy-foreground": "#ffffff",

        gold: "#d4af37",
        "gold-foreground": "#0a1f44",

        charcoal: "#4b5563",
      },

      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        display: ["Fraunces", "Georgia", "serif"],
      },

      boxShadow: {
        elegant: "0 25px 60px rgba(0,0,0,.10)",
        card: "0 15px 35px rgba(0,0,0,.08)",
        gold: "0 12px 30px rgba(212,175,55,.25)",
      },
    },
  },

  plugins: [],
};