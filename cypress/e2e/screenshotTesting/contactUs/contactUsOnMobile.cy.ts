export {};

describe('Contact Us', () => {
  beforeEach(() => cy.viewport('iphone-xr'));
  it('Contact us page renders correctly on Mobile', () => {
    cy.visit('/contactUs')
    cy.wait(1000);
    cy.findByTestId('contactUs-page').should('be.visible').scrollIntoView();
    cy.wait(1000);
    cy.findByTestId('contactUs-page').compareSnapshot('contactUsPageOnMobile', 0.2);
  });
});
