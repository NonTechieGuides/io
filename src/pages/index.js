import Head from 'next/head'
import Layout from '../components/layout'
import Hero from '../components/hero'
import SignupForm from '../components/signupform'

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
        <Hero />
        <div className="hidden drop-shadow-xl filter p-4 mx-auto text-center prose">
          <h2>LAUNCHING IN &hellip;</h2>
          <img className="mx-auto max-w-full" src="https://timer.getmara.com/c3R5bGU9MTImZGF0ZT0yMDIxLTEyLTAxJnRpbWU9MDklM0EwMCZ0aW1lem9uZT1BbWVyaWNhJTJGQ2hpY2FnbyZiY2tDb2xvcj1GRkZGRkYmZm9udENvbG9yPTAwMDAwMCZsYWJlbENvbG9yPTQ0NDQ0NCZkYXlMYWJlbD1kYXlzJmhvdXJMYWJlbD1ob3VycyZtaW5MYWJlbD1taW4mc2VjTGFiZWw9c2Vj.gif" />
        </div>

        {/* <SignupForm title="Leave your email, below, to be notified with the alpha version of this book is available." /> */}
      </main>

    </Layout>
  )
}