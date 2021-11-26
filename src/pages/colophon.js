import Head from 'next/head'
import Layout from '../components/layout'
import Link from 'next/link'
import Countdown from '../components/countdown'
import Social from '../components/social'

export default function Colophon() {
  return (
    <Layout>
      <Head>
        <title>Non-Techie Guides &mdash; Colophon</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col justify-center">
        <h1>This is an H1 tag.</h1>
        <h2>This is an H2 tag.</h2>
        <h3>This is an H3 tag.</h3>
        <h4>This is an H4 tag.</h4>
        <h5>This is an H5 tag.</h5>
        <h6>This is an H6 tag.</h6>

        <p>This is a paragraph. <span className="font-bold">This is in bold</span>. <span className="italic">This is in italics</span>. <span className="font-bold italic">This is in bold italic</span>. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate reiciendis nemo voluptates sequi ex natus eveniet aperiam fuga dolore tempore, laudantium ab ipsam enim vero ad, perferendis, et illo. Assumenda?</p>

        <p className="bg-base2 text-base03/">This paragraph is in reverse or opposite color mode. When the main site is in normal (light mode), this will appear as if in the dark mode. When the main site is in dark mode, this will appear as if in light mode.</p>

        <p>This paragraph has <span className="bg-yellow text-base03">highlighted text.</span></p>

        <p className="bg-base2 text-base03">This paragraph has <span className="bg-yellow">highlighted text, but in dark mode.</span></p>

        <p>This paragraph contains a <Link href="#">link</Link> tag &hellip; otherwise known as an &#8216;a href&#8217;
 tag.</p>

        <ul>
          <p>This is an unordered list. Bullets are customized per list.</p>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          <li>Item 4</li>
          <li>Item 5</li>
        </ul>

        <ol>
          <p>This is an ordered list.</p>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          <li>Item 4</li>
          <li>Item 5</li>
        </ol>

        <dl>
          <p>This is a definition list.</p>
          <dt>Coffee</dt>
          <dd>Black hot drink</dd>
          <dt>Milk</dt>
          <dd>White cold drink</dd>
        </dl>
        
      </main>

    </Layout>
  )
}