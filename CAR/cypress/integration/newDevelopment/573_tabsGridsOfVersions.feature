@test @CAR-573
Feature: 07 Tab & Grid of Versions

  Scenario: Asset Details : The thumbnail image will always be the first version
    Given I login as a Canopy Edit User
    When I upload multiple versions of an asset
    And I access Versions tab on Asset Details page
    Then The thumbnail image is always the first version
    And I click the back button to navigate to Resource list
    And Preview image on Resource list is updated to the first version