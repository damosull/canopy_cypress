@test
Feature: Basket Component: Basket

              Description : This feature covers all the Basket functions for a User with Basket Services

  Background:
    Given I login to ITG
    

#   Scenario: 01 Create Resource List Widget
#     When I click on 'Editing mode' button
#     And I click on clear layout Button
#     And I create a 'Resource List' Widget

#   Scenario:  02 Basket Title and URL
#     And I click on Basket
#     Then URL should include '/basket'
#     And Title of Basket Page is 'User Basket'

#   Scenario Outline: 03 Basket Grid, Count, Infinite Scroll
#   # TODO: Below stop not done, need help to call API
#   #   And I clear the basket using API
#     When I click on 'Editing mode' button
#     When I click on clear layout Button
#     Then I create a 'Resource List' Widget
#     And I click on widget Settings Button
#     And I select '<PaginationStyle>' pagination and '<ResultCount>' results per page
#     And I click on Select Visible icon
#     And I add to basket
#     Then Toast notification pops up '100 items were added to basket'
#     And I click on Basket
#     # NOTE: Below is failing as we're not clearing the basket with the API in first step, this will pass once that step is completed
#     # Then Count of items in basket is displayed as '<ResultCount>'
#     And Assets on Resource List are shown in 'Grid' view
#     And Preview results per page should be 'equal to' '30'
#     And I scroll beyond the last asset in preview
#     And Preview results per page should be 'twice' '30'

#     Examples:
#       | PaginationStyle | ResultCount |
#       | Load more       | 100         |

  Scenario: 04 "View Details" from Assets inside the basket
  #   # TODO: Below stop not done, need help to call API
#     And I clear the basket using API
    And I add the first asset to Basket
#     And I click on Basket
#     And I click on the first Asset in Basket
#     Then Asset Details Page opens with AssetName as Title
#     And Asset Type is displayed on Asset Details Page
#     And Asset Preview is displayed on Asset Details Page
#     And URL captures Asset Details Page
#     And I am on Basket page on going back

#   Scenario Outline: Select all and Clear all Visible Item Selection on Basket
#     And I clear the basket using API
#     And I click on 'Editing mode' toggle Button
#     And I click on 'Resource List' widget Settings Button
#     And I select '<PaginationStyle>' Pagination and '<ResultCount>' Results per page
#     And I Select visible assets and Add to basket
#     And I click on Basket
#     And I click on Select visible icon on Basket
#     And Count of selected items '30' is displayed on Basket snack bar
#     And First asset is unselected as i uncheck the first asset
#     And I click on Clear All button on Snack bar
#     And All visible Assets are unselected

#     Examples:
#       | PaginationStyle | ResultCount |
#       | Load more       | 50          |

#   Scenario: Basket Sorting
#     And I clear the basket using API
#     And I click on 'Editing mode' toggle Button
#     And I click on 'Resource List' widget Settings Button
#     And I select 'Load more' Pagination and '50' Results per page
#     And I Select visible assets and Add to basket
#     And I click on Basket
#     Then Sort options are defaulted to Date Created and Descending
#     And I see the sort options 'Name,Type,State,Date Created,Date Modified'
#     And I see 'Descending' tooltip on hovering over Sort Direction
#     And I set the sort direction to 'Ascending'
#     And I see 'Ascending' tooltip on hovering over Sort Direction


#   Scenario Outline: Assets sorted as per the sort order
#     And I clear the basket using API
#     And I click on 'Editing mode' toggle Button
#     And I click on 'Resource List' widget Settings Button
#     And I select 'Load more' Pagination and '50' Results per page
#     And I Select visible assets and Add to basket
#     And I click on Basket
#     And I select the Sort options '<SortOption>' and '<SortOrder>'
#     Then Selected Sort option '<SortOption>' is highlighted
#     And Sort options '<SortOption>' and '<SortOrder>' is shown in URL
#     And Assets in basket are sorted as per Sort options '<SortOption>' and '<SortOrder>'

#     Examples:
#       | SortOption | SortOrder  |
#       | Name       | Descending |


#   Scenario: Retain position of asset on navigating back from Details Page to Basket
#     And I clear the basket using API
#     And I click on 'Editing mode' toggle Button
#     And I click on 'Resource List' widget Settings Button
#     And I select 'Load more' Pagination and '50' Results per page
#     And I Select visible assets and Add to basket
#     And I click on Basket
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
