import personalAccount from 'store/personalAccount';
import { mockProducts } from '__mocks__/mockStoreData';

const { monitor, laptop, computer } = mockProducts;

  test('Products are removed correctly from the wishlist', () => {
    personalAccount.wishList = [monitor, laptop, computer];

    personalAccount.removeProductFromWishList(monitor.slug);
    personalAccount.removeProductFromWishList(computer.slug);

    expect(personalAccount.wishList).toHaveLength(1)
  });

