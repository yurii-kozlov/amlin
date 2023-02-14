import { screen, render, fireEvent } from '@testing-library/react';

import { Header } from 'components/Header/Header';

describe('Header', () => {
  test('Click event with profile menu', () => {
    render(<Header />)
    const buttonProfile = screen.getByTestId('profile-button');
    const profileMenu = screen.getByTestId('menu');

    expect(profileMenu).toHaveClass('section');
    fireEvent.click(buttonProfile);
    expect(profileMenu).toHaveClass('section', 'visible');
    fireEvent.click(buttonProfile);
    expect(profileMenu).toHaveClass('section')
  });

  test('Click event with minicart', () => {
    render(<Header />);

    const buttonMinicart = screen.getByTestId('minicart-button');
    const minicart = screen.getByTestId('minicart')

    expect(minicart).toHaveClass('block');
    fireEvent.click(buttonMinicart);
    expect(minicart).toHaveClass('block', 'blockVisible')
    fireEvent.click(buttonMinicart);
    expect(minicart).toHaveClass('block');
  })

  test('Click event with navigation menu', () => {
    render(<Header />)

    const buttonNavigationMenu = screen.getByTestId('button-navigation');
    const navigationMenu = screen.getByTestId('navigation-menu');

    expect(navigationMenu).toHaveClass('section');
    fireEvent.click(buttonNavigationMenu);
    expect(navigationMenu).toHaveClass('section', 'sectionVisible');
    fireEvent.click(buttonNavigationMenu);
    expect(navigationMenu).toHaveClass('section');
  })
});
