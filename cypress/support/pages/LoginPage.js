class LoginPage {
    visit(){
        cy.log('Open website login page');
        cy.visit('https://juice-shop-sanitarskyi.herokuapp.com/#/login');
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

    goToLoginForm(){
        this.getAccountButton().click();
        this.getLoginButton().click({ force: true });
    }

    submitLoginForm(email, password){
        cy.log(`Auth user with email: ${email} and pass: ${password}`);
        this.getEmailField().type(email);
        this.getPasswordField().type(password);
        this.getSubmitLoginButton().click();
    }

}

export default new LoginPage();

