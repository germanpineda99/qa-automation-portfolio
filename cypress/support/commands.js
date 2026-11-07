Cypress.Commands.add('login', (username, password) => {
  cy.get('#username').should('be.visible').type(username);
  cy.get('#password').should('be.visible').type(password);
  cy.get('button[type="submit"]').should('be.visible').click();
});
