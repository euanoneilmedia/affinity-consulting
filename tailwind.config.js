/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Brand colors extracted from Affinity Consulting logo
        brand: {
          primary: "#1b6b7b", // Deep teal
          "primary-light": "#2a8a9e",
          "primary-dark": "#0f4a57",
          "primary-glow": "rgba(27, 107, 123, 0.15)", // Subtle glow effect
          secondary: "#d87e52", // Coral/orange accent
          "secondary-light": "#e89968",
          "secondary-dark": "#c66838",
          "secondary-glow": "rgba(216, 126, 82, 0.15)", // Subtle coral glow
        },
        // Dark mode background colors
        background: {
          primary: "#111827", // Main dark background (neutral-900)
          card: "#1f2937", // Card background (neutral-800)
          elevated: "#374151", // Elevated/hover state (neutral-700)
        },
        // Dark mode text colors
        text: {
          primary: "#f9fafb", // White headings (neutral-50)
          secondary: "#d1d5db", // Light gray body text (neutral-300)
          muted: "#9ca3af", // Muted text (neutral-400)
        },
        // Neutral palette
        neutral: {
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
        },
      },
      typography: {
        DEFAULT: {
          css: {
            color: "#374151",
            a: {
              color: "#1b6b7b",
              "&:hover": {
                color: "#2a8a9e",
              },
            },
            strong: {
              color: "#1f2937",
            },
            "code::before": {
              content: '""',
            },
            "code::after": {
              content: '""',
            },
          },
        },
      },
      spacing: {
        "container-sm": "24rem", // 384px
        "container-md": "42rem", // 672px
        "container-lg": "64rem", // 1024px
        "container-xl": "80rem", // 1280px
      },
      borderRadius: {
        sm: "0.25rem",
        md: "0.375rem",
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
        card: "1.25rem", // 20px - Standard card radius
        "card-lg": "1.5rem", // 24px - Large card radius
        image: "1.25rem", // 20px - Image radius
        full: "9999px",
      },
      boxShadow: {
        sm: "0 1px 2px 0 rgba(0, 0, 0, 0.04)",
        md: "0 4px 6px -1px rgba(0, 0, 0, 0.08)",
        lg: "0 10px 15px -3px rgba(0, 0, 0, 0.08)",
        xl: "0 20px 25px -5px rgba(0, 0, 0, 0.08)",
        card: "0 4px 6px -1px rgba(0, 0, 0, 0.2), 0 2px 4px -1px rgba(0, 0, 0, 0.1)", // Card elevation
        "card-hover": "0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.15)", // Elevated card
        "teal-glow": "0 0 20px rgba(27, 107, 123, 0.3)", // Teal glow effect
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      fontSize: {
        // Refined typography scale
        xs: ["12px", { lineHeight: "16px" }],
        sm: ["14px", { lineHeight: "20px" }],
        base: ["16px", { lineHeight: "24px" }],
        lg: ["18px", { lineHeight: "28px" }],
        xl: ["20px", { lineHeight: "28px" }],
        "2xl": ["24px", { lineHeight: "32px" }],
        "3xl": ["30px", { lineHeight: "36px" }],
        "4xl": ["36px", { lineHeight: "40px" }],
        "5xl": ["48px", { lineHeight: "48px" }],
      },
    },
  },
  plugins: [],
};
