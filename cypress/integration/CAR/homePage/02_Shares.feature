@test
Feature: Shares Component: Shares
This Feature covers all the shares functions for a User with Shares Services

  Background:
    Given I login to ITG

  Scenario: 01 Create Resource List Widget
    And I click on the side menu button
    And I click on activate panel Button
    And I click on clear layout Button
    And I create a 'Resource List' Widget

  Scenario: 02 Shares Title and URL
    And I click on Shares button on toolbar
    Then URL should include '/shares'
    And Title of Shares page is 'User Shares'

  Scenario: 03 Shares icon on toolbar shows Shares count
    Then Shares count is displayed on Shares icon

  Scenario: 04 Default Sort, Tooltip on Sort Order
    And I click on Shares button on toolbar
    Then Sort options are defaulted to Created and Descending
    And I click on the Sort button
    And I see the sort options below
      | Name     |
      | Created  |
      | Modified |
    And I click away from the dropdown
    # And I see 'Descending' tooltip on hovering over Sort Direction
    And I set the sort direction to 'Ascending'
    # And I see 'Ascending' tooltip on hovering over Sort Direction

  Scenario: 05 Sort
    And I click on Shares button on toolbar
    And I select the Sort options 'Name' and 'Descending'
    Then Selected Sort option 'Name' is highlighted
    And Sort options 'Name' and 'Descending' is shown in URL

  Scenario: 06 Shares Table Column Names , Infinite Scroll
    And I click on Shares button on toolbar
    # And Shares table has columns
      | Id        |
      | Name      |
      | Assets    |
      | Enabled   |
      | Available |
      | Created   |
      | Start     |
      | End       |

    And Shares per page should be 'equal to' '30'
    And I scroll beyond the last Share
    And Shares per page should be 'more than' '30'

  Scenario: 07 Create Share Modal : Mandatory Fields and Close Overlay
    And I select the shareable test asset
    And I click on 'Add to share' button
    And I click on 'Create new Share' button
    And I see 'Create new share' text
    And Create Share button is disabled
    And I input Share Name 'auto_share'
    And I input Share Description 'auto_shareDesc'
    And Clicking on X icon closes the overlay
    And I click on Shares button on toolbar
    And Share 'auto_share' is not listed on Shares list page

  Scenario: 08 Non shareable items overlay
    And I select the non shareable test asset
    And I click on 'Add to share' button
    And I click on 'Create new Share' button
    And I see 'Non-shareable assets can not be added to a Share.' text
    And I see 'Confirm' button
    And Clicking on X icon closes the overlay

  Scenario: 09 Create Share, Share Modal, Toast Notification
    And I select the shareable test asset
    And I click on 'Add to share' button
    And I click on 'Create new Share' button
    And I input Share Name 'auto_share'
    And I input Share Description 'auto_shareDesc'
    Then Shareable assets are populated with counts
    And I click on 'Create share' button
    # And Toast notification pops up on creating a share
    And I click on Shares button on toolbar
    And Share 'auto_share' is listed on Shares list page

  Scenario: 10 Add to Existing share:  Cancel Overlay does not update the Share
    And I select the shareable2 test asset
    And I click on 'Add to share' button
    And I click on "Add to 'auto_share' share" button
    And I click on 'Cancel' button
    And I click on Shares button on toolbar
    And Share 'shareable2 test' is not listed on Shares list page

  Scenario: 11 Add to existing share
    And I select the shareable2 test asset
    And I click on 'Add to share' button
    And I click on "Add to 'auto_share' share" button
    And I see "Add assets to share 'auto_share'" text
    And I see 'shareable2 test' text
    And I click on 'Confirm' button
    # And Toast notification pops up on adding to an existing share
    And I click on Shares button on toolbar
    # And Share 'shareable2 test' is listed on Shares list page

  Scenario: 12 Shares Detail Page
    And I click on Shares button on toolbar
    And I access Share Details page of Share 'auto_share'
    Then Share detail page header shows ShareName, Id, Available
    And Share detail page shows Share Guests count
    And Share detail page shows Share Assets count
    And Share detail page shows Share Availability period
    And Share details page is recorded on the url
    And I am on same page on refreshing the page

  Scenario: Back button on Details page, Retain position of share
    And I click on Shares button on toolbar
    And I select the last share
    Then Back button is displayed with 'Back' tooltip on Shares details page
    And I am navigated to Shares list page on clicking on Back button
    # Then I see the Last Share on Shares list page

  Scenario: Assets Tab title and Asset Count
    And I click on Shares button on toolbar
    And I access Share Details page of Share 'auto_share'
    And I click on Assets Tab on the Share
    Then Shared Assets tab title is 'Shared assets'
    And Assets on Assets tab are listed in grid format
    And Assets tab has the count of Assets displayed
    # infinite scroll

  Scenario: Assets Tab recorded on URL
    And I click on Shares button on toolbar
    And I access Share Details page of Share 'auto_share'
    And I click on Assets Tab on the Share
    Then Shares Assets tab is recorded in the url
    And I am on same page on refreshing the page
    And I can access the same page on launching the bookmark

  Scenario: Assets Tab : Default Sort, Tooltip on Sort Order
    And I click on Shares button on toolbar
    And I access Share Details page of Share 'auto_share'
    And I click on Assets Tab on the Share
    Then Sort options are defaulted to Date Created and Descending
    And I see the sort options 'Name,Type,State,Date Created,Date Modified'
    And I see 'Descending' tooltip on hovering over Sort Direction
    And I set the sort direction to 'Ascending'
    And I see 'Ascending' tooltip on hovering over Sort Direction

  Scenario Outline: Assets tab : Sort
    And I click on Shares button on toolbar
    And I access Share Details page of Share 'auto_share'
    And I click on Assets Tab on the Share
    And I select the Sort options '<SortOption>' and '<SortOrder>'
    Then Selected Sort option '<SortOption>' is highlighted
    And Sort options '<SortOption>' and '<SortOrder>' is shown in URL
    And Share Assets are sorted as per Sort options '<SortOption>' and '<SortOrder>'
    And I see the same sort options on refreshing the URL

    Examples:
      | SortOption    | SortOrder |
      | Date Modified | Ascending |

  Scenario: Asset Selection and unselection
    And I click on Shares button on toolbar
    And I access Share Details page of Share 'auto_share'
    And I click on Assets Tab on the Share
    And I click on Select visible icon on Shares Assets tab
    And Count of selected items is displayed on Share snack bar
    And First asset is unselected as i uncheck the first asset
    And I click on Clear All button on Snack bar
    And All visible Assets are unselected

  Scenario: Shares Asset Removal-Cancel Overlay
    And I click on Shares button on toolbar
    And I access Share Details page of Share 'auto_share'
    And I click on Assets Tab on the Share
    And I click on Select visible icon on Shares Assets tab
    And I click on Remove CTA on Shares SnackBar
    Then Title on Remove Share Asset Overlay is populated correctly
    And Overlay has description 'Are you sure you want to remove these Assets from this share?'
    And Clicking on X icon closes the overlay
    And Asset count 'is not' updated on Shares Assets tab
    And Asset count 'is not' updated on Shares Title


  Scenario: Shares Asset Removal-Cancel Overlay
    And I click on Shares button on toolbar
    And I access Share Details page of Share 'auto_share'
    And I click on Assets Tab on the Share
    And I click on Select visible icon on Shares Assets tab
    And I click on Remove CTA on Shares SnackBar
    And I click on Confirm Button on the Remove Share Asset Overlay
    Then Toast Notification pops up on removing Share assets
    And Asset count 'is' updated on Shares Assets tab
    And Asset count 'is' updated on Shares Title

  Scenario: Guests Tab Title and Message when No guests are added
    And I click on Shares button on toolbar
    And I access Share Details page of Share 'auto_share'
    And I click on Guests Tab on the Share
    Then Shares Guests tab is recorded on URL
    And Shares Guests tab has a title 'Guests'
    And Shares Guests tab shows a message when there are no Guests
    And Guest count is not displayed when there are no guests on a share
    And Invite New Guests CTA is displayed

  Scenario:Guests Tab: Guests table, Count of guests, Infinite Scroll
    And I add guests to the share through API
    And I click on Shares button on toolbar
    And I access Share Details page of Share 'auto_share'
    And I click on Guests Tab on the Share
    Then Count of Guests is shown on Guests tab Header
    And Count of Guests is shown in Guests tab
    And Guests table has columns 'Id,Email,Available,Start,End'
    # And Guests Table has infinite scroll

  Scenario: Guests Tab : Default Sort, Tooltip on Sort Order
    And I click on Shares button on toolbar
    And I access Share Details page of Share 'auto_share'
    And I click on Guests Tab on the Share
    Then Sort options are defaulted to Created and Descending
    And I see the sort options 'Email,Created,Modified'
    And I see 'Descending' tooltip on hovering over Sort Direction
    And I set the sort direction to 'Ascending'
    And I see 'Ascending' tooltip on hovering over Sort Direction

  Scenario: Guests Tab : Invite Guests Overlay
    And I click on Shares button on toolbar
    And I access Share Details page of Share 'auto_share'
    And I click on Guests Tab on the Share
    Then Invite New Guests CTA is displayed
    And I click on the Invite New Guests CTA
    And Title on Overlay is 'Invite Guests'

  Scenario: Guests Tab : Invite Guests Overlay: Cancel Overlay
    And I click on Shares button on toolbar
    And I access Share Details page of Share 'auto_share'
    And I click on Guests Tab on the Share
    And I click on the Invite New Guests CTA
    And I enter Guest details 'guest1@email.com','Guest Msg','2 days'
    And I click on X Button on the Overlay
    Then Guest 'is not' added to the Guests list

  Scenario: Guests Overlay : Mandatory fields
    And I click on Shares button on toolbar
    And I access Share Details page of Share 'auto_share'
    And I click on Guests Tab on the Share
    And I click on the Invite New Guests CTA
    Then Confirm button on Invite guests Overlay is 'disabled'
    And Duration field has values '24 hours,2 days,3 days,5 days,7 days'
    And I enter Guest details 'guest1@email.com','null','2 days'
    And Confirm button on Invite guests Overlay is 'enabled'

  Scenario Outline: Guests Overlay : Create a New Guest
    And I click on Shares button on toolbar
    And I access Share Details page of Share 'auto_share'
    And I click on Guests Tab on the Share
    And I click on the Invite New Guests CTA
    And I enter Guest details '<Guest>','<Message>','<Duration>'
    And I click on Confirm Button on Invite guests Overlay
    Then Toast Notification pops up on adding a guest
    And Guest 'is' added to the Guests list
    And Count of Guests is updated on Guests tab Header
    And Count of Guests is updated on Guests tab
    And Count of Guests is updated on header of Shares detail page

    Examples:
      | Guest           | Message | Duration |
      | guest@email.com | null    | 24 hours |

  Scenario: Guests Overlay : Invalid email address
    And I click on Shares button on toolbar
    And I access Share Details page of Share 'auto_share'
    And I click on Guests Tab on the Share
    And I click on the Invite New Guests CTA
    And I enter Guest details 'guest1','null','24 hours'
    Then Error is displayed on Invite Guests overlay 'Please provide a valid email address!'
    And Confirm button on Overlay is disabled

  Scenario Outline: Guests tab : Sort
    And I click on Shares button on toolbar
    And I access Share Details page of Share 'auto_share'
    And I click on Guests Tab on the Share
    And I select the Sort options '<SortOption>' and '<SortOrder>'
    Then Selected Sort option '<SortOption>' is highlighted
    And Share Guests Sort options '<SortOption>' and '<SortOrder>' are shown in URL
    And Guests are sorted as per Sort options '<SortOption>' and '<SortOrder>'
    And I see the same sort options on refreshing the URL

    Examples:
      | SortOption | SortOrder |
      | Modified   | Ascending |

  Scenario: Shares Overview Page
    And I click on Shares button on toolbar
    And I access Share Details page of Share 'auto_share'
    Then Shares Overview tab has title 'Share information'
    And Field Titles on Shares Overview tab are populated correctly
    And Fields on Shares Overview tab are populated correctly

  Scenario Outline: Edit existing Share : Cancel Changes
    And I click on Shares button on toolbar
    And I access Share Details page of Share 'auto_share'
    And I click on Edit Share button
    Then Edit Share button is disabled and says Editing
    And Owner, CreatedOn, ModifiedOn fields are Read only
    And I edit the Share 'auto_share'
    Then Share is not edited on clicking on Cancel Button

    Examples:
      | Name       | Enabled   | Start    | End       | Description |
      | auto_share | Ascending | Modified | Ascending | Ascending   |

  Scenario Outline: Edit existing Share
    And I click on Shares button on toolbar
    And I access Share Details page of Share 'auto_share'
    And I click on Edit Share button
    And I edit the Share 'auto_share'
    Then Share is edited on clicking on Save Button
    And Toast Notifications pops up on editing a share
    And Share Name and Availability are updated

    Examples:
      | Name       | Enabled   | Start    | End       | Description |
      | auto_share | Ascending | Modified | Ascending | Ascending   |