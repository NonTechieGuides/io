import Head from "next/head";
import Link from "next/link";
import Image from 'next/image'
import { sanityClient, urlFor, PortableText } from "../../../lib/sanity";

const postsQuery = `*[_type == "post"]{
  _id,
  title,
  slug,
  mainImage,
  "author": author->name,
  "authorImage": author->image,
  "category": categories[0]->title,
  "tag": tags[0]->title,
  excerpt,
}`;

const catsQuery = `*[_type == "category"]{
  _id,
  title,
}`;

export default function Home({ posts, cats }) {
  return (
    <>
      <Head>
        <title>Blog</title>
        <meta name="description" content="Tips &amp; tutorials for non-techies: everything you need to know to build fast, compliant, secure websites using the JamStack!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="relative bg-base02">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">

            {/* Page header */}
            <div className="max-w-4xl pb-12 md:pb-20 text-center md:text-left">
              <h1 className="text-4xl font-bold uppercase text-blue-200 dark:text-red-500">Tips &amp; tutorials for non-techies:</h1>
              <h2 className="text-xl font-semibold italic text-gray-400">everything you need to know to build fast, compliant, secure websites using the JamStack!</h2>
            </div>

            {/* Section tags ... utilizing CATEGORIES; HOW TO SORT BY CATEGORY WHEN CLICKED???? */}
            <div className="border-b border-gray-300 pb-4 mb-12">
              <ul className="flex flex-wrap justify-center md:justify-start font-medium -mx-5 -my-1">
                <li className="mx-5 my-1">
                  <a className="text-blue-600 hover:text-gray-100 py-1 px-3 rounded-full hover:bg-blue-600 transition duration-150 ease-in-out focus:outline-none cursor-pointer" href="#0">All</a>
                </li>
                {cats?.length > 0 && cats.map((category) => (
                  <li key={category._id} className="mx-5 my-1">
                    <a className="text-gray-800 hover:text-gray-100 py-1 px-3 rounded-full hover:bg-blue-600 transition duration-150 ease-in-out focus:outline-none cursor-pointer" href="#0">{category.title}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Articles list */}
            <div className="max-w-sm mx-auto md:max-w-none">

              {/* Articles container */}
              {/* article loop */}
              <ul className="grid gap-12 md:grid-cols-3 md:gap-x-6 md:gap-y-8 items-start">
                {posts?.length > 0 && posts.map((post) => (
                  <li key={post._id} className="flex flex-col h-full"> {/* data-aos="zoom-y-out" */}
                    <article>
                      <header>
                        <Link href={`/blog/${post.slug.current}`} passHref className="block mb-6">

                          {/* mainImage */}
                          <figure className="relative h-0 pb-9/16 overflow-hidden translate-z-0 rounded">
                            <Image
                              src={urlFor(post.mainImage).url()}
                              alt="{post.title}"
                              width={352}
                              height={198}
                              className="absolute inset-0 w-full h-full object-cover transform scale-105 hover:-translate-y-1 transition duration-700 ease-out cursor-pointer"
                            />
                          </figure>
                        </Link>

                        <div className="my-3">
                          <ul className="flex flex-wrap text-xs font-medium -m-1">
                            {/* category */}
                            <li className="m-1">
                              {/* NOTE: figure out how to show all categories, if more than 1; change the [0], above, to [] */}
                              <span className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out uppercase cursor-pointer">{post.category}</span>{' '}
                            </li>
                            {/* tag */}
                            <li className="m-1">
                              <span className="inline-flex text-center text-gray-800 py-1 px-3 rounded-full bg-blue-100 hover:bg-blue-200 transition duration-150 ease-in-out cursor-pointer" href="#">
                                {post.tag}
                              </span>
                            </li>
                            {/* estimated time to read calculation */}
                            <li className="m-1">
                              <span className="inline-flex text-center text-gray-800 py-1 px-3 rounded-full bg-white shadow-sm cursor-pointer">4 min read</span>
                            </li>
                          </ul>
                        </div>
                        {/* blog title */}
                        <h3 className="text-xl font-bold leading-snug tracking-tight mb-2">
                          <Link href={`/blog/${post.slug.current}`} className="hover:underline">{post.title}</Link>
                        </h3>
                      </header>
                      <main className="text-sm flex items-center mt-4">
                        <div className="flex flex-shrink-0 mr-3">
                          <a className="relative" href="#0">
                            <span className="absolute inset-0 -m-px" aria-hidden="true"><span className="absolute inset-0 -m-px bg-white rounded-full"></span></span>
                            <Image
                              src={urlFor(post.authorImage).url()}
                              alt="{post.author}"
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
                          <span className="font-medium hover:underline">{post.author}</span>
                        </div>
                      </main>
                      <footer>
                        {/* blog excerpt */}
                        <p className="text-gray-600 flex-grow text-justify md:text-left md:w-4/5 mt-3">{post.excerpt}</p>

                      </footer>
                    </article>
                  </li>
                ))}
              </ul>


            </div>

          </div>
        </div>
      </section>

    </>
  );
}

export async function getStaticProps() {
  const posts = await sanityClient.fetch(postsQuery);
  const cats = await sanityClient.fetch(catsQuery);

  return {
    props: {
      posts,
      cats,
    }
  }
}