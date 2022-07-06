@test
Feature: 05 DAM Component: Asset Details Page
This feature will cover all the Asset Details page features

  Background: Login & Create a Resource List Widget
    Given I login to ITG
    And I click on the side menu button
    And I click on activate panel Button
    When I click on clear layout Button
    And I create a 'Resource List' Widget
    And I click on widget Settings Button
    
  Scenario: 01 Asset Availability on Asset Detail Page
    Given I navigate to Asset Details page of asset 'TeamITG'
    Then Asset availability is shown on Asset Detail Page

  Scenario: 02 Asset Details Tab
    And I navigate to Asset Details page of asset 'TeamITG'
    # Then Fields on Asset details tab are populated correctly

  Scenario: 03 Upload New Versions
    Given I navigate to Asset Details page of asset 'TeamITG'
    And I navigate to Asset 'versions' tab
    When I upload a new version
    Then New version is uploaded to the versions tab
    And I navigate to Asset 'details' tab
    # And Fields on Asset details tab are populated correctly

  Scenario: 04 Actions Dropdown Menu - Add to Basket
    # And I clear the basket
    Given I click on 'Terms & Conditions' button
    And I click on activate panel Button
    And I create a 'Resource List' Widget
    And I click on widget Settings Button
    And I navigate to Asset Details page of asset 'TeamITG'
    When I select the 'Add to basket' option on Actions menu
    Then Toast notification pops up '1 item was added to basket'
    And I click on Basket
    And Count of items in basket is displayed as '1'
