import Toggle from '../components/toggle'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../public/assets/color-code-logo_simple.png'

const Nav = () => {
  return (
    <nav className="mx-auto mb-8 md:mb-16 pb-2 border-b-2 border-magenta">
        <div className="mx-auto text-center w-14">
          <Image
            alt="Non-Techie Guides"
            src={Logo}
            // width={50}
            // height={50}
          />
        </div>
        <h1 className="">
          <Link href="/"><span className="no-underline text-yellow cursor-pointer">Non-Techie&nbsp;Guides</span></Link>
        </h1>
        <p className="mx-auto mt-0 text-center text-cyan italic">git yur nErd on!</p>

        {/* add Toggle component here, if needed */}
        <Toggle />{' '}

      </nav>
  )
}

export default Nav