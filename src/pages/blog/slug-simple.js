import { sanityClient, urlFor, usePreviewSubscription, PortableText } from '../../../lib/sanity'
import groq from 'groq';
import Link from 'next/link'
import Image from 'next/image'
import Date from '../../components/date'

const postQuery = groq`*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  mainImage,
  "date": publishedAt,
  "author": author->name,
  body,
}`

export default function SinglePost({ data }) {
  const { post } = data;

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className=" pb-12  md:pb-20">
          <div className="text-center mb-10">
            <Image
              src={urlFor(post.mainImage).url()}
              alt="{post.title}"
              layout="responsive"
              width={704}
              height={396}
              className="object-cover h-full w-full"
            />
          </div>
          <div className="max-w-3xl mx-auto lg:max-w-none">

            <article>

              {/* Article header */}
              <header className="max-w-3xl mx-auto mb-20">
                {/* Title */}
                <h1 className="h1 mb-4">{post.title}</h1>
                <h2 className="h4 italic text-gray-400"><PortableText blocks={post?.body[0]} /></h2>
              </header>

              {/* Article content */}
              <div className="lg:flex lg:justify-between" data-sticky-container>

                {/* Sidebar */}
                <aside className="relative hidden lg:block w-64 mr-20 flex-shrink-0">
                  <div data-sticky data-margin-top="100" data-sticky-for="768" data-sticky-wrap>
                    <h4 className="text-lg font-bold leading-snug tracking-tight mb-4">Table of contents</h4>
                    <ul className="font-medium -my-1">
                      <li className="py-1">
                        <a className="flex items-center hover:underline" href="#introduction">
                          <svg className="w-4 h-4 fill-current text-gray-400 mr-3 flex-shrink-0" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.3 8.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0zM7.3 14.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0zM.3 9.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0z" />
                          </svg>
                          <span>Introduction</span>
                        </a>
                      </li>
                      <li className="py-1">
                        <a className="flex items-center hover:underline" href="#general">
                          <svg className="w-4 h-4 fill-current text-gray-400 mr-3 flex-shrink-0" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.3 8.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0zM7.3 14.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0zM.3 9.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0z" />
                          </svg>
                          <span>General content</span>
                        </a>
                      </li>
                      <li className="py-1">
                        <a className="flex items-center hover:underline" href="#additional">
                          <svg className="w-4 h-4 fill-current text-gray-400 mr-3 flex-shrink-0" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.3 8.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0zM7.3 14.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0zM.3 9.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0z" />
                          </svg>
                          <span>Additional reading</span>
                        </a>
                      </li>
                      <li className="py-1">
                        <a className="flex items-center hover:underline" href="#conclusion">
                          <svg className="w-4 h-4 fill-current text-gray-400 mr-3 flex-shrink-0" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.3 8.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0zM7.3 14.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0zM.3 9.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0z" />
                          </svg>
                          <span>Conclusion</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </aside>

                {/* Main content */}
                <div>

                  {/* Article meta */}
                  <div className="flex items-center mb-6">
                    <div className="flex flex-shrink-0 mr-3">
                      <a className="relative" href="#0">
                        <span className="absolute inset-0 -m-px" aria-hidden="true"><span className="absolute inset-0 -m-px bg-white rounded-full"></span></span>
                        {/* <Image
                              src={urlFor(post.authorImage).url()}
                              alt="{post.author}"
                              width={32}
                              height={32}
                              className="relative rounded-full"
                            /> */}
                      </a>
                    </div>
                    <div>
                      <span className="text-gray-600">By </span>
                      <a className="text-gray-600 hover:underline" href="#0">{post.author}</a>
                      <span className="text-gray-600"> · <Date dateString={post.date} /></span>
                    </div>
                  </div>
                  <hr className="w-16 h-px pt-px bg-gray-200 border-0 mb-6" />

                  {/* Article body */}
                  <div className="text-lg text-gray-600">
                    {/* <p id="introduction" className="mb-8" style={{ scrollMarginTop: '100px' }}>
                      <PortableText blocks={post?.body[0]} />
                    </p> */}
                    <p className="mb-8 blocks">
                      <PortableText blocks={post?.body} />
                    </p>

                    <div>
                      <hr className="w-full h-px pt-px mt-8 bg-gray-200 border-0" />
                      <div className="mt-8">
                        Interested in more tips like this? Check out <a className="text-gray-900 underline" href="#0">Introducing the Testing Field Guide</a>.
                      </div>
                      <div className="mt-6">
                        <Link href="/blog" className="inline-flex items-center text-base text-blue-600 font-medium hover:underline">
                          <span>Back to the blog</span>
                        </Link>
                      </div>
                    </div>
                  </div>

                </div>

              </div>

              {/* Article footer */}
            </article>

          </div>

        </div>
      </div>
    </section>
  );
}

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(
    `*[_type == "post" && defined(slug.current)]{
      "params": {
        "slug": slug.current,
      }
    }`
  );
  return {
    paths,
    fallback: true
  }
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const post = await sanityClient.fetch(postQuery, { slug })
  return {
    props: {
      data: { post }
    }
  };
}