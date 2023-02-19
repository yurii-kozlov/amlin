export {};

context('Home Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('Header is rendered correctly', () => {
    cy.findByTestId('header').should('exist');
  });
});
