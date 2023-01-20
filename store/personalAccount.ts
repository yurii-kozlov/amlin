import { makeObservable, observable, action, computed } from 'mobx'
import { Product } from 'types/main/Products';

type ProductsSumAndQuantity = {
  [slug: string] : number
}

class PersonalAccount {
  cart: Product[] = [];
  wishList: Product[] = [];
  productsQuantities: ProductsSumAndQuantity = {};
  productsSums: ProductsSumAndQuantity = {};


  get totalOrderSum(): number {
    return this.cart.reduce(( sum, product) => sum + product.price * this.productsQuantities[product.slug], 0)
  }

  constructor() {
    makeObservable(this, {
      cart: observable,
      wishList: observable,
      productsQuantities: observable,
      productsSums: observable,
      totalOrderSum: computed,
      addProductToCart: action,
      removeProductFromCart: action,
      clearCart: action,
      addProductQuantity: action,
      subtractProductQuantity: action,
      addProductToWishList: action,
      removeProductFromWishList: action,
      clearWishList: action
      }, {deep: true}
    )
  }

  addProductToCart(product: Product, quantity?: number): void {
    const isProductInMinicart = this.cart.find((cartProduct) => cartProduct.slug === product.slug);

    if (isProductInMinicart) {
      this.productsQuantities[product.slug] += quantity || 1;
      this.productsSums[product.slug] = product.price * this.productsQuantities[product.slug];
    } else {
      this.cart.push(product);
      this.productsQuantities[product.slug] = quantity || 1;
      this.productsSums[product.slug] = product.price * (quantity || 1);
    }
  }

  removeProductFromCart(slug: string):void {
    this.cart = this.cart.filter((product) => product.slug !== slug)
  }

  clearCart(): void {
    this.cart = [];
  }

  addProductQuantity(slug: string, price: number): void {
    this.productsQuantities[slug] += 1;
    this.productsSums[slug] += price;
  }

  subtractProductQuantity(slug: string, price: number): void {
    if (this.productsQuantities[slug] > 1) {
      this.productsQuantities[slug] -= 1;
      this.productsSums[slug] -= price;
    }
  }

  addProductToWishList(product: Product): void {
    const isProductInWishList = this.wishList.find((wishListProduct) => wishListProduct.slug === product.slug);

    if (!isProductInWishList) {
      this.wishList.push(product);
    }
  }

  removeProductFromWishList(slug: string): void {
    this.wishList.filter((wishListProduct) => wishListProduct.slug !== slug);
  }

  clearWishList(): void {
    this.wishList = [];
  }
}

export default new PersonalAccount();
