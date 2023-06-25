class RegistrationPage {
    getNewEmailField() {
      return cy.get('#emailControl');
    }
  
    getNewPasswordField() {
      return cy.get('#passwordControl');
    }
  
    getConfirmPasswordField() {
      return cy.get('#repeatPasswordControl');
    }
  
    getOpenQuestionDropDownList() {
        return cy.get('div.mat-select-arrow');
      }
    
    getAnswerField() {
      return cy.get('#securityAnswerControl');
    }
  
    getRegisterButton() {
      return cy.get('button#registerButton');
    }
  
    navigateToRegistrationPage() {
      cy.visit('/#/register');
    }
  
    fillRegistrationForm(email, password, confirmPassword, answer) {
        cy.log(`Filling out the registration form`);

        this.getNewEmailField().type(email);
        this.getNewPasswordField().type(password);
        this.getConfirmPasswordField().type(confirmPassword);
        this.getOpenQuestionDropDownList().click(); 
        cy.contains('span.mat-option-text', 'Your eldest siblings middle name?').click();
        this.getAnswerField().type(answer);
        this.getRegisterButton().click();
      }
  
  }
  
  export default new RegistrationPage();
  