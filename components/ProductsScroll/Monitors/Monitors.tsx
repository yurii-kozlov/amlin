import React, { ReactElement, useEffect, useState } from 'react';
import { Product } from 'types/main/Products';
import { ProductScroll } from 'components/ProductsScroll/ProductScroll';
import { getMonitors } from 'api/api';

type Props = {
  fetching: boolean,
  areMonitorsVisible: boolean,
  setFetching: React.Dispatch<React.SetStateAction<boolean>>
}

export const Monitors: React.FC<Props> = ({
  fetching, areMonitorsVisible, setFetching
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
    if (fetching && monitors.length < 60 && areMonitorsVisible) {
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
      <ProductScroll key={monitor.slug} product={monitor}/>
    ))}
  </>
}