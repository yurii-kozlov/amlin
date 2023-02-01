import React, { ReactElement, ReactNode } from 'react';
import Head from 'next/head';
import { Footer } from 'components/Footer/Footer';
import { Services } from 'components/Services';
import { Header } from 'components/Header';
import { Navbar } from 'components/Navbar';

type MainContainerProps = {
  children: ReactNode,
  title: string
}

export const MainContainer:React.FC<MainContainerProps> = ({children, title}): ReactElement => (
  <>
    <Head>
      <title>{title}</title>
    </Head>
    <Header />
    <Navbar />
    {children}
    <Services />
    <Footer />
  </>
);
