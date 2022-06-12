/// <reference types="cypress" />

import { BasePage } from "../../page-objects/base-page"
import { CalculatorPage } from "../../page-objects/calcultor-page"


describe('Test Calculator Opperations', () => {

  const basePage = new BasePage()
  const calculatorPage = new CalculatorPage()


  beforeEach(() => {
    basePage.navigate_to_calculator()
  })

    it('verify addition is done correctly', () => {
     
      calculatorPage.click_on_number_pad(7)
      calculatorPage.click_on_addition_button()
      calculatorPage.click_on_number_pad(5)

      //Assertion
      calculatorPage.validateOutput(12)
    })


    it('verify subtraction is done correctly', () => {

      calculatorPage.click_on_number_pad(9)
      calculatorPage.click_on_subtract_button()
      calculatorPage.click_on_number_pad(2)

      //Assertion
      calculatorPage.validateOutput(7)
    })


    it('verify multipication is done correctly', () => {

      calculatorPage.click_on_number_pad(9)
      calculatorPage.click_on_multipication_button()
      calculatorPage.click_on_number_pad(6)

      //Assertion
      calculatorPage.validateOutput(54)
    })


    it('verify division is done correctly', () => {

      calculatorPage.click_on_number_pad(8)
      calculatorPage.click_on_division_button()
      calculatorPage.click_on_number_pad(2)

      //Assertion
      calculatorPage.validateOutput(4)
    })
})

