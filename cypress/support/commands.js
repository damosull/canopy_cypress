import LoginPage from '../support/PageObjects/LoginPage';
import HomePage from '../support/PageObjects/HomePage';

const loginPage = new LoginPage();
const homePage = new HomePage();
const username = 'itgappro';
const password = '1Qwertasdf';

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('login', () => {
  cy.session([username, password], () => {
    cy.visit('/public/login');
    loginPage.getLoginButton().should('have.attr', 'disabled');
    loginPage.getUsernameInput().type(username);
    loginPage.getPasswordInput().type(password);
    loginPage.getLoginButton().click();
    homePage.getBasket().should('be.visible');
  });
  cy.visit('/home');
  homePage.getBasket().should('be.visible');
});
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })