import { makeObservable, observable, action, computed } from 'mobx'
import { MinicartBlock, Product } from 'types/main/Products';

class PersonalAccount {
  cart: MinicartBlock[] = []
  get totalPrice(): number {
    return (
      this.cart
        .reduce(( sum, productBlock ) => sum + productBlock.productItem.price * productBlock.count, 0)
    )
  }

  constructor() {
    makeObservable(this, {
      cart: observable,
      addProduct: action,
      removeProduct: action,
      totalPrice: computed
      }, {deep: true}
    )
  }

  addProduct(product: Product): void {
    const isProductInMinicart = this.cart
    .find((minicartProductBlock) => product.slug === minicartProductBlock.productItem.slug);

    if (isProductInMinicart) {
      this.cart.map((minicartProductBlock) => {
        if (product.slug === minicartProductBlock.productItem.slug) {
          minicartProductBlock.count += 1;

          return minicartProductBlock;
        }

          return minicartProductBlock;

      } )
    } else {
      const newProductBlock: MinicartBlock = {
        productItem: product,
        count: 1
      }

      this.cart.push(newProductBlock);
    }
  }

  removeProduct(slug: string):void {
    this.cart = this.cart.filter((productBlock) => productBlock.productItem.slug !== slug)
  }
}

export default new PersonalAccount();
