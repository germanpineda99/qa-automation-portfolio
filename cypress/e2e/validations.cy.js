describe('Login form validation', () => {
  beforeEach(() => {
    cy.fixture('users').as('users');
    cy.visit('/login');
  });

  it('rejects an empty username', () => {
    cy.get('@users').then((users) => {
      cy.get('#password').type(users.validUser.password);
    });
    cy.get('button[type="submit"]').click();
    cy.get('#flash').should('contain.text', 'Your username is invalid!');
  });

  it('rejects an empty password', () => {
    cy.get('@users').then((users) => {
      cy.get('#username').type(users.validUser.username);
    });
    cy.get('button[type="submit"]').click();
    cy.get('#flash').should('contain.text', 'Your password is invalid!');
  });
});
