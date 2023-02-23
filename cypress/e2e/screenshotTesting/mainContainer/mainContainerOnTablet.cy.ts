export {};

describe('Main Container', () => {
  beforeEach(() => cy.viewport('ipad-mini'));
  it('Navbar is rendered correctly on Tablet and Mobile', () => {
    cy.visit('/contactUs');
    cy.wait(1000);
    cy.findByTestId('header').should('exist').compareSnapshot('headerOnTablet', 0.2);
    cy.wait(1000);
    cy.findByTestId('services').scrollIntoView().should('be.visible');
    cy.wait(1000);
    cy.findByTestId('header').scrollIntoView();
    cy.wait(2000);
    cy.findByTestId('services').scrollIntoView();
    cy.wait(2000);
    cy.findByTestId('footer').scrollIntoView().should('be.visible').compareSnapshot('footerOnTablet', 0.2);
    cy.findByTestId('services').should('be.visible').compareSnapshot('servicesOnTablet', 0.2);
  } )
});

