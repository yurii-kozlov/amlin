import { Goods } from 'enums/goods';
import { Product } from 'types/main/Products';
import { getTheRightProductTypelink } from 'helpers/getTheRightProductTypelink';

export const getTheRightGoods = (goodsType: Goods, products: Product[]): Product[] =>
  products.filter((product) => getTheRightProductTypelink(product.name) === goodsType)
