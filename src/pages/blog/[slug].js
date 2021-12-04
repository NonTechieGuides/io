import { sanityClient, urlFor, usePreviewSubscription, PortableText } from '../../../../lib/sanity'
import groq from 'groq';

const postQuery = groq`*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  mainImage,
  body
}`

export default function SinglePost({data}) {
  const { post } = data;
  return (
    <article>
      <h1>{post.title}</h1>
      <main>
        <img src={urlFor(post?.mainImage).url()} alt="{post.title}" />
        {/* <p>by {post.author.name}</p> */}
        <PortableText blocks={post?.body}/>
      </main>
    </article>
  )
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
  const post = await sanityClient.fetch(postQuery, {slug})
  return {
    props: {
      data: { post }
    }
  };
}