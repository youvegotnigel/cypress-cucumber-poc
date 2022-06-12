Feature: Verify Calculator Operations

  Background:
    Given The Calculator page is loaded successfully

  Scenario Outline: Verify Addition
    When I click on <firstOperand>
    And I click on plus opperator
    And I click on <secondOperand>
    Then I get the result <result>

    Examples:
      | firstOperand | secondOperand | result |
      | 2            | 9             | 11     |
      | 8            | 8             | 16     |
      | 8            | 3             | 13     |

  Scenario Outline: Verify Subtraction
    When I click on <firstOperand>
    And I click on minus opperator
    And I click on <secondOperand>
    Then I get the result <result>

    Examples:
      | firstOperand | secondOperand | result |
      | 1            | 2             | -1     |
      | 8            | 5             | 3      |
      | 8            | 6             | 3      |

  Scenario Outline: Verify Multipication
    When I click on <firstOperand>
    And I click on multiply opperator
    And I click on <secondOperand>
    Then I get the result <result>

    Examples:
      | firstOperand | secondOperand | result |
      | 7            | 0             | 0      |
      | 9            | 8             | 72     |

  Scenario Outline: Verify Divition
    When I click on <firstOperand>
    And I click on divide opperator
    And I click on <secondOperand>
    Then I get the result <result>

    Examples:
      | firstOperand | secondOperand | result |
      | 6            | 2             | 3      |
      | 9            | 3             | 3      |