/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontSize: {
      ultraSm: '10px',
      sm: '12px',
      md: '14px',
      base: '16px',
      lg: '18px',
      xl: '20px',
    },
    borderRadius: {
      none: '0px',
      sm: '2px',
      md: '4px',
      lg: '8px',
    },
    extend: {},
  },
  plugins: [],
};
