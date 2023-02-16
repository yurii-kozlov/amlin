import personalAccount from 'store/personalAccount';
import { mockProducts } from '__mocks__/mockStoreData';

const { laptop, computer, monitor } = mockProducts;

  test('Correct sum of the order', () => {
  personalAccount.addProductToCart(laptop, 3);
  personalAccount.addProductToCart(computer, 5);
  personalAccount.addProductToCart(monitor, 2);

  expect(personalAccount.totalOrderSum).toBe(160675);

  personalAccount.subtractProductQuantity(laptop.slug, laptop.price);
  personalAccount.subtractProductQuantity(computer.slug, computer.price);

  expect(personalAccount.totalOrderSum).toBe(122020);

  personalAccount.removeProductFromCart(laptop.slug);
  personalAccount.removeProductFromCart(computer.slug);

  expect(personalAccount.totalOrderSum).toBe(8998);
  });
