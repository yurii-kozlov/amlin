import personalAccount from 'store/personalAccount';
import { mockProducts } from '__mocks__/mockStoreData';

const { laptop, computer, monitor } = mockProducts;

describe('getTotalCountOfAddedProducts', () => {
  test('Correct quantity of added products in the cart', () => {
    personalAccount.addProductToCart(laptop, 3);
    personalAccount.addProductToCart(computer, 5);
    personalAccount.addProductToCart(monitor, 2);

    expect(personalAccount.totalCountOfAddedProducts).toBe(10)

    personalAccount.subtractProductQuantity(laptop.slug, laptop.price);
    personalAccount.subtractProductQuantity(computer.slug, computer.price);

    expect(personalAccount.totalCountOfAddedProducts).toBe(8);

    personalAccount.removeProductFromCart(laptop.slug);
    personalAccount.removeProductFromCart(computer.slug);

    expect(personalAccount.totalCountOfAddedProducts).toBe(2);
  })
})
