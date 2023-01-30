import { Product } from 'types/main/Products'
import { Firm } from 'types/main/Firm'

export interface Laptops {
  list: Product[],
  firms: Firm[],
  id: string
}
