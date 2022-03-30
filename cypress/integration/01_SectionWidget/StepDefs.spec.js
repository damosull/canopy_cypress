import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
// import LoginPage from '../../../support/PageObjects/LoginPage';
import LoginPage from '../../support/PageObjects/LoginPage';

const loginPage = new LoginPage();

Given('I navigate to ITG test environment', () => {
    cy.visit('https://itg.staging.itgcanopy.com/');
});

When('I enter {string} and {string} on Login Page', (username, password) => {
    loginPage.getUsernameInput().type(username)
    loginPage.getPasswordInput().type(password)
});

And('I click on clear layout Button', () => {
    //   cy.visit(Cypress.env('url'));
});