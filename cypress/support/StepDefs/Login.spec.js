import { Given, When, And, Then, But } from 'cypress-cucumber-preprocessor/steps';
import LoginPage from '../PageObjects/LoginPage';
import NotFoundPage from '../PageObjects/NotFoundPage';

const login = new LoginPage();
const notFound = new NotFoundPage();

Given('I navigate to ITG test environment', () => {
  cy.visit('/public/login');
});

When('I enter {string} and {string} on Login Page', (username, password) => {
  if (!username) {
    login.getUsernameInput().clear();
  } else {
    login.getUsernameInput().clear().type(username);
  }

  if (!password) {
    login.getPasswordInput().clear();
  } else {
    login.getPasswordInput().clear().type(password);
  }
});

And('I click on Login Button with {string} Credentials', credentials => {
  if (credentials !== 'null') {
    login.getLoginButton().should('be.enabled');
    login.getLoginButton().click();
  }
  if (credentials === 'valid') {
    login.getLogoutButton().should('be.visible');
  }
});

Then('I am logged in when Credentials {string} are valid', credentials => {
  if (credentials === 'valid') {
    login.getLogoutButton().click();
    login.getUsernameInput().should('be.visible');
  }
});

But('Error Message {string} is shown when Credentials {string} are invalid', (errorMsg, credentials) => {
  if (credentials === 'invalid') {
    login.getLoginError().should('have.text', errorMsg);
  }
});

But('Login Button is disabled when Credentials {string} are null', credentials => {
  if (credentials === 'null') {
    login.getLoginButton().should('be.disabled');
  }
});

Given('I navigate to an unknown route on ITG app', () => {
  cy.visit('/unknown');
});

Then('I am directed to 404 Error page', () => {
  cy.url().should('include', Cypress.config().baseUrl+'/error/404');
});

And('404 Error title {string} is shown', errorTitle => {
  notFound.title().contains(errorTitle);
});

And('404 Error Message {string} is shown', errorMsg => {
  notFound.message().contains(errorMsg);
});

And('I click on Back to home link', () => {
  notFound.btnBack().click();
});

And('I am redirected to {string} page', page => {
  cy.url().should('not.include', 'error');
  if (page === 'Home') {
    cy.url().should('include', 'home');
  }
});

Given('I navigate to an unknown menu node', () => {
  cy.visit('/home/7/InvalidMenuNode');
});

Then('I do not see Editing mode button on Home Pages', () => {
  login.getBtnEditingMode().should('not.exist');
});