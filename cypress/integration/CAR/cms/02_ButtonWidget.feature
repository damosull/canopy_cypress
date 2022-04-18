@test
Feature: 02 Button Widget
Feature covers all the Button widget Configurations

  Background: Login & Create a Button Widget
    Given I login to ITG
    And I click on 'Editing mode' button
    When I click on clear layout Button
    Then I create a 'Button' Widget

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
    Then widget title is set to 'Button'

  Scenario: 07 Right hand Panel - Widget Settings Panel
    Given I click on widget Settings Button
    Then Right hand panel is shown
    And Right hand panel is titled ' Editing Button '
    And Widget being edited is highlighted

  Scenario: 08 Edit Button Widget Title
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
    And padding for 'Button' widget is set to '0'
    When I set the '<spacing>' Spacing Option to '25'
    Then padding for 'Button' widget is set to '25'

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

  Scenario: 15 Default Button Style and Tab
    Given I click on widget Settings Button
    Then the 'Button' button style radio button is 'checked'
    And Open in New Tab option is 'checked'
    And Destination URL is ''

  Scenario Outline: 16 Add Button and Open URL in a new tab
    Given I add 'Test me' text to the widget
    And I set Destination URL to '<url>'
    When I 'check' open in new tab checkbox
    Then clicking 'Test me' button opens url in a new tab
    
    Examples:
      | inputType | url                                           |
      | button    | https://cloud-test-ng.itgcanopy.com/itg-test/ |
      | link      | https://cloud-test-ng.itgcanopy.com/itg-test/ |
      
  Scenario Outline: 17 Add Button and Open URL in the same tab
    Given I add 'Test me' text to the widget
    And I set Destination URL to '<url>'
    When I 'uncheck' open in new tab checkbox
    Then clicking 'Test me' button opens url in the same tab

    Examples:
      | inputType | url                                           |
      | button    | https://cloud-test-ng.itgcanopy.com/itg-test/ |
      | link      | https://cloud-test-ng.itgcanopy.com/itg-test/ |
      