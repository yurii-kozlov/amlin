import { act, fireEvent, render, screen } from '@testing-library/react';
import personalAccount from 'store/personalAccount';
import { Minicart } from 'components/Minicart/Minicart';
import { mockProducts } from '__mocks__/mockStoreData';

const { laptop, computer, monitor, computer2 } = mockProducts;

describe('Minicart', () => {
  beforeEach(() => personalAccount.clearCart());
  test('Minicart is rendered', () => {
    render (<Minicart isMinicartVisible/>);

    const minicart = screen.getByTestId('minicart');

    expect(minicart).toBeInTheDocument();
  });

  test('Minicart is rendered correctly with an added product', () => {
    render (<Minicart isMinicartVisible/>);

    const minicartItem = screen.queryByTestId(`minicart-item-${laptop.slug}`);
    expect(minicartItem).toBe(null);
    act(() => {
      personalAccount.addProductToCart(laptop, 2);
    })
    expect(screen.getByTestId(`minicart-item-${laptop.slug}`)).toBeInTheDocument();
  });

  test('Minicart is rendered correctly with a few products', () => {
    render (<Minicart isMinicartVisible/>);
    act(() => {
      personalAccount.addProductToCart(laptop, 2);
      personalAccount.addProductToCart(computer, 2);
      personalAccount.addProductToCart(monitor, 2);
      personalAccount.addProductToCart(computer2, 2);
    })

    personalAccount.cart.forEach((product) => {
      const minicartProductItem = screen.getByTestId(`minicart-item-${product.slug}`);

      expect(minicartProductItem).toHaveTextContent(String(personalAccount.productsQuantities[product.slug]))
    })
  });

  test('Minicart is rendered correctly after deleting products from the cart', () => {
    render (<Minicart isMinicartVisible/>);
    act(() => {
      personalAccount.addProductToCart(laptop, 2);
      personalAccount.addProductToCart(computer, 2);
      personalAccount.addProductToCart(monitor, 2);
      personalAccount.addProductToCart(computer2, 2);
    })

    const buttonsDeleteProduct = screen.getAllByTestId('button-delete');

    act(() => {
      fireEvent.click(buttonsDeleteProduct[0]);
      fireEvent.click(buttonsDeleteProduct[1]);
    })

    const allAddedProducts = personalAccount.cart.map((product) => {
      const addedProductInTheList = screen.getByTestId(`minicart-item-${product.slug}`);

      return addedProductInTheList;
    })

    expect(allAddedProducts).toHaveLength(2);
  })
});
