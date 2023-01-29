import { Product } from 'types/main/Products';

export const priceRanges = [
  [0, 5000],
  [5000, 10000],
  [10000, 15000],
  [15000, 25000],
  [25000, 30000],
  [30000, 35000],
  [35000, 40000],
  [40000, 100000]
];


  export const filterByPriceRange = ( products: Product[], priceRange: number[]): Product[] => {
    const [min, max] = priceRange;

    return products.filter((product) => product.price >= min && product.price < max);
  }


  export const filterByName = ( products: Product[], inputName: string): Product[] =>
    products.filter((product) => product.name.toLowerCase().includes(inputName.toLowerCase())
    || product.name.toLowerCase() === inputName.toLowerCase()
    );
