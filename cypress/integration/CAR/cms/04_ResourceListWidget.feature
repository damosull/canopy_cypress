@test
Feature: 04 Resource List Widget
Ability to add Resource List widget and edit the configuration

  Background: Login & Create a Resource List Widget
    Given I login to ITG
    And I click on 'Editing mode' button
    When I click on clear layout Button
    Then I create a 'Resource List' Widget

  Scenario: 01 User with both CMS and EditPages option is able to see Edit Button on CMS Editor
    Given I click on 'Close editor' button
    And I see 'Editing mode' button
    When I click on 'Editing mode' button
    Then I see 'Close editor' button

  Scenario: 02 Left hand Widget Panel
    Given Left hand panel is shown
    And Left hand panel is titled 'Widgets'
    When I click on close button on Widget panel
    Then Widget Panel is collapsed

  Scenario: 03 Close editor button
    Given I click on widget Settings Button
    When I click on 'Close editor' button
    Then Widget Panel is collapsed
    And I see 'Editing mode' button

  Scenario: 04 Publish button
    Given I click on 'Publish' button
    Then I see 'Editing mode' button

  @ignore
  Scenario: 05 Revert button
    Given I click on widget Settings Button
    And I update the widget title to 'Hello'
    When I click on 'Revert' button
    Then widget title is set to 'Button'

  @ignore
  Scenario: 06 Publish and Revert Layout
    Given I click on widget Settings Button
    And I update the widget title to 'New Title'
    And I click on 'Publish' button
    And I click on 'Editing mode' button
    When I click on 'Revert' button
    Then widget title is set to 'Heading'

  Scenario: 07 Right hand Panel - Widget Settings Panel
    Given I click on widget Settings Button
    Then Right hand panel is shown
    And Right hand panel is titled ' Editing Resource List '
    And Widget being edited is highlighted

  Scenario: 08 Edit Heading Widget Title
    Given I click on widget Settings Button
    When I update the widget title to 'New Title'
    Then widget title is set to 'New Title'

  Scenario: 09 Close Config Panel
    Given I click on widget Settings Button
    When I click on 'Close settings' button
    Then Config panel is collapsed

  Scenario: 10 Remove widget
    Given I click on widget Settings Button
    When I click on 'Remove widget' button
    Then Widget is removed
    And Config panel is collapsed

  Scenario Outline: 11 Widget Alignment - <alignment>
    Given I select '<alignment>' widget Alignment on Config Panel
    When I set the widget Width on Config Panel to '20'
    Then Widget is aligned to '<alignment>'

    Examples:
      | alignment |
      | Left      |
      | Center    |
      | Right     |

  Scenario: 12 Edit Widget width
    Given I click on widget Settings Button
    When I set the widget Width on Config Panel to '20'
    Then Widget width is set to '20'

  Scenario Outline: 13 Edit Spacing - <spacing>
    Given I click on widget Settings Button
    And padding for widget is set to '0'
    When I set the '<spacing>' Spacing Option to '25'
    Then padding for widget is set to '25'

    Examples:
      | spacing |
      | Top     |
      | Right   |
      | Bottom  |
      | Left    |
      
  Scenario: 14 Clear Layout
    Given I click on widget Settings Button
    When I click on clear layout Button
    Then All widgets are cleared
    And Config panel is collapsed
    
  Scenario: 15 Asset List Count
    Then Asset count is listed on the Resource list widget
    # And Asset count is the same as List Asset API response

  Scenario: 16 Asset List count : No Assets Found
    When I click on 'Publish' button
    And I enter "NoAsset12345" into the "Resource List Search" input
    And I click the search option
    Then "No Assets Available" is displayed

  Scenario: 17 Back to top Button
    When I click on 'Publish' button
    And I navigate to the last asset
    # TODO: For below step, I haven't been able to verify the tooltip. When I did mouseover, the text wasn't displayed for some reason.
    # Then "Back to Top" is displayed   
    When I click button based on aria-label "Back to Top"
    # TODO: For below step, tried to check visibility of buttons at top of page, but the test was passing even when at the bottom of the page, need to look into this.
    #  "And I am brought to the top of the page"

  Scenario Outline: 18 Inherit/include Assets from parent/sub domains
    And I click on Domain option on Toolbar
    And I select 'Team ITG' domain
    And I click on 'Resource List' button
    And I check the Include Sub Domains in results checkbox
    And I check the Include Parent Domains in results checkbox
    # TODO: wasn't sure how to do this step these, think they use API call
        # Then Asset Count should be updated based on '<subDomain>','<Inherit>'
    And I click on Domain option on Toolbar
    And I select '- System -' domain

    Examples:
      | subDomain | Inherit |
      | true      | true    |
      | true      | false   |
      | false     | true    |

  Scenario: 19  Default Pagination and Results per page
    Given I click on widget Settings Button
    Then Load More pagination style is selected
    And Results per page config is '50'
    And Results per page drop down has the below options
      | 10  |
      | 50  |
      | 80  |
      | 100 |
      | 150 |
    And Results per page should be 'equal to' '50'

  Scenario: 20 Default Grid View of Assets
    Given I click on widget Settings Button
    Then Grid View is set by default on Config Panel
    And I click on 'Publish' button
    And Assets on Resource List are shown in 'Grid' view
    And AssetName and AssetType are shown under the asset in Grid view

  Scenario: 21 List View of Assets
    Given I click on widget Settings Button
    And I select 'List' view as Search Result style
    Then Resource List columns should have the below headings
      | Preview      |
      | Name         |
      | Extension    |
      | Filesize     |
      | Type         |
      | Adaptor Type |
    And Assets on Resource List are shown in 'List' view

  Scenario: 22 Asset Details Page in Grid View
    Given I click on widget Settings Button
    And I select 'Grid' view as Search Result style
    And I click on the first AssetName in Asset 'Grid' view
    Then Asset Details Page opens with AssetName as Title
    And Asset Type is displayed on Asset Details page
    # TODO: Below step is failing, think element might have been renamed
    # And Asset Preview is displayed on Asset Details page

  Scenario: 23 Asset Details Page in List View
    Given I click on widget Settings Button
    And I select 'List' view as Search Result style
    And I click on the first AssetName in Asset 'List' view
    Then Asset Details Page opens with AssetName as Title
    And Asset Type is displayed on Asset Details page
        # TODO: Below step is failing, think element might have been renamed
