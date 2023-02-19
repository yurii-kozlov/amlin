import { E2EtestingProducts } from 'cypress/testingData/E2EtestingData';

const { slug: laptopSlug } = E2EtestingProducts.laptop;
const { slug: computerSlug } = E2EtestingProducts.computer;

describe('Minicart flow', () => {
  beforeEach(() => cy.viewport('macbook-13'))
  it('It allows to add (with correct quantities and sums) and delete products from minicart ', () => {
    cy.visit('/');
    cy.findByTestId(`product-cart-${laptopSlug}`).should('exist');
    cy.findByTestId(`product-cart-${laptopSlug}`).trigger('mouseover')
      .findByTestId(`product-addToCard-${laptopSlug}`).invoke('show').click().click();
    cy.findByTestId(`product-cart-${computerSlug}`).trigger('mouseover')
      .findByTestId(`product-addToCard-${computerSlug}`).invoke('show').click();
    cy.findByTestId('all-products-quantity').should('have.text', '3');
    cy.findByTestId('button-minicart').click();
    cy.findAllByTestId('minicart').eq(1).invoke('attr', 'class').should('include', 'blockVisible');
    cy.findAllByTestId('product-quantity').eq(1).should('have.text', '3 items in cart');
    cy.findAllByTestId(`minicart-item-quantity-${laptopSlug}`).eq(1).should('have.text', '2');
    cy.findAllByTestId(`minicart-item-quantity-${computerSlug}`).eq(1).should('have.text', '1');
    cy.get(`#button-delete-${computerSlug}`).click({ force: true });
    cy.findByTestId('all-products-quantity').should('have.text', '2');
    cy.get(`#button-delete-${laptopSlug}`).click({ force: true })
    cy.findByTestId('all-products-quantity').should('have.text', '0');
    cy.findByTestId('button-minicart').click();
    cy.findAllByTestId('minicart').eq(1).invoke('attr', 'class').should('not.include', 'blockVisible');
  });
});
