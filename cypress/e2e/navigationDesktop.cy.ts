import { navigationList } from 'constants/navigationList';

describe('Navigation on Desktop', () => {
  beforeEach(() => cy.viewport('macbook-13'));

  it('Navigation works correctly on desktop', () => {
    cy.visit('/');
    cy.findByTestId('link-to-register-page').click();
    cy.url().should('eq', 'http://localhost:3000/register');
    cy.findByTestId('register-page').should('exist');

    navigationList.forEach((page) => {
      const { route } = page;

      cy.findByTestId(`link-to-${route.slice(1)}-page`).click();
      cy.url().should('eq', `http://localhost:3000${route}`);
      cy.findByTestId(`link-to-${route.slice(1)}-page`).should('exist');
    });
  });
});
