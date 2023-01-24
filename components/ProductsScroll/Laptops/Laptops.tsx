import React, { ReactElement, useEffect, useState } from 'react';
import { uuid } from 'uuidv4';
import { Product } from 'types/main/Products';
import { Goods } from 'enums/goods';
import { getLaptops } from 'api/api';
import { ProductCard } from 'components/ProductCard';

type Props = {
  fetching: boolean,
  visibleProductSection: Goods,
  setFetching: React.Dispatch<React.SetStateAction<boolean>>
}

export const Laptops: React.FC<Props> = ({ fetching, visibleProductSection, setFetching }): ReactElement => {
  const [laptops, setLaptops] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (fetching && laptops.length < 60 && visibleProductSection === Goods.laptops) {
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
      <ProductCard
        key={uuid()}
        product={laptop}
      />
    ))}
  </>
};
