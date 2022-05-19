@test
Feature: 04 Resource List Widget
Ability to add Resource List widget and edit the configuration

  Background: Login & Create a Resource List Widget
    Given I login to ITG
    And I click on 'Editing mode' button
    When I click on clear layout Button
    Then I create a 'Resource List' Widget

  Scenario Outline: 40 Set Applied Filters and Disable Filter
    Given I click on widget Settings Button
    And I open the 'Searches' Filter on Config panel
    And I 'check' Enable '<FilterType>' Filter on Config panel
    And I select the first '<FilterType>' filter
    Then Applied Filter is displayed as pill
    And I 'uncheck' Enable '<FilterType>' Filter on Config panel
    And '<FilterType>' filter 'is not' shown in widget
    And Applied Filters are not shown on the widget

    Examples:
      | FilterType |
      | keyword    |
      | domain     |
      | state      |
      | types      |
      | adaptor    |
      | phase      |

  Scenario: 41 Clear All Filters
    Given I click on widget Settings Button
    And I 'check' Enable 'keyword' Filter on Config panel
    And I click on 'Close editor' button
    And I select the first 'keyword' filter
    And Keyword filter parameters are displayed on URL
    And I click on Clear All button
    And All the applied filters are cleared
    And Keyword Filters are removed from URL

  Scenario: 42 Add to Basket
    And I add an asset to the basket
    Then I see '1 item was added to basket' text
    And I clear the basket
    And Basket count is updated

  Scenario: 43 Adaptor Filter - Single Selection
    Given I click on widget Settings Button
    And I open the 'Searches' Filter on Config panel
    And I 'check' Enable 'adaptor' Filter on Config panel
    And I click on 'Close editor' button
    And I select the first 'adaptor' filter
    Then Applied Filter is displayed as pill
    And I select the second adaptor filter
    And First adaptor filter 'is not' selected
    And Filter pill is updated to second filter

  Scenario: 44 Adaptor Filter - multiple Selection
    Given I click on widget Settings Button
    And I open the 'Searches' Filter on Config panel
    And I 'check' Enable 'adaptor' Filter on Config panel
    And I 'select' multiSelect option for adaptor filter
    And I click on 'Close editor' button
    And I select the first 'adaptor' filter
    Then Applied Filter is displayed as pill
    And I select the second adaptor filter
    And First adaptor filter 'is' selected
    And Additional filter pill is displayed with second adaptor

  Scenario: 45 Adaptor filter - Adaptor label
    Given I click on widget Settings Button
    And I open the 'Searches' Filter on Config panel
    And I 'check' Enable 'adaptor' Filter on Config panel
    And I input an adaptor label
    And I click on 'Close editor' button
    And I select the second adaptor filter
    And Applied filter pill has label text

  Scenario: 46 Phase Filter - Single Selection
    Given I click on widget Settings Button
    And I open the 'Searches' Filter on Config panel
    And I 'check' Enable 'phase' Filter on Config panel
    And I click on 'Close editor' button
    And I select the first 'phase' filter
    Then Applied Filter is displayed as pill
    And I select the second phase filter
    And Filter pill is updated to second filter

  Scenario: 47 Phase filter - Phase label
    Given I click on widget Settings Button
    And I open the 'Searches' Filter on Config panel
    And I 'check' Enable 'phase' Filter on Config panel
    And I input a phase label
    And I click on 'Close editor' button
    And I select the first 'phase' filter
    And Applied filter pill has label text

  Scenario: 48 Retain position of asset on navigating back from Details to List page
    Given I click on widget Settings Button
    And I select 'Load more' pagination and '50' results per page
    And I click on the last AssetName in Asset 'Grid' view
    And I click on Browser Back button
    Then I see the Last asset in the asset 'Grid' view

  Scenario: 49 Asset Properties: Defaults to Name
    Given I click on widget Settings Button
    And I open the 'Searches' Filter on Config panel
    And I open the 'Asset Properties' Filter on Config panel
    Then Asset Properties has 'Name' as a default value
    And I enter 'TeamITG' into the 'Resource List Search' input
    And I click the search option
    And 'Name' Search Filter is displayed as pill
    And URL shows asset property 'Name' and value for asset 'TeamITG'

  Scenario: 50 Asset Properties
    Given I click on widget Settings Button
    And I open the 'Searches' Filter on Config panel
    And I open the 'Asset Properties' Filter on Config panel
    And I select 'Id' from asset properties
    And I enter 'TeamITG' into the 'Resource List Search' input
    And I click the search option
    And 'Id' Search Filter is displayed as pill
    And URL shows asset property 'Name' and value for asset 'TeamITG'
    And I click on X button on Applied Filter
    And Applied Filter is removed

  Scenario Outline: 51 Period Filter - <Instant>:  <StartDate> - <FilterEndDate>
    Given I click on widget Settings Button
    And I 'check' Enable 'period' Filter on Config panel
    Then Period Filter label is displayed as 'Created:  ANYTIME'
    And I set period '<StartDate>' to '<EndDate>' and '<Instant>' Instant
    And Period Filter label is displayed as '<Instant>:  <StartDate> - <FilterEndDate>'

    Examples:
      | StartDate  | EndDate    | FilterEndDate | Instant  |
      | 01/01/2000 | 01/07/2021 | 07/01/2021    | Created  |
      | 01/01/2000 |            | FOREVER       | Created  |
      | 01/01/2000 | 01/07/2021 | 07/01/2021    | Modified |
      | 01/01/2000 |            | FOREVER       | Modified |
