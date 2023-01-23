import React, { ReactElement, useEffect, useState } from 'react';
import { uuid } from 'uuidv4';
import { Product } from 'types/main/Products';
import { Goods } from 'enums/goods';
import { getComputers } from 'api/api';
import { ProductCard } from 'components/ProductCard';

type Props = {
  fetching: boolean,
  visibleProductSection: Goods,
  setFetching: React.Dispatch<React.SetStateAction<boolean>>
}

export const Computers: React.FC<Props> = ({
  fetching, visibleProductSection, setFetching
  }): ReactElement => {
  const [computers, setComputers] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getComputers(currentPage)
      .then(response => {
      setComputers([...computers, ...response.data.list])
      setCurrentPage(prevState => prevState + 1)
  })
  }, [])

  useEffect(() => {
    if (fetching && computers.length < 60 && visibleProductSection === Goods.computers) {
      getComputers(currentPage)
        .then(response => {
        setComputers([...computers, ...response.data.list])
        setCurrentPage(prevState => prevState + 1)
      })
      .finally(() => setFetching(false));
    }
  }, [fetching])

  return <>
    {computers.map((computer) => (
      <ProductCard
        key={uuid()}
        product={computer}
      />
    ))}
  </>
}
