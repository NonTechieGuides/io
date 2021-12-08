import '../styles/style.scss'
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
      <div className="flex flex-col min-h-screen overflow-hidden container mx-auto">

        <Header />
        <main  className="flex-grow">
        <Component {...pageProps} />
        {/* </ThemeProvider> */}
        </main>
        <Footer />
      </div>
    </>
  )
}

export default MyApp
