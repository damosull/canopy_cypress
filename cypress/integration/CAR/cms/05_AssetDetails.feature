@test
Feature: 05 DAM Component: Asset Details Page

This feature will cover all the Asset Details page features

  Background: Login & Create a Resource List Widget
    Given I login to ITG
    And I click on 'Editing mode' button
    When I click on clear layout Button
    And I create a 'Resource List' Widget
    And I click on widget Settings Button
    
  @ignore
  Scenario: 01 Asset Availability on Asset Detail Page
    And I navigate to Asset Details page of asset 'TeamITG'
    Then Asset availability is shown on Asset Detail Page

  @ignore
  Scenario: 02 Asset Details Tab
    And I navigate to Asset Details page of asset 'TeamITG'
    # TODO: Below step incomplete, need help finding some selectors
    Then Fields on Asset details tab are populated correctly

  @ignore
  Scenario: 03 Upload New Versions
    And I navigate to Asset Details page of asset 'TeamITG'
    And I navigate to Asset 'versions' tab
    # TODO: Below step uses 'process', so some of it is incomplete
    And I upload a new version
    Then New version is uploaded to the versions tab
    And I navigate to Asset 'details' tab
    # TODO: Below step incomplete, need help finding some selectors
    And Fields on Asset details tab are populated correctly

  Scenario: 04 Actions Dropdown Menu - Add to Basket
  # TODO: Below stop not done, need help to call API
  #   And I clear the basket using API
    And I navigate to Asset Details page of asset 'TeamITG'
    And I select the 'Add to basket' option on Actions menu
    Then Toast notification pops up '1 item was added to basket'
    And Basket count on toolbar is updated
    And I click on Basket
    Then Count of items in basket is displayed as '1'

# TODO: leave below commented, was commented in old framework
# @failed
# Scenario: Asset Overview Tab
#     And I navigate to Asset Details page of asset 'TeamITG'
#     And I 'remove' the Description and Usage on Asset Details Overview Tab
#     Then Description on Overview tab is defaulted to 'This is sample Description'
#     And Usage on Overview tab is defaulted to 'This is sample usage'
#     And I 'set' the Description and Usage on Asset Details Overview Tab
#     And Description and Usage are updated on Overview Tab


#Scenario: Delete Asset
