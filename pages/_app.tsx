import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'styles/base/globals.scss';


import type { AppProps } from 'next/app';
import { ReactNode } from 'react';

export default function App({ Component, pageProps }: AppProps): ReactNode {

  return <Component {...pageProps} />
}
