/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            fontFamily: {
  sans: [
    'Inter',
    {
      fontFeatureSettings: '"cv05", "cv06", "cv08"', // Optional: For nicer looking numbers and characters
    },
    'sans-serif',
  ],
  serif: ['Playfair Display', 'serif'],
},
            colors: { 
                'brand-primary': '#2d332a', 
                'brand-secondary': '#f8f7f5', 
                'brand-accent': '#b9a284', 
                'brand-text': '#1c1c1c', 
            }
        },
    },
    plugins: [],
}