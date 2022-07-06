@test @CAR-538
Feature: 01 Loading Spinner

  Background:
    Given I login to ITG

  Scenario:Loading Spinner on clicking Export Icon
    When I access any list pages
    And I click on Export Icon
    Then Export icon changes to a loading spinner
    # TODO: Wasn't sure what a list page was.
    # Tried 'List Test' in the banner, but then couldn't find an export button on that page.