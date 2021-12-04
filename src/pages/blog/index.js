import Head from 'next/head'
import Link from 'next/link'
import { sanityClient, urlFor, PortableText } from '../../../../lib/sanity'
import Layout from '../../components/layout'

const postsQuery = `*[_type == 'post']{
  _id,
  title,
  slug,
  mainImage,
  author
}`;

export default function Blog({ posts }) {

  return (
    <Layout>
      <Head>
        <title>Blog</title>
        <meta name="description" content="blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="mb-20">The blog &hellip;</h1>

      <ul className="grid grid-cols-3 gap-10 p0">
        { posts?.length > 0 && posts.map((post) => (
        <li key={post._id}>
          <Link href={`/blog/${post.slug.current}`} className="no-underline border-0">
            <a className="block h-full text-xl">
              <img src={urlFor(post.mainImage).url()} className="block h-48 w-48 object-cover mx-auto  mb-3 border" />
              <span className="mx-auto text-center block">{post.title}</span>
            </a>
          </Link>
        </li>
        ))}
      </ul>

    </Layout>
  )
}

export async function getStaticProps() {
  const posts = await sanityClient.fetch(postsQuery);
  return { props: { posts } };
}