/// <reference types="cypress" />

import { When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import CreateProjectPage from '../PageObjects/CreateProjectPage';

const createProjectPage = new CreateProjectPage();

When('User select {string} after clicking on create project option', projectType => {
  createProjectPage.create_ProjectID();
  createProjectPage.selectProjectFromCreateDD(projectType);
});

When('Create Project Modal should be displayed', () => {
  createProjectPage.checkForCreateProjectModal();
});

When('user enters {string} inside Project Name text box', (projectName) => {
  createProjectPage.setProjectName(projectName);
});

When('clicking {string} calendar icon user selects {string} {string} {string} as year month and date', (dateType, year, month, day) => {
  createProjectPage.setProjectDate(dateType, year, month, day);
});

When('user clicks the {string} drop down and selects {string}', (dropdownName,value) => {
  createProjectPage.setDropdownValue(dropdownName,value);
});

When('clicks on {string} check box', (checkboxName) => {
  createProjectPage.setcheckBoxValue(checkboxName);
});

When('user enters {string} inside {string} {string} text box',(value, fieldName, type)=>{
  createProjectPage.setTextboxValue(value, fieldName, type);
});

When('user enters {string} inside {string} {string} text area',(value, fieldName, type)=>{
  createProjectPage.setTextAreaValue(value, fieldName, type);
});

When('user enters {string} inside {string} {string} multi checkbox dropdown',(value, fieldName, type)=>{
  createProjectPage.setMultiCheckbox(value, fieldName, type);
});

Then('user clicks {string} button after filling form',(name)=>{
  createProjectPage.clickOnButton(name);
});

Then('the value should be {string}', val => {
  createProjectPage.getOptionPill().contains(val);
});

And('User clicks {string} button', val => {
  cy.contains(val).click();
});

Then('error messages are displayed for the required fields', () => {
  cy.contains('You must choose at least one option');
  createProjectPage.getFormValidationMessages().should('have.length', 5);
  createProjectPage.getFormValidationMessages().each(message => {
    cy.wrap(message).should('contain', 'Required field');
  });
  createProjectPage.getFieldLabelByName('Project end').should('have.class', 'has-error');
  createProjectPage.getFieldLabelByName('Digital Channel').should('have.class', 'has-error');
  createProjectPage.getFieldLabelByName('Campaign Name').should('have.class', 'has-error');
  createProjectPage.getFieldLabelByName('Dealer Address').should('have.class', 'has-error');
});

When('A User that {string} edit project permissions clicks the project list options menu', val => {
  // TODO: Should be clicking clearAll() button, but can't find it
  // TODO: Need to use process.env in below function
  createProjectPage.clickOnProjectBurgerMenu(val);
});