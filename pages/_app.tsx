/* eslint-disable global-require */
import 'bootstrap/dist/css/bootstrap.css';
import 'styles/globals.scss';

import type { AppProps } from 'next/app';
import { ReactNode, useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps): ReactNode {
  useEffect(() => typeof document !== 'undefined'
    ? require('bootstrap/dist/js/bootstrap')
    : null, [])

  return <Component {...pageProps} />
}
