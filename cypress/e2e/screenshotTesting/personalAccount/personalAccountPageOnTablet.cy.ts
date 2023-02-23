export {};

describe('Personal Account', () => {
  beforeEach(() =>cy.viewport('ipad-mini') )
  it('Personal account Page renders correctly on Tablet', () => {
    cy.visit('/personalAccount');
    cy.wait(1000);
    cy.findByTestId('personalAccount-page').should('be.visible').compareSnapshot('personalAccountOnTablet', 0.2);
  });
});
