import { Given, And, Then } from 'cypress-cucumber-preprocessor/steps';

import Widgets from '../PageObjects/WidgetsPage';
import LoginPage from '../PageObjects/LoginPage';

const widgets = new Widgets();
const loginPage = new LoginPage();

let secondSiteOnList = '';

Given('I see Username {string} is displayed on the tool bar', (userName_exp) => {
  cy.get('itg-luma-module-dropdown').invoke('text').then(text => {
    expect(text.trim()).to.contain(userName_exp);
  });
});

And('I click on UserName on Toolbar', () => {
  cy.get('itg-luma-module-dropdown').click();
});

And('I see a dropdown of the below Menu items', (dataTable) => {
  dataTable.rawTable.forEach(($ele, index) => {
    cy.get(('.mat-menu-content > :nth-child(value)').replace('value', index + 1)).should('have.text', ' ' + $ele.toString() + ' ');
  });
});

And('I click on the Menu Item {string} on the username dropdown', (menuItem) => {
  cy.get('.ItgLumaModuleDropdown-menuItem').within(() => {
    cy.contains(menuItem).click();
  });
});

And('I am landed on corresponding {string} on Luma', (menuItem) => {
  cy.get('.module_name.selected').should('have.text', menuItem);
});

And('I click on Domain option on Toolbar', () => {
  widgets.getDomainOption().click();
});

And('I see the below Domains list', (dataTable) => {
  dataTable.rawTable.forEach(($ele, index) => {
    cy.get(('.ItgDomainDropdown-menuContent > :nth-child(value)').replace('value', index + 1)).should('have.text', ' ' + $ele.toString() + ' ');
  });
});

And('I select Domain {string}', (domainName) => {
  cy.get('.ItgDomainDropdown-menuContent').within(() => {
    cy.contains(domainName).click();
  });
});

And('I logout', () => {
  loginPage.getLogoutButton().click();
});

Then('I see the Domain option is set to {string}', (domainName) => {
  widgets.getDomainOption().invoke('text').then(text => {
    expect(text.trim()).to.contain(domainName);
  });
});

And('I set the Domain back to Default Domain', () => {
  cy.get('.ItgDomainDropdown-menuContent > :nth-child(1)').click();
});

And('I click on Sites option on Toolbar', () => {
  cy.get('.ItgSiteDropdown-menuButton').click();
});

Then('I see the below Sites list', (dataTable) => {
  dataTable.rawTable.forEach(($ele, index) => {
    cy.get(('.mat-menu-content > :nth-child(value)').replace('value', index + 1)).should('have.text', ' ' + $ele.toString() + ' ');
  });
});

And('I select second site on Sites dropdown', () => {
  cy.get('.mat-menu-content > :nth-child(2)').invoke('text').then((text) => {
    secondSiteOnList = text;
  });
  cy.get('.mat-menu-content > :nth-child(2)').click();
});

And('Site option on Toolbar is updated to the new site', () => {
  cy.wait(1000);
  cy.get('.ItgSiteDropdown-menuButton').invoke('text').then(text => {
    expect(text).to.contain(secondSiteOnList);
  });
});