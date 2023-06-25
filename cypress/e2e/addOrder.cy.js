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
});
