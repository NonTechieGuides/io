import { useTheme } from 'next-themes'
import nightwind, { toggle } from 'nightwind/helper'

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

  return <button onClick={toggle}>Toggle</button>
}