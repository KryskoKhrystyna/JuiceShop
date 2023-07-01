import { findProduct } from '../support/helpers/helper';

describe('Find a product on the page', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.get('button[aria-label="Close Welcome Banner"]').click();
    });

    it('search for a product', () => {
        const productName = 'Woodruff Syrup "Forest Master X-Treme"';

        findProduct(productName);
        cy.log(`checking the found product`);
        cy.get('#searchValue').invoke('text').then(productName1 => {
            cy.get('.item-name').invoke('text').should(productName => {
                expect(productName1.trim()).to.equal(productName.trim());
            });
        });
    });

    it('search for a non-existent product', () => {
        const productName = 'Text Master X-Treme';
        const result = 'No results found'

        findProduct(productName);
        cy.log(`checking the found product`);
        cy.get(`.noResultText`).eq(1).should('be.visible');
        cy.get('#searchValue').invoke('text').then(productName1 => {
            cy.get('.noResultText').eq(1).invoke('text').should(result => {
                expect(productName1.trim()).not.to.equal(result.trim());
            });
        });
    });
});
