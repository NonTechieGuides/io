import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Fira+Code&display=optional"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@100;400;600;900&display=optional"
            rel="stylesheet"
          />
        </Head>
        <body className="bg-base02 dark:bg-base2 text-base2 dark:text-base02">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
