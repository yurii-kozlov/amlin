import { NewProduct } from './NewProducts';
import { Firm } from './Firm';

export interface Products {
  list: Product[],
  id: string,
  firms: Firm[]
}

export interface Product extends NewProduct {
  firm?: string,
  description?: string
};
