import React, { ReactElement, useState } from 'react';
import { MainContainer } from 'components/MainContainer';
import { Product } from 'types/main/Products';
import axios from 'axios';
import { Container } from 'components/Container';
import { Laptops as LaptopsData } from 'types/laptops/laptops';
import { GetStaticPropsResult } from 'next';
import { PaginatedItems } from 'components/Pagination2';
import styles from 'styles/layout/ProductsCatalog/ProductsCatalog.module.scss';

type LaptopsProps = {
  laptopsData: LaptopsData
}


const Laptops: React.FC<LaptopsProps> = ({ laptopsData }): ReactElement => {
  const [laptops, setLaptops] = useState<Product[]>(laptopsData.list);
  const [isListViewActive, setIsListViewActive] = useState<boolean>(false);

  return (
    <MainContainer>
      <Container>
        <section className={styles.filteringAndCatalogWrapper}>
          <div className={styles.filterSection}>
            <h1>hi this is filtering section</h1>
          </div>
          <div className={styles.catalog} >
            <PaginatedItems itemsPerPage={8} products={laptops}/>
          </div>
        </section>
      </Container>
    </MainContainer>
    );
}

export default Laptops;

type getStaticPropsReturnMain = {
  laptopsData: LaptopsData
}

export async function getStaticProps():Promise<GetStaticPropsResult<getStaticPropsReturnMain>> {
      const res = await axios.get('http://localhost:3001/laptops');
      const laptopsData: LaptopsData = res.data;

  return {
    props: {laptopsData},
  }
}
