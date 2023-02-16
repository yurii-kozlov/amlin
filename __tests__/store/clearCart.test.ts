import personalAccount from 'store/personalAccount';
import { mockProducts } from '__mocks__/mockStoreData';

const { laptop, computer, laptop2 } = mockProducts;

test('Cart is empty after clearing', () => {
  personalAccount.addProductToCart(laptop, 4);
  personalAccount.addProductToCart(laptop2, 3);
  personalAccount.addProductToCart(computer);
  personalAccount.clearCart();

  expect(personalAccount.cart.length).toBe(0);
});
