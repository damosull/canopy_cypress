import { Given, And, Then } from 'cypress-cucumber-preprocessor/steps';

import Widgets from '../PageObjects/WidgetsPage';
import LoginPage from '../PageObjects/LoginPage';
import Toolbar from '../PageObjects/ToolbarPage';

const widgets = new Widgets();
const loginPage = new LoginPage();
const toolbar = new Toolbar();

let secondSiteOnList = '';

Given('I see Username {string} is displayed on the tool bar', (userName_exp) => {
  toolbar.getUsernameToolbar().invoke('text').then(text => {
    expect(text.trim()).to.contain(userName_exp);
  });
});

And('I click on UserName on Toolbar', () => {
  toolbar.getUsernameToolbar().click();
});

And('I see a dropdown of the below Menu items', (dataTable) => {
  dataTable.rawTable.forEach(($ele, index) => {
    toolbar.getMenuValue(index).should('have.text', ' ' + $ele.toString() + ' ');
  });
});

And('I click on the Menu Item {string} on the username dropdown', (menuItem) => {
  toolbar.getMenuItem().within(() => {
    toolbar.getElement(menuItem).click();
  });
});

And('I am landed on corresponding {string} on Luma', (menuItem) => {
  toolbar.getSelectedModule().should('have.text', menuItem);
});

And('I click on Domain option on Toolbar', () => {
  widgets.getDomainOption().click();
});

And('I see the below Domains list', (dataTable) => {
  dataTable.rawTable.forEach(($ele, index) => {
    toolbar.getOptionValue(index).should('have.text', ' ' + $ele.toString() + ' ');
  });
});

And('I select Domain {string}', (domainName) => {
  toolbar.getDomainMenu().within(() => {
    toolbar.getElement(domainName).click();
  });
});

And('I logout', () => {
  loginPage.getLogoutButton().click();
});

Then('I see the Domain option is set to {string}', (domainName) => {
  cy.wait(2000);
  widgets.getDomainOption().invoke('text').then(text => {
    expect(text.trim()).to.contain(domainName);
  });
});

And('I set the Domain back to Default Domain', () => {
  toolbar.getDefaultDomain().click();
});

And('I click on Sites option on Toolbar', () => {
  toolbar.getSitesOption().click();
});

Then('I see the below Sites list', (dataTable) => {
  dataTable.rawTable.forEach(($ele, index) => {
    toolbar.getSiteOptionValue(index).should('have.text', ' ' + $ele.toString() + ' ');
  });
});

And('I select second site on Sites dropdown', () => {
  toolbar.getSiteFromDropdown(2).invoke('text').then((text) => {
    secondSiteOnList = text;
  });
  toolbar.getSiteFromDropdown(2).click();
});

And('Site option on Toolbar is updated to the new site', () => {
  cy.wait(1000);
  toolbar.getSitesOption().invoke('text').then(text => {
    expect(text).to.contain(secondSiteOnList);
  });
});

And('Language option is set to {string}', language => {
  toolbar.getBtnLanguage().contains(language);
});

And('I see the language menu Items in {string}', language => {
  toolbar.getBtnLanguage().click().then(() => {
    toolbar.getLanguageList().invoke('text').then(text => {
      if (language === 'English') {
        expect(text.trim()).to.contain('English');
        expect(text.trim()).to.contain('Spanish');
      } else if (language === 'Spanish') {
        expect(text.trim()).to.contain('Inglés');
        expect(text.trim()).to.contain('Español');
      }
    });
  });
});

And('I select {string} on language dropdown', language => {
  toolbar.getLanguageList().contains(language).click();
});