/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
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
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
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
        // Real Estate specific colors
        "real-estate": {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
        },
        property: {
          sale: "#10b981",
          rent: "#3b82f6",
          sold: "#6b7280",
          pending: "#f59e0b",
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
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in-right": {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "slide-in-left": {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "bounce-in": {
          "0%": { opacity: "0", transform: "scale(0.3)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
          "70%": { transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        "slide-in-right": "slide-in-right 0.5s ease-out",
        "slide-in-left": "slide-in-left 0.5s ease-out",
        "scale-in": "scale-in 0.3s ease-out",
        "bounce-in": "bounce-in 0.6s ease-out",
        shimmer: "shimmer 2s infinite",
        "pulse-slow": "pulse-slow 3s infinite",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        heading: ["Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
        "5xl": ["3rem", { lineHeight: "1" }],
        "6xl": ["3.75rem", { lineHeight: "1" }],
        "7xl": ["4.5rem", { lineHeight: "1" }],
        "8xl": ["6rem", { lineHeight: "1" }],
        "9xl": ["8rem", { lineHeight: "1" }],
      },
      spacing: {
        18: "4.5rem",
        88: "22rem",
        128: "32rem",
        144: "36rem",
      },
      maxWidth: {
        "8xl": "88rem",
        "9xl": "96rem",
      },
      boxShadow: {
        soft: "0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)",
        medium: "0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        large: "0 10px 40px -10px rgba(0, 0, 0, 0.15), 0 20px 25px -5px rgba(0, 0, 0, 0.1)",
        "property-card": "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        "property-card-hover": "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      },
      backdropBlur: {
        xs: "2px",
      },
      screens: {
        xs: "475px",
        "3xl": "1600px",
      },
      zIndex: {
        60: "60",
        70: "70",
        80: "80",
        90: "90",
        100: "100",
      },
      aspectRatio: {
        property: "4/3",
        "property-wide": "16/9",
        "property-square": "1/1",
      },
      gridTemplateColumns: {
        "property-grid": "repeat(auto-fill, minmax(300px, 1fr))",
        "agent-grid": "repeat(auto-fill, minmax(280px, 1fr))",
        "blog-grid": "repeat(auto-fill, minmax(350px, 1fr))",
      },
      transitionProperty: {
        height: "height",
        spacing: "margin, padding",
      },
      transitionDuration: {
        400: "400ms",
        600: "600ms",
      },
      transitionTimingFunction: {
        "bounce-in": "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    // Custom plugin for real estate specific utilities
    ({ addUtilities, addComponents, theme }) => {
      const newUtilities = {
        ".text-balance": {
          "text-wrap": "balance",
        },
        ".text-pretty": {
          "text-wrap": "pretty",
        },
        ".scrollbar-hide": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
        ".scrollbar-thin": {
          "scrollbar-width": "thin",
          "&::-webkit-scrollbar": {
            width: "6px",
            height: "6px",
          },
          "&::-webkit-scrollbar-track": {
            background: theme("colors.gray.100"),
            borderRadius: "3px",
          },
          "&::-webkit-scrollbar-thumb": {
            background: theme("colors.gray.300"),
            borderRadius: "3px",
            "&:hover": {
              background: theme("colors.gray.400"),
            },
          },
        },
        ".glass": {
          "backdrop-filter": "blur(16px) saturate(180%)",
          "background-color": "rgba(255, 255, 255, 0.75)",
          border: "1px solid rgba(255, 255, 255, 0.125)",
        },
        ".glass-dark": {
          "backdrop-filter": "blur(16px) saturate(180%)",
          "background-color": "rgba(17, 25, 40, 0.75)",
          border: "1px solid rgba(255, 255, 255, 0.125)",
        },
      }

      const newComponents = {
        ".property-card": {
          "@apply bg-white rounded-lg shadow-property-card hover:shadow-property-card-hover transition-all duration-300 overflow-hidden":
            {},
        },
        ".property-badge": {
          "@apply inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium": {},
        },
        ".property-badge-sale": {
          "@apply property-badge bg-green-100 text-green-800": {},
        },
        ".property-badge-rent": {
          "@apply property-badge bg-blue-100 text-blue-800": {},
        },
        ".property-badge-sold": {
          "@apply property-badge bg-gray-100 text-gray-800": {},
        },
        ".property-badge-pending": {
          "@apply property-badge bg-yellow-100 text-yellow-800": {},
        },
        ".btn-primary": {
          "@apply bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2":
            {},
        },
        ".btn-secondary": {
          "@apply bg-gray-200 hover:bg-gray-300 text-gray-900 font-medium py-2 px-4 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2":
            {},
        },
        ".input-field": {
          "@apply block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500":
            {},
        },
        ".section-padding": {
          "@apply py-16 lg:py-24": {},
        },
        ".container-padding": {
          "@apply px-4 sm:px-6 lg:px-8": {},
        },
        ".heading-1": {
          "@apply text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight": {},
        },
        ".heading-2": {
          "@apply text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight": {},
        },
        ".heading-3": {
          "@apply text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight": {},
        },
        ".body-large": {
          "@apply text-lg sm:text-xl leading-relaxed": {},
        },
        ".body-medium": {
          "@apply text-base sm:text-lg leading-relaxed": {},
        },
        ".gradient-primary": {
          "@apply bg-gradient-to-r from-blue-600 to-blue-800": {},
        },
        ".gradient-secondary": {
          "@apply bg-gradient-to-r from-gray-50 to-gray-100": {},
        },
        ".gradient-text": {
          "@apply bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent": {},
        },
      }

      addUtilities(newUtilities)
      addComponents(newComponents)
    },
  ],
}
