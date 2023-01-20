import { Product } from 'types/main/Products'

export interface MinicartBlock {
  productItem: Product,
  count: number,
  subtotal: number
}
