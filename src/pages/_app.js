import '../styles/style.scss'
import Header from '../components/header'
import Footer from '../components/footer'
import React, { useState, useRef, useEffect } from 'react'
import AOS from 'aos'
import Sticky from 'sticky-js'
// import { focusHandling } from 'cruip-js-toolkit'

function MyApp({ Component, pageProps }) {

  // const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    });
    // eslint-disable-next-line no-unused-vars
    const sticky = new Sticky('[data-sticky]');
  });

  // useEffect(() => {
  //   document.querySelector('html').style.scrollBehavior = 'auto'
  //   window.scroll({ top: 0 })
  //   document.querySelector('html').style.scrollBehavior = ''
  //   focusHandling('outline');
  // }, [location.pathname]); // triggered on route change

  return (
        <div className="flex flex-col min-h-screen overflow-hidden mx-auto">
          <Header />
          <main className="flex-grow">
            <Component {...pageProps} />
          </main>
          <Footer />
        </div>
  )
}

export default MyApp
