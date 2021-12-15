import React, { useState, useRef, useEffect } from 'react'
import Transition from '../utils/Transition'
import Dropdown from '../utils/Dropdown'
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
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Site branding */}
          <div className="flex-shrink-0 mr-4">
            {/* Logo */}
            <Link href="/" className="block" aria-label="Cruip">
              <svg className="w-8 h-8" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <radialGradient cx="21.152%" cy="86.063%" fx="21.152%" fy="86.063%" r="79.941%" id="header-logo">
                    <stop stopColor="#4FD1C5" offset="0%" />
                    <stop stopColor="#81E6D9" offset="25.871%" />
                    <stop stopColor="#338CF5" offset="100%" />
                  </radialGradient>
                </defs>
                <rect width="32" height="32" rx="16" fill="url(#header-logo)" fillRule="nonzero" />
              </svg>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:flex-grow">

            {/* Desktop menu links */}
            <ul className="flex flex-grow justify-end flex-wrap items-center">
              <li>
                <Link href="/"><a className=" hover:underline px-3 lg:px-5 py-2 flex items-center transtion duration-150 ease-in-out focus:outline-none text-violet dark:text-base2">Home</a></Link>
              </li>
              <li>
                <Link href="/"><a className=" hover:underline px-3 lg:px-5 py-2 flex items-center transtion duration-150 ease-in-out focus:outline-none">About</a></Link>
              </li>
              <li>
                <Link href="/blog"><a className=" hover:underline px-3 lg:px-5 py-2 flex items-center transtion duration-150 ease-in-out focus:outline-none">Blog</a></Link>
              </li>
              <li>
                <Link href="/faq"><a className=" hover:underline px-3 lg:px-5 py-2 flex items-center transtion duration-150 ease-in-out focus:outline-none">FAQ</a></Link>
              </li>
              <li>
                <Link href="/"><a className=" hover:underline px-3 lg:px-5 py-2 flex items-center transtion duration-150 ease-in-out focus:outline-none">Contact</a></Link>
              </li>
            </ul>

            {/* CTA & darkmode toggle */}
            <div className="flex flex-grow justify-end flex-wrap items-center">
            {/* <div className=" hover:underline px-3 md:pl-24 py-2 flex items-center transtion duration-150 ease-in-out focus:outline-none"><Toggle /></div> */}
              <Link href="/get-the-book">
                <a className="btn-sm text-white dark:text-black bg-black dark:bg-white ml-3 py-2 px-4 rounded-lg uppercase font-bold focus:outline-none">Get the Book</a>
              </Link>
            </div>
          </nav>

          {/* Mobile menu */}
          <div className="flex md:hidden">

            {/* <div className=" hover:underline px-3 lg:px-5 py-2 flex items-center transtion duration-150 ease-in-out focus:outline-none"><Toggle /></div> */}

            {/* Hamburger button */}
            <button
              ref={trigger}
              className={`hamburger ${mobileNavOpen && 'active'}`}
              aria-controls="mobile-nav"
              aria-expanded={mobileNavOpen}
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
            >
              <span className="sr-only">Menu</span>
              <svg className="w-6 h-6 fill-current text-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
                className="absolute top-full h-screen pb-16 z-20 left-0 w-full overflow-scroll bg-white"
                enter="transition ease-out duration-200 transform"
                enterStart="opacity-0 -translate-y-2"
                enterEnd="opacity-100 translate-y-0"
                leave="transition ease-out duration-200"
                leaveStart="opacity-100"
                leaveEnd="opacity-0"
              >
                <ul className="ml-8 px-5 py-2">
                  <li>
                    <Link href="/"><a className="flex  hover:underline my-4 py-2">Home</a></Link>
                  </li>
                  <li>
                    <Link href="/about"><a className="flex  hover:underline my-4 py-2">About</a></Link>
                  </li>
                  <li>
                    <Link href="/blog"><a className="flex  hover:underline my-4 py-2">Blog</a></Link>
                  </li>
                  <li>
                    <Link href="/faq"><a className="flex  hover:underline my-4 py-2">FAQ</a></Link>
                  </li>
                  <li>
                    <Link href="/contact"><a className="flex  hover:underline mt-4 mb-8 py-2">Contact</a></Link>
                  </li>

                  <li>
                    <Link href="/get-the-book"><a className="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 w-full py-2 px-4 rounded-md uppercase">
                      Get the Book</a>
                    </Link>
                  </li>
                </ul>
              </Transition>
            </div>

          </div>

        </div>
      </div>
    </header>
  );
}

export default Header;
