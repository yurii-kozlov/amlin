import personalAccount from 'store/personalAccount';
import { mockProducts } from '__mocks__/mockStoreData';

const { laptop, computer, laptop2 } = mockProducts;

test('Cart is empty after clearing', () => {
  personalAccount.cart = [laptop, computer, laptop2]
  personalAccount.clearCart();

  expect(personalAccount.cart.length).toBe(0);
});
