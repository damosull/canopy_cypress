@test
Feature: 02 Shares Component: Shares
This Feature covers all the shares functions for a User with Shares Services

  Background:
    Given I login to ITG

  Scenario: 01 Create Resource List Widget
    And I click on the side menu button
    And I click on activate panel Button
    When I click on clear layout Button
    Then I create a 'Resource List' Widget

  Scenario: 02 Shares Title and URL
    When I click on Shares button on toolbar
    Then URL should include '/shares'
    And Title of Shares page is 'User Shares'

  Scenario: 03 Shares icon on toolbar shows Shares count
    Then Shares count is displayed on Shares icon

  Scenario: 04 Default Sort, Tooltip on Sort Order
    And I click on Shares button on toolbar
    And Sort options are defaulted to Created and Descending
    When I click on the Sort button
    Then I see the sort options below
      | Name     |
      | Created  |
      | Modified |
    And I click away from the dropdown
    And I see 'Descending' tooltip on hovering over Sort Direction
    And I set the sort direction to 'Ascending'
    And I see 'Ascending' tooltip on hovering over Sort Direction

  Scenario: 05 Sort
    And I click on Shares button on toolbar
    When I select the Sort options 'Name' and 'Descending'
    Then Selected Sort option 'Name' is highlighted
    And Sort options 'Name' and 'Descending' is shown in URL

  Scenario: 06 Shares Table Column Names , Infinite Scroll
    When I click on Shares button on toolbar
    Then Shares table has columns
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
    When I click on 'Create new Share' button
    Then I see 'Create new share' text
    And Create Share button is disabled
    And I input Share Name 'auto_share'
    And I input Share Description 'auto_shareDesc'
    And Clicking on X icon closes the overlay
    And I click on Shares button on toolbar
    # And Share 'auto_share' is not listed on Shares list page

  Scenario: 08 Non shareable items overlay
    And I select the non shareable test asset
    And I click on 'Add to share' button
    When I click on 'Create new Share' button
    Then I see 'Non-shareable assets can not be added to a Share.' text
    And I see 'Confirm' button
    And Clicking on X icon closes the overlay

  Scenario: 09 Create Share, Share Modal, Toast Notification
    And I select the shareable test asset
    And I click on 'Add to share' button
    And I click on 'Create new Share' button
    And I input Share Name 'auto_share'
    When I input Share Description 'auto_shareDesc'
    Then Shareable assets are populated with counts
    And I click on 'Create share' button
    # And Toast notification pops up on creating a share
    And I click on Shares button on toolbar
    # And Share 'auto_share' is listed on Shares list page

  Scenario: 10 Add to Existing share:  Cancel Overlay does not update the Share
    And I select the shareable2 test asset
    And I click on 'Add to share' button
    And I click on "Add to 'auto_share' share" button
    And I click on 'Cancel' button
    When I click on Shares button on toolbar
    Then Share 'shareable2 test' is not listed on Shares list page

  Scenario: 11 Add to existing share
    And I select the shareable2 test asset
    And I click on 'Add to share' button
    And I click on "Add to 'auto_share' share" button
    And I see "Add assets to share 'auto_share'" text
    And I see 'shareable2 test' text
    When I click on 'Confirm' button
    # And Toast notification pops up on adding to an existing share
    Then I click on Shares button on toolbar
    # And Share 'shareable2 test' is listed on Shares list page

  Scenario: 12 Shares Detail Page
    And I click on Shares button on toolbar
    When I access Share Details page of Share
    Then Share detail page header shows ShareName, Id, Available
    And Share detail page shows Share Guests count
    And Share detail page shows Share Assets count
    And Share detail page shows Share Availability period
    And Share details page is recorded on the url
    And I am on same page on refreshing the page

  Scenario: 13 Back button on Details page, Retain position of share
    And I click on Shares button on toolbar
    When I select the last share
    # Then Back button is displayed with 'Back' tooltip on Shares details page
    Then I am navigated to Shares list page on clicking on Back button
    # Then I see the Last Share on Shares list page

  Scenario: 14 Assets Tab title and Asset Count
    And I click on Shares button on toolbar
    And I access Share Details page of Share
    When I click on Assets Tab on the Share
    Then Shared Assets tab title is 'Shared assets'
    And Assets on Assets tab are listed in grid format
    And Assets tab has the count of Assets displayed

  Scenario: 15 Assets Tab recorded on URL
    And I click on Shares button on toolbar
    And I access Share Details page of Share
    When I click on Assets Tab on the Share
    Then Shares Assets tab is recorded in the url
    And I am on same page on refreshing the page
    # And I can access the same page on launching the bookmark

  Scenario: 16 Assets Tab : Default Sort, Tooltip on Sort Order
    And I click on Shares button on toolbar
    And I access Share Details page of Share
    When I click on Assets Tab on the Share
    Then Sort options are defaulted to Date Created and Descending
    And the below sort options are available
      | Name          |
      | Type          |
      | State         |
      | Date Created  |
      | Date Modified |
    And I click away from the dropdown
    And I see 'Descending' tooltip on hovering over Sort Direction
    And I set the sort direction to 'Ascending'
    And I see 'Ascending' tooltip on hovering over Sort Direction

  Scenario: 17 Assets tab : Sort
    And I click on Shares button on toolbar
    And I access Share Details page of Share
    And I click on Assets Tab on the Share
    When I select the Sort options 'Date Modified' and 'Ascending'
    Then Selected Sort option 'Date Modified' is highlighted
    And Sort options 'Date Modified' and 'Ascending' is shown in URL
    And I see the same sort options on refreshing the URL

  Scenario: 18 Asset Selection and unselection
    And I click on Shares button on toolbar
    And I access Share Details page of Share
    And I click on Assets Tab on the Share
    When I click on Select visible icon on Shares Assets tab
    Then Count of selected items is displayed on Share snack bar
    And First asset is unselected as i uncheck the first asset
    And All visible assets are not selected

  Scenario: 19 Shares Asset Removal-Cancel Overlay
    And I click on Shares button on toolbar
    And I access Share Details page of Share
    And I click on Assets Tab on the Share
    And I click on Select visible icon on Shares Assets tab
    When I click on Remove CTA on Shares SnackBar
    Then Title on Remove Share Asset Overlay is populated correctly
    And Overlay has description 'Are you sure you want to remove these Assets from this share?'
    And Clicking on X icon closes the overlay
    And Asset count 'is not' updated on Shares Assets tab
    And Asset count 'is not' updated on Shares Title

  Scenario: 20 Shares Asset Removal-Cancel Overlay
    And I click on Shares button on toolbar
    And I access Share Details page of Share
    And I click on Assets Tab on the Share
    And I click on Select visible icon on Shares Assets tab
    And I click on Remove CTA on Shares SnackBar
    When I click on Confirm Button on the Remove Share Asset Overlay
    # Then Toast Notification pops up on removing Share assets
    Then Asset count 'is' updated on Shares Assets tab
    And Asset count 'is' updated on Shares Title

  Scenario: 20 Guests Tab Title and Message when No guests are added
    And I click on Shares button on toolbar
    And I access Share Details page of Share
    When I click on Guests Tab on the Share
    Then Shares Guests tab is recorded on URL
    And Shares Guests tab has a title 'Guests'
    And Shares Guests tab shows a message when there are no Guests
    And Guest count is not displayed when there are no guests on a share
    And Invite New Guests CTA is displayed

  Scenario: 21 Guests Tab: Guests table, Count of guests, Infinite Scroll
    And I click on Shares button on toolbar
    And I access Share Details page of Share
    And I click on Guests Tab on the Share
    And I click on the Invite New Guests CTA
    And I enter Guest details 'guest1@email.com','Guest Msg','2 days'
    When I click on 'Confirm' button
    Then Count of Guests is shown on Guests tab Header
    # # TODO: assertion in below step commented out due to API call needed to validate
    And Count of Guests is shown in Guests tab
    And Guests table has below columns
      | Id        |
      | Email     |
      | Available |
      | Start     |
      | End       |

  Scenario: 22 Guests Tab : Default Sort, Tooltip on Sort Order
    And I click on Shares button on toolbar
    And I access Share Details page of Share
    And I click on Guests Tab on the Share
    And I click on the Invite New Guests CTA
    And I enter Guest details 'guest1@email.com','Guest Msg','2 days'
    When I click on 'Confirm' button
    Then Sort options are defaulted to Created and Descending
    And I click on Guest sort options
    And the below guest sort options are available
      | Email    |
      | Created  |
      | Modified |
    And I click the active sort option
    And I see 'Descending' tooltip on hovering over Sort Direction
    And I set the sort direction to 'Ascending'
    And I see 'Ascending' tooltip on hovering over Sort Direction

  Scenario: 23 Guests Tab : Invite Guests Overlay
    And I click on Shares button on toolbar
    And I access Share Details page of Share
    When I click on Guests Tab on the Share
    Then Invite New Guests CTA is displayed
    And I click on the Invite New Guests CTA
    And Title on Overlay is 'Invite Guests'

  Scenario: Guests Tab : 24 Invite Guests Overlay: Cancel Overlay
    And I click on Shares button on toolbar
    And I access Share Details page of Share
    And I click on Guests Tab on the Share
    And I click on the Invite New Guests CTA
    When I enter Guest details 'guest1@email.com','Guest Msg','2 days'
    Then I click on X Button on the Overlay

  Scenario: 25 Guests Overlay : Mandatory fields
    And I click on Shares button on toolbar
    And I access Share Details page of Share
    And I click on Guests Tab on the Share
    When I click on the Invite New Guests CTA
    Then Confirm button on Invite guests Overlay is 'disabled'
    And the below Duration options are available
      | 24 hours |
      | 2 days   |
      | 3 days   |
      | 5 days   |
      | 7 days   |
    And I enter Guest details 'guest1@email.com','null','2 days'
    And Confirm button on Invite guests Overlay is 'enabled'

  Scenario: 26 Guests Overlay : Create a New Guest
    And I click on Shares button on toolbar
    And I access Share Details page of Share
    And I click on Guests Tab on the Share
    And I click on the Invite New Guests CTA
    When I enter Guest details 'guest@email.com','null','24 hours'
    Then I click on 'Confirm' button
    # Then Toast Notification pops up on adding a guest

  Scenario: 27 Guests Overlay : Invalid email address
    And I click on Shares button on toolbar
    And I access Share Details page of Share
    And I click on Guests Tab on the Share
    And I click on the Invite New Guests CTA
    When I enter Guest details 'guest1','null','24 hours'
    Then I see 'Please provide a valid email address!' text
    And Confirm button on Overlay is disabled

  Scenario: 28 Guests tab : Sort
    And I click on Shares button on toolbar
    And I access Share Details page of Share
    And I click on Guests Tab on the Share
    And I click on the Invite New Guests CTA
    And I enter Guest details 'guest1@email.com','Guest Msg','2 days'
    And I click on 'Confirm' button
    When I select the Sort options 'Modified' and 'Ascending'
    Then Selected Sort option 'Modified' is highlighted
    And Share Guests Sort options 'Modified' and 'Ascending' are shown in URL
    And Guests are sorted as per Sort options 'Modified' and 'Ascending'
    And I see the same sort options on refreshing the URL

  Scenario: 29 Shares Overview Page
    And I click on Shares button on toolbar
    When I access Share Details page of Share
    Then Shares Overview tab has title 'Share information'
    And Field Titles on Shares Overview tab are populated correctly

  Scenario: 30 Edit existing Share : Cancel Changes
    And I click on Shares button on toolbar
    And I access Share Details page of Share
    When I click on 'Edit Share' button
    Then Edit Share button is disabled and says Editing
    And Owner, CreatedOn, ModifiedOn fields are Read only
    And I edit the Share 'auto_share'
    And Share is not edited on clicking on Cancel Button

  Scenario: 31 Edit existing Share
    And I click on Shares button on toolbar
    And I access Share Details page of Share
    And I click on 'Edit Share' button
    When I edit the Share 'auto_share'
    Then Share is edited on clicking on Save Button