export class CalculatorPage {


    click_on_number_pad(number){
        cy.get('[onclick=\'r('+ number +')\']').trigger("click")
    }

    click_on_operator(sign){
        cy.get('[onclick=\'r(\''+ sign +'\')\']').trigger("click")
    }

    click_on_addition_button(){
        cy.get('[onclick="r(\'+\')"]').trigger("click")
    }

    click_on_subtract_button(){
        cy.get('[onclick="r(\'-\')"]').trigger("click")
    }

    click_on_multipication_button(){
        cy.get('[onclick="r(\'*\')"]').trigger("click")
    }

    click_on_division_button(){
        cy.get('[onclick="r(\'/\')"]').trigger("click")
    }

    click_on_equal_sign_button(){
        cy.get('[onclick="r(\'=\')"]').trigger("click")
    }

    validateOutput(expectedValue){
        cy.get('#sciOutPut').should('include.text', expectedValue)
    }


}