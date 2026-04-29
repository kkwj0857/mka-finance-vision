export default {
  darkMode: ["class"],

  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,js,jsx}",
  ],

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

        destructive: "hsl(var(--destructive))",
        "destructive-foreground": "hsl(var(--destructive-foreground))",

        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",

        navy: "#071a3d",
        "navy-foreground": "#ffffff",

        gold: "#d4af37",
        "gold-foreground": "#071a3d",

        charcoal: "#374151",
      },

      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        display: ["Fraunces", "serif"],
      },

      borderRadius: {
        sm: "0.25rem",
        md: "0.5rem",
        lg: "0.75rem",
        xl: "1rem",
      },

      boxShadow: {
        elegant: "0 20px 60px rgba(0,0,0,0.15)",
        card: "0 10px 30px rgba(0,0,0,0.08)",
        gold: "0 10px 30px rgba(212,175,55,0.25)",
      },
    },
  },

  plugins: [],
};