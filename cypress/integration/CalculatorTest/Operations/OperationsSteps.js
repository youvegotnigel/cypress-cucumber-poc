import { Given, And } from "cypress-cucumber-preprocessor/steps"

Given('The Calculator page is loaded successfully',()=>{
    cy.visit('https://www.calculator.net/')
});

And('I click on {int}',(number)=>{
    cy.get('[onclick=\'r('+ number +')\']').trigger("click")
});

And('I get the result {int}',(expectedValue)=>{
    cy.get('#sciOutPut').should('include.text', expectedValue)
});

And('I click on plus opperator',()=>{
    cy.get('[onclick="r(\'+\')"]').trigger("click")
});

And('I click on minus opperator',()=>{
    cy.get('[onclick="r(\'-\')"]').trigger("click")
});

And('I click on divide opperator',()=>{
    cy.get('[onclick="r(\'/\')"]').trigger("click")
});

And('I click on multiply opperator',()=>{
    cy.get('[onclick="r(\'*\')"]').trigger("click")
});

