import personalAccount from 'store/personalAccount';
import { mockProducts } from '__mocks__/mockStoreData';

const { laptop, computer, monitor } = mockProducts;

test('Products are removed from the cart in a correct way', () => {
  personalAccount.addProductToCart(laptop, 2);
  personalAccount.addProductToCart(computer, 3);
  personalAccount.addProductToCart(monitor);

  personalAccount.removeProductFromCart(monitor.slug);
  personalAccount.removeProductFromCart(computer.slug);

  expect(personalAccount.cart).toHaveLength(1);
});
