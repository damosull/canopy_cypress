@test
Feature: CMS Component: Section Widget
Feature covers all the Section widget Configurations

        Background:
            Given I navigate to ITG test environment
             When I enter 'autouser' and '1Qwertasdf' on Login Page
              And I click on Login Button with 'valid' Credentials
              And I click on 'Editing mode' toggle button

        @PreRequisite
        Scenario: Create a Section Widget
              And I click on clear layout Button
              And I create a 'Section' Widget