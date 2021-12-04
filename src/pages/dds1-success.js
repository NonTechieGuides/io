import Layout from '../components/layout'
import Countdown from '../components/countdown'
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

      <main className="flex flex-col justify-center mb-20">
        <h1 className="mx-auto mt-6 mb-8 text-center text-3xl font-bold dark:text-base2 text-base03">Thanks for your response!</h1>
        <p className="mx-auto  mt-6 text-xl font-bold dark:text-base2 text-base03">That&apos;ll be a big help in polishing the quiz and making sure I deal with your particular frustration. Check you Inbox in a few minutes and you&apos;ll find the 1st installment of my short mini-course.</p>

        <p className="mx-auto  mt-6 text-xl font-bold dark:text-base2 text-base03">Basically, its a more efficient way of providing you with the information you need (after all, who needs another PDF cluttering up their computer?) Then, in a couple days, you&apos;ll get the next email; and the third one a few days after that.</p>

        <p className="mx-auto  mt-6 text-xl font-bold dark:text-base2 text-base03">Feel free to respond with questions or issues. I don&apos;t use those annoying &ldquo;NO REPLY&rdquo; emails and I always try to respond within a day or so.</p>

        <p className="mx-auto  mt-6 text-xl font-bold dark:text-base2 text-base03">Thanks again for your insight into the issues and frustrations you have. I think I&apos;ve got a solution that could help your business out. More details on that soon.</p>

        <p className="my-10 text-xl font-bold dark:text-base2 text-base03">Best,<br />Rich Cook<br /><span className="text-sm italic">(a non-techie who, kinda-sorta, figured out some cool web stuff)</span></p>

      </main>
    </Layout>

  )
}
