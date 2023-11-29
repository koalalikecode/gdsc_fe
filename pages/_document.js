/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable @next/next/no-css-tags */
// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  // static async getInitialProps(ctx) {
  //   const initialProps = await Document.getInitialProps(ctx);
  //   return { ...initialProps };
  // }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"
            integrity="sha512-8bHTC73gkZ7rZ7vpqUQThUDhqcNFyYi2xgDgPDHc+GXVGHXq+xPjynxIopALmOPqzo9JZj0k6OqqewdGO3EsrQ=="
            crossOrigin="anonymous"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="/assets/css/animate.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="/assets/css/bootstrap.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="/assets/css/font-awesome.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="/assets/css/responsive.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="/assets/css/button.min.css"
          />
          <link rel="stylesheet" type="text/css" href="/assets/css/prism.css" />
          <link
            rel="stylesheet"
            type="text/css"
            href="/assets/css/main.min.css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
export default MyDocument;
