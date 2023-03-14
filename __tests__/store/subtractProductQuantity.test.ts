import personalAccount from 'store/personalAccount';
import { mockProducts } from '__mocks__/mockStoreData';

const { monitor, laptop } = mockProducts;

describe('addProductQuantity', () => {
  beforeEach(() => personalAccount.clearCart())
  test('Products\' quantities are subtracted correctly ', () => {
    personalAccount.addProductToCart(monitor, 4);
    personalAccount.subtractProductQuantity(monitor.slug, monitor.price);
    personalAccount.subtractProductQuantity(monitor.slug, monitor.price);

    expect(personalAccount.productsQuantities[monitor.slug]).toBe(2);
  });

  test('Products\' sums are updated correctly after subtracting', () => {
    personalAccount.addProductToCart(monitor, 5);
    personalAccount.subtractProductQuantity(monitor.slug, monitor.price);
    personalAccount.subtractProductQuantity(monitor.slug, monitor.price);

    expect(personalAccount.productsSums[monitor.slug]).toBe(13497)
  });

  test('Products\' quantities are not subtracted to less than 1', () => {
    personalAccount.addProductToCart(laptop);
    personalAccount.subtractProductQuantity(laptop.slug, laptop.price);
    personalAccount.subtractProductQuantity(laptop.slug, laptop.price);

    expect(personalAccount.productsQuantities[laptop.slug]).not.toBe(-1);
  });

  test('Products\' sums are calculated correctly after trying to subtract the quantity to less than 1', () => {
    personalAccount.addProductToCart(laptop);
    personalAccount.subtractProductQuantity(laptop.slug, laptop.price);
    personalAccount.subtractProductQuantity(laptop.slug, laptop.price);

    expect(personalAccount.productsSums[laptop.slug]).not.toBe(laptop.price * 3);
    expect(personalAccount.productsSums[laptop.slug]).toBe(laptop.price);
  });
})
