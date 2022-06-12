Feature: Verify Login


    Scenario Outline: Verify login with valid credentials
        Given User is navigated to login page
        And User enter details as below:
            | username | password |
            | <un>     | <pw>     |
        When User click on login button
        Then User should be logged in


        Examples:
            | un       | pw                   |
            | tomsmith | SuperSecretPassword! |


    Scenario Outline: Verify error messages with invalid credentials
        Given User is navigated to login page
        And User enter details as below:
            | username | password |
            | <un>     | <pw>     |
        When User click on login button
        Then Error message should be displayed as below:
            | error_message |
            | <em>          |

        Examples:
            | un       | pw                   | em                        |
            | tom      | test                 | Your username is invalid! |
            | tom      | SuperSecretPassword! | Your username is invalid! |
            | tomsmith | test                 | Your password is invalid! |
            | tom      | test                 | Your password is invalid! |