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
  # This is a bug
  Scenario: 05 Revert button
    Given I click on widget Settings Button
    And I update the widget title to 'Hello'
    When I click on 'Revert' button
    Then widget title is set to 'Button'

  @ignore
  # This is a bug
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
    Given I click on 'Publish' button
    And I enter "NoAsset12345" into the "Resource List Search" input
    When I click the search option
    Then "No Assets Available" is displayed

  Scenario: 17 Back to top Button
    Given I click on 'Publish' button
    And I navigate to the last asset
    When I click button based on aria-label "Back to Top"
    Then I am brought to the top of the page

  Scenario Outline: 18 Inherit/include Assets from parent/sub domains
    And I click on Domain option on Toolbar
    And I select 'Team ITG' domain
    And I click on 'Resource List' button
    And I check the Include Sub Domains in results checkbox
    And I check the Include Parent Domains in results checkbox
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