import Head from 'next/head'
import Layout from '../components/layout'
import Countdown from '../components/countdown'
import Social from '../components/social'
import Script from 'next/script'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Non-Techie Guides</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="mb-12">
          <h2 className="w-3/4 mb-8 text-base03 dark:text-base2 text-lg italic">I&apos;m putting the finishing touches on the quiz &hellip;</h2>
          <h1 className="w-3/4 pb-8 mb-8 text-base03 dark:text-base2 border-b-2 border-violet">But in the meantime,  can I ask you a favor?</h1>
          <p>Help me make sure that my report on the <em>3 biggest ways your website could be sabotaging your business</em> actually addresses YOUR concerns.</p>
        </div>

        <Script
          className="mt-12"
          id="Paperform"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            (function() {var script = document.createElement('script'); script.src = "https://paperform.co/__embed.min.js"; document.body.appendChild(script); })() 
            `
          }}
        />

        <div data-paperform-id="1uzuqayh" id="Paperform1"></div>

      </main>


      {/* <main className="flex flex-col justify-center">
        <p className="mx-auto mt-0 text-center text-xl font-bold">Guides, blogs, tutorials, &amp; a complete a-to-z guide book to help <em>you</em> build a faster, more secure, and Google-compliant website &hellip; in less time and lower cost!</p>
        <div className="mt-12 p-4 border-4 border-blue border-dotted bg-base2 text-base02 dark:bg-base03 dark:text-base3">
          <img
            className="mx-auto mb-4 mt-6 w-3/4"
            alt="Non-Techie Guides"
            src="/assets/jamstackG.png"
          />
          <p className="mx-auto mb-8 text-center text-cyan italic">the non-techie&apos;s <span className="text-yellow font-bold italic">a-to-z guide</span> to the Jamstack &amp; modern web</p>
          <Countdown />
          </div>  
        <Social />
      </main> */}

    </Layout>
  )
}