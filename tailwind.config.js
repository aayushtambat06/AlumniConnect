/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        border: 'var(--color-border)', /* gray-200 */
        input: 'var(--color-input)', /* white */
        ring: 'var(--color-ring)', /* deep-blue-900 */
        background: 'var(--color-background)', /* white */
        foreground: 'var(--color-foreground)', /* gray-900 */
        primary: {
          DEFAULT: 'var(--color-primary)', /* deep-blue-900 */
          foreground: 'var(--color-primary-foreground)' /* white */
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)', /* brown-700 */
          foreground: 'var(--color-secondary-foreground)' /* white */
        },
        accent: {
          DEFAULT: 'var(--color-accent)', /* gold-400 */
          foreground: 'var(--color-accent-foreground)' /* gray-900 */
        },
        destructive: {
          DEFAULT: 'var(--color-destructive)', /* red-600 */
          foreground: 'var(--color-destructive-foreground)' /* white */
        },
        muted: {
          DEFAULT: 'var(--color-muted)', /* gray-50 */
          foreground: 'var(--color-muted-foreground)' /* gray-500 */
        },
        card: {
          DEFAULT: 'var(--color-card)', /* gray-50 */
          foreground: 'var(--color-card-foreground)' /* gray-900 */
        },
        popover: {
          DEFAULT: 'var(--color-popover)', /* white */
          foreground: 'var(--color-popover-foreground)' /* gray-900 */
        },
        success: {
          DEFAULT: 'var(--color-success)', /* emerald-600 */
          foreground: 'var(--color-success-foreground)' /* white */
        },
        warning: {
          DEFAULT: 'var(--color-warning)', /* amber-600 */
          foreground: 'var(--color-warning-foreground)' /* white */
        },
        error: {
          DEFAULT: 'var(--color-error)', /* red-600 */
          foreground: 'var(--color-error-foreground)' /* white */
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        accent: ['Playfair Display', 'serif']
      },
      fontSize: {
        'hero': ['3rem', { lineHeight: '1.1', fontWeight: '700' }],
        'display': ['2.5rem', { lineHeight: '1.2', fontWeight: '600' }],
        'heading': ['2rem', { lineHeight: '1.3', fontWeight: '600' }],
        'subheading': ['1.5rem', { lineHeight: '1.4', fontWeight: '500' }],
        'body': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
        'caption': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }]
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem'
      },
      borderRadius: {
        'academic': '8px'
      },
      boxShadow: {
        'academic': '0 4px 12px rgba(0, 0, 0, 0.1)',
        'academic-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        'academic-soft': '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
      },
      animation: {
        'pulse-connection': 'pulse-connection 3s infinite',
        'achievement-glow': 'achievement-glow 2.5s ease-in-out infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        }
      },
      transitionTimingFunction: {
        'academic': 'cubic-bezier(0.4, 0, 0.2, 1)'
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwindcss-animate')
  ]
}