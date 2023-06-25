import {faker} from '@faker-js/faker';
import registrationPage from '../support/pages/RegistrationPage';
import loginPage from '../support/pages/LoginPage';
import user from '../fixtures/user.json';


describe('User Registration', () => {
  beforeEach(() => {
    user.email = faker.internet.email();
    user.password = faker.internet.password({ length: 20 });
    user.confirmPassword = user.password;
    user.securityAnswer = faker.lorem.word();
  });

  it('register a new user', () => {
    registrationPage.navigateToRegistrationPage();
    cy.log(`close "Welcome to OWASP Juice Shop!" modal window`);
    cy.get('button[aria-label="Close Welcome Banner"]').click();
    cy.log(`register a new user`);
    registrationPage.fillRegistrationForm(
      user.email,
      user.password,
      user.confirmPassword,
      user.securityAnswer
    );

    cy.log('Assertion to verify successful registration');
    cy.url().should('include', '/#/login');

    loginPage.submitLoginForm(user.email,user.password)
  });

});
