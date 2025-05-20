import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
      <Html lang="en-GB">
        <Head>
          {/* Preconnect hints for faster DNS/TLS */}
          <link rel="preconnect" href="https://www.googletagmanager.com" />
          {/* Remove if you do NOT load Facebook Pixel anywhere */}
          <link rel="preconnect" href="https://connect.facebook.net" />
  
          {/* existing comments or tags below */}
          {/* <meta charSet="utf-8" /> */}
          {/* <meta name="viewport" ... /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }