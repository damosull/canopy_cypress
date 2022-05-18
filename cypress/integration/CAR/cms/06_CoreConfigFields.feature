
Feature: 06 Core Config Fields

              Description :This Feature covers CAR-264
    All Core widgets will by default have the core fields :
    Widget Column span, Width, Alignment, Title, Space Option

  Background: Login & Create a Section Widget
    Given I login to ITG
    And I click on 'Editing mode' button
    When I click on clear layout Button
    Then I create a 'Section' Widget

# NOTE: Feature is complete to same extent as old framework. Commented out lines below were commented out in old framework.

  Scenario Outline:
    Given I click on 'Close editor' button
    And I see 'Editing mode' button
    When I click on 'Editing mode' button
    And I create a '<WidgetName>' Widget
        # And I set widget Title '<WidgetName>'
    And I set the widget Width on Config Panel to '20'
    And I select Top,Right,Bottom,Left widget Spacing on Config Panel
    And I select '<Alignment>' widget Alignment on Config Panel
        # And I set Widget Column Span '<ColumnSpan>'
        # And Widget core fileds are adjusted as per config width,Spacing,'<Alignment>','<WidgetTitle>','<ColumnSpan>'
    Then padding for widget is set to '25'
        # And Widget core fileds are adjusted as per config width,Spacing,'<Alignment>','<WidgetTitle>','<ColumnSpan>'
        # And '<WidgetName>' Widget padding is adjusted as per the spacing option set in config


    Examples:
      | WidgetName | Alignment | ColumnSpan |
      | Heading    | Right     |            |