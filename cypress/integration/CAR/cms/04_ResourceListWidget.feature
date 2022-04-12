@test
Feature: 04 Resource List Widget
Ability to add Resource List widget and edit the configuration

  Background: Login & Create a Button Widget
    Given I login to ITG
    And I click on 'Editing mode' button
    When I click on clear layout Button
    Then I create a 'Resource List' Widget

  Scenario: 01 User with both CMS and EditPages option is able to see Edit Button on CMS Editor
    Given I click on 'Close editor' button
    And I see 'Editing mode' button
    When I click on 'Editing mode' button
    Then I see 'Close editor' button