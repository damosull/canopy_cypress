@test
Feature: CMS Component: Section Widget
Feature covers all the Section widget Configurations

  Scenario: Login
    Given I navigate to ITG test environment
    When I enter 'autouser' and '1Qwertasdf' on Login Page
    And I click on Login Button with 'valid' Credentials
    And I click on 'Editing mode' button

  @PreRequisite
  Scenario: Create a Section Widget
    And I click on clear layout Button
    And I create a 'Section' Widget

  Scenario: User with both CMS and EditPages option is able to see Edit Button on CMS Editor
    Then I see 'Close editor' button
    And I click on 'Close editor' button
    And I see 'Editing mode' button
    And I click on 'Editing mode' button
    And I see 'Close editor' button

  Scenario: Left hand Widget Panel
    Then Left hand panel is shown
    And Left hand panel is titled 'Widgets'
    And I click on close button on Widget panel
    And Widget Panel is collapsed

  Scenario: Close editor button
    And I click on widget Settings Button
    And I click on 'Close editor' button
    Then Widget Panel is collapsed
    And I see 'Editing mode' button

      #   Scenario: Publish button
      #         And I click on 'Save Layout' button on CMS Editor
      #        Then I am taken out of Editing mode
      #         And Toggle Button is toggled to 'Editing mode' button

      #   Scenario: Revert button
      #         And I click on 'Section' widget Settings Button
      #         And I update 'Section' widget Title
      #         And I click on 'Reset layout' button on CMS Editor
      #        Then 'Section' Widget Title 'is' reset

      #   Scenario: Publish and Revert Layout
      #         And I click on 'Section' widget Settings Button
      #         And I update 'Section' widget Title
      #         And I click on 'Save Layout' button on CMS Editor
      #         And I click on 'Editing mode' toggle Button
      #         And I click on 'Reset layout' button on CMS Editor
      #        Then 'Section' Widget Title 'is not' reset

      #   Scenario: Right hand Panel - Widget Settings Panel
      #         And I click on widget Settings Button
      #        Then I see Widget Settings Panel is shown with header 'Editing Section'
      #         And Widget being edited is highlighted
      #         And I click on 'View preview' button
      #         And Widgets are not highlighted in Preview mode

      #   Scenario: Edit Section Widget Title
      #         And I click on 'Section' widget Settings Button
      #         And I update 'Section' widget Title
      #        Then Section Widget Title is updated

      #   Scenario: Close Config Panel
      #         And I click on 'Section' widget Settings Button
      #         And I close the Config panel
      #        Then Config panel is collapsed

      #   Scenario: Remove widget
      #         And I click on 'Section' widget Settings Button
      #         And I remove the widget
      #        Then Widget is removed
      #         And Config panel is collapsed

      #   Scenario Outline: Widget Alignment
      #         And I click on 'Section' widget Settings Button
      #         And I select '<Alignment>' widget Alignment on Config Panel
      #         And I set the widget Width on Config Panel
      #        Then Widget is aligned to '<Alignment>'

      #   Examples:
      #             | Alignment |
      #             | Left      |
      #             | Center    |
      #             | Right     |

      #   Scenario: Edit Widget width
      #         And I click on 'Section' widget Settings Button
      #         And I set the widget Width on Config Panel
      #        Then Widget width is adjusted as per the config

      # #Passed but taking more time
      #   Scenario: Edit Spacing
      #         And I click on 'Section' widget Settings Button
      #        Then Default padding for 'Section' widget is set to '0px'
      #         And I select the 'Top' Spacing Option
      #         And I select the 'Right' Spacing Option
      #         And I select the 'Bottom' Spacing Option
      #         And I select the 'Left' Spacing Option
      #         And 'Section' Widget padding is adjusted as per the spacing option set in config

      #   Scenario: Clear Layout
      #         And I click on 'Section' widget Settings Button
      #         And I click on clear layout Button
      #        Then All widgets are cleared
      #         And Config panel is collapsed