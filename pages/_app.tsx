import type { AppProps } from 'next/app';
import { ReactNode } from 'react';
import Head from 'next/head';
import NextNProgress from 'nextjs-progressbar';
import 'styles/base/globals.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function App({ Component, pageProps }: AppProps): ReactNode {

  return (
    <>
      <Head>
        <link href="/touch-icon-iphone.png" rel="apple-touch-icon"/>
        <link href="/favicon.ico" rel="shortcut icon" />
        <meta content="#4285f4" name="theme-color"/>
        <meta content="#4285f4" name="msapplication-navbutton-color"/>
        <meta content="#4285f4" name="apple-mobile-web-app-status-bar-style"/>
      </Head>
      <NextNProgress showOnShallow />
      <Component {...pageProps} />
    </>
  )
}
