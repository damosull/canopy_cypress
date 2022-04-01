import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import LoginPage from '../../../../support/PageObjects/LoginPage';
import HomePage from '../../../../support/PageObjects/HomePage';
import '@4tw/cypress-drag-drop';

const loginPage = new LoginPage();
const homePage = new HomePage();

Given('I navigate to ITG test environment', () => {
    cy.visit('https://itg.staging.itgcanopy.com/');
});

When('I enter {string} and {string} on Login Page', (username, password) => {
    loginPage.getLoginButton().should('have.attr', 'disabled')
    loginPage.getUsernameInput().type(username)
    loginPage.getPasswordInput().type(password)
});

And('I click on Login Button with {string} Credentials', (validity) => {
    if (validity == 'valid' || validity == 'invalid') {
        loginPage.getLoginButton().should('not.have.attr', 'disabled')
        loginPage.getLoginButton().click()
    }
    if (validity == 'valid') {
        loginPage.getLogoutButton().should('be.visible')
    }
});

And('I click on {string} toggle button', (toggleButton) => {
    homePage.getToggleEditingMode().should('be.visible')
    if (toggleButton == 'View preview') {
        homePage.getToggleEditingMode().click()
        // this.stalenessOf(this.saveLayout) - selenium method, add this when we get to this stage
    } else if (toggleButton == 'Editing mode') {
        homePage.getToggleEditingMode().click()
        homePage.getSaveLayout().should('be.visible')
    }
});

And('I click on clear layout Button', () => {
    homePage.getClearLayoutButton().should('be.visible')
    homePage.getClearLayoutButton().click()
});

And('I create a {string} Widget', (widget) => {

  var value;

  switch (widget) {
  case 'Section':
    value = '0';
    break;
  case 'Heading':
    value = '1';
    break;
  case 'Image':
    value = '2';
    break;
  case 'WYSIWYG':
    value = '3';
    break;
  case 'Resource List':
    value = '4';
    break;
  case 'Button':
    value = '5';
    break;
  }

  cy.get('.ItgToolbarWidget-container').eq(value).drag('.ItgSectionWidget-column');
  cy.contains('Editing '+widget).should('be.visible');
});
