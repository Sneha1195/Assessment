import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";

 

Given('Visit website', () => {

  cy.visit("https://www.saucedemo.com/")

  cy.viewport(1800, 900)

  })

    
  Then('Verify the Title of website', () => {

    cy.title().should('eq', 'Swag Labs')

    })

    When('Enter correct username and valid password', () => {

      cy.get('#user-name').type('standard_user').wait(2000)

      cy.get('#password').type('secret_sauce').wait(2000)

     })

    And('Click on the Login button', () => {

      cy.get('#login-button').click()

      cy.wait(5000)

    })

    Then('Click on the Filter dropdown and Select Price (low to high)', () => {

      cy.get('select[data-test="product-sort-container"]').select('Price (low to high)',{force: true})

    })

    Then('Add the first listed product to cart', () => {

      cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click().wait(2000)

    })

    Then('Add the last listed product to cart', () => {

      cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click().wait(2000)

    })

    Then('Go to Shopping Cart', () => {

      cy.get('[data-test="shopping-cart-link"]').click().wait(2000)

    })

    Then('Verify both products description on cart page', () => {

      cy.get('[data-test="item-2-title-link"] > [data-test="inventory-item-name"]').should('have.text','Sauce Labs Onesie')
      cy.get(':nth-child(3) > .cart_item_label > [data-test="inventory-item-desc"]').contains("Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel.")

      cy.get('[data-test="item-5-title-link"] > [data-test="inventory-item-name"]').should('have.text','Sauce Labs Fleece Jacket')
      cy.get(':nth-child(4) > .cart_item_label > [data-test="inventory-item-desc"]').contains("It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office.")

    })

    Then('Verify both products price on cart page', () => {

      cy.get(':nth-child(3) > .cart_item_label > .item_pricebar > [data-test="inventory-item-price"]').contains("$7.99")

      cy.get(':nth-child(4) > .cart_item_label > .item_pricebar > [data-test="inventory-item-price"]').contains("$49.99")

    })

