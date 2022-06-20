@test
Feature: UserManagement Component - Login
To test the Login feature for the Canopy site against various positive and negative TestDatas:
    Valid Credentials, Invalid Credentials, Missing Email/Password(null)
    Accessing Wrong Routes/Resources directs the user to Canopy 404 Error page

  Scenario Outline: 01 Canopy Login Functionality
    Given I navigate to ITG test environment
    And I enter '<Email>' and '<Password>' on Login Page
    When I click on Login Button with '<Validity>' Credentials
    Then I am logged in when Credentials '<Validity>' are valid
    And Error Message 'Invalid login.' is shown when Credentials '<Validity>' are invalid
    And Login Button is disabled when Credentials '<Validity>' are null

    Examples:
      | Email                  | Password      | Validity |
      | testauto@itg.co.uk     | 1Qwertasdf    | valid    |
      | testauto               | 1Qwertasdf    | valid    |
      | testauto@itg.co.uk     | WrongPassword | invalid  |
      | wrongusername@test.com | 1Qwertasdf    | invalid  |
      | testauto1@itg.co.uk    |               | null     |
      |                        | 1Qwertasdf    | null     |

  Scenario: 02 Wrong Routes/Resources
    Given I navigate to an unknown route on ITG app
    Then I am directed to 404 Error page
    And 404 Error title '404 Not Found' is shown
    And 404 Error Message "You've reached a page that does not seem to exist" is shown
    And I click on Back to home link
    And I am redirected to 'Home' page

  Scenario: 03 Wrong Menu Node
    Given I navigate to an unknown menu node
    Then I am directed to 404 Error page
    And 404 Error title '404 Not Found' is shown
    And 404 Error Message 'You've reached a page that does not seem to exist' is shown
    And I click on Back to home link
    And I am redirected to 'Home' page