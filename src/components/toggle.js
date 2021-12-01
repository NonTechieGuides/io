import { useTheme } from 'next-themes'
import nightwind, { toggle } from 'nightwind/helper'
import Logo from '../../public/assets/color-code-logo_simple.png'
import Image from 'next/image'

export default function Toggle(props) {
  const { theme, setTheme } = useTheme()

  const toggle = () => {
    nightwind.beforeTransition()
    if (theme !== 'dark') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  return <button onClick={toggle} className="">
    <div>
      <Image
        alt="Non-Techie Guides"
        src={Logo}
      width={50}
      height={50}
      />
    </div>
  </button>
}