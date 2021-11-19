module.exports = {
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#282c34',
      white: '#abb2bf',
      lightRed: '#e06c75',
      darkRed: '#b35046',
      green: '#98c379',
      lightYellow: '#e5c07b',
      darkYellow: '#d19a66',
      blue: '#61afef',
      magenta: '#c678dd',
      cyan: '#56b6c2',
      gutterGrey: '#4b5263',
      commentGrey: '#5c6370',
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      mono: ['Fira Code', 'monospace'],
    },
    extend: {
      backgroundImage: {
        'codewall': "url('/assets/Code_image_faded.jpg')",
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
