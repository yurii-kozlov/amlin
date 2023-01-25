import React, { ReactElement, useEffect, useState } from 'react';
import cn from 'classnames';
import { Goods } from 'enums/goods';
import { Laptops } from 'components/ProductsScroll/Laptops/Laptops';
import { Container } from 'components/Container';
import { Computers } from 'components/ProductsScroll/Computers/Computers';
import { Monitors } from 'components/ProductsScroll/Monitors/Monitors';
import styles from 'styles/layout/ProductsScroll.module.scss';

export const ProductsScroll: React.FC = (): ReactElement => {
  const [fetching, setFetching] = useState<boolean>(true);
  const [visibleProductSection, setVisibleProductSection] = useState<Goods>(Goods.laptops);

  const handleLaptopsVisibility = (): void => setVisibleProductSection(Goods.laptops);
  const handleComputersVisibility = (): void => setVisibleProductSection(Goods.computers);
  const handleMonitorsVisibility = (): void => setVisibleProductSection(Goods.monitors);

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
    <Container>
      <section className={cn(styles.section, styles.sectionPage)} >
        <ul className={styles.buttonsList} >
          <li className={styles.buttonsListItem}>
            <button
              className={cn(styles.button, {[styles.buttonActive]: visibleProductSection === Goods.laptops})}
              onClick={handleLaptopsVisibility}
              type="submit"
            >
              Laptops
            </button>
          </li>
          <li className={styles.buttonsListItem}>
            <button
              className={cn(styles.button, {[styles.buttonActive]: visibleProductSection === Goods.computers})}
              onClick={handleComputersVisibility}
              type="submit"
            >
              Computers
            </button>
          </li>
          <li className={styles.buttonsListItem}>
            <button
              className={cn(styles.button, {[styles.buttonActive]: visibleProductSection === Goods.monitors})}
              onClick={handleMonitorsVisibility}
              type="submit"
            >
              Monitors
            </button>
          </li>
        </ul>
        <div
          className={cn(
            styles.block, styles.photos,
            {[styles.invisibleLaptops]: visibleProductSection !== Goods.laptops}
          )}
          >
          <Laptops
            fetching={fetching}
            setFetching={setFetching}
            visibleProductSection={visibleProductSection}
          />
        </div>
        <div
          className={cn(
            styles.block,
            styles.comments,
            {[styles.invisibleComputers]: visibleProductSection !== Goods.computers })}
        >
          <Computers
            fetching={fetching}
            setFetching={setFetching}
            visibleProductSection={visibleProductSection}
          />
        </div>
        <div
          className={cn(
            styles.block,
            styles.comments,
            {[styles.invisibleMonitors]: visibleProductSection !== Goods.monitors })}
        >
          <Monitors
            fetching={fetching}
            setFetching={setFetching}
            visibleProductSection={visibleProductSection}
          />
        </div>
      </section>
    </Container>
  )};
