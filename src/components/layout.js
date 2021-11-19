import Nav from './nav'

const Layout = ({ children }) => {
  return (
    <div className="mx-auto md:max-w-3xl p-4 min-h-screen w-full h-screen">
      <Nav />
      { children }
    </div>
  )
}

export default Layout;