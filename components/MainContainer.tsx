import React, { ReactElement, ReactNode } from 'react';
import { Footer } from 'components/Footer/Footer';
import { Services } from 'components/Services';
import { Header } from 'components/Header';
import { Navbar } from 'components/Navbar';

type MainContainerProps = {
  children: ReactNode
}

export const MainContainer:React.FC<MainContainerProps> = ({children}): ReactElement => (
  <>
    <Header />
    <Navbar />
    {children}
    <Services />
    <Footer />
  </>
);
