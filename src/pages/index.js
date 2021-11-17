import Head from 'next/head'

export default function Home() {
  return (
    <div className="p-4">
      <Head>
        <title>Non-Techie Guides</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen flex flex-col justify-center">
        <img
          className="m-auto my-4 w-24 sm:w-auto"
          alt="Non-Techie Guides"
          src="/assets/img_logo.svg"
        />
        <h1 className="mx-auto text-center uppercase text-4xl font-bold">
          Non-Techie&nbsp;Guides!
        </h1>
        <h2 className="mx-auto my-4 text-center text-xl font-bold text-gray-600">Git yur nErd on!</h2>
        <p className="prose mx-auto mb-8 text-center text-gray-400 italic">the non-techies guides to all things tech &hellip; from one non-techie to another!</p>
        <p className="prose mx-auto mb-8 text-center text-gray-600">Guides, blogs, tutorials, &amp; a complete a-to-z guide book to help <em>you</em> build a faster, more secure, and Google-compliant website &hellip; in less time and lower cost!</p>
        <div className="border-gray-400 border-2 border-solid p-4 mx-auto text-center prose">
          <h2>LAUNCHING IN &hellip;</h2>
          <img className="mx-auto max-w-full" src="https://timer.getmara.com/c3R5bGU9MTImZGF0ZT0yMDIxLTEyLTAxJnRpbWU9MDklM0EwMCZ0aW1lem9uZT1BbWVyaWNhJTJGQ2hpY2FnbyZiY2tDb2xvcj1GRkZGRkYmZm9udENvbG9yPTAwMDAwMCZsYWJlbENvbG9yPTQ0NDQ0NCZkYXlMYWJlbD1kYXlzJmhvdXJMYWJlbD1ob3VycyZtaW5MYWJlbD1taW4mc2VjTGFiZWw9c2Vj.gif" />
        </div>
      </main>

    </div>
  )
}