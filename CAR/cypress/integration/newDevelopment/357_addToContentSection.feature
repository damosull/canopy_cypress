@test @CAR-357
Feature: 04 Adding to the content section of CMS Editor

  Background: Login
    Given I login to ITG

  # Scenario: Add Section Widget
  #   When I click on Editing mode button
  #   And I click on clear layout Button
  #   And I create a 'Section' Widget

  Scenario: Multiple Section Widgets and Shuffle the order
    When I click on Editing mode button
    And I click on clear layout Button
    And I create a 'Section' Widget
    And I update the widget title to 'Section One'
    And I click the side menu back button
    And I create a 'Section' Widget
    And I update the widget title to 'Section Two'
    Then '2' Section panels are added to CMS Editor panel
    And I drag the bottom section to the top of the CMS Editor panel
# THEN the 'first' widget is titled 'Section Two'
# AND the 'second' widget is titled 'Section One'