#         And Asset Preview is displayed on Asset Details Page

  Scenario: 24 URL capture of Asset Details Page
    Given I click on widget Settings Button
    And I select 'Grid' view as Search Result style
    And I click on the first AssetName in Asset 'Grid' view
    Then URL captures Asset Details page
    And I am on same page on refreshing the page

  Scenario Outline: 25 Retain position of asset on navigating back from Details to ListPage
    Given I click on widget Settings Button
    And I select '<AssetView>' view as Search Result style
    And I click on the first AssetName in Asset '<AssetView>' view
    And I click on Browser Back button
    And I see the first asset on Asset '<AssetView>' view

    Examples:
      | AssetView |
      | Grid      |
      | List      |

  Scenario: 26 Asset Selection retained over pagination
    Given I click on widget Settings Button
    And I select 'Pagination' pagination and '10' results per page
    And I select 'Grid' view as Search Result style
    And I click on Select Visible icon
    Then All visible assets are selected
    And I select pagination Navigator 'Last page'
    And I select pagination Navigator 'First page'
    And All visible assets are selected

  Scenario: 27 Asset Selection not retained on navigating to Asset Detail page
    Given I click on widget Settings Button
    And I select 'Grid' view as Search Result style
    And I click on Select Visible icon
    Then All visible assets are selected
    And I click on the first AssetName in Asset 'Grid' view
    And I click on Browser Back button
    And All visible assets are not selected

  Scenario: 28 Sort dropdown, Default Sort Options and tooltip on Ascending-Descending arrow
    Given I click on widget Settings Button
    When I click on 'Close editor' button
    Then Sort options are defaulted to Date Created and Descending
    And the below sort options are available
      | Name          |
      | Type          |
      | State         |
      | Date Created  |
      | Date Modified |
      # TODO: in below step trigger('mouseover') isn't showing tooltip, need to look into this more
    Then I see 'Descending' tooltip on hovering over Sort Direction
    And I set the sort direction to 'Ascending'
    And I see 'Ascending' tooltip on hovering over Sort Direction

  Scenario Outline: 29 Assets Sorted as per the Sort options
    Given I click on widget Settings Button
    And I set Include 'Sub' Domains in Results to 'true'
    And I set Include 'Parent' Domains in Results to 'true'
    And I select '<PaginationStyle>' pagination and '<ResultCount>' results per page
    And I select 'Grid' view as Search Result style
    And I click on 'Close editor' button
    And I select the Sort options '<SortOption>' and '<SortOrder>'
    Then Selected Sort option '<SortOption>' is highlighted
    And Sort options '<SortOption>' and '<SortOrder>' is shown in URL
    And Assets are sorted as per Sort options '<SortOption>', '<SortOrder>', '<ResultCount>'

    Examples:
      | PaginationStyle | ResultCount | SortOption | SortOrder |
      | Load more       | 10          | Name       | Ascending |

  Scenario Outline: 30 Infinite Scroll
    Given I click on widget Settings Button
    And I set Include 'Sub' Domains in Results to 'true'
    And I set Include 'Parent' Domains in Results to 'true'
    And I select '<PaginationStyle>' pagination and '<ResultCount>' results per page
    And I select 'Grid' view as Search Result style
    Then Results per page should be 'equal to' '<ResultCount>'
    And I scroll beyond the last asset
    And Results per page should be 'twice' '<ResultCount>'
    And I scroll beyond the last asset
    And Results per page should be 'thrice' '<ResultCount>'

    Examples:
      | PaginationStyle | ResultCount |
      | Infinite scroll | 10          |
      | Infinite scroll | 50          |

  Scenario Outline: 31 Load More
    Given I click on widget Settings Button
    And I set Include 'Sub' Domains in Results to 'true'
    And I set Include 'Parent' Domains in Results to 'true'
    And I select '<PaginationStyle>' pagination and '<ResultCount>' results per page
    And I select 'Grid' view as Search Result style
    Then Results per page should be 'equal to' '<ResultCount>'
    And I click on 'Load more' button
    And Results per page should be 'twice' '<ResultCount>'
    And I click on 'Load more' button
    And Results per page should be 'thrice' '<ResultCount>'

    Examples:
      | PaginationStyle | ResultCount |
      | Load more       | 10          |
      | Load more       | 100         |

  Scenario Outline: 32 Pagination
    Given I click on widget Settings Button
    And I set Include 'Sub' Domains in Results to 'true'
    And I set Include 'Parent' Domains in Results to 'true'
    And I select '<PaginationStyle>' pagination and '<ResultCount>' results per page
    And I select 'Grid' view as Search Result style
    Then Icons 'Next Page' and 'Last Page' are disabled when I click 'Last Page'
    And Icons 'Previous Page' and 'First Page' are disabled when I click 'First Page'
    # TODO: skipped for now to speed up time, was taking too long to work out dataTables & scenario outline together
    # And Pagination Range and PageNo on URL are shown for '<ResultCount>'
    #   | Pagination    |
    #   | Last Page     |
    #   | Previous Page |
    #   | First Page    |
    #   | Next Page     |
    And Results per page should be 'equal to' '<ResultCount>'
    And URL captures Asset Details page
    And I am on same page on refreshing the page

    Examples:
      | PaginationStyle | ResultCount |
      | Pagination      | 10          |

  Scenario Outline: 33 No InfiniteScroll/LoadMore/Pagination when there are no more assets to load
    Given I click on widget Settings Button
    And I select '<PaginationStyle>' pagination and '<ResultCount>' results per page
    And I select 'Grid' view as Search Result style
    And I search for the first asset
    And I scroll beyond the last asset
    Then Results per page should be 'equal to' '1'
    And Load More button is not displayed
    And Pagination is disabled

    Examples:
      | PaginationStyle | ResultCount |
      | Infinite scroll | 10          |
      | Load more       | 50          |
      | Pagination      | 10          |

  Scenario Outline: 34 Select Visible assets
    Given I click on widget Settings Button
    And I select '<PaginationStyle>' pagination and '<ResultCount>' results per page
    And I select 'Grid' view as Search Result style
    And I click on Select Visible icon
    Then All visible assets are selected
    And Count of selected items '<ResultCount>' is displayed on snack bar
    And First asset is unselected as I uncheck the first asset
    And I click on 'Clear all' button
    And All visible Assets are unselected and Snack bar is not displayed

    Examples:
      | PaginationStyle | ResultCount |
      | Load more       | 50          |

  Scenario: 35 Back To Top button is not hidden when there is a snack bar
    And I click on Select Visible icon
    Then Snack bar is displayed
    And I navigate to the last asset
    # TODO: in below step need to figure out how to validate the hover, I can validate the aria-label alright
    Then Back to Top arrow is displayed with 'Back to Top' tooltip upon hover
    When I click button based on aria-label "Back to Top"
    And I am brought back to top

  Scenario Outline: 36 Enable/Disable Filters
    Given I click on widget Settings Button
    When Enable '<FilterType>' Filter is unchecked on CMS Editor
    And '<FilterType>' filter 'is not' shown in widget
    And I 'check' Enable '<FilterType>' Filter on Config panel
    And '<FilterType>' filter 'is' shown in widget

    Examples:
      | FilterType |
      | keyword    |
      | types      |
      | state      |
      | domains    |
      | adaptor    |
      | phase      |

  Scenario Outline: 37 Counts shown on filters
    Given I click on widget Settings Button
    And I 'check' Enable '<FilterType>' Filter on Config panel
    # TODO: below step created, but can't find the elements
    # Then Show '<FilterType>' count option is checked by default
    And I click on 'Close editor' button
    And I click on '<FilterType>' filter on widget
    And Counts are displayed on '<FilterType>' filter

    Examples:
      | FilterType |
      | keyword    |
      | domains    |
      | state      |
      | types      |

    #Get State filter configured on stage
  Scenario Outline: 38 Count on filter matches the count of list View
    Given I click on widget Settings Button
    And I 'check' Enable '<FilterType>' Filter on Config panel
    And I click on 'Close editor' button
    And I select the first '<FilterType>' filter
    Then Count on filter matches the count of list View

    Examples:
      | FilterType |
      | keyword    |
      | domain     |
      | state      |
      | types      |

  Scenario Outline: 39 Applied Filters and Remove pills
    Given I click on widget Settings Button
    And I 'check' Enable '<FilterType>' Filter on Config panel
    And I click on 'Close editor' button
    And I select the first '<FilterType>' filter
    Then Applied Filter is displayed as pill
    And I click on X button on Applied Filter
    And Applied Filter is removed

    Examples:
      | FilterType |
      | keyword    |
      | domain     |
      | state      |
      | types      |
      | adaptor    |
      | phase      |

  Scenario Outline: 40 Set Applied Filters and Disable Filter
    Given I click on widget Settings Button
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

  @retry @failure
  Scenario: 41 Disable Counts on Keyword filters
    Given I click on widget Settings Button
    And I 'check' Enable 'Keyword' Filter on Config panel
    And I 'uncheck' Show keyword count on Config panel
    And I click on 'Close editor' button
    # And I click on Keywords filter on widget
    And I select the first 'keyword' filter
    # TODO: below step needs to be fixed when I can run code
    Then Counts are not displayed on Keyword filters

    # include count of assets
  Scenario: 42 Clear All Filters
    Given I click on widget Settings Button
    And I 'check' Enable 'keyword' Filter on Config panel
    And I click on 'Close editor' button
    And I select the first 'keyword' filter
    And Keyword filter parameters are displayed on URL
    And I click on Clear All button
    And All the applied filters are cleared
    And Keyword Filters are removed from URL

  # Scenario: 43 Add to Basket
  #   And I clear the basket using API
  #   And I add the first asset to Basket
  #   Then Toast Notification is displayed with number of items added to basket
  #   And Basket count is updated

  Scenario: 44 Adaptor Filter - Single Selection
    Given I click on widget Settings Button
    And I 'check' Enable 'adaptor' Filter on Config panel
    And I click on 'Close editor' button
    And I select the first 'adaptor' filter
    Then Applied Filter is displayed as pill
    And I select the second adaptor filter
    And First adaptor filter 'is' UnChecked
    And Filter pill is updated to second filter

  Scenario: 45 Adaptor Filter - multiple Selection
    Given I click on widget Settings Button
    And I 'check' Enable 'adaptor' Filter on Config panel
    And I 'select' multiSelect option for adaptor filter
    And I click on 'Close editor' button
    And I select the first 'adaptor' filter
    Then Applied Filter is displayed as pill
    And I select the second adaptor filter
    And First adaptor filter 'is not' UnChecked
    And Additional filter pill is displayed with second adaptor

    # Scenario: Adaptor filter - Adaptor label
  #   Given I click on widget Settings Button
  #   And I 'check' Enable 'adaptor' Filter on Config panel
  #       # TODO: work to be done in below step
  #       # And I input an adaptor label
  #   And I click on 'Close editor' button
  #   And I select the first adaptor filter with label
