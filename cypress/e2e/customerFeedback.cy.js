describe('Customer Feedback Test', () => {
    beforeEach(() => {
        cy.visit('/#/contact');
        cy.get('button[aria-label="Close Welcome Banner"]').click();
    })

    it('customer feedback successfully', () => {
        const feedback = 'This is my feedback for the Juice Shop.'

        cy.get('#comment').type(feedback);
        cy.log('move slider')
        const currentValue = 0;
        const targetValue = 5;
        const increment = 2;
        const steps = (targetValue - currentValue) / increment;
        const arrows = '{rightarrow}'.repeat(steps);

        cy.get('#rating')
            .should('have.attr', 'aria-valuenow', 0)
            .type(arrows)

        cy.log('count data')
        cy.get('#captcha').invoke('text').then((captchaCode) => {
            const result = eval(captchaCode);

            cy.get('#captchaControl').type(result.toString());
        });

        cy.get('#submitButton').click();

        cy.log('check feedback is passed');
        cy.get('span.mat-simple-snack-bar-content')
            .should('be.visible')
            .and('contain', 'Thank you so much for your amazing 5-star feedback!', { timeout:60000  });
    })
})
