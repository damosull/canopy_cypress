@test
Feature: Basket Component: Basket
This feature covers all the Basket functions for a User with Basket Services

  Background:
    Given I login to ITG
  
  Scenario: 01 Create Resource List Widget
    And I click on the side menu button
    And I click on activate panel Button
    And I click on clear layout Button
    And I create a 'Resource List' Widget

  Scenario: 02 Basket Title and URL
    And I click on Basket
    Then URL should include '/basket'
    And Title of Basket page is 'User Basket'

  Scenario: 03 Basket Grid, Count, Infinite Scroll
    And I clear the basket
    And I click the back button
    And I click on the side menu button
    And I click on activate panel Button
    When I click on clear layout Button
    Then I create a 'Resource List' Widget
    And I click on widget Settings Button
    And I select 'Load more' pagination and '100' results per page
    And I click on Select Visible icon
    And I add to basket
    # Then Toast notification pops up '100 items were added to basket'
    And I click on Basket
    Then Count of items in basket is displayed as '100'
    And Assets on Resource List are shown in 'Grid' view
    And Preview results per page should be 'equal to' '30'
    And I scroll beyond the last asset in preview
    And Preview results per page should be 'twice' '30'

  Scenario: 04 "View Details" from Assets inside the basket
    And I add the first asset to Basket
    And I click on Basket
    And I click on the first Asset in Basket
    Then Asset Details Page opens with AssetName as Title
    And Asset Preview is displayed on Asset Details Page
    And URL captures Asset Details Page
    And I am on Basket page on going back

  Scenario: 05 Select all and Clear all Visible Item Selection on Basket
    And I clear the basket
    And I click the back button
    And I click on the side menu button
    And I click on activate panel Button
    And I click on clear layout Button
    And I create a 'Resource List' Widget
    Given I click on widget Settings Button
    And I select 'Load more' pagination and '50' results per page
    And I Select visible assets and Add to basket
    And I click on Basket
    And I click on Select visible icon on Basket
    And Count of selected items '30' is displayed on Basket snack bar
    And First asset is unselected as I uncheck the first asset
    And I click on 'Clear all' button
    And All visible assets are not selected

  Scenario: 06 Basket Sorting
    And I click on the side menu button
    And I click on activate panel Button
    And I click on clear layout Button
    Then I create a 'Resource List' Widget
    When I select 'Load more' pagination and '50' results per page
    And I Select visible assets and Add to basket
    And I click on Basket
    Then Sort options are defaulted to Date Created and Descending
    And I click on the Sort button
    And I see the sort options below
      | Name          |
      | Type          |
      | State         |
      | Date Created  |
      | Date Modified |
    And I click away from the dropdown
    And I see 'Descending' tooltip on hovering over Sort Direction
    And I set the sort direction to 'Ascending'
    And I see 'Ascending' tooltip on hovering over Sort Direction

  Scenario: 07 Assets sorted as per the sort order
    And I click on the side menu button
    And I click on activate panel Button
    And I click on clear layout Button
    Then I create a 'Resource List' Widget
    And I select 'Load more' pagination and '50' results per page
    And I Select visible assets and Add to basket
    And I click on Basket
    And I select the Sort options 'Name' and 'Descending'
    Then Selected Sort option 'Name' is highlighted
    And Sort options 'Name' and 'Descending' is shown in URL

  Scenario: 08 Retain position of asset on navigating back from Details Page to Basket
    And I click on the side menu button
    And I click on activate panel Button
    And I click on clear layout Button
    Then I create a 'Resource List' Widget
    And I Select visible assets and Add to basket
    And I click on Basket
    And I click on the first AssetName in Asset 'Grid' view
    And I click on Browser Back button
    Then I see the First asset in the asset 'Grid' view

  Scenario Outline: 09 Removing Assets from Basket - <option>
    And I clear the basket
    And I click the back button
    And I click on the side menu button
    And I click on activate panel Button
    And I click on clear layout Button
    And I create a 'Resource List' Widget
    And I select 'Load more' pagination and '100' results per page
    And I Select visible assets and Add to basket
    And I click on Basket
    And I select the first asset
    And I click on 'Remove' button
    And I see 'Remove all' button
    And I see 'Remove visible' button
    And I see 'Remove selected' button
    And I click on '<option>' button
    # And Toast popup notification shows on selecting removal option '<option>'
    And Basket count is updated on selecting removal option '<option>'

    Examples:
      | option          |
      | Remove selected |
      | Remove visible  |
      | Remove all      |

  @ignore
  Scenario Outline: 10 Basket Exporting based on Sort Options
    And I clear the basket
    And I click the back button
    And I click on the side menu button
    And I click on activate panel Button
    And I click on clear layout Button
    And I create a 'Resource List' Widget
    And I select 'Load more' pagination and '50' results per page
    And I Select visible assets and Add to basket
    And I click on Basket
    And I select the Sort options '<SortOption>' and '<SortOrder>'
    # Then I see 'Export' tooltip on hovering over Export icon
    And I click on Export button
    And Assets in the export are in the same order as the list

    Examples:
      | SortOption | SortOrder  |
      | State      | Descending |

  Scenario Outline: 11 Download Assets from Basket - <option>
    And I clear the basket
    And I click the back button
    And I click on the side menu button
    And I click on activate panel Button
    And I click on clear layout Button
    And I create a 'Resource List' Widget
    And I select 'Load more' pagination and '50' results per page
    And I 'check' Enable 'types' Filter on Config panel
    And I select the 'Downloadable Resource' filter
    And I Select visible assets and Add to basket
    And I click on Basket
    And I select the first asset
    And I click on the Download button
    And I see 'Download all' button
    And I see 'Download visible' button
    And I see 'Download selected' button
    And I click on '<option>' button

    Examples:
      | option            |
      | Download selected |
      | Download visible  |
      | Download all      |
