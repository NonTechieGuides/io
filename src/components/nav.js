import Toggle from '../components/toggle'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../public/assets/color-code-logo_simple.png'

const Nav = () => {
  return (
    <nav className="md:container md:mx-auto p-4 text-center font-bold text-xl text-magenta">
      <div>
        <Link href="/">
          <a>Home</a>
        </Link>{" "}
        <Link href="/about">
          <a>About</a>
        </Link>{" "}
        <Link href="/blog">
          <a>Blog</a>
        </Link>{" "}
        <Link href="/book">
          <a>Buy the Book</a>
        </Link>{" "}
        <Link href="/contact">
          <a>Contact</a>
        </Link>{" "}
      </div>
    </nav>
  )
}

export default Nav