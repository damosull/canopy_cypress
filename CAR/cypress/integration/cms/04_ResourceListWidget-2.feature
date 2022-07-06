@test
Feature: 04 Resource List Widget - 2
Ability to add Resource List widget and edit the configuration

  Background: Login & Create a Resource List Widget
    Given I login to ITG
    And I click on Editing mode button
    When I click on clear layout Button
    Then I create a 'Resource List' Widget

  Scenario: 20 Default Grid View of Assets
    Given I click on widget Settings Button
    And Grid View is set by default on Config Panel
    When I click on 'Publish' button
    Then Assets on Resource List are shown in 'Grid' view
    And AssetName and AssetType are shown under the asset in Grid view

  @ignore
  Scenario: 21 List View of Assets
    Given I click on widget Settings Button
    When I select 'List' view as Search Result style
    # Then Resource List columns should have the below headings
      # | Preview      |
      # | Name         |
      # | Extension    |
      # | Filesize     |
      # | Type         |
      # | Adaptor Type |
    # And Assets on Resource List are shown in 'List' view

  Scenario: 22 Asset Details Page in Grid View
    Given I click on widget Settings Button
    And I select 'Grid' view as Search Result style
    When I click on the first AssetName in Asset 'Grid' view
    Then Asset Details Page opens with 'lenses System' as title
    And 'Resource' Asset Type is displayed on Asset Details page
    And Asset Preview is displayed on Asset Details page

  Scenario: 23 Asset Details Page in List View
    Given I click on widget Settings Button
    And I select 'List' view as Search Result style
    When I click on the first AssetName in Asset 'List' view
    Then Asset Details Page opens with 'lenses System' as title
    And 'Resource' Asset Type is displayed on Asset Details page
    And Asset Preview is displayed on Asset Details page

  Scenario: 24 URL capture of Asset Details Page
    Given I click on widget Settings Button
    And I select 'Grid' view as Search Result style
    When I click on the first AssetName in Asset 'Grid' view
    Then URL captures Asset Details page
    And I am on same page on refreshing the page

  Scenario Outline: 25 Retain position of asset on navigating back from Details to ListPage
    Given I click on widget Settings Button
    And I select '<AssetView>' view as Search Result style
    When I click on the first AssetName in Asset '<AssetView>' view
    Then I click on Browser Back button
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
    # Then All visible assets are selected
    And I select pagination Navigator 'Last page'
    And I select pagination Navigator 'First page'
    # And All visible assets are selected

  @ignore
  Scenario: 27 Asset Selection not retained on navigating to Asset Detail page
    Given I click on widget Settings Button
    And I select 'Grid' view as Search Result style
    And I click on Select Visible icon
    # Then All visible assets are selected
    And I click on the first AssetName in Asset 'Grid' view
    And I click on Browser Back button
    # And All visible assets are not selected

  Scenario: 28 Sort dropdown, Default Sort Options and tooltip on Ascending-Descending arrow
    Given I click on widget Settings Button
    When I click on Close editor button
    Then Sort options are defaulted to Date Created and Descending
    And the below sort options are available
      | Name          |
      | Type          |
      | State         |
      | Date Created  |
      | Date Modified |
    # Then I see 'Descending' tooltip on hovering over Sort Direction
    # And I set the sort direction to 'Ascending'
    # And I see 'Ascending' tooltip on hovering over Sort Direction

  Scenario Outline: 29 Assets Sorted as per the Sort options
    Given I click on widget Settings Button
    And I set Include 'Sub' Domains in Results to 'true'
    And I set Include 'Parent' Domains in Results to 'true'
    And I select '<PaginationStyle>' pagination and '<ResultCount>' results per page
    And I select 'Grid' view as Search Result style
    And I click on Close editor button
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
    And I scroll beyond the last asset
    And Results per page should be 'twice' '<ResultCount>'
    And I scroll beyond the last asset
    And Results per page should be 'thrice' '<ResultCount>'

    Examples:
      | PaginationStyle | ResultCount |
      | Load more       | 10          |
      | Load more       | 100         |

  Scenario: 32 Pagination
    Given I click on widget Settings Button
    And I set Include 'Sub' Domains in Results to 'true'
    And I set Include 'Parent' Domains in Results to 'true'
    And I select 'Pagination' pagination and '10' results per page
    When I select 'Grid' view as Search Result style
    Then Icons 'Next Page' and 'Last Page' are disabled when I click 'Last Page'
    And Icons 'Previous Page' and 'First Page' are disabled when I click 'First Page'
    And Pagination Range and PageNo on URL are shown for '10'
      | Last Page     |
      | Previous Page |
      | First Page    |
      | Next Page     |
    And Results per page should be 'equal to' '10'
    And URL captures Asset Details page
    And I am on same page on refreshing the page

  Scenario Outline: 33 No InfiniteScroll/LoadMore/Pagination when there are no more assets to load
    Given I click on widget Settings Button
    And I select '<PaginationStyle>' pagination and '<ResultCount>' results per page
    And I select 'Grid' view as Search Result style
    And I search for the first asset
    # And I scroll beyond the last asset
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
    # Then All visible assets are selected
    And Count of selected items '<ResultCount>' is displayed on snack bar
    And I click on 'Clear all' button
    # And All visible assets are not selected
    And Snack bar is not displayed

    Examples:
      | PaginationStyle | ResultCount |
      | Load more       | 50          |

  @ignore
  Scenario: 35 Back To Top button is not hidden when there is a snack bar
    And I click on Select Visible icon
    Then Snack bar is displayed
    And I navigate to the last asset
    Then Back to Top arrow is displayed with 'Back to Top' tooltip upon hover
    When I click button based on aria-label "Back to Top"
    And I am brought back to top

  Scenario Outline: 36 Enable/Disable <FilterType> filter
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
      | domain     |
      | adaptor    |
      | phase      |

  Scenario Outline: 38 Count on <FilterType> filter matches the count of list View
    Given I click on widget Settings Button
    And I 'check' Enable '<FilterType>' Filter on Config panel
    # And I click on Close editor button
    And I select the first '<FilterType>' filter
    Then Count on filter matches the count of list View

    Examples:
      | FilterType |
      | keyword    |
      | domain     |
      | state      |
      | types      |

  Scenario Outline: 39 Applied <FilterType> filter and Remove pills
    Given I click on widget Settings Button
    And I open the 'Searches' Filter on Config panel
    And I 'check' Enable '<FilterType>' Filter on Config panel
    # And I click on Close editor button
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