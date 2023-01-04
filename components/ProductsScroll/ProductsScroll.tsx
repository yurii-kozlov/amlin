import React, { ReactElement, useEffect, useState } from 'react';
import classes from 'styles/base/container.module.scss';
import styles from 'styles/layout/ProductsScroll.module.scss';
import { Laptops } from 'components/ProductsScroll/Laptops/Laptops';
import { Computers } from 'components/ProductsScroll/Computers/Computers';
import { Monitors } from 'components/ProductsScroll/Monitors/Monitors';
import cn from 'classnames';

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
        <ul className={styles.buttonsList} >
          <li className={styles.buttonsListItem}>
            <button
              className={cn(styles.button, {[styles.buttonActive]:areLaptopsVisible})}
              onClick={handleLaptopsVisibility}
              type="submit"
          >
              Laptops
            </button>
          </li>
          <li className={styles.buttonsListItem}>
            <button
              className={cn(styles.button, {[styles.buttonActive]: areComputersVisible})}
              onClick={handleComputersVisibility}
              type="submit"
          >
              Computers
            </button>
          </li>
          <li className={styles.buttonsListItem}>
            <button
              className={cn(styles.button, {[styles.buttonActive]: areMonitorsVisible})}
              onClick={handleMonitorsVisibility}
              type="submit"
          >
              Monitors
            </button>
          </li>
        </ul>
        <div
          className={cn(styles.block, styles.photos, {[styles.invisibleLaptops]: !areLaptopsVisible})}
        >
          <Laptops
            areLaptopsVisible={areLaptopsVisible}
            fetching={fetching}
            setFetching={setFetching}
          />
        </div>
        <div
          className={cn(styles.block, styles.comments, {[styles.invisibleComputers]:!areComputersVisible })}
        >
          <Computers
            areComputersVisible={areComputersVisible}
            fetching={fetching}
            setFetching={setFetching}
          />
        </div>
        <div
          className={cn(styles.block, styles.comments, {[styles.invisibleMonitors]: !areMonitorsVisible})}
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
