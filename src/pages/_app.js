import '../styles/tailwind.css'
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider
      attribute='class'
      storageKey='nightwind-mode'
      defaultTheme='system'
    >
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
