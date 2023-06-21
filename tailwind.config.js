/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        noto: 'var(--font-noto)',
      },
      colors: {
        gray: {
          50: '#eaeaea',
          100: '#bebebf',
          200: '#9e9ea0',
          300: '#727275',
          400: '#56565a',
          500: '#2c2c31',
          600: '#28282d',
          700: '#1f1f23',
          800: '#18181b',
          900: '#121215',
         },
      },
      blur: {
        full: "100px"
      },
      screens: {
        'sm': '320px',
        // => @media (min-width: 640px) { ... }
  
        'md': '640px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '768px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1024px',

        '2xl': '1280px',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
