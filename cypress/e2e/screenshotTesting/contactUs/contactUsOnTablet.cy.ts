export {};

describe('Contact Us', () => {
  beforeEach(() => cy.viewport('ipad-mini'));
  it('Contact us page renders correctly on Tablet', () => {
    cy.visit('/contactUs')
    cy.wait(1000);
    cy.findByTestId('contactUs-page').should('be.visible').scrollIntoView();
    cy.wait(1000);
    cy.findByTestId('contactUs-page').compareSnapshot('contactUsPageOnTablet', 0.2);
  });
});
