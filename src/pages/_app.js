import Link from 'next/link'
import '../styles/tailwind.css'
import { ThemeProvider } from 'next-themes'
import Header from '../components/header'
import Footer from '../components/footer'

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <ThemeProvider
        attribute='class'
        storageKey='nightwind-mode'
        defaultTheme='dark'
      > */}
      <Header />
        <Component {...pageProps} />
      {/* </ThemeProvider> */}
      <Footer />
    </>
  )
}

export default MyApp
