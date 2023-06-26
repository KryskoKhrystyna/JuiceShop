export function findProduct(productName) {
    cy.get('mat-icon.mat-search_icon-search').type(productName);
    cy.get('#mat-input-0').type('{enter}');
}

export function addOrder() {
    cy.log(`add products to cart`) 
    cy.get('button.mat-raised-button.btn-basket[aria-label="Add to Basket"]').each((product) => {
        cy.wrap(product).click();
    });
    cy.get('button.mat-button[aria-label="Show the shopping cart"]').click();
    cy.get('.checkout-button').click();
    cy.get(`button.mat-raised-button[aria-label="Add a new address"]`).click();

    cy.log('Fill in additional information');
    cy.get('input.mat-input-element.mat-form-field-autofill-control').eq(1).type('Ukraine');
    cy.get('input.mat-input-element.mat-form-field-autofill-control').eq(2).type('TEST');
    cy.get('input.mat-input-element.mat-form-field-autofill-control').eq(3).type('123456789');
    cy.get('input.mat-input-element.mat-form-field-autofill-control').eq(4).type('12369');
    cy.get('#address').type('Test34');
    cy.get('input.mat-input-element.mat-form-field-autofill-control').eq(5).type('SomeText');
    cy.get('input.mat-input-element.mat-form-field-autofill-control').eq(6).type('SomeText1');
    
    cy.get('#submitButton').click();

    cy.get('mat-radio-button.mat-radio-button.mat-accent').first().click();
    cy.get('div#card>app-address>mat-card>button').click();
    cy.get('mat-radio-button.mat-radio-button.mat-accent').first().click();
    cy.get(`button[aria-label='Proceed to delivery method selection']`).click();
    
    cy.log(`add payment card`) 
    cy.get(`span.mat-expansion-indicator`).first().click();
    cy.get('div.mat-form-field-infix input.mat-input-element').eq(1).type('Ukraine');
    cy.get('div.mat-form-field-infix input.mat-input-element').eq(2).type('1234567789888455');
    cy.get('select.mat-input-element').eq(0).select('4'); 
    cy.get('select.mat-input-element').eq(1).select('2099'); 


    cy.get('#submitButton').click();
    cy.get('mat-radio-button.mat-radio-button.mat-accent').first().click();
    cy.get('button[aria-label="Proceed to review"]').click();

    cy.log(`Verify the order confirmation`)  
    cy.get('.order-summary').should('be.visible');
    
}
