export {}

describe('<ContactUs />', () => {
  beforeEach(() => cy.viewport('macbook-16'))
  it('Form validation works correctly', () => {
    cy.visit('/contactUs');
    cy.findByTestId('input-name').type('a');
    cy.findByTestId('input-email').type('examp@1023');
    cy.findByTestId('input-phoneNumber').type('Jack Thompson');
    cy.findByTestId('textarea-message').type('I would like to');
    cy.findByTestId('button-submit').click();
    cy.findByTestId('input-name-error').should('exist');
    cy.findByTestId('input-email-error').should('exist');
    cy.findByTestId('input-phoneNumber-error').should('exist');
    cy.findByTestId('textarea-message-error').should('exist');
  });

  it('Form submsission works correctly', () => {
    cy.visit('/contactUs');
    cy.findByTestId('input-name').clear().type('Jonathan Turner');
    cy.findByTestId('input-email').clear().type('jonathanBig@gmail.com');
    cy.findByTestId('input-phoneNumber').clear().type('18143008704');
    cy.findByTestId('textarea-message').clear().type('I recently purchased a laptop from this tech online shop' +
      'and I couldn\'t be happier with my experience. The website was easy to navigate, the checkout process was ' +
      'simple and secure, and the shipping was fast and reliable.' +
      'The laptop itself is high quality and exactly what I was looking for, and the customer service team was' +
      'extremely helpful and responsive when I had a question. I would definitely recommend this online shop' +
      'to anyone in the market for tech products - they offer great prices, excellent service,' +
      ' and a wide range of products to choose from. Overall, I had a fantastic experience and will' +
      'be a loyal customer for years to come.');
    cy.findByTestId('input-name-error').should('not.exist');
    cy.findByTestId('input-email-error').should('not.exist');
    cy.findByTestId('input-phoneNumber-error').should('not.exist');
    cy.findByTestId('textarea-message-error').should('not.exist');
    cy.findByTestId('button-submit').click();
  })
});
