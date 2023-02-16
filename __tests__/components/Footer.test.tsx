import { render, screen } from '@testing-library/react';

import { Footer } from 'components/Footer/Footer';

describe('Footer', () => {
  test('Renders a header', () => {
    render(<Footer />);
    const headerElement = screen.getByText(/Sign Up To Our Newsletter./i)
    expect(headerElement).toMatchSnapshot();
  })
});