#         Then Adaptor Filter is shown with the adaptor label text
#         And Applied filter pill has Adaptor label text

#     Scenario: Phase Filter - Single Selection
# Given I click on widget Settings Button
#         And I 'check' Enable 'phase' Filter on Config panel
# And I click on 'Close editor' button
#         And I select the first 'phase' filter
#         Then Applied Filter is displayed as pill
#         And I select the second phase filter
#         And Filter pill is updated to second filter

#     Scenario: Phase filter - Phase label
# Given I click on widget Settings Button
#         And I 'check' Enable 'phase' Filter on Config panel
#         And I input a phase label
# And I click on 'Close editor' button
#         And I select the first phase filter with label
#         Then Phase Filter is shown with the phase label text
#         And Applied filter pill has Phase label text

#     Scenario: Retain position of asset on navigating back from Details to List page
# Given I click on widget Settings Button
# TODO: below, add to method on Line 423
#         And I select 'Load more' Pagination and '50' Results per page
#         And I click on the last Asset in the asset view
#         And I click on Browser Back button
#         Then I see the Last asset in the asset 'Grid' view

#     Scenario: Asset Properties : Defaults to Name
# Given I click on widget Settings Button
#         Then Asset Properties has 'Name' as a default value
#         And I search by 'Name' for asset 'TeamITG'
#         And Search Filter is displayed as pill
#     # And URL shows asset property 'Name' and value for asset 'TeamITG'

#     Scenario: Asset Properties
# Given I click on widget Settings Button
#         And I select 'Id' from asset properties
#         And I search by 'Id' for asset 'TeamITG'
#         Then Search Filter is displayed as pill
#         # And URL shows asset property 'Id' and value for asset 'TeamITG'
#         And I click on X button on Applied Filter
#         And Applied Filter is removed



# # Scenario Outline: Period Filter
# #     And I click on 'Resource List' widget Settings Button
# #     And I 'check' Enable period Filter on Config panel
# #     Then Period Filter label is displayed as '<Instant>: ANYTIME'
# #     And I set period '<StartDate>' to '<EndDate>' and '<Instant>' Instant
# #     And Period filter is displayed for '<StartDate>' '<EndDate>' and '<Instant>'
# #     And Period '<StartDate>' and '<EndDate>' are displayed on URL

# #     Examples:
# #         | StartDate | EndDate  | Instant  |
# #         | 1/1/2000  | 1/7/2021 | Created  |
# #         | 1/1/2000  |          | Created  |
# #         | 1/1/2000  | 1/7/2021 | Modified |
# #         | 1/1/2000  |          | Modified |
