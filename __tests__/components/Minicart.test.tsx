import personalAccount from 'store/personalAccount';
import { mockProducts } from '__mocks__/mockStoreData';
import { Minicart } from 'components/Minicart/Minicart';
import { act, fireEvent, render, screen } from '@testing-library/react';

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

    const product = screen.queryByTestId('minicart-item');
    expect(product).toBe(null);
    act(() => {
      personalAccount.addProductToCart(laptop, 2);
    })
    expect(screen.getByTestId('minicart-item')).toBeInTheDocument();
  });

  test('Minicart is rendered correctly with a few products', () => {
    render (<Minicart isMinicartVisible/>);
    act(() => {
      personalAccount.addProductToCart(laptop, 2);
      personalAccount.addProductToCart(computer, 2);
      personalAccount.addProductToCart(monitor, 2);
      personalAccount.addProductToCart(computer2, 2);
    })

    const allAddedProducts = screen.getAllByTestId('minicart-item');

    expect(allAddedProducts).toHaveLength(4);
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

    const allAddedProducts = screen.getAllByTestId('minicart-item');

    expect(allAddedProducts).toHaveLength(2);
  })
});
