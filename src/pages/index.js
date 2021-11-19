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
        <p className="mx-auto text-center text-xl font-bold">Guides, blogs, tutorials, &amp; a complete a-to-z guide book to help <em>you</em> build a faster, more secure, and Google-compliant website &hellip; in less time and lower cost!</p>
        <div className="mt-12 p-4 border-4 border-gutterGrey border-dotted">
          <img
            className="mx-auto mb-4 mt-6 w-3/4"
            alt="Non-Techie Guides"
            src="/assets/jamstackG.png"
          />
          <p className="mx-auto mb-8 text-center text-cyan italic">the non-techie&apos;s <span className="text-darkYellow italic">a-to-z guide</span> to the Jamstack &amp; modern web</p>
          <Countdown />
          </div>  
        <Social />
      </main>

    </Layout>
  )
}