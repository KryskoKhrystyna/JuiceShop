import loginPage from '../support/pages/LoginPage';
import registrationPage from '../support/pages/RegistrationPage';
import user from '../fixtures/user.json';

// it('register first time a user', () => {
//   registrationPage.navigateToRegistrationPage();
//   cy.log(`close "Welcome to OWASP Juice Shop!" modal window`);
//   cy.get('button[aria-label="Close Welcome Banner"]').click();
//   cy.log(`register a new user`);
//   registrationPage.fillRegistrationForm(
//     user.email,
//     user.password,
//     user.confirmPassword,
//     user.securityAnswer
//   );

//   cy.log('Assertion to verify successful registration');
//   cy.url().should('include', '/#/login');

//   loginPage.submitLoginForm(user.email,user.password)
// });

it('Authorization', () => {
  cy.visit('/');
  loginPage.closeWelcomeBanner();

  cy.log(`login user`);
  loginPage.goToLoginForm();
  loginPage.submitLoginForm(user.email, user.password);
  cy.log(`verify success login`);
  loginPage.getAccountButton().click();
  cy.get('button[aria-label="Go to user profile"]').contains(user.email);
})
