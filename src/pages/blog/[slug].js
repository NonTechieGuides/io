import { sanityClient, urlFor, usePreviewSubscription, PortableText } from '../../../lib/sanity'
import groq from 'groq';
import Link from 'next/link'
import Image from 'next/image'
import Date from '../../components/date'

const postQuery = `*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  subtitle,
  slug,
  mainImage,
  "date": publishedAt,
  "author": author->name,
  body,
  "category": categories[0]->title,
  "tag": tags[0]->title,
  excerpt,
}`

const h2sQuery = `*[_type == "post"]{
  _key,
  "h2s": body[style == "h2"].children[0].text
}`

export default function SinglePost({ data }) {

  const { post, h2s } = data;

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="max-w-3xl mx-auto lg:max-w-none">

            <article>

              {/* Article header */}
              <header className="max-w-3xl mx-auto mb-10">
                {/* Article meta */}
                <div className="flex items-center mb-6">
                  <div className="mx-auto border-t border-violet border-b">
                    <span className="text-violet">In </span>
                    <a className="font-black hover:underline text-orange" href="#0">{post.category}</a>
                    <span className="text-yellow"> · <Date dateString={post.date} /></span>
                  </div>
                </div>

                {/* Title */}
                <h1 className="h1 text-center mb-4 text-cyan">{post.title}</h1>
                <h2 className="mb-12 text-xl text-center w-4/6 mx-auto italic text-green">{post.subtitle}</h2>
                <Image
                src={urlFor(post.mainImage).url()}
                alt="{post.title}"
                layout="responsive"
                width={1440}
                height={577}
                className="object-cover h-full w-full"
              />
              </header>

              {/* Article content */}
              <div className="article-content lg:flex lg:justify-between" data-sticky-container>

                {/* Sidebar
                <aside className="relative hidden lg:block w-64 mr-20 flex-shrink-0">
                  <div data-sticky data-margin-top="100" data-sticky-for="768" data-sticky-wrap>
                    <h4 className="text-lg font-bold leading-snug tracking-tight my-4">Table of contents</h4>
                    <ul className="font-medium -my-1">
                      {h2s?.length > 0 && h2s.map((h2) => (
                        <li key={h2._key} className="py-1">
                          <a className="flex items-center hover:underline" href="#">
                          <svg className="w-4 h-4 fill-current text-gray-400 mr-3 flex-shrink-0" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.3 8.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0zM7.3 14.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0zM.3 9.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0z" />
                          </svg>
                          <span>1. {h2.text}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </aside> */}

                {/* Main content */}
                <div className="max-w-prose mx-auto"> {/* remove max-w-prose mx-auto when sidebar is added back */}


                  <hr className="w-1/2 h-px pt-px bg-gray-300 border-0 mb-6" />

                  {/* Article body */}
                  <div className="text-lg" >
                    <p className="mb-8 mt-24">
                      <PortableText blocks={post?.body} />
                    </p>
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
    fallback: 'blocking',
  }
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const post = await sanityClient.fetch(postQuery, { slug });
  const h2s = await sanityClient.fetch(h2sQuery);
  return {
    props: {
      data: {
        post,
        h2s,
      }
    }
  };
}