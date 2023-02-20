export {};

describe('Checkout Flow', () => {
  beforeEach(() => cy.viewport('macbook-15'));
  it('Form validation and submission work', () => {
    cy.visit('/shoppingCart/checkout');
    cy.get('#email').type('tesla001@f');
    cy.get('#firstName').type('s');
    cy.get('#lastName').type('q');
    cy.get('#company').type('p');
    cy.get('#street2').type('asfd st');
    cy.get('#zipCode').type('Jack');
    cy.get('#country').click();
    cy.findAllByTestId('button-choose-country').eq(5).click();
    cy.get('#phoneNumber').type('hi this is me');
    cy.findByTestId('custom-address').click();
    cy.findByTestId('button-next').click();
    cy.findByTestId('email-error').should('exist');
    cy.findByTestId('firstName-error').should('exist');
    cy.findByTestId('lastName-error').should('exist');
    cy.findByTestId('company-error').should('exist');
    cy.findByTestId('street1-error').should('exist');
    cy.findByTestId('street2-error').should('exist');
    cy.findByTestId('city-error').should('exist');
    cy.findByTestId('region-error').should('exist');
    cy.findByTestId('zipCode-error').should('exist');
    cy.findByTestId('phoneNumber-error').should('exist');
    cy.get('#email').clear().type('thomasShelby001@gmail.com');
    cy.get('#firstName').clear().type('Thomas');
    cy.get('#lastName').clear().type('Shelby');
    cy.get('#company').clear().type('Amazon');
    cy.get('#street1').clear().type('75N Southern Street, Apartment 202');
    cy.get('#street2').clear().type('1234 Main Street, Apartment 101');
    cy.get('#city').clear().type('Los Angeles');
    cy.get('#region').clear().type('California');
    cy.get('#zipCode').clear().type('90001');
    cy.get('#phoneNumber').clear().type('15417543010');
    cy.findByTestId('email-error').should('not.exist');
    cy.findByTestId('firstName-error').should('not.exist');
    cy.findByTestId('lastName-error').should('not.exist');
    cy.findByTestId('company-error').should('not.exist');
    cy.findByTestId('street1-error').should('not.exist');
    cy.findByTestId('street2-error').should('not.exist');
    cy.findByTestId('city-error').should('not.exist');
    cy.findByTestId('region-error').should('not.exist');
    cy.findByTestId('zipCode-error').should('not.exist');
    cy.findByTestId('phoneNumber-error').should('not.exist');
  })
});
