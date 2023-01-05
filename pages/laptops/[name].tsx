import { MainContainer } from 'components/MainContainer';
import React, { ReactElement, useEffect, useState } from 'react';
import axios from 'axios';
import { Products, Product } from 'types/main/Products';
import { useRouter } from 'next/router';
import { AboutProduct } from 'components/AboutProduct';

type LaptopProps = {
  laptops: Products
}

const Laptop:React.FC<LaptopProps> = ({ laptops }): ReactElement => {
  const [ currentLaptop, setCurrentLaptop ] = useState<Product | null>(null)
  const { query } = useRouter();
  const {list } = laptops;

  useEffect(() => {
    const selectedLaptop:Product | undefined = list.find((laptop) => laptop.name === query.name)
    setCurrentLaptop(selectedLaptop || null);
  }, [])

  return (
    <MainContainer>
      <AboutProduct product={currentLaptop}/>
    </MainContainer>
  )
}


export async function getServerSideProps():Promise<any> {
  const response = await axios.get('http://localhost:3001/laptops');
  const laptops: Products = response.data;

  return {
    props: {laptops},
  }
}

export default Laptop;