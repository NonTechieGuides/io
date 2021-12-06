import Footer from '../../components/footer'
import BlogList from '../../components/bloglist'

const Blog = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen overflow-hidden container mx-auto">

        {/* page content */}
        <main className="flex-grow">

          {/* page sections */}
          <BlogList />
          {/* NEWSLETTER */}

        </main>

      </div>
    </>
  )
}

export default Blog