import { Product } from 'types/main/Products';
import { Sorting } from 'enums/sorting';

export const sortProducts = (products: Product[], sortBy: string ): Product[] => {
  switch (sortBy) {
    case Sorting.name:
      return products.sort((product1, product2) => product1.name.localeCompare(product2.name));

    case Sorting.price:
      return products.sort((product1, product2) => product1.price - product2.price);

    case Sorting.rating:
      return products.sort((product1, product2) => product1.rating - product2.rating);

    default:
      return products.sort((product1, product2) => product1.reviewsCount - product2.reviewsCount);
  }
}
