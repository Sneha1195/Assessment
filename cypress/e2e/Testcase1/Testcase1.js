import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";

 

Given('Visit website', () => {

  cy.visit("https://www.saucedemo.com/")

  cy.viewport(1800, 900)

  })

    
  Then('Verify the Title of website', () => {

    cy.title().should('eq', 'Swag Labs')

    })

    When('Enter correct username and invalid password', () => {

      cy.get('#user-name').type('standard_user')

      cy.get('#password').type('secret_sauce12')

     })

    And('Click on the Login button', () => {

      cy.get('#login-button').click().wait(5000)

    })

    Then('Verify password validation message', () => {

      cy.get('[data-test="error"]').should('have.text','Epic sadface: Username and password do not match any user in this service')

    })

    

    

 
