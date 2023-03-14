export {};

describe('Main Container', () => {
  beforeEach(() => cy.viewport('macbook-15'));
  it('Navbar is rendered correctly on Descktop', () => {
    cy.visit('/contactUs');
    cy.wait(1000);
    cy.findByTestId('navbar').should('exist').compareSnapshot('navbarOnDesktop', 0.2);
    cy.wait(1000);
    cy.findByTestId('header').should('exist').compareSnapshot('headerOnDesktop', 0.2);
    cy.wait(1000);
    cy.findByTestId('services').scrollIntoView().should('be.visible');
    cy.wait(1000);
    cy.findByTestId('header').scrollIntoView();
    cy.wait(2000);
    cy.findByTestId('services').scrollIntoView();
    cy.wait(2000);
    cy.findByTestId('footer').should('be.visible').compareSnapshot('footerOnDesktop', 0.2);
    cy.findByTestId('services').should('be.visible').compareSnapshot('servicesOnDesktop', 0.2);
  } )
});

