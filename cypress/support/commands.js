import LoginPage from '../support/PageObjects/LoginPage';
import HomePage from '../support/PageObjects/HomePage';
import CommandsPage from '../support/PageObjects/CommandsPage';

const loginPage = new LoginPage();
const homePage = new HomePage();
const commandsPage = new CommandsPage();
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
  let assetFields; // somethign donere here
  let assetFieldsValue;  //assetFields.pop()
  let assetFieldsTitle;  //assetFields.pop()

  homePage.getAssetDetailTitle().should('be.visible');

  commandsPage.getAdaptorType().invoke('text').then(text => {
    adaptorType = text;
  });

  commandsPage.getMasterFileType().invoke('text').then(text => {
    masterFileType = text;
  });

  commandsPage.getMasterFileSize().invoke('text').then(text => {
    masterFileSize = text;
  });

  commandsPage.getVersionNo().invoke('text').then(text => {
    versionNo = text;
  });

  commandsPage.getMasterFileSize().invoke('text').then(text => {
    masterFile = text;
  });

  commandsPage.getModified().invoke('text').then(text => {
    modified = text;
  });

  commandsPage.getAssetFolder().invoke('text').then(text =>{
    assetFolder = text;
  });

  // TODO: not sure where to get asset taxonomy value
  commandsPage.getAssetTaxonomy().invoke('text').then(text => {
    keywords = text.split('\n');
    keywordsValue = keywords.pop();
    keywordsTitle = keywords.pop();
  });

  // TODO: not sure where to get asset fields value
  commandsPage.getAssetFields().invoke('text').then(text => {
    assetFields = text.split('\n');
    assetFieldsValue = assetFields.pop();
    assetFieldsTitle = assetFields.pop();
    return {
      adaptorType,
      masterFileType,
      masterFileSize,
      versionNo,
      masterFile,
      modified,
      assetFolder,
      keywordsTitle,
      keywordsValue,
      assetFieldsTitle,
      assetFieldsValue
    };
  });
});