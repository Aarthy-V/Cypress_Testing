/// <reference types="cypress"/>

Cypress.on('uncaught:exception', (err, runnable) => {
    // Returning false here prevents Cypress from failing the test
    return false;
  });

describe('Romeo Employee fields', () =>{

  beforeEach(() => {
    cy.fixture('credentials').as('credentials');
  });

  it('RomeoHR login', function() {

        cy.visit('https://app.romeohr.com/#/signup')
    
    
        cy.get('l.svelte-1jv5ire').should('exist')
        cy.get('l.svelte-1jv5ire').click()
        cy.contains('Log In').should('exist')
    
        cy.wait(1000);

        cy.get('input[name="email"]').type(this.credentials.email)
        cy.wait(1000);
        cy.get('input[name="password"]').type(this.credentials.password)
        cy.wait(1000);

        // Login button
        cy.get('button.login.svelte-en5o3').should('exist')
        cy.get('button.login.svelte-en5o3').click()
        cy.wait(2000);



        cy.get('i.bx.bx-cog.svelte-1jty5wc').click();
        cy.wait(2000);

        
        cy.get('.link p.mb-0:contains("Employee Fields")', { timeout: 10000 } ).click();

        cy.get('p.mb-0:contains("Degree")', { timeout: 10000 }).should('exist'); // Degree


        // POST
        cy.intercept('POST', 'https://api.romeohr.com/app/v1/ba3f342f-faba-46c7-86c3-0b7539d18bf8/settings/employee-feilds/degree').as('postDegree')
        cy.get('input.form-control.svelte-1jltxdo').should('exist'); // text box
        cy.wait(1000);
        cy.get('input.form-control.svelte-1jltxdo').type('test'); // fill it

        cy.get('span.input-group-text.svelte-1jltxdo').should('exist'); // add button
        cy.wait(1000);
        cy.get('span.input-group-text.svelte-1jltxdo').click(); // click add
        
      
        cy.wait('@postDegree')
        cy.get('@postDegree').then(xhr =>{
          console.log(xhr)
          expect(xhr.response.statusCode).to.equal(200)
          expect(xhr.request.body.name).to.equal('test')
          expect(xhr.response.body.description).to.equal('success')
        })


  })




})