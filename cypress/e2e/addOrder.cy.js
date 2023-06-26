import { addOrder } from '../support/helpers/helper';
import loginPage from '../support/pages/LoginPage';
import { findProduct } from '../support/helpers/helper';
import user from '../fixtures/user.json';

describe('add order', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.get('button[aria-label="Close Welcome Banner"]').click();
        loginPage.goToLoginForm();
        loginPage.submitLoginForm(user.email, user.password);
    });

    it('places an order', () => {
        const productName = 'Woodruff Syrup "Forest Master X-Treme"';
        findProduct(productName);
        addOrder();

    cy.log(`checking the found product with search field`);
        cy.get('input[type="text"].mat-input-element').invoke('val').then(productName1 => {
            cy.get('mat-cell[role="cell"].mat-column-product').invoke('text').should(productName => {
                expect(productName1.trim()).to.equal(productName.trim());
                });
            });
    });

    it('delete an order', () => {
    cy.contains('span[fxshow=""]', 'Your Basket').click();
    cy.get('button.mat-icon-button').find('svg[data-icon="trash-alt"]').click();
    cy.log(`checking the price 0`);
    cy.get('div#price').should('be.visible').contains('Total Price: 0¤');
    });

    it('logout', () => {
    loginPage.goToLogout();
    cy.log(`log out`);
    loginPage.getAccountButton().click();
    loginPage.getLoginButton().should('be.visible')
    });
});
