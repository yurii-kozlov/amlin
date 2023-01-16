import { makeObservable, observable, action, computed } from 'mobx'
import { MinicartBlock, Product } from 'types/main/Products';

class PersonalAccount {
  cart: MinicartBlock[] = []
  get totalMinicartSum(): number {
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
      totalMinicartSum: computed,
      addProductQuantity: action,
      subtractProductQuantity: action
      }, {deep: true}
    )
  }

  addProduct(product: Product, quantity?: number): void {
    const isProductInMinicart = this.cart
    .find((minicartProductBlock) => product.slug === minicartProductBlock.productItem.slug);

    if (isProductInMinicart) {
      this.cart.map((minicartProductBlock) => {
        if (product.slug === minicartProductBlock.productItem.slug) {
          minicartProductBlock.count += quantity || 1;
          minicartProductBlock.subtotal *= minicartProductBlock.count;

          return minicartProductBlock;
        }

          return minicartProductBlock;

      } )
    } else {
      const newProductBlock: MinicartBlock = {
        productItem: product,
        count: quantity || 1,
        subtotal: product.price * (quantity || 1)
      }

      this.cart.push(newProductBlock);
    }
  }

  removeProduct(slug: string):void {
    this.cart = this.cart.filter((productBlock) => productBlock.productItem.slug !== slug)
  }

  clearCart(): void {
    this.cart = [];
  }

  addProductQuantity(slug: string): void {
    this.cart = this.cart.map((productBlock) => {
      if (productBlock.productItem.slug === slug) {
        productBlock.count += 1;
        productBlock.subtotal += productBlock.productItem.price;

        return productBlock;
      }

      return productBlock;
    } )
  }

  subtractProductQuantity(slug: string): void {
    this.cart = this.cart.map((productBlock) => {
      if (productBlock.productItem.slug === slug) {
        if (productBlock.count > 1) {
          productBlock.count -= 1;
          productBlock.subtotal -= productBlock.productItem.price;
        }

        return productBlock;
      }

      return productBlock;
    } )
  }
}

export default new PersonalAccount();
