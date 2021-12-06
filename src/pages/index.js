import Header from '../components/header'
import HeroHome from '../components/herohome'
import Footer from '../components/footer'

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <HeroHome />
        {/* <FeaturesHome />
        <FeaturesBlocks />
        <FeaturesWorld />
        <News />
        <Cta /> */}

      </main>

    </div>
  )
}

export default Home