import Head from 'next/head'
import Layout from '../components/layout'
import Countdown from '../components/countdown'
import Social from '../components/social'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Non-Techie Guides</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col justify-center">
        <p className="hidden prose mx-auto mb-8 text-center text-gray-400 italic">the non-techies guides to all things tech &hellip; from one non-techie to another!</p>
        <p className="prose mx-auto mb-8 text-center text-gray-600">Guides, blogs, tutorials, &amp; a complete a-to-z guide book to help <em>you</em> build a faster, more secure, and Google-compliant website &hellip; in less time and lower cost!</p>
        <Countdown />
        <Social />
      </main>

    </Layout>
  )
}