import Link from 'next/link'
import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import client from '../../client'

function urlFor (source) {
  return imageUrlBuilder(client).image(source)
}

const Blog = (props) => {
    const { posts = [] } = props
    return (
      <>
        <div id="bloglist" className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
            {posts.map(
            ({
              _id,
              title = "",
              slug = "",
              _createdAt = "",
              blurb = "",
              mainImage = "",
              categories = "",
            }) =>
              slug && (
                <li className="list-none mb-8" key={_id}>
                  {mainImage && (
                    <div>
                      <img src={urlFor(mainImage).width(600).url()} />
                    </div>
                  )}
              <div className="p-5 border border-t-0">
                <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                <p className="text-gray-500 italics list-none text-sm">
              CATEGORY &rarr; XXXX
            </p>
                  <span className="text-gray-600 italic ">— {new Date(_createdAt).toDateString()}</span>
                </p>
                <Link href="/blog/[slug]" as={`/blog/${slug.current}`}>
                    <a className="font-semibold">{title}</a>
                  </Link>{" "}
                <p className="mt-4 mb-2 text-gray-700">
                  {blurb}
                </p>
                <Link href="/blog/[slug]" as={`/blog/${slug.current}`}>
                    <a>Read &hellip;</a>
                  </Link>{" "}  
                  </div>
                </li>
                
              )
          )}
              
            </div>
          </div>
    
    </>
    )
}

Blog.getInitialProps = async () => ({
    posts: await client.fetch(groq`
    *[_type == "post"]
    `)
})

export default Blog