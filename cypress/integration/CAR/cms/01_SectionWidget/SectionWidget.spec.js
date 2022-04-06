import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps';
import LoginPage from '../../../../support/PageObjects/LoginPage';
import HomePage from '../../../../support/PageObjects/HomePage';
import '@4tw/cypress-drag-drop';

const loginPage = new LoginPage();
const homePage = new HomePage();

Given('I navigate to ITG test environment', () => {
  cy.visit('https://itg.staging.itgcanopy.com/');
});

When('I enter {string} and {string} on Login Page', (username, password) => {
  loginPage.getLoginButton().should('have.attr', 'disabled');
  loginPage.getUsernameInput().type(username);
  loginPage.getPasswordInput().type(password);
});

And('I click on Login Button with {string} Credentials', (validity) => {
  if (validity === 'valid' || validity === 'invalid') {
    loginPage.getLoginButton().should('not.have.attr', 'disabled');
    loginPage.getLoginButton().click();
  }
  if (validity === 'valid') {
    loginPage.getLogoutButton().should('be.visible');
  }
});

And('I click on {string} button', (button) => {
  cy.contains(button).click();
});

And('I see {string} button', (button) => {
  cy.contains(button);
});

And('I click on clear layout Button', () => {
  homePage.getClearLayoutButton().should('be.visible');
  homePage.getClearLayoutButton().click();
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
  cy.contains('Editing ' + widget).should('be.visible');
});

And('Left hand panel is shown', () => {
  homePage.getWidgetPanel().should('be.visible');
});

And('Left hand panel is titled {string}', (widgetTitle) => {
  homePage.getWidgetPanelTitle().should('have.text', widgetTitle);
});

And('I click on close button on Widget panel', () => {
  homePage.getWidgetPanelCloseBtn().click();
});

And('Widget Panel is collapsed', () => {
  homePage.getWidgetPanel().should('not.be.visible');
});

And('I click on widget Settings Button', () => {
  homePage.getWidgetSettingsBtn().click();
});

And('I see Widget Settings Panel is shown with header {string}', () => {
  homePage.getWidgetSettingsBtn().click();
});

And('I update {string}', (title) => {
  var value;

  switch (title) {
  case 'Section widget title':
    value = 'title';
    break;
  }

  cy.get(`[formcontrolname="${value}"]`).type('asdf');

});

// Probably a better way to write this step, we'll need to refactor. Did this to speed up completing the feature
Then('{string} widget title is reset', (title) => {
  cy.get(':nth-child(1) > .ItgActiveWidget > .ItgActiveWidget-container > .ItgActiveWidget-header > .ItgActiveWidget-title').should('have.text', title);
});
// Probably a better way to write this step, we'll need to refactor. Did this to speed up completing the feature
Then('{string} widget title is not reset', (title) => {
  cy.get(':nth-child(1) > .ItgActiveWidget > .ItgActiveWidget-container > .ItgActiveWidget-header > .ItgActiveWidget-title').should('have.text', title + 'asdf');
});


And('Right hand panel is shown', () => {
  homePage.getEditingSectionPanel().should('be.visible');
});

And('Right hand panel is titled {string}', (widgetHeader) => {
  homePage.getEditingSectionPanelHeader().should('have.text', widgetHeader);
});