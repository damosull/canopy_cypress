import { Given } from 'cypress-cucumber-preprocessor/steps';

Given('User navigates to {string} Page', (page_name) => {
  cy.login();
  cy.log(page_name);
});