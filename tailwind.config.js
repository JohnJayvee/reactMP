/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit', // Just-In-Time compiler mode for Tailwind CSS
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Purge unused styles in production
  ],
  darkMode: true, // or 'media' or 'class'
  theme: {
    extend: {}, // Extend Tailwind's default theme
  },
  variants: {
    extend: {}, // Extend or override Tailwind's default variants
  },
  plugins: [
    // Additional Tailwind plugins if needed
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
    // require('@tailwindcss/aspect-ratio'),

  ],
};
