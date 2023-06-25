import loginPage from '../support/pages/LoginPage';
import user from '../fixtures/user.json';

it('Authorization', () => {
  cy.visit('/#/');
  cy.log(`close "Welcome to OWASP Juice Shop!" modal window`);
  cy.get('button[aria-label="Close Welcome Banner"]').click();
  cy.log(`login user`);
  loginPage.goToLoginForm();
  loginPage.submitLoginForm(user.email, user.password);
  cy.log(`verify success login`);
  loginPage.getAccountButton().click();
  cy.get('button[aria-label="Go to user profile"]').contains(user.email);
})
