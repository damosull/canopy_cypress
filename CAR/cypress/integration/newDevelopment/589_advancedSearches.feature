@test @CAR-589
Feature: 02 Advanced Searches

  Background:
    Given I login to ITG
    And I click on Editing mode button
    When I click on clear layout Button
    Then I create a 'Resource List' Widget
    And I click on widget Settings Button
    
  Scenario: Scenario 02
    And I scroll down to 'Advanced Search'
    And I click the 'Advanced Search' panel header
    And  user selects 'Advanced Search'
    # When user clicks on 'Add +' button
    # Then user should see 'Search filter' dropdown created

  # Scenario: Scenario 03
  #   And I scroll down to 'Advanced Search'
  #   And  user selects 'Advanced Search'
  #   When user clicks on 'Add +' button multiple times
  #   Then user should see 'Search filter' dropdown created multiple times

  # Scenario: Scenario 04
  #   And I scroll down to 'Advanced Search'
  #   And  user selects 'Advanced Search'
  #   And user clicks on 'Add +' button
  #   And user  sees 'Search filter' dropdown created
  #   When user clicks on 'Search filter' dropdown
  #   Then user should be able to see same fields as above 'Search filter'

  # Scenario: Scenario 05
  #   And I scroll down to 'Advanced Search'
  #   And  user selects 'Advanced Search'
  #   And user clicks on 'Add +' button
  #   And user  sees 'Search filter' dropdown created
  #   And user clicks on 'Search filter' dropdown
  #   When user clicks on 'Asset properties'
  #   Then user should see 'Name' as default search

  # Scenario: Scenario 06
  #   And I scroll down to 'Advanced Search'
  #   And  user selects 'Advanced Search'
  #   And user clicks on 'Add +' button
  #   And user  sees 'Search filter' dropdown created
  #   And user clicks on 'Search filter' dropdown
  #   And user enters  'FilterName'
  #   And user clicks on 'Asset properties dropdown'
  #   And user selects asset properties as 'Name'
  #   When user enters 'Value' under fuzzy checkbox
  #   Then user should see 'Search filter' created

  # Scenario: Scenario 07
  #   And I scroll down to 'Advanced Search'
  #   And  user selects 'Advanced Search'
  #   And user clicks on 'Add +' button
  #   And user  sees 'Search filter' dropdown created
  #   And user clicks on 'Search filter' dropdown
  #   And user enters  'FilterName'
  #   And user clicks on 'Asset properties dropdown'
  #   And user selects asset properties as 'Field'/Metadata'
  #   And user enters 'Name' under next field
  #   When user enters 'Value' under fuzzy checkbox
  #   Then user should see 'Search filter' created

  # Scenario: Scenario 08
  #   And I scroll down to 'Advanced Search'
  #   And  user selects 'Advanced Search'
  #   And user clicks on 'Add +' button
  #   And user  sees 'Search filter' dropdown created
  #   And user clicks on 'Search filter' dropdown
  #   And user enters  all the mandatory details
  #   And user sees 'Search filter' created
  #   When user clicks on 'Publish' on editor bar
  #   Then user should be able to 'Search' an asset with 'Name/field/metadata'

  # Scenario: Scenario 09
  #   And I scroll down to 'Advanced Search'
  #   And  user selects 'Advanced Search'
  #   And user clicks on 'Add +' button
  #   And user  sees 'Search filter' dropdown created
  #   And user clicks on 'Search filter' dropdown
  #   And user enters  all the mandatory details
  #   And user sees 'Search filter' created
  #   And user clicks on 'Publish' on editor bar
  #   When user search's an assets with 'Name/field/metadata'
  #   Then user should see their advance search in the search typeaheads

  # Scenario: Scenario 10
  #   And I scroll down to 'Advanced Search'
  #   And  user selects 'Advanced Search'
  #   And user clicks on 'Add +' button
  #   And user  sees 'Search filter' dropdown created
  #   And user clicks on 'Search filter' dropdown
  #   And user enters  all the mandatory details
  #   And user sees 'Search filter' created
  #   And user clicks on 'Publish' on editor bar
  #   And user search's an assets with 'Name/field/metadata'
  #   When user selects their advance search in the search typeaheads
  #   Then user should pill with advance search name