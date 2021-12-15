module.exports = {
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media',
  mode: 'jit',
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      base03: '#002b26',
      base02: '#073642',
      base01: '#586e75',
      base00: '#657b83',
      base0: '#839496',
      base1: '#93a1a1',
      base2: '#eee8d5',
      base3: '#fdf6e3',
      yellow: '#b58900',
      orange: '#cb4b16',
      red: '#dc322f',
      magenta: '#d33682',
      violet: '#6c71c4',
      blue: '#268bd2',
      cyan: '#2aa198',
      green: '#859900',
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      mono: ['Fira Code', 'monospace'],
    },
    extend: {
      backgroundImage: {
        'codewall': "url('/assets/x.png')",
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss/forms'),
    require('nightwind')
  ],
}
