import personalAccount from 'store/personalAccount';
import { mockProducts } from '__mocks__/mockStoreData';

const { laptop, computer, monitor, laptop2, monitor2 } = mockProducts;

describe ('Add product to Card', () => {
  beforeEach(() => personalAccount.clearCart());
  test('Chosen product is added to the cart in a correct way', () => {
    personalAccount.addProductToCart(laptop);

    expect(personalAccount.cart.length).toBe(1);
    expect(personalAccount.productsQuantities[laptop.slug]).toBe(1);
  })

  test('Chosen product is added to the cart in a correct way with correct quantities', () => {
    personalAccount.addProductToCart(laptop, 4);
    expect(personalAccount.productsQuantities[laptop.slug]).toBe(4);
    personalAccount.addProductToCart(laptop);
    personalAccount.addProductToCart(laptop, 3);
    expect(personalAccount.productsQuantities[laptop.slug]).toBe(8);
  })

  test('Adding a few products to the cart with correct quantities', () => {
    personalAccount.addProductToCart(laptop, 2);
    personalAccount.addProductToCart(laptop);
    personalAccount.addProductToCart(computer, 3);
    personalAccount.addProductToCart(monitor, 4);
    personalAccount.addProductToCart(laptop2, 6);
    personalAccount.addProductToCart(monitor2);

    expect(personalAccount.productsQuantities[laptop.slug]).toBe(3);
    expect(personalAccount.productsQuantities[computer.slug]).toBe(3);
    expect(personalAccount.productsQuantities[monitor.slug]).toBe(4);
    expect(personalAccount.productsQuantities[laptop2.slug]).toBe(6);
    expect(personalAccount.productsQuantities[monitor2.slug]).toBe(1);
  });

  test('Adding products to the cart without duplicates', () => {
    personalAccount.addProductToCart(laptop);
    personalAccount.addProductToCart(laptop, 3);
    personalAccount.addProductToCart(computer);
    personalAccount.addProductToCart(computer, 4)

    expect(personalAccount.cart.length).toBe(2);
  });

  test('Adding a product to the cart with correct price sum for the added product', () => {
    personalAccount.addProductToCart(laptop);
    personalAccount.addProductToCart(laptop, 3);
    personalAccount.addProductToCart(computer, 3)

    expect(personalAccount.productsSums[laptop.slug]).toBe(83196);
    expect(personalAccount.productsSums[computer.slug]).toBe(53568);
  })
});
