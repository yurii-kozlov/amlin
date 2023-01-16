import { Firm } from './Firm';

export interface Products {
  list: Product[],
  id: string,
  firms: Firm[]
}

export interface Product {
  inStock: boolean,
  slug: string,
  url: string,
  name: string,
  reviewsCount: number,
  previousPrice: number,
  rating: number,
  price: number
  firm: string,
  description: string
};

export interface MinicartBlock {
  productItem: Product,
  count: number,
  subtotal: number
}
