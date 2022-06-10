@test
Feature: Basket Component: Basket

              Description : This feature covers all the Basket functions for a User with Basket Services

  Background:
    Given I login to ITG
    
  # Scenario: 01 Create Resource List Widget
  #   And I click on the side menu button
  #   And I click on activate panel Button
  #   And I click on clear layout Button
  #   And I create a 'Resource List' Widget

  # Scenario:  02 Basket Title and URL
  #   And I click on Basket
  #   Then URL should include '/basket'
  #   And Title of Basket Page is 'User Basket'

  # Scenario Outline: 03 Basket Grid, Count, Infinite Scroll
  #   And I click on the side menu button
  #   And I click on activate panel Button
  #   When I click on clear layout Button
  #   Then I create a 'Resource List' Widget
  #   And I click on widget Settings Button
  #   And I select '<PaginationStyle>' pagination and '<ResultCount>' results per page
  #   And I click on Select Visible icon
  #   And I add to basket
  #   Then Toast notification pops up '100 items were added to basket'
  #   And I click on Basket
  #   Then Count of items in basket is displayed as '<ResultCount>'
  #   And Assets on Resource List are shown in 'Grid' view
  #   And Preview results per page should be 'equal to' '30'
  #   And I scroll beyond the last asset in preview
  #   And Preview results per page should be 'twice' '30'

  #   Examples:
  #     | PaginationStyle | ResultCount |
  #     | Load more       | 100         |

  # Scenario: 04 "View Details" from Assets inside the basket
  #   And I add the first asset to Basket
  #   And I click on Basket
  #   And I click on the first Asset in Basket
  #   Then Asset Details Page opens with AssetName as Title
  #   # TODO: Possible bug in below step: Downloadable Resource != Resource 
  #   # And Asset Type is displayed on Asset Details Page
  #   And Asset Preview is displayed on Asset Details Page
  #   And URL captures Asset Details Page
  #   And I am on Basket page on going back

  # Scenario Outline: 05 Select all and Clear all Visible Item Selection on Basket
  #   And I clear the basket
  #   And I click the back button
  #   And I click on the side menu button
  #   And I click on activate panel Button
  #   And I click on clear layout Button
  #   And I create a 'Resource List' Widget
  #   Given I click on widget Settings Button
  #   And I select '<PaginationStyle>' pagination and '<ResultCount>' results per page
  #   And I Select visible assets and Add to basket
  #   And I click on Basket
  #   And I click on Select visible icon on Basket
  #   And Count of selected items '30' is displayed on Basket snack bar
  #   And First asset is unselected as I uncheck the first asset
  #   And I click on 'Clear all' button
  #   And All visible assets are not selected

  #   Examples:
  #     | PaginationStyle | ResultCount |
  #     | Load more       | 50          |

  # Scenario: 06 Basket Sorting
  #   And I click on the side menu button
  #   And I click on activate panel Button
  #   And I click on clear layout Button
  #   Then I create a 'Resource List' Widget
  #   When I select 'Load more' pagination and '50' results per page
  #   And I Select visible assets and Add to basket
  #   And I click on Basket
  #   Then Sort options are defaulted to Date Created and Descending
  #   And I click on the Sort button
  #   And I see the sort options below
  #     | Name          |
  #     | Type          |
  #     | State         |
  #     | Date Created  |
  #     | Date Modified |
  #   And I click on active sort option
  #   And I see 'Descending' tooltip on hovering over Sort Direction
  #   And I set the sort direction to 'Ascending'
  #   And I see 'Ascending' tooltip on hovering over Sort Direction

  # Scenario Outline: 07 Assets sorted as per the sort order
  #   And I click on the side menu button
  #   And I click on activate panel Button
  #   And I click on clear layout Button
  #   Then I create a 'Resource List' Widget
  #   And I select 'Load more' pagination and '50' results per page
  #   And I Select visible assets and Add to basket
  #   And I click on Basket
  #   And I select the Sort options '<SortOption>' and '<SortOrder>'
  #   Then Selected Sort option '<SortOption>' is highlighted
  #   And Sort options '<SortOption>' and '<SortOrder>' is shown in URL
  #   # TODO: Below uses API call, so need to check how to get that working here
  #   # And Assets in basket are sorted as per Sort options '<SortOption>' and '<SortOrder>'

  #   Examples:
  #     | SortOption | SortOrder  |
  #     | Name       | Descending |


  Scenario: 08 Retain position of asset on navigating back from Details Page to Basket
    And I click on the side menu button
    And I click on activate panel Button
    And I click on clear layout Button
    Then I create a 'Resource List' Widget
    And I select 'Load more' pagination and '50' results per page
    And I Select visible assets and Add to basket
    And I click on Basket
#     And I click on the last Asset in the asset view
#     And I click on Browser Back button
#     Then I see the Last asset in the asset 'Grid' view

#   Scenario Outline: Removing Assets from Basket
#     And I clear the basket using API
#     And I click on 'Editing mode' toggle Button
#     And I click on 'Resource List' widget Settings Button
#     And I select 'Load more' Pagination and '100' Results per page
#     And I Select visible assets and Add to basket
#     And I click on Basket
#     And Remove all and Remove visible are shown on clicking Remove bin
#     And Remove Selected is shown on Remove bin options on selecting an asset
#     And Toast popup notification shows on selecting removal option '<Removal option>'
#     And Basket count is updated on selecting removal option '<Removal option>'

#     Examples:
#       | Removal option  |
#       | Remove Selected |
#       | Remove visible  |
#       | Remove all      |
#   @failure
#   Scenario Outline: Basket Exporting based on Sort Options
#     And I clear the basket using API
#     And I click on 'Editing mode' toggle Button
#     And I click on 'Resource List' widget Settings Button
#     And I select 'Load more' Pagination and '50' Results per page
#     And I Select visible assets and Add to basket
#     And I click on Basket
#     And I select the Sort options '<SortOption>' and '<SortOrder>'
#     Then I see 'Export' tooltip on hovering over Export icon
#     And I click on Export Button
#     And Assets in the export are in the same order as the list

#     Examples:
#       | SortOption | SortOrder  |
#       | State      | Descending |
# #     @failure
# #     Scenario Outline: Download Assets from Basket
# #         # And I select Domain 'Team ITG'
# #         And I clear the basket using API
# #         And I click on 'Editing mode' toggle Button
# #         And I click on 'Resource List' widget Settings Button
# #         And I select 'Load more' Pagination and '50' Results per page
# #         And I 'check' Enable 'types' Filter on Config panel
# #         And I select the types filter 'Downloadable Resource'
# #         And I Select visible assets and Add to basket
# #         And I click on Basket
# #         And Download all and Download visible are shown on clicking Download
# #         And Download Selected is shown on Download options on selecting an asset
# #         # And Download assets modal is shown on selecting '<Download option>'
# #         # And Assets are downloaded on selecting '<Download option>'
# #         # But No available downloads message is shown when there are no transforms available




# #         Examples:
# #             | Download option   |
# #             | Download Selected |
# # # | Download visible  |
# # # | Download all      |
