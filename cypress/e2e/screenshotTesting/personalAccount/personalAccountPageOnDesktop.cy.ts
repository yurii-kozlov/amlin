export {};

describe('Personal Account', () => {
  beforeEach(() => cy.viewport('macbook-15'))
  it('Personal account Page renders correctly on Desktop', () => {
    cy.visit('/personalAccount');
    cy.wait(1000);
    cy.findByTestId('personalAccount-page').should('be.visible').compareSnapshot('personalAccountOnDesktop', 0.2);
  });
});
