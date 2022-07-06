@test @CAR-372
Feature: 03 Load More Button

  Scenario: Load more button turns into a spinner
    Given I login to ITG
    When I scroll beyond the last asset
    # TODO: The above step clicks the load more button, but not sure how to validate the spinner appears, cause it goes too fast before being able to inspect it.
    # When I select the load more button on Resource List widget
    # Then Load more button turns into a spinner while the assets are loading
    
    
