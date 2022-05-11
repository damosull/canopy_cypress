import LoginPage from '../support/PageObjects/LoginPage';
import HomePage from '../support/PageObjects/HomePage';

const loginPage = new LoginPage();
const homePage = new HomePage();
const username = 'autouser';
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

Cypress.Commands.add('getAssetDetailsTabFields', () => {
  let adaptorType;
  let masterFileType;
  let masterFileSize;
  let versionNo;
  let masterFile;
  let modified;
  let assetFolder;
  let keywords; // split done here
  let keywordsValue; // keywords.pop()
  let keywordsTitle; // keywords.pop()
  let assetFields // somethign donere here
  let assetFieldsValue;  //assetFields.pop()
  let assetFieldsTitle;  //assetFields.pop()

  homePage.getAssetDetailTitle().should('be.visible');
  
  homePage.getAdaptorType().invoke('text').then(text => {
    adaptorType = text;
  });

  homePage.getMasterFileType().invoke('text').then(text => {
    masterFileType = text;
  });

  // TODO: do the below for the final variable to return everything in an object
  // homePage.getAdaptorType().invoke('text').then(text => {
  //   adaptorType = text;
  // }).then(() => {
  //   return {
  //     adaptorType
  //   };
  // });
});