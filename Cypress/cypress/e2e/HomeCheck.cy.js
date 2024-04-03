/// <reference types="cypress"/>

Cypress.on('uncaught:exception', (err, runnable) => {
    // Returning false here prevents Cypress from failing the test
    return false;
  });

it('RomeoHR', () => {
    cy.visit('http://romeohr.com')

    //cy.get('a.btn').should('have.length', 2)

    cy.get('#demoLink1').should('exist')
    cy.get('#trialButton').should('exist')

    cy.contains('The Best Human Resources Software for Small Businesses!')

    cy.contains('Get a free demo').click()
    cy.contains('Get free demo with our Experts').should('exist')
    // or
    //cy.get('h1.head-1').should('have.text', 'Get free demo with our Experts')

    cy.go('back')
    cy.contains('Start free trial now').click()
    
    cy.url().should('include', 'app.romeohr.com')

    cy.contains('Sign Up').should('exist')



})