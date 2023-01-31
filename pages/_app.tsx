import 'styles/base/globals.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import type { AppProps } from 'next/app';
import { ReactNode } from 'react';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps): ReactNode {

  return (
    <>
      <Head>
        <link href="/favicon.ico" rel="shortcut icon" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
