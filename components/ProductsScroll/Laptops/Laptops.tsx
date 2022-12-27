import React, { ReactElement, useEffect, useState } from 'react';
import { Product } from 'types/main/Products';
import { ProductScroll } from 'components/ProductsScroll/ProductScroll';
import { getLaptops } from 'api/api';

type Props = {
  fetching: boolean,
  areLaptopsVisible: boolean,
  setFetching: React.Dispatch<React.SetStateAction<boolean>>
}

export const Laptops: React.FC<Props> = ({ fetching, areLaptopsVisible, setFetching }): ReactElement => {
  const [laptops, setLaptops] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {

    if (fetching && laptops.length < 60 && areLaptopsVisible) {
      getLaptops(currentPage)
        .then(response => {
        setLaptops([...laptops, ...response.data.list])
        setCurrentPage(prevState => prevState + 1)
      })
      .finally(() => setFetching(false));
    }

  }, [fetching])

  return <>
    {laptops.map((laptop) => (
      <ProductScroll key={laptop.slug} product={laptop}/>
    ))}
  </>
}