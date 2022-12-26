import { NewGoods } from './NewProducts';
import { Products } from './Products';
import { News } from './News';
import { Review } from './Review';
import { Social } from './Social';
import { Banner } from './Banner';

export type Main = {
  banners: Banner[],
  newProducts: NewGoods,
  products: Products,
  news: News[],
  reviews: Review[],
  social: Social,
  address: string,
  phone: string,
  time: string
}
