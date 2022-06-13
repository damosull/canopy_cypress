@test
Feature: 06 Core Config Fields
This Feature covers CAR-264. All Core widgets will by default have the core fields: Widget Column span, Width, Alignment, Title, Space Option

  Background: Login & Create a Section Widget
    Given I login to ITG
    And I click on Editing mode button
    When I click on clear layout Button
    Then I create a 'Section' Widget

  Scenario Outline:
    Given I click on 'Close settings' button
    When I create a '<WidgetName>' Widget
    And I set the widget Width on Config Panel to '20'
    And I select Top,Right,Bottom,Left widget Spacing on Config Panel
    And I select '<Alignment>' widget Alignment on Config Panel
    Then padding for widget is set to '25'
    
    Examples:
      | WidgetName | Alignment | ColumnSpan |
      | Heading    | Right     |            |