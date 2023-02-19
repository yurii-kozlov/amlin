import { E2EtestingProducts } from 'cypress/testingData/E2EtestingData';

const { slug: laptopSlug } = E2EtestingProducts.laptop;
const { slug: computerSlug } = E2EtestingProducts.computer;

describe('Ordering', () => {
  beforeEach(() => cy.viewport('macbook-13'));

  it('Ordering work correctly', () => {
    cy.visit('/');
    cy.findByTestId(`product-cart-${laptopSlug}`).should('exist');
    cy.findByTestId(`product-cart-${laptopSlug}`).trigger('mouseover')
      .findByTestId(`product-addToCard-${laptopSlug}`).invoke('show').click().click();
    cy.findByTestId(`product-cart-${computerSlug}`).trigger('mouseover')
      .findByTestId(`product-addToCard-${computerSlug}`).invoke('show').click();
    cy.findByTestId('all-products-quantity').should('have.text', '3');
    cy.findByTestId('new-products').scrollIntoView();
    cy.findByTestId('computers-filter').scrollIntoView().click();
    cy.findAllByTestId(`link-to-${computerSlug}`).eq(1).click();
    cy.findByTestId('specs-button').click({ force: true });
    cy.findByTestId('details-button').click({ force: true });
    cy.findByTestId('aboutProduct-button').click({ force: true });
    cy.findByTestId('add-quantity-button').click({ force: true }).click({ force: true });
    cy.findByTestId('subtract-quantity-button').click({ force: true });
    cy.findByTestId('add-to-cart-button').click({ force: true });
    cy.findByTestId('button-minicart').click();
    cy.findAllByTestId('link-to-shoppingCart').eq(1).click();
    cy.url().should('eq', 'http://localhost:3000/shoppingCart');
    cy.findByTestId('shoppingCart-page').should('exist');
    cy.findAllByTestId('shoppingCart-item').should('have.length', 2);
    cy.findByTestId(`button-ad-product-quantity-${computerSlug}`).click().click();
    cy.findByTestId(`button-subtract-product-quantity-${computerSlug}`).click();
    cy.findByTestId(`button-remove-product-${computerSlug}`).click();
    cy.findAllByTestId('shoppingCart-item').should('have.length', 1);
    cy.findByTestId('clear-cart-button').click();
    cy.findAllByTestId('shoppingCart-item').should('not.exist');
  })
});
