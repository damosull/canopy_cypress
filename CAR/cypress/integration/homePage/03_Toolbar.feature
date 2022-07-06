@test
Feature: 03 HomePage Component - Toolbar
Toolbar to display UserName,Domain,Site, Language languageOnDropDownItems. Navigate to Luma modules, Sticky Domains, Change Domains and Sites and Language

  Background:
    Given I login to ITG

  Scenario: 01 UserName Dropdown on Homepage Toolbar
    Then I see Username 'Automation User' is displayed on the tool bar
    And I click on UserName on Toolbar
    And I see a dropdown of the below Menu items
      | Console       |
      | Domains       |
      | Registrations |
      | Accounts      |
      | Projects      |
      | Assets        |
      | Collections   |
      | Templates     |
      | Batches       |
      | Operations    |
      | Files         |
      | Trash         |
      | Orders        |
      | Workflow      |

  Scenario: 02 UserName dropdown on Toolbar leads to corresponding Luma Module
    And I click on UserName on Toolbar
    When I click on the Menu Item 'Domains' on the username dropdown
    Then I am landed on corresponding 'Domains' on Luma

  Scenario: 03 Domain list on Homepage Toolbar
    When I click on Domain option on Toolbar
    Then I see the below Domains list
      | - System -     |
      | com            |
      | com.intrepia   |
      | Team ITG       |
      | ITG Birmingham |
      | ITG London     |

  Scenario: 04 Select a Domain
    When I click on Domain option on Toolbar
    Then I select Domain 'Team ITG'

  Scenario: 05 Sticky Domains
    When I click on Domain option on Toolbar
    Then I see the Domain option is set to 'Team ITG'
    And I set the Domain back to Default Domain

  Scenario: 06 Sites list on Homepage Toolbar
    When I click on Sites option on Toolbar
    Then I see the below Sites list
      | Team ITG       |
      | BirminghamSite |

  Scenario: 07 Select a site
    And I click on Sites option on Toolbar
    When I select second site on Sites dropdown
    Then Site option on Toolbar is updated to the new site

  Scenario: 08 Select a language
    Then Language option is set to 'English'
    And I see the language menu Items in 'English'
    And I select 'Spanish' on language dropdown
    And Language option is set to 'Spanish'
    And I see the language menu Items in 'Spanish'
    And I select 'Inglés' on language dropdown