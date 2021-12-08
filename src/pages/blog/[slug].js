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
    <section className="relative">

      {/* Background image */}
      <div className="absolute inset-0 w-full h-full object-cover opacity-40 md:opacity-20">
        <Image
          src={urlFor(post.mainImage).url()}
          alt="{post.title}"
          layout="responsive"
          width={1440}
          height={577}
          className="object-cover h-full w-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-gray-900" aria-hidden="true"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="max-w-3xl mx-auto">

            <article>

              {/* Article header */}
              <header className="mb-8">
                {/* Title and excerpt */}
                <div className="text-center md:text-left">
                  <h1 className="h1 font-red-hat-display mb-4" >{post.title}</h1>
                  <p className="text-xl text-gray-600 dark:text-gray-400"><PortableText blocks={post?.body[0]} /></p>
                </div>
                {/* Article meta */}
                <div className="md:flex md:items-center md:justify-between mt-5">
                  {/* Author meta */}
                  <div className="flex items-center justify-center" >
                    <a href="#0">
                      {/* <img className="rounded-full flex-shrink-0 mr-3" src={require('../images/news-author-01.jpg').default} width="32" height="32" alt="Author 04" /> */}
                    </a>
                    <div>
                      <span className="text-gray-600 dark:text-gray-400">By </span>
                      <a className="font-medium text-gray-800 dark:text-gray-300 hover:underline" href="#0">{post.author}</a>
                      <span className="text-gray-600 dark:text-gray-400"> · <Date dateString={post.date} /></span>
                    </div>
                  </div>
                </div>
              </header>
              <hr className="w-5 h-px pt-px bg-gray-400 dark:bg-gray-500 border-0 mb-8"  />

              {/* Article content */}
              <div className="text-lg text-gray-600 dark:text-gray-400" >
                <p className="mb-8">
                  <PortableText blocks={post?.body} />
                </p>
              </div>

              {/* Article footer */}
              <footer>
                {/* Newsletter module */}
                <div className="dark bg-gray-800 py-8 px-8 md:py-12 md:px-12 text-center text-gray-100" >
                  <div className="text-xl font-medium mb-6">Sign up to our newsletter for more articles like this.</div>
                  <form>
                    <div className="relative flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-sm sm:px-4">
                      <input type="email" className="form-input w-full px-4 py-2 mb-2 sm:mb-0 sm:mr-2" placeholder="Your email" aria-label="Your email" />
                      <a className="btn-sm text-white bg-teal-500 hover:bg-teal-400 flex-shrink-0" href="#0">Subscribe</a>
                      <svg className="hidden sm:block absolute left-full -mt-3" width="42" height="44" viewBox="0 0 42 44" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path className="fill-current text-gray-600" d="M6.226 39.073l9.71 2.172-.436 1.951-13.436-3.004-1.735-.388 1.232-1.281 9.545-9.923 1.441 1.387-6.898 7.171 7.737-2.329C25.946 29.254 34.831 17.909 40.043.71l1.914.58c-5.378 17.746-14.651 29.572-27.818 35.393l-.117.043-7.796 2.347z" />
                      </svg>
                    </div>
                    {/* Success message */}
                    {/* <p className="text-sm mt-2 opacity-80">Thanks for subscribing!</p> */}
                    <p className="text-sm text-gray-400 italic mt-3">No spam. No ads. Only great content.</p>
                  </form>
                </div>
              </footer>

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