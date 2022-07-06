@test
Feature: CMS Editor - User with CMS access and no Edit Access
User with ContentManagement access but no Edit Access sees CMS Pages but cant Edit pages on CMS

  Scenario: 01 User with CMS and no EditPages option is not able to see Edit Button on CMS Editor
    Given I navigate to ITG test environment
    When I enter 'contentmanager1' and '1Qwertasdf' on Login Page
    And I click on Login Button with 'valid' Credentials
    Then I do not see Editing mode button on Home Pages