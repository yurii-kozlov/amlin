import React, { ReactElement } from 'react';
import { GetStaticPropsResult } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { instance } from 'api/api';
import { Main } from 'types/main/Main';
import { Products, Product } from 'types/main/Products';
import { Header } from 'components/Header';
import { Navbar } from 'components/Navbar';
import { Services } from 'components/Services';
import { News } from 'components/News/News';
import { Logos } from 'components/Logos/Logos';
import { Footer } from 'components/Footer/Footer';
import { BonusSection } from 'components/BonusSection';
import { CarouselMain } from 'components/CarouselMain/CarouselMain';
import { Reviews } from 'components/Reviews/Reviews';
import { NewProducts } from 'components/NewProducts/NewProducts';
import { pagesDescriptions } from 'api/pagesDescriptions';

const DynamicProductsScroll = dynamic(
  () => import('components/ProductsScroll/ProductsScroll')
)

type HomeProps = {
  mainData: Main
  products: Product[]
}

export const Home: React.FC<HomeProps> = ({ mainData, products }): ReactElement => {

  const {banners, reviews, newProducts} = mainData;

  return (
    <>
      <Head>
        <title>Amlin</title>
        <meta content={pagesDescriptions.home} name="description" />
      </Head>
      <Header />
      <Navbar />
      <CarouselMain banners={banners}/>
      <NewProducts newGoods={newProducts}/>
      <DynamicProductsScroll products={products}/>
      <BonusSection />
      <Logos />
      <News />
      <Reviews reviews={reviews} />
      <Services />
      <Footer />
    </>
  )
}

type getStaticPropsReturnMain = {
  mainData: Main,
  products: Product[]
}

export async function getStaticProps(): Promise<GetStaticPropsResult<getStaticPropsReturnMain>> {

  const responseMain = await instance.get('/main');
  const mainData: Main = responseMain.data;

  const responseLaptops = await instance.get('/laptops?_limit=10');
  const laptops: Products = responseLaptops.data;

  const responseComputers = await instance.get('/computers?_limit=10');
  const computers: Products = responseComputers.data;

  const responseMonitors = await instance.get('/monitors?_limit=10');
  const monitors: Products = responseMonitors.data;

  const products: Product[] = [...laptops.list, ...computers.list, ...monitors.list];

  return {
    props: {mainData, products},
  }
}

export default Home;
