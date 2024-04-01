import type { Config } from 'tailwindcss'

const config = {
  darkMode: ['class'],
  content: [
    './components/**/*.{ts,tsx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './common/**/*.{js,ts,jsx,tsx,mdx}',
    './modules/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        darkText: '#E4E6EB',
        dark: '#121212',
        light: '#fafafa'
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        },
        slide: {
          '0%': { transform: 'translateX(0)' },
          '20%': { transform: 'translateX(-100%)' },
          '50%': { transform: 'translateX(-100%)' },
          '90%': { transform: 'translateX(5%)' },
          '100%': { transform: 'translateX(0)' }
        },
        slideInfinite: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-300%)' }
        },
        rainArrow: {
          '0%': { transform: 'translateY(-10%)' },
          '50%': { transform: 'translateY(10%)' },
          '100%': { transform: 'translateY(-10%)' }
        },
        enterLeft: {
          '0%': { transform: 'translateX(100px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' }
        },
        rightInfinite: {
          '0%': { transform: 'translateX(-150px)' },
          '100%': { transform: 'translateX(150px)' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'slide-card': 'slide 3s 3s ease-in-out',
        'slide-infinite': 'slideInfinite 100s linear infinite',
        'rain-arrow': 'rainArrow 1s ease-out infinite',
        'enter-left': 'enterLeft 0.5s ease-in-out',
        'right-infinite': 'rightInfinite 2s linear infinite'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      fontFamily: {
        'roboto-condensed': ['var(--robotoCondensed-fon)']
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
} satisfies Config

export default config
