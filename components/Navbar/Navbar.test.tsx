import { fireEvent, render, screen } from '@testing-library/react';
import { Navbar } from 'components/Navbar/Navbar';

describe('Navbar', () => {
  test('Click event profile menu', () => {
    render(<Navbar />)

    const buttonProfile = screen.getByTestId('button-profile');
    const menu = screen.queryByTestId('menu');

    expect(menu).toHaveClass('section')
    fireEvent.click(buttonProfile)
    expect(menu).toHaveClass('section','visible')
    fireEvent.click(buttonProfile)
    expect(menu).toHaveClass('section')
  });

  test('Click event with minicart', () => {
    render(<Navbar />);

    const buttonMinicart = screen.getByTestId('button-minicart');
    const minicart = screen.getByTestId('minicart');

    expect(minicart).toHaveClass('block');
    fireEvent.click(buttonMinicart);
    expect(minicart).toHaveClass('block', 'blockVisible');
    fireEvent.click(buttonMinicart);
    expect(minicart).toHaveClass('block');
  })
})
