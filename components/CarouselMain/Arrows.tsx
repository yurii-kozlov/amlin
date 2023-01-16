import React, { ReactElement } from 'react';
import { CustomArrowProps } from 'react-slick';
import styles from 'styles/layout/Carousel/Arrows.module.scss';
import cn from 'classnames';

export const SampleNextArrow = (props:CustomArrowProps): ReactElement => {
  const { onClick } = props;

  return (
    <>
      <div
        className={cn(styles.arrows, styles.nextArrow)}
        onClick={onClick}
        role="presentation"
      />
    </>

  );
}

export const SamplePrevArrow = (props:CustomArrowProps): ReactElement => {
  const { onClick } = props;

  return (
    <div
      className={cn(styles.arrows, styles.prevArrow)}
      onClick={onClick}
      role="presentation"
    />
  );
}
