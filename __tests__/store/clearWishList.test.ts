import personalAccount from 'store/personalAccount';
import { mockProducts } from '__mocks__/mockStoreData';

const { monitor, laptop, computer } = mockProducts;

  test('Wishlist is cleared', () => {
    personalAccount.wishList = [monitor, laptop, computer];
    personalAccount.clearWishList();

    expect(personalAccount.wishList).toHaveLength(0)
  });
