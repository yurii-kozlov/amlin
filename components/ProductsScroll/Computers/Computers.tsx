import React, { ReactElement, useEffect, useState } from 'react';
import { Product } from 'types/main/Products';
import { ProductScroll } from 'components/ProductsScroll/ProductScroll';
import { getComputers } from 'api/api';
import { uuid } from 'uuidv4';

type Props = {
  fetching: boolean,
  areComputersVisible: boolean,
  setFetching: React.Dispatch<React.SetStateAction<boolean>>
}

export const Computers: React.FC<Props> = ({
  fetching, areComputersVisible, setFetching
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
    if (fetching && computers.length < 60 && areComputersVisible) {
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
      <ProductScroll
        key={uuid()}
        product={computer}
        productType='computers'
      />
    ))}
  </>
}
