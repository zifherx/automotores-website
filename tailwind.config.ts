import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        // Head Hyundai
        headBold: ["var(--font-hyundai-head-bold)"],
        headRegular: ["var(--font-hyundai-head-regular)"],
        headMedium: ["var(--font-hyundai-head-medium)"],
        headLight: ["var(--font-hyundai-head-light)"],
        // Text Hyundai
        textBold: ["var(--font-hyundai-text-bold)"],
        textMedium: ["var(--font-hyundai-text-medium)"],
        textRegular: ["var(--font-hyundai-text-regular)"],
        textItalicBold: ["var(--font-hyundai-text-italic-bold)"],
        textItalicMedium: ["var(--font-hyundai-text-italic-medium)"],
        textItalicRegular: ["var(--font-hyundai-text-italic-regular)"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        blueInka: "#1B5094",
        blueDarkInka: "#30609D",
        redInka: "#DE2526",
        redDarkInka: "#C01C1D",
        grisInka: "#A7A7A7",
        grisDarkInka: "#555555",
        plomoInka: "#F6F6F6",
        plomoDarkInka: "#707276",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
