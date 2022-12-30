import React, { ReactElement, ReactNode } from 'react';
import { Footer } from './Footer/Footer';
import { Services } from './Services';
import { Header } from './Header';
import { Navbar } from './Navbar';

type Props = {
  children: ReactNode
}

export const MainContainer:React.FC<Props> = ({children}): ReactElement => (
  <>
    <Header />
    <Navbar />
    {children}
    <Services />
    <Footer />
  </>
);
