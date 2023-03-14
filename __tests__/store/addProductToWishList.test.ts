import personalAccount from 'store/personalAccount';
import { mockProducts } from '__mocks__/mockStoreData';

const { monitor, laptop } = mockProducts;

describe('addProductToWishList', () => {
  beforeEach(() => personalAccount.clearWishList())
  test('Products are correctly added to the wishlist', () => {
    personalAccount.addProductToWishList(monitor);
    personalAccount.addProductToWishList(laptop);

    expect(personalAccount.wishList).toHaveLength(2)
  });

  test('Products are added to the wishlist without duplicates', () => {
    personalAccount.addProductToWishList(monitor);
    personalAccount.addProductToWishList(monitor);

    expect(personalAccount.wishList).toHaveLength(1)
  });
});
