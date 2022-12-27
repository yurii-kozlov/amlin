/* eslint-disable no-console */
import React, { ReactElement, useEffect, useState } from 'react';
import classes from 'styles/base/container.module.scss';
import styles from 'styles/layout/ProductsScroll.module.scss';
import { Laptops } from 'components/ProductsScroll/Laptops/Laptops';
import { Computers } from 'components/ProductsScroll/Computers/Computers';
import { Monitors } from 'components/ProductsScroll/Monitors/Monitors';

export const ProductsScroll: React.FC = (): ReactElement => {
  //* in separate components
  // const [laptops, setLaptops] = useState<Product[]>([]);
  // const [currentPage, setCurrentPage] = useState(1);

  //* We will send fetching as a prop to separate components
  const [fetching, setFetching] = useState(true);

  //* This part will stay here
  const [areLaptopsVisible, setAreLaptopsVisible] = useState(true);
  const [areComputersVisible, setAreComputersVisible] = useState(false);
  const [areMonitorsVisible, setAreMonitorsVisible] = useState(false);

  //* This will stay here too
  const handleLaptopsVisibility = (): void => {
    setAreLaptopsVisible(true);
    setAreComputersVisible(false);
    setAreMonitorsVisible(false);
  }

  const handleComputersVisibility = (): void => {
    setAreLaptopsVisible(false);
    setAreComputersVisible(true);
    setAreMonitorsVisible(false);
  }


  const handleMonitorsVisibility = (): void => {
    setAreMonitorsVisible(true);
    setAreLaptopsVisible(false);
    setAreComputersVisible(false);
  }


//* in separate components
  // useEffect(() => {

  //   if (fetching && laptops.length < 60 && areLaptopsVisible) {
  //     axios.get(`http://localhost:3001/laptops?_limit=10&_page=${currentPage}`)
  //     .then(response => {
  //       setLaptops([...laptops, ...response.data.list])
  //       setCurrentPage(prevState => prevState + 1)
  //       setTotalCount(Number(response.headers['x-total-count']))
  //     })
  //     .finally(() => setFetching(false));
  //   }

  // }, [fetching])


  // *This will stay here
  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);

    return () => {
      document.removeEventListener('scroll', scrollHandler);
    }
  }, [])

    // *This will stay here
  const scrollHandler = (e:any):void => {
    if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 3500) {
      console.log(e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight));
      console.log(fetching);
      setFetching(true);
    }
  }

  return (
    <div className={classes.container}>
      <section className={styles.section} >
        <div className={styles.buttons} >
          <button
            className={`${styles.button} ${areLaptopsVisible && styles.buttonActive}`}
            onClick={handleLaptopsVisibility}
            type="submit"
          >
            Laptops
          </button>
          <button
            className={`${styles.button} ${areComputersVisible && styles.buttonActive}`}
            onClick={handleComputersVisibility}
            type="submit"
          >
            Computers
          </button>
          <button
            className={`${styles.button} ${areMonitorsVisible && styles.buttonActive}`}
            onClick={handleMonitorsVisibility}
            type="submit"
          >
            Monitors
          </button>
        </div>
        <div
          className={`${styles.block} ${styles.photos} ${!areLaptopsVisible && styles.invisibleLaptops} `}
        >
          <Laptops
            areLaptopsVisible={areLaptopsVisible}
            fetching={fetching}
            setFetching={setFetching}
          />
        </div>
        <div
          className={`${styles.block} ${styles.comments} ${!areComputersVisible && styles.invisibleComputers} `}
        >
          <Computers
            areComputersVisible={areComputersVisible}
            fetching={fetching}
            setFetching={setFetching}
          />
        </div>
        <div
          className={`${styles.block} ${styles.comments} ${!areMonitorsVisible && styles.invisibleMonitors} `}
        >
          <Monitors
            areMonitorsVisible={areMonitorsVisible}
            fetching={fetching}
            setFetching={setFetching}
          />
        </div>
      </section>
    </div>
  );
}
