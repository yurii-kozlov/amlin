import { act, fireEvent, render, screen } from '@testing-library/react';
import personalAccount from 'store/personalAccount';
import { OrderSummary } from 'components/Checkout/OrderSummary';
import { mockProducts } from '__mocks__/mockStoreData';

const { laptop, computer } = mockProducts

describe('OrderSummary', () => {
  beforeEach(() => personalAccount.clearCart())
  test('Correct text in the button with the empty cart', () => {
    render(<OrderSummary />);

    const buttonShowSummary = screen.getByTestId('button-show-summary');

    expect(buttonShowSummary).toHaveTextContent(/0 item in Cart/i)
  });

  test('Correct text in the button with products in the cart', () => {
    render(<OrderSummary />);
    act(() => {
      personalAccount.addProductToCart(laptop);
      personalAccount.addProductToCart(computer);
    })

    const buttonShowSummary = screen.getByTestId('button-show-summary');

    expect(buttonShowSummary).toHaveTextContent(/2 items in Cart/i)
  });

  test('List with products is visible after clicking the button showMenu', () => {
    render(<OrderSummary />);

    const buttonShowSummary = screen.getByTestId('button-show-summary');
    const listWithAddedProducts = screen.getByTestId('list-with-products');

    fireEvent.click(buttonShowSummary);
    expect(listWithAddedProducts).toHaveClass('list listVisible');
    fireEvent.click(buttonShowSummary);
    expect(listWithAddedProducts).toHaveClass('list');
  });

  test('Correct summary content with the empty cart', () => {
    render(<OrderSummary />);

    const emptyCartDescription = screen.getByTestId('empty-cart-description');

    expect(emptyCartDescription).toBeInTheDocument();
    act(() => {
      personalAccount.addProductToCart(laptop);
    });
    expect(emptyCartDescription).not.toBeInTheDocument();
  })

  test('All products in the cart are rendered correctly in the list', () => {
    render(<OrderSummary />);
    act(() => {
      personalAccount.addProductToCart(laptop);
      personalAccount.addProductToCart(computer);
    });

    const listItems = personalAccount.cart.map((productItem) => {
      const listItem = screen.getByTestId(`order-item-${productItem.slug}`);

      return listItem;
    })

    expect(listItems).toHaveLength(2);
  });

  test('Order items are rendered with correct product quantities', () => {
    render(<OrderSummary />);
    act(() => {
      personalAccount.addProductToCart(laptop, 3);
      personalAccount.addProductToCart(computer, 4);
    });


    personalAccount.cart.forEach((productItem) => {
      const orderItem = screen.getByTestId(`order-item-${productItem.slug}`);

      expect(orderItem).toHaveTextContent(String(personalAccount.productsQuantities[productItem.slug]));
    });

    act(() => {
      personalAccount.subtractProductQuantity(laptop.slug, laptop.previousPrice);
      personalAccount.subtractProductQuantity(computer.slug, computer.price);
    });

    personalAccount.cart.forEach((productItem) => {
      const orderItem = screen.getByTestId(`order-item-${productItem.slug}`);

      expect(orderItem).toHaveTextContent(String(personalAccount.productsQuantities[productItem.slug]));
    });
  })
});
