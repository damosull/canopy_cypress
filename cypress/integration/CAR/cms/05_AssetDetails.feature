@test
Feature: 05 DAM Component: Asset Details Page

This feature will cover all the Asset Details page features

  Background: Login & Create a Resource List Widget
    Given I login to ITG
    And I click on 'Editing mode' button
    When I click on clear layout Button
    Then I create a 'Resource List' Widget

  Scenario: 01 Create Resource List Widget and upload an Asset
    # Given I click on 'Close editor' button
    # And I see 'Editing mode' button
    # When I click on 'Editing mode' button
    # Then I see 'Close editor' button