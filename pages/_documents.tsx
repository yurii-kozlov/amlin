/* eslint-disable max-len */
import { ReactElement } from 'react';
import { Html, Head, Main, NextScript } from 'next/document'
import 'bootstrap/dist/css/bootstrap.css';

export default function Document(): ReactElement {
  return (
    <Html>
      <Head>
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link crossOrigin="anonymous" href="https://fonts.gstatic.com" rel="preconnect" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}