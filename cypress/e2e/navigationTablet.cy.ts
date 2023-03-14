import { navigationList } from 'constants/navigationList';

describe('Navigation on Tablet', () => {
  beforeEach(() => cy.viewport('ipad-mini'));

  it('Navigation works correctly on tablet and mobile', () => {
    cy.visit('/');
    navigationList.forEach((page) => {
      const { name, route } = page;

      cy.findByTestId('button-navigation').click();
      cy.findByTestId('navigation-menu').invoke('attr', 'class').should('include', 'sectionVisible');
      cy.findByTestId(`${name.toLowerCase()}-page-link`).click();
      cy.url().should('eq', `http://localhost:3000${route}`);
      cy.findByTestId(`${route.slice(1)}-page`).should('exist');
    })
  });
});
