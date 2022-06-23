@test
Feature: CMS Editor - User with no CMS and no Edit Access
User with no ContentManagement and no Edit Access does not see CMS Pages and cant Edit pages on CMS
    User with no Basket services cant see the Basket icon

  Background:
    Given I navigate to ITG test environment
    When I enter 'readonly' and '1Qwertasdf' on Login Page
    And I click on Login Button with 'valid' Credentials
    
  Scenario: 01 User with no CMS and no EditPages option is not able to see Edit Button on CMS Editor
    Then I do not see Editing mode button on Home Pages
    And I do not see Basket on toolbar
    And I do not see Shares on toolbar
    And I do not see Select Visible icon on Resource List
    And Snack bar is not displayed
    And I do not see checkboxes on the assets

  Scenario: 02 User with No Basket Services do not see Actions menu on Asset Details page
    And I navigate to Asset Details page of asset 'icon warning white'
    Then Actions menu is not displayed