import personalAccount from 'store/personalAccount';
import { mockProducts } from '__mocks__/mockStoreData';

const { monitor } = mockProducts;

describe('addProductQuantity', () => {
  beforeEach(() => personalAccount.clearCart())
  test('Products\' quantities are added correctly ', () => {
    personalAccount.addProductToCart(monitor);
    personalAccount.addProductQuantity(monitor.slug, monitor.price);

    expect(personalAccount.productsQuantities[monitor.slug]).toBe(2);
  });

  test('Products\' sums are updated correctly while adding more products of the same type', () => {
    personalAccount.addProductToCart(monitor);
    personalAccount.addProductQuantity(monitor.slug, monitor.price);
    personalAccount.addProductQuantity(monitor.slug, monitor.price);

    expect(personalAccount.productsSums[monitor.slug]).toBe(13497)
  })
})
