import { And, Then } from 'cypress-cucumber-preprocessor/steps';
import Widgets from '../PageObjects/Widgets';
import AssetDetails from '../PageObjects/AssetDetails';
import '@4tw/cypress-drag-drop';

const widgets = new Widgets();
const assetDetails = new AssetDetails();

let versionCount;

And('I navigate to Asset Details page of asset {string}', (assetName) => {
  widgets.getResourceListSearchInput().clear().type(assetName + '{enter}');
  widgets.getSpinnerLabel().should('not.exist');
  widgets.getAssetName().first().click();
  widgets.getAssetDetailTitle().should('be.visible');
  widgets.getAssetDetailTitle().should('have.text', assetName);
});

Then('Asset availability is shown on Asset Detail Page', () => {
  cy.get('.ItgAssetDetails-availabilityContainer').should('be.visible');
});

Then('Fields on Asset details tab are populated correctly', () => {
  // TODO: need help to compare what's returned below against an API
  cy.getAssetDetailsTabFields();
  // Compare the above to something like this: let fields_api = await this.getAssetDetailTabFields_API();
});

And('I navigate to Asset {string} tab', (tab) => {
  let myTab;
  if (tab === 'versions') {
    // this.versionsTab

    myTab = cy.get('.mat-tab-label').contains('Versions');

  } else if (tab === 'details') {
    myTab = cy.get('.mat-tab-label').contains('Details');
  }
  myTab.click();
});

And('I upload a new version', () => {
  widgets.getAssetsInGrid().then(assets => {
    versionCount = assets.length;
  });
  // TOOD: process to be completed below
  // let path = process.cwd() + '/Images/TeamITGVersion.png';
  //   await this.uploadNewVersion(path);
});

Then('New version is uploaded to the versions tab', () => {
  widgets.getAssetsInGrid().should('have.length', versionCount + 1);
});

And('I select the {string} option on Actions menu', (action) => {
  assetDetails.getActionsMenu().click();
  // sortOptionList.first() is visible
  // filter_elementAll(this.sortOptionList, action)
  cy.get('.mat-menu-content').contains(action).click();
});

Then('Toast notification pops up {string}', (message) => {
  cy.get('.mat-snack-bar-container').contains(message);
});

And('Basket count on toolbar is updated', () => {
  // was blank in old framework & unsure how to get the value
});

And('I click on Basket', () => {
  cy.get('itg-user-basket > .mat-focus-indicator').click();
});

Then('Count of items in basket is displayed as {string}', (count) => {
  cy.get('.ItgBasket-count').invoke('text').then(text => {
    if (count === '1') {
      expect(text.trim()).to.eq(count + ' item in basket');
    } else {
      expect(text.trim()).to.eq(count + ' items in basket');
    }
  });
});