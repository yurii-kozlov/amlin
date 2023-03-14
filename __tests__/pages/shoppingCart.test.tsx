import { act, render, screen } from '@testing-library/react';
import ShoppingCart from 'pages/shoppingCart';
import personalAccount from 'store/personalAccount';
import { mockProducts } from '__mocks__/mockStoreData';

const { laptop, computer, monitor } = mockProducts;

describe('Shopping Cart', () => {
  beforeEach(() => personalAccount.clearCart());
  test('Shopping cart page is rendered correctly with the empty cart', () => {
    render(<ShoppingCart />);

    const emptyCartTitle = screen.getByTestId('empty-cart-title');
    const shoppingCartProductList = screen.queryByTestId('shopping-cart-product-list');

    expect(emptyCartTitle).toBeInTheDocument();
    expect(shoppingCartProductList).toBe(null);
  });

  test('Shopping cart page is rendered correctly with products in the cart', () => {
    act(() => {
      personalAccount.addProductToCart(laptop, 2);
      personalAccount.addProductToCart(monitor, 3);
      personalAccount.addProductToCart(computer, 2);
    })
    render(<ShoppingCart />);

    const emptyCartTitle = screen.queryByTestId('empty-cart-title');
    const shoppingCartProductListItems = screen.getAllByTestId('shopping-cart-item');

    expect(emptyCartTitle).toBe(null);
    expect(shoppingCartProductListItems).toHaveLength(3);
  });

  test('Shopping cart page is rendered with correct product quantities in the list', () => {
    render(<ShoppingCart />);

    act(() => {
      personalAccount.addProductToCart(laptop, 2);
      personalAccount.addProductToCart(monitor, 3);
      personalAccount.addProductToCart(computer, 2);
    });

    personalAccount.cart.forEach((productItem) => {
      const productListItem = screen.getByTestId(`product-item-${productItem.slug}`)

      expect(productListItem).toHaveTextContent(personalAccount.productsQuantities[productItem.slug].toString());
    });

  })
});
