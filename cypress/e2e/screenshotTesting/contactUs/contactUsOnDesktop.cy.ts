export {};

describe('Contact Us', () => {
  beforeEach(() => cy.viewport('macbook-15'));
  it('Contact us page renders correctly on Desktop', () => {
    cy.visit('/contactUs')
    cy.wait(1000);
    cy.findByTestId('contactUs-page').should('be.visible').scrollIntoView();
    cy.wait(1000);
    cy.findByTestId('contactUs-page').compareSnapshot('contactUsPageOnDesktop', 0.2);
  });
});
