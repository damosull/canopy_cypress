Feature: 01 Project Component - Create Project on V3
              
  Background: Navigate to Project V3 page
    Given User navigates to 'ProjectV3' Page
  
  Scenario: 01 Create a new project on project V3 page
    When User select 'Digital - Display' after clicking on create project option
    And Create Project Modal should be displayed
    And user enters 'Cypress_AutomationTestProject' inside Project Name text box
    And clicking 'Start' calendar icon user selects '2022' 'May' '15' as year month and date
    And clicking 'End' calendar icon user selects '2022' 'July' '15' as year month and date
    And user clicks the 'Workflow process' drop down and selects 'Activation'
    And user clicks the 'Reference' drop down and selects 'To'
    And user clicks the 'Date' drop down and selects 'Project end'
    And clicks on 'Automotive' check box
    And clicks on 'png' check box
    And clicks on 'Templates' check box
    And user enters 'This is for test' inside 'Briefing field 1' 'input' text box
    And user enters '0123456789' inside 'Reg ex' 'input' text box
    And user enters 'Ravi' inside 'Contact Name' 'input' text box
    And user enters '0789654321' inside 'Contact Number' 'input' text box
    And user enters 'This is Dealer Address' inside 'Dealer Address' 'input' text box
    And user enters 'This is Brief' inside 'Brief' 'textarea' text area
    And user enters 'GIF' inside 'Multi Test' 'button' multi checkbox dropdown
    And user enters 'Web' inside 'Digital Channel' 'button' multi checkbox dropdown
    And user enters 'Test Check' inside 'Campaign Name' 'input' text box
    Then user clicks 'Confirm' button after filling form
  
  Scenario: 02 Add in the custom field with the typeahead to single select Fields
    When User select 'Digital - Display' after clicking on create project option
    And Create Project Modal should be displayed
    And user enters 'TV' inside 'Digital Channel' 'button' multi checkbox dropdown
    

  