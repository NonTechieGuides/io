import Header from './header'

const Layout = ({ children }) => {
  return (
    <div className="mx-auto md:max-w-3xl p-4 min-h-screen w-full h-screen">
      <Header />
      { children }
    </div>
  )
}

export default Layout;