import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";

 

Given('Visit website', () => {

  cy.visit("https://www.saucedemo.com/")

  cy.viewport(1800, 900)

  })

    
  Then('Verify the Title of website', () => {

    cy.title().should('eq', 'Swag Labs')

    })

    When('Enter correct username and valid password', () => {

      cy.get('#user-name').type('standard_user')

      cy.get('#password').type('secret_sauce')

     })

    And('Click on the Login button', () => {

      cy.get('#login-button').click()

      cy.wait(5000)

    })

    Then('Add a product to cart', () => {

        cy.get('#add-to-cart-sauce-labs-backpack').click().wait(2000)

    })

    Then('Do checkout via cart page', () => {

        cy.get('[data-test="shopping-cart-link"]').click().wait(2000)

        cy.get('#checkout').click()

    })

    Then('Fill in all required information', () => {

        cy.get('#first-name').type('Sneha')
        cy.get('#last-name').type('Muthineni')
        cy.get('#postal-code').type('122001')
        cy.get('#continue').click().wait(1000)

    })

    Then('Finish Checkout', () => {

        cy.get('#finish').click().wait(1000)

    })

    Then('Verify checkout is completed', () => {

        cy.get('[data-test="title"]').should('have.text', 'Checkout: Complete!')

    })

    Then('Verify order dispatched message', () => {

        cy.get('[data-test="complete-text"]').should('have.text', 'Your order has been dispatched, and will arrive just as fast as the pony can get there!')

    })