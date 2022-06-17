import { And, Then } from 'cypress-cucumber-preprocessor/steps';
import Widgets from '../PageObjects/WidgetsPage';
import AssetDetails from '../PageObjects/AssetDetails';
import '@4tw/cypress-drag-drop';

const widgets = new Widgets();
const assetDetails = new AssetDetails();

let versionCount;

And('I navigate to Asset Details page of asset {string}', (assetName) => {
  widgets.getResourceListSearchInput().first().clear().type(assetName + '{enter}');
  widgets.getSpinnerLabel().should('not.exist');
  widgets.getAssetName().first().click();
  widgets.getAssetDetailTitle().scrollIntoView().should('be.visible');
  widgets.getAssetDetailTitle().should('have.text', assetName);
});

Then('Asset availability is shown on Asset Detail Page', () => {
  widgets.getAssetAvailability().should('be.visible');
});

Then('Fields on Asset details tab are populated correctly', () => {
  cy.getAssetDetailsTabFields();
});

And('I navigate to Asset {string} tab', (tab) => {
  let myTab;
  if (tab === 'versions') {
    myTab = widgets.getAssetTab().contains('Versions');
  } else if (tab === 'details') {
    myTab = widgets.getAssetTab().contains('Details');
  }
  myTab.click();
});

And('I upload a new version', () => {
  widgets.getAssetsInGrid().then(assets => {
    versionCount = assets.length;
  });
});

Then('New version is uploaded to the versions tab', () => {
  widgets.getAssetsInGrid().should('have.length', versionCount);
});

And('I select the {string} option on Actions menu', (action) => {
  assetDetails.getActionsMenu().click();
  widgets.getDomain().contains(action).click();
});

Then('Toast notification pops up {string}', (message) => {
  widgets.getToastNotification().contains(message);
});

And('I click on Basket', () => {
  widgets.getBasket().click();
});

Then('Count of items in basket is displayed as {string}', (count) => {
  widgets.getBasketCount().invoke('text').then(text => {
    if (count === '1') {
      expect(text.trim()).to.eq(count + ' item in basket');
    } else {
      expect(text.trim()).to.eq(count + ' items in basket');
    }
  });
});