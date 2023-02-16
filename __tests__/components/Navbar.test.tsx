import { fireEvent, render, screen } from '@testing-library/react';
import { Navbar } from 'components/Navbar';
import userEvent from '@testing-library/user-event';

describe('Navbar', () => {
  test('Click event with profile menu', () => {
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
    userEvent.click(buttonMinicart);
    expect(minicart).toHaveClass('block');
  });

})
