/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
        ],
      },
      colors: {
        // Brand colors - healthcare-appropriate teal palette
        brand: {
          primary: "#1E5B60", // Softer healthcare teal
          "primary-light": "#3FA9A8", // Highlight teal
          "primary-dark": "#154C50", // Deeper teal for emphasis
          secondary: "#F2994A", // Warm orange accent
          "secondary-light": "#FEA048", // Lighter peachy orange
          "secondary-dark": "#d87e52", // Coral for depth
        },
        // Light theme background colors
        background: {
          primary: "#FDFCFA", // Soft warm white (cream-tinted)
          card: "#F5F9F9", // Very light teal-gray
          elevated: "#FFFFFF", // Pure white for elevated cards
          accent: "#0E3A3D", // Mid-tone teal for dark sections
          "accent-card": "#154C50", // Card background in dark sections
        },
        // Light theme text colors
        text: {
          primary: "#0E3A3D", // Deep teal for headings
          secondary: "#4b5563", // Mid-gray for body text (neutral-600)
          muted: "#6b7280", // Light gray for secondary text (neutral-500)
        },
        // Accent colors for special use
        accent: {
          cream: "#F3EBD8", // Soft cream for warm sections
          teal: {
            50: "#F0F9F9",
            100: "#D9F0F0",
            200: "#B3E1E1",
            300: "#8DD2D2",
            400: "#67C3C3",
            500: "#3FA9A8", // Primary light
            600: "#1E5B60", // Primary
            700: "#154C50", // Primary dark
            800: "#0E3A3D", // Accent background
            900: "#082528",
          },
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
              color: "#004E5A",
              "&:hover": {
                color: "#0A7A8C",
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
        sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        card: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)", // Subtle card elevation
        "card-hover": "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)", // Elevated card on hover
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
