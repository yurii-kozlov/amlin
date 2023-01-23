import React, { ReactElement, useEffect, useState } from 'react';
import { uuid } from 'uuidv4';
import { Product } from 'types/main/Products';
import { Goods } from 'enums/goods';
import { getMonitors } from 'api/api';
import { ProductCard } from 'components/ProductCard';

type Props = {
  fetching: boolean,
  visibleProductSection: Goods,
  setFetching: React.Dispatch<React.SetStateAction<boolean>>
}

export const Monitors: React.FC<Props> = ({
  fetching, visibleProductSection, setFetching
  }): ReactElement => {
  const [monitors, setMonitors] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getMonitors(currentPage)
      .then(response => {
      setMonitors([...monitors, ...response.data.list])
      setCurrentPage(prevState => prevState + 1)
  })
  }, [])

  useEffect(() => {
    if (fetching && monitors.length < 60 && visibleProductSection === Goods.monitors) {
      getMonitors(currentPage)
        .then(response => {
        setMonitors([...monitors, ...response.data.list])
        setCurrentPage(prevState => prevState + 1)
      })
      .finally(() => setFetching(false));
    }
  }, [fetching])

  return <>
    {monitors.map((monitor) => (
      <ProductCard
        key={uuid()}
        product={monitor}
      />
    ))}
  </>
};
