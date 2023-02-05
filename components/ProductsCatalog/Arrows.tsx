import React, { ReactElement } from 'react';
import cn from 'classnames';
import styles from 'styles/layout/ProductsCatalog/Arrows.module.scss';

export const ArrowNext = (): ReactElement =>
  <button
    aria-label='next'
    className={cn(styles.button, styles.buttonSetNextPage)}
    type="button"
  >
    <div className={cn(styles.iconSetPage, styles.iconNextPage)} />
  </button>

export const ArrowPrevious = (): ReactElement =>
  <button
    aria-label='previous'
    className={cn(styles.button, styles.buttonSetPrevPage)}
    type="button"
  >
    <div className={cn(styles.iconSetPage, styles.iconPrevPage)} />
  </button>
