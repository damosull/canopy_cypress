@test @Heading
Feature: 03 Heading Widget
Feature covers all the Heading widget Configurations

  Background: Login & Create a Heading Widget
    Given I login to ITG
    And I click on Editing mode button
    When I click on clear layout Button
    Then I create a 'Heading' Widget

  Scenario: 01 User with both CMS and EditPages option is able to see Edit Button on CMS Editor
    Given I click on 'Close settings' button
    And I see Editing mode button

  Scenario: 02 Close editor button
    Given I click on widget Settings Button
    When I click on 'Close settings' button
    Then Widget Settings Panel is collapsed
    And I see Editing mode button

  Scenario: 03 Publish button
    Given I click on 'Save & Publish' button
    Then I see Editing mode button

  @ignore
  Scenario: 04 Revert button
    Given I click on widget Settings Button
    And I update the widget title to 'Hello'
    When I click on 'Revert' button
    Then widget title is set to 'Button'

  @ignore
  Scenario: 05 Publish and Revert Layout
    Given I click on widget Settings Button
    And I update the widget title to 'New Title'
    And I click on 'Publish' button
    And I click on Editing mode button
    When I click on 'Revert' button
    Then widget title is set to 'Heading'

  Scenario: 06 Right hand Panel - Widget Settings Panel
    Given I click on widget Settings Button
    Then Right hand panel is shown
    And Right hand panel is titled ' Editing Heading '
    And Widget being edited is highlighted

  Scenario: 07 Edit Heading Widget Title
    Given I click on widget Settings Button
    When I update the widget title to 'New Title'
    # Then widget title is set to 'New Title'

  Scenario: 08 Close Config Panel
    Given I click on widget Settings Button
    When I click on 'Close settings' button
    Then Config panel is collapsed

  Scenario: 09 Remove widget
    Given I click on widget Settings Button
    When I click on 'Remove widget' button
    Then Widget is removed
    And Config panel is collapsed

  Scenario Outline: 10 Widget Alignment - <alignment>
    Given I select '<alignment>' widget Alignment on Config Panel
    When I set the widget Width on Config Panel to '20'
    Then Widget is aligned to '<alignment>'

    Examples:
      | alignment |
      | Left      |
      | Center    |
      | Right     |

  Scenario: 11 Edit Widget width
    Given I click on widget Settings Button
    When I set the widget Width on Config Panel to '20'
    Then Widget width is set to '20'
  
  Scenario Outline: 12 Edit Spacing - <spacing>
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

  Scenario: 13 Clear Layout
    Given I click on widget Settings Button
    When I click on clear layout Button
    Then All widgets are cleared
    And Config panel is collapsed

  Scenario Outline: 14 Edit Widget Text, Text Font, Text size`
    Given I click on widget Settings Button
    And I add '<FreeText>' text to the widget
    And I set the Font Size on Config Panel to '<FontSize>'
    And I select the font type '<Bold>', '<Italic>', '<Underline>'
    And Text '<FreeText>' is shown on the widget with selected font size and type '<Bold>', '<Italic>', '<Underline>'
    When I click on 'Publish' button
    Then Text '<FreeText>' is shown on the widget with selected font size and type '<Bold>', '<Italic>', '<Underline>'

    Examples:
      | FreeText     | FontSize | Bold | Italic | Underline |
      | Heading_auto | 14       | true | true   | true      |