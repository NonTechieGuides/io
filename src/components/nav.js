import Toggle from '../components/toggle'

const Nav = () => {
  return (
    <nav className=" mx-auto mb-8 md:mb-16 pb-2 border-b-2 border-magenta">
        <img
          className="mx-auto w-14"
          alt="Non-Techie Guides"
          src="/assets/color-code-logo_simple.png"
        />
        <h1 className="">
          <a href="/" className="no-underline text-yellow">Non-Techie&nbsp;Guides</a>
        </h1>
        <p className="mx-auto mt-0 text-center text-cyan italic">git yur nErd on!</p>

        {/* add Toggle component here, if needed */}
        <Toggle />

      </nav>
  )
}

export default Nav

{/!/}