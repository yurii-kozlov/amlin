import { MainContainer } from 'components/MainContainer';
import React, { ReactElement, useEffect, useState } from 'react';
import axios from 'axios';
import { Products, Product } from 'types/main/Products';
import { useRouter } from 'next/router';
import { AboutProduct } from 'components/AboutProduct/AboutProduct';
import { GetServerSidePropsResult } from 'next';
import { Goods } from 'enums/goods';

type MonitorProps = {
  monitors: Products
}

const Monitor:React.FC<MonitorProps> = ({ monitors }): ReactElement => {
  const [ currentMonitor, setCurrentMonitor ] = useState<Product | null>(null)
  const { query } = useRouter();
  const {list } = monitors;

  useEffect(() => {
    const selectedMonitor:Product | undefined = list.find((monitor) =>
      monitor.name === query.name || monitor.name.includes(query.name as string)
    );

    setCurrentMonitor(selectedMonitor || null);
  }, [])

  return (
    <MainContainer>
      <AboutProduct product={currentMonitor} productType={Goods.monitors}/>
    </MainContainer>
  )
}

type getStaticPropsReturnMonitors = {
  monitors: Products
}

export async function getServerSideProps(): Promise<GetServerSidePropsResult<getStaticPropsReturnMonitors>> {
  const response = await axios.get('http://localhost:3001/monitors');
  const monitors: Products = response.data;

  return {
    props: {monitors},
  }
}

export default Monitor;
