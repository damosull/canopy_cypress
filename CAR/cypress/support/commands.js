import LoginPage from './PageObjects/LoginPage';
import WidgetsPage from './PageObjects/WidgetsPage';
import CommandsPage from './PageObjects/CommandsPage';

const loginPage = new LoginPage();
const widgets = new WidgetsPage();
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
    widgets.getOpenSideMenuButton().should('be.visible');
  });
  cy.visit('/home');
  widgets.getOpenSideMenuButton().should('be.visible');
});

Cypress.Commands.add('getAssetDetailsTabFields', () => {
  let keywords; // split done here
  let keywordsValue; // keywords.pop()
  let keywordsTitle; // keywords.pop()
  let assetFields; // somethign donere here
  let assetFieldsValue;  //assetFields.pop()
  let assetFieldsTitle;  //assetFields.pop()

  widgets.getAssetDetailTitle().should('be.visible');

  let adaptorType = commandsPage.getAdaptorType().invoke('text').then(text => {
    adaptorType = text;
  });

  let masterFileType = commandsPage.getMasterFileType().invoke('text').then(text => {
    masterFileType = text;
  });

  let masterFileSize = commandsPage.getMasterFileSize().invoke('text').then(text => {
    masterFileSize = text;
  });

  let versionNo = commandsPage.getVersionNo().invoke('text').then(text => {
    versionNo = text;
  });

  let masterFile = commandsPage.getMasterFileSize().invoke('text').then(text => {
    masterFile = text;
  });

  let modified = commandsPage.getModified().invoke('text').then(text => {
    modified = text;
  });

  let assetFolder = commandsPage.getAssetFolder().invoke('text').then(text =>{
    assetFolder = text;
  });

  commandsPage.getAssetTaxonomy().invoke('text').then(text => {
    keywords = text.split('\n');
    keywordsValue = keywords.pop();
    keywordsTitle = keywords.pop();
  });

  commandsPage.getAssetFields().invoke('text').then(text => {
    assetFields = text.split('\n');
    assetFieldsValue = assetFields.pop();
    assetFieldsTitle = assetFields.pop();

  }).then(() => {
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