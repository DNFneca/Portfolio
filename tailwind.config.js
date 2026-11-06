/**
 * Every color / font / radius below points at a CSS variable defined in src/styles.css.
 * Colors are stored as space-separated RGB channels so Tailwind's opacity
 * modifiers keep working (e.g. `bg-primary/20`, `border-border/50`).
 *
 * To re-theme the whole site, edit the variables in src/styles.css only.
 */
const color = (name) => `rgb(var(--color-${name}) / <alpha-value>)`;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        background: color('background'),
        surface: color('surface'),
        border: color('border'),
        foreground: color('foreground'),
        muted: color('muted'),
        primary: color('primary'),
        'primary-foreground': color('primary-foreground'),
        accent: color('accent'),
      },
      fontFamily: {
        sans: 'var(--font-sans)',
        mono: 'var(--font-mono)',
      },
      borderRadius: {
        theme: 'var(--radius)',
      },
      maxWidth: {
        content: 'var(--content-width)',
      },
    },
  },
  plugins: [],
};
