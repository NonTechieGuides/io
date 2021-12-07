import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

export default function BlogList({ posts }) {
  return (
    <>
    <Head>
      <title>Blog</title>
    </Head>
    
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Page header */}
          <div className="max-w-4xl pb-12 md:pb-20 text-center md:text-left">
            <h1 className="text-4xl font-bold uppercase">Tips &amp; tutorials for non-techies:</h1>
            <h2 className="text-xl font-semibold italic text-gray-400">everything you need to know to build fast, compliant, secure websites using the JamStack!</h2>
          </div>

          {/* Section tags ... utilizing CATEGORIES */}
          <div className="border-b border-gray-300 pb-4 mb-12">
            <ul className="flex flex-wrap justify-center md:justify-start font-medium -mx-5 -my-1">
              <li className="mx-5 my-1">
                <a className="text-blue-600" href="#0">All</a>
              </li>
              <li className="mx-5 my-1">
                <a className="text-gray-800 hover:underline" href="#0">Tutorials</a>
              </li>
              <li className="mx-5 my-1">
                <a className="text-gray-800 hover:underline" href="#0">Tips & Tricks</a>
              </li>
              <li className="mx-5 my-1">
                <a className="text-gray-800 hover:underline" href="#0">Free ebooks</a>
              </li>
              <li className="mx-5 my-1">
                <a className="text-gray-800 hover:underline" href="#0">Guides</a>
              </li>
            </ul>
          </div>

          {/* Articles list */}
          <div className="max-w-sm mx-auto md:max-w-none">

            {/* Articles container */}
            <div className="grid gap-12 md:grid-cols-3 md:gap-x-6 md:gap-y-8 items-start border-2 border-green-300">

              {/* article loop */}
              <ul>
                { posts?.length > 0 && posts.map((post) => (
                  <li key={post._id}>
                    <article className="flex flex-col h-full" data-aos="zoom-y-out">
                      <header>
                        <Link href={`/blog/${post.slug.current}`} passHref className="block mb-6">

                          {/* mainImage */}
                          <figure className="relative h-0 pb-9/16 overflow-hidden translate-z-0 rounded">
                            <Image
                              src={urlFor(post.mainImage).url()}
                              alt="{post.title}"
                              width={352}
                              height={198}
                              className="absolute inset-0 w-full h-full object-cover transform scale-105 hover:-translate-y-1 transition duration-700 ease-out"
                            />
                          </figure>
                        </Link>

                        <div className="my-3">
                          <ul className="flex flex-wrap text-xs font-medium -m-1">
                            {/* category */}
                            <li className="m-1">
                              <a className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out" href="#0">{post.category}</a>
                            </li>
                            {/* level */}
                            <li className="m-1">
                              <a className="inline-flex text-center text-gray-800 py-1 px-3 rounded-full bg-blue-100 hover:bg-blue-200 transition duration-150 ease-in-out" href="#0">{post.level}</a>
                            </li>
                            {/* estimated time to read calculation */}
                            <li className="m-1">
                              <span className="inline-flex text-center text-gray-800 py-1 px-3 rounded-full bg-white shadow-sm">4 min read</span>
                            </li>
                          </ul>
                        </div>
                        {/* blog title */}
                        <h3 className="text-xl font-bold leading-snug tracking-tight mb-2">
                          <Link href={`/blog/${post.slug.current}`} className="hover:underline">{post.title}</Link>
                        </h3>
                      </header>
                      {/* blog blurb */}
                      <p className="text-gray-600 flex-grow">{post.blurb}</p>
                      <footer className="text-sm flex items-center mt-4">
                        <div className="flex flex-shrink-0 mr-3">
                          <a className="relative" href="#0">
                            <span className="absolute inset-0 -m-px" aria-hidden="true"><span className="absolute inset-0 -m-px bg-white rounded-full"></span></span>
                            <Image
                              src="/assets/images/news-author-01.jpg"
                              alt="Author 01"
                              width={32}
                              height={32}
                              className="relative rounded-full"
                            />
                          </a>
                          <a className="relative -ml-2" href="#0">
                            <span className="absolute inset-0 -m-px" aria-hidden="true"><span className="absolute inset-0 -m-px bg-white rounded-full"></span></span>
                          </a>
                        </div>
                        <div>
                          <span className="text-gray-600">By </span>
                          <a className="font-medium hover:underline" href="#0">{author.name}</a>
                        </div>
                      </footer>
                    </article>
                  </li>
                ))}
              </ul>

            </div>

          </div>

        </div>
      </div>
    </section>
    </>
  )
}