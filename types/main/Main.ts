import { NewProducts } from 'types/main/NewProducts';
import { Products } from 'types/main/Products';
import { News } from 'types/main/News';
import { Review } from 'types/main/Review';
import { Social } from 'types/main/Social';
import { Banner } from 'types/main/Banner';

export type Main = {
  banners: Banner[],
  newProducts: NewProducts,
  products: Products,
  news: News[],
  reviews: Review[],
  social: Social,
  address: string,
  phone: string,
  time: string
}
