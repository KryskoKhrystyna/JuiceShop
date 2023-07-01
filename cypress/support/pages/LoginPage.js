class LoginPage {
    visit(){
        cy.log('Open website login page');
        cy.visit('https://juice-shop-sanitarskyi.herokuapp.com/#/login');
    }

    closeWelcomeBanner() {
        cy.get('button[aria-label="Close Welcome Banner"]').click();
      }

    getAccountButton(){
        return cy.get('#navbarAccount');
    }

    getLoginButton(){
        return cy.get('button#navbarLoginButton>span');
    }

    getSubmitLoginButton(){
        return cy.get('button#loginButton');
    }
    
    getEmailField(){
        return cy.get('#email');
    }

    getPasswordField(){
        return cy.get('#password');
    }

    getLogoutButton(){
        return cy.get('button#navbarLogoutButton>span');
    }

    goToLoginForm(){
        this.getAccountButton().click();
        this.getLoginButton().click({ force: true });
    }

    goToLogout(){
        this.getAccountButton().click();
        this.getLogoutButton().click({ force: true });
    }

    submitLoginForm(email, password){
        cy.log(`Auth user with email: ${email} and pass: ${password}`);
        this.getEmailField().type(email);
        this.getPasswordField().type(password);
        this.getSubmitLoginButton().click();
    }

}

export default new LoginPage();
