import React, { useState, useRef, useEffect } from 'react'
import Transition from '../utils/Transition'
import Link from 'next/link'

const Header = () => {

  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [top, setTop] = useState(true);

  const trigger = useRef(null);
  const mobileNav = useRef(null);

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!mobileNav.current || !trigger.current) return;
      if (!mobileNavOpen || mobileNav.current.contains(target) || trigger.current.contains(target)) return;
      setMobileNavOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  // detect whether user has scrolled the page down by 10px 
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true)
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);

  return (
    <>
      <header className="mb-6 w-full z-30 md:border-b-2 md:border-gray-400 md:bg-opacity-90 transition duration-300 ease-in-out ${!top $$ 'bg-white blur shadow-lg'}"> {/* removed "fixed" from header until I can fix it! */}
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* site branding */}
            <div className="flex-shrink-0 mr-4">
              <Link href="/" className="block" aria-label="Non-Techie Guides">
                <a>NTG LOGO</a>
              </Link>
            </div>

            {/* desktop nav */}
            <nav className="hidden md:flex md:flex-row md:flex-grow">
              <ul className="flex flex-grow justify-end flex-wrap items-center">
                <li>
                  <Link href="/"><a className="text-gray-600 hover:text-gray-900 hover:underline px-3 lg:px-5 py-2 flex items-center transtion duration-150 ease-in-out">Home</a></Link>
                </li>
                <li>
                  <Link href="/"><a className="text-gray-600 hover:text-gray-900 hover:underline px-3 lg:px-5 py-2 flex items-center transtion duration-150 ease-in-out">About</a></Link>
                </li>
                <li>
                  <Link href="/blog"><a className="text-gray-600 hover:text-gray-900 hover:underline px-3 lg:px-5 py-2 flex items-center transtion duration-150 ease-in-out">Blog</a></Link>
                </li>
                <li>
                  <Link href="/faq"><a className="text-gray-600 hover:text-gray-900 hover:underline px-3 lg:px-5 py-2 flex items-center transtion duration-150 ease-in-out">FAQ</a></Link>
                </li>
                <li>
                  <Link href="/"><a className="text-gray-600 hover:text-gray-900 hover:underline px-3 lg:px-5 py-2 flex items-center transtion duration-150 ease-in-out">Contact</a></Link>
                </li>
              </ul>

              {/* Desktop sign in links */}
              <div className="flex flex-grow justify-end flex-wrap items-center">
                <Link href="/signup">
                  <a className="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 ml-3 py-2 px-4 rounded-lg uppercase font-bold">Get the Book</a>
                </Link>
              </div>
            </nav>

            {/* mobile nav */}
            <div className="flex md:hidden">

              {/* Hamburger button */}
              <button
                ref={trigger}
                className={`hamburger ${mobileNavOpen && 'active'}`}
                aria-controls="mobile-nav"
                aria-expanded={mobileNavOpen}
                onClick={() => setMobileNavOpen(!mobileNavOpen)}
              >
                <span className="sr-only">Menu</span>
                <svg className="w-6 h-6 fill-current text-gray-900" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <rect y="4" width="24" height="2" />
                  <rect y="11" width="24" height="2" />
                  <rect y="18" width="24" height="2" />
                </svg>
              </button>

              {/*Mobile navigation */}
              <div ref={mobileNav}>
                <Transition
                  show={mobileNavOpen}
                  tag="nav"
                  id="mobile-nav"
                  className="absolute top h-screen pb-16 z-20 left-0 w-full overflow-scroll bg-white text-3xl"
                  enter="transition ease-out duration-200 transform"
                  enterStart="opacity-0 -translate-y-2"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-out duration-200"
                  leaveStart="opacity-100"
                  leaveEnd="opacity-0"
                >
                  <ul className="ml-8 px-5 py-2">
                    <li>
                      <Link href="/"><a className="flex text-gray-600 hover:text-gray-900 my-4 py-2">Home</a></Link>
                    </li>
                    <li>
                      <Link href="/about"><a className="flex text-gray-600 hover:text-gray-900 my-4 py-2">About</a></Link>
                    </li>
                    <li>
                      <Link href="/blog"><a className="flex text-gray-600 hover:text-gray-900 my-4 py-2">Blog</a></Link>
                    </li>
                    <li>
                      <Link href="/faq"><a className="flex text-gray-600 hover:text-gray-900 my-4 py-2">FAQ</a></Link>
                    </li>
                    <li>
                      <Link href="/contact"><a className="flex text-gray-600 hover:text-gray-900 mt-4 mb-8 py-2">Contact</a></Link>
                    </li>
                    
                    <li>
                      <Link href="/get-the-book"><a className="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 w-full py-2 px-4 rounded-md uppercase">
                        Get the Book</a>
                      </Link>
                    </li>
                  </ul>
                </Transition>
              </div>

            </div>          </div>
        </div>
      </header>
    </>
  )
}

export default Header