/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['DM Sans', '-apple-system', 'sans-serif'],
        accent: ['Space Grotesk', 'sans-serif'],
      },
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
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
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
        // Urban Glasses Custom Colors
        ug: {
          red: '#e8193c',
          red2: '#ff2d55',
          cyan: '#00d4e8',
          wa: '#25D366',
          gold: '#c9a84c',
          ink: '#070709',
          ink2: '#0e0e12',
          ink3: '#141418',
          ink4: '#1c1c22',
        },
        // V2 Design System Tokens
        'bg-base': 'var(--bg-base)',
        'bg-surface': 'var(--bg-surface)',
        'bg-elevated': 'var(--bg-elevated)',
        'bg-overlay': 'var(--bg-overlay)',
        'neon-pink': 'var(--neon-pink)',
        'neon-pink-dim': 'var(--neon-pink-dim)',
        'neon-teal': 'var(--neon-teal)',
        'neon-teal-dim': 'var(--neon-teal-dim)',
        'metal-silver': 'var(--metal-silver)',
        'metal-chrome': 'var(--metal-chrome)',
        'metal-dark': 'var(--metal-dark)',
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'text-muted': 'var(--text-muted)',
        'text-inverse': 'var(--text-inverse)',
        success: 'var(--success)',
        warning: 'var(--warning)',
        error: 'var(--error)',
        info: 'var(--info)',
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xs: "calc(var(--radius) - 6px)",
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        'red': '0 8px 32px rgba(232,25,60,0.28)',
        'cyan': '0 8px 32px rgba(0,212,232,0.22)',
        'wa': '0 8px 32px rgba(37,211,102,0.28)',
        'neon-pink': 'var(--neon-pink-glow)',
        'neon-teal': 'var(--neon-teal-glow)',
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
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
        "ug-tick": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "ug-zoom": {
          from: { transform: "scale(1.08)" },
          to: { transform: "scale(1)" },
        },
        "ug-blink": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.15" },
        },
        "ug-spulse": {
          "0%": { transform: "scaleY(0)", transformOrigin: "top", opacity: "0" },
          "25%": { transform: "scaleY(1)", transformOrigin: "top", opacity: "1" },
          "75%": { transform: "scaleY(1)", transformOrigin: "bottom", opacity: "1" },
          "100%": { transform: "scaleY(0)", transformOrigin: "bottom", opacity: "0" },
        },
        "ug-gs": {
          from: { backgroundPosition: "0% 50%" },
          to: { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
        "ug-tick": "ug-tick 40s linear infinite",
        "ug-zoom": "ug-zoom 30s ease-out both",
        "ug-blink": "ug-blink 2s ease-in-out infinite",
        "ug-spulse": "ug-spulse 2s ease-in-out infinite",
        "ug-gs": "ug-gs 7s ease infinite alternate",
      },
      transitionTimingFunction: {
        'ug': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'ug-slow': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
