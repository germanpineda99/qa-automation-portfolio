describe('Public demo authentication', () => {
  beforeEach(() => {
    cy.fixture('users').as('users');
    cy.visit('/login');
  });

  it('logs in with published demo credentials', () => {
    cy.get('@users').then((users) => {
      cy.login(users.validUser.username, users.validUser.password);
    });

    cy.location('pathname').should('eq', '/secure');
    cy.get('#flash').should('contain.text', 'You logged into a secure area!');
  });

  it('rejects an invalid password', () => {
    cy.get('@users').then((users) => {
      cy.get('#username').type(users.validUser.username);
      cy.get('#password').type(users.invalidUser.password);
      cy.get('button[type="submit"]').click();
    });
    cy.get('#flash').should('contain.text', 'Your password is invalid!');
    cy.location('pathname').should('eq', '/login');
  });
});
