import { ReactElement } from 'react';
import { Header } from '../components/Header';
import { Navbar } from '../components/Navbar';
import { Slider } from '../components/Slider';
import { Services } from '../components/Services';
import { News } from '../components/News/News';
import { Logos } from '../components/Logos/Logos';
import { Footer } from '../components/Footer/Footer';
import { Reviews } from '../components/Reviews';

export default function Home(): ReactElement {
  return (
    <>
      <Header />
      <Navbar />
      <Slider />
      <Logos />
      <News />
      <Reviews />
      <Services />
      <Footer />
    </>
  )
}
