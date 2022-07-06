@test @CAR-320
Feature: 05 Language Drop Down Menu

  Scenario: Select a language from Language dropdown
    Given I login to ITG
    Then Language option is set to 'English'
    And I see the language menu Items in 'English'
    When I select 'Spanish' on language dropdown
    Then Language option is set to 'Spanish'
    And I see the language menu Items in 'Spanish'
    And I see the site language is updated to selected language
    And I see static content on the site is still in the default language
      | Assets        |
      | Business Unit |
      | Campaign      |
      | Resources     |
      | Site Area     |
      | test          |