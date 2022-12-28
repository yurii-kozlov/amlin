import React, { ReactElement, useEffect, useState } from 'react';
import classes from 'styles/base/container.module.scss';
import styles from 'styles/layout/ProductsScroll.module.scss';
import { Laptops } from 'components/ProductsScroll/Laptops/Laptops';
import { Computers } from 'components/ProductsScroll/Computers/Computers';
import { Monitors } from 'components/ProductsScroll/Monitors/Monitors';

export const ProductsScroll: React.FC = (): ReactElement => {
  const [fetching, setFetching] = useState(true);

  const [areLaptopsVisible, setAreLaptopsVisible] = useState(true);
  const [areComputersVisible, setAreComputersVisible] = useState(false);
  const [areMonitorsVisible, setAreMonitorsVisible] = useState(false);

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

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);

    return () => {
      document.removeEventListener('scroll', scrollHandler);
    }
  }, [])

  const scrollHandler = (e: any):void => {
    if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 3500) {
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
