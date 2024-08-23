/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/components/**/*.vue",
    "./src/**/*.vue",
    "./src/App.vue",
    "./index.html"
  ],
  theme: {
    extend: {
      colors: {
        'bg': 'hsl(185, 41%, 84%)',
        'components-bg': "hsl(183, 100%, 15%)",
        'inner-text': 'hsl(172, 67%, 45%)',
        'grayish': 'hsl(184, 14%, 56%)',
        'd-grayish': 'hsl(186, 14%, 43%)',
        'vl-cyan': 'hsl(189, 41%, 97%)'
      },
      fontSize:{
        'inputs': '24px'
      },
      fontFamily: {
        'space': 'SpaceMono'
      }
    },
  },
  plugins: [],
}

