import React, { ReactElement, ReactNode } from 'react';
import Head from 'next/head';
import { Footer } from 'components/Footer/Footer';
import { Services } from 'components/Services';
import { Header } from 'components/Header';
import { Navbar } from 'components/Navbar';

type MainContainerProps = {
  children: ReactNode,
  title: string,
  pageDescription: string
}

export const MainContainer:React.FC<MainContainerProps> = ({children, title, pageDescription}): ReactElement => (
  <>
    <Head>
      <title>{title}</title>
      <meta content={pageDescription} name="description" />
      <meta content="#4285f4" name="theme-color"/>
      <meta content="#4285f4" name="msapplication-navbutton-color"/>
      <meta content="#4285f4" name="apple-mobile-web-app-status-bar-style"/>
    </Head>
    <Header />
    <Navbar />
    {children}
    <Services />
    <Footer />
  </>
);
