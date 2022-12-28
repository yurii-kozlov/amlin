import { makeObservable, observable, action } from 'mobx'
import { Product } from 'types/main/Products';

class PersonalAccount {
  cart: Product[] = []

  constructor() {
    makeObservable(this, {
      cart: observable,
      addProduct: action,
      removeProduct: action
      }, {deep: true}
    )
  }

  addProduct(product: Product): void {
    this.cart.push(product);
  }

  removeProduct(slug: string):void {
    this.cart = this.cart.filter((product) => product.slug !== slug)
  }
}

export default new PersonalAccount();
