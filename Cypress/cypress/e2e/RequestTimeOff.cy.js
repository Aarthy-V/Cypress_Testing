/// <reference types="cypress"/>

Cypress.on('uncaught:exception', (err, runnable) => {
    // Returning false here prevents Cypress from failing the test
    return false;
  });

describe('Romeo', () =>{
    beforeEach(() => {
        cy.fixture('credentials').as('credentials');
      });


      it('RomeoHR login', function() {

        cy.visit('https://app.romeohr.com/#/signup')
    
    
        cy.get('l.svelte-1jv5ire').should('exist')
        cy.get('l.svelte-1jv5ire').click()
        cy.contains('Log In').should('exist')
    
        cy.wait(2000);

        cy.get('input[name="email"]').type(this.credentials.email)
        cy.wait(2000);
        cy.get('input[name="password"]').type(this.credentials.password)
        cy.wait(2000);

        // Login button
        cy.get('button.login.svelte-en5o3').should('exist')
        cy.get('button.login.svelte-en5o3').click()
        cy.wait(2000);

        // Request Time-Off
        cy.get('button.request-btn.svelte-1ee3na5').should('exist')
        cy.get('button.request-btn.svelte-1ee3na5').click()
        cy.wait(2000);

        cy.get('h3.mb-0.ps-1.fw-bold').contains('Request Time Off').should('exist')

        // details of days
        cy.get('p.svelte-2ldojz:contains("Vacation")', { timeout: 10000 }).should('exist');
        cy.get('small.svelte-2ldojz:contains("10 days available")').should('exist');
        cy.wait(2000);

        cy.get('p.svelte-2ldojz:contains("Sick")', {timeout: 10000}).should('exist');
        cy.get('small.svelte-2ldojz:contains("14 days available")').should('exist');
        cy.wait(2000);

        cy.get('p.svelte-2ldojz:contains("COVID-19 Absence")', {timeout: 10000}).should('exist');
        cy.get('small.svelte-2ldojz:contains("0 days used")').should('exist');
        cy.wait(2000);

        cy.get('p.svelte-2ldojz:contains("Berevement")', {timeout: 10000}).should('exist');
        cy.get('small.svelte-2ldojz:contains("0 days used")').should('exist');
        cy.wait(2000);

        cy.get('p.svelte-2ldojz:contains("Comp/In Lieu Time")', {timeout: 10000}).should('exist');
        cy.get('small.svelte-2ldojz:contains("0 days used")').should('exist');
        cy.wait(2000);

        cy.get('p.svelte-2ldojz:contains("FMLA")', {timeout: 10000}).should('exist');
        cy.get('small.svelte-2ldojz:contains("0 days used")').should('exist');
        cy.wait(2000);

        ////////////////////////////////////
        cy.wait(2000);
        cy.get('input[type="date"].form-control.global_input.svelte-2ldojz').should('exist') // start date
        cy.get('input[type="date"].form-control.global_input.svelte-2ldojz#dateto[disabled]').should('exist') // finish date

        cy.wait(2000);
        cy.get('button.btn.dropdown-toggle.svelte-1hl1gzh').should('exist') // time off type
        cy.get('textarea.form-control.global_input.svelte-2ldojz#exampleInput').should('exist') // note

        const specificDate = '2024-03-07'
        cy.wait(2000);
        cy.get('input[type="date"].form-control.global_input.svelte-2ldojz#from').type(specificDate).should('have.value', specificDate)
        cy.wait(2000);
        cy.get('input[type="date"].form-control.global_input.svelte-2ldojz#dateto').type(specificDate).should('have.value', specificDate)

        cy.wait(2000);
        cy.get('button.btn.dropdown-toggle.svelte-1hl1gzh').click()
        cy.get('.dropdown-menu', { timeout: 10000 }) .should('be.visible')

        cy.wait(10000).contains('.dropdown-menu li', 'Vacation', { timeout: 30000 }).click()

        cy.wait(2000);
        cy.get('input[type="radio"][value="' + '0.5' + '"]').check().should('be.checked') // autofill radio button

        cy.wait(2000);
        cy.get('textarea#exampleInput').type('Immediate leave approval').should('have.value', 'Immediate leave approval') // autofill text area


        cy.get('button.btn.svelte-1vdy8rt').should('exist') // send req
        cy.wait(2000);
        cy.get('button.btn.svelte-1vdy8rt').click()


        // popup 
        cy.get('.estimateTime_body .message').should('exist');
        cy.get('.estimateTime_body .request_details').should('exist');
        cy.get('.estimateTime_body .req_item').should('exist');
        cy.get('.estimateTime_body .req_item_balnce').should('exist');
        cy.get('.estimateTime_body button:contains("Cancel")').should('exist');
        cy.get('.estimateTime_body button:contains("Send Request")').should('exist');
   
    })
})

