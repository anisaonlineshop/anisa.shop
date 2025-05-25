/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6B7280',     // Cool Gray for text
        accent: '#A78BFA',      // Soft Lavender for CTA buttons
        background: '#F9FAFB',  // Light grayish-white background
        highlight: '#FBBF24',   // Gold for highlights and hover
      },
    },
  },
  plugins: [],
}