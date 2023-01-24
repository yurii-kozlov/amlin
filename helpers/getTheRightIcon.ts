import { Icons } from 'enums/icons';
import van from 'images/icons/van.svg';
import star from 'images/icons/star.svg';
import heart from 'images/icons/heart.svg';

export const getTheRightIcon = (iconName: string): string => {
  switch (iconName) {
    case Icons.heart:
      return heart;

    case Icons.van:
      return van;

    case Icons.star:
      return star;

    default:
      return '';
  }
}
