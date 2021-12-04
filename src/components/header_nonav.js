import Toggle from '../components/toggle'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../public/assets/color-code-logo_simple.png'
import Nav from './nav'

const HeaderNoNav = () => {
  return (
    <header className="mx-auto mb-8 md:mb-16 pb-2 border-b-2 border-magenta">
      <div className="mx-auto text-center w-14"><Toggle /></div>
      <h1 className="">
        <Link href="/" passHref><span className="no-underline text-yellow cursor-pointer">Non-Techie&nbsp;Guides</span></Link>
      </h1>
      <p className="mx-auto mt-0 text-center text-cyan italic">git yur nErd on!</p>
    </header>
  )
}

export default HeaderNoNav