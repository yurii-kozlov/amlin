/* eslint-disable no-console */
import React, { ReactElement } from 'react';
import { Header } from 'components/Header';
import { Navbar } from 'components/Navbar';
import { Services } from 'components/Services';
import { News } from 'components/News';
import { Logos } from 'components/Logos';
import { Footer } from 'components/Footer';
import { Reviews } from 'components/Reviews/Reviews';
import { NewProducts } from 'components/NewProducts';
import { Main } from 'types/main/Main';
import { CarouselMain } from 'components/CarouselMain';
import { BonusSection } from 'components/BonusSection';
import { ProductsScroll } from 'components/ProductsScroll/ProductsScroll';
import axios from 'axios';

type Props = {
  mainData: Main
}

export const Home: React.FC<Props> = ({ mainData }): ReactElement => {
  const { newProducts, banners, reviews } = mainData;

  return (
    <>
      <Header />
      <Navbar />
      <CarouselMain banners={banners} />
      <NewProducts newGoods={newProducts} />
      <BonusSection />
      <ProductsScroll />
      <Logos />
      <News />
      <Reviews reviews={reviews} />
      <Services />
      <Footer />
    </>
  )
}

export async function getStaticProps():Promise<any> {
  const response = await axios.get('http://localhost:3001/main');
  const mainData: Main = response.data;

  return {
    props: {mainData},
  }
}

export default Home;
