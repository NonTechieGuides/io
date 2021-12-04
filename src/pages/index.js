import Layout from '../components/layout'
import Head from 'next/head'
import Link from 'next/link'
import { SanityClient, urlFor } from '../../../lib/sanity'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Non-Techie Guides</title>
        <meta name="description" content="Where non-techies go to learn all things web tech!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col justify-center">
        <h1 className="mx-auto mt-0 mb-8 text-center text-3xl font-bold dark:text-base2 text-base03">Where non-techies go to learn all things web tech!</h1>
        <p className="mx-auto mt-0 text-center text-xl font-bold dark:text-base2 text-base03">Guides, blogs, tutorials, &amp; a complete a-to-z guide book to help <em>you</em> build a faster, more secure, and Google-compliant website &hellip; in less time and lower cost!</p>
      </main> 
    </Layout>

  )
}
