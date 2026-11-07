describe('Public demo logout', () => {
  beforeEach(() => {
    cy.fixture('users').as('users');
    cy.visit('/login');
  });

  it('logs out from a valid session', () => {
    cy.get('@users').then((users) => {
      cy.login(users.validUser.username, users.validUser.password);
    });
    cy.location('pathname').should('eq', '/secure');
    cy.contains('a', 'Logout').click();
    cy.location('pathname').should('eq', '/login');
    cy.get('#flash').should('contain.text', 'You logged out of the secure area!');
  });
});
