import { And, Then } from 'cypress-cucumber-preprocessor/steps';
import Widgets from '../PageObjects/WidgetsPage';
import Basket from '../PageObjects/Basket';

const widgets = new Widgets();
const basket = new Basket();

// eslint-disable-next-line no-unused-vars
let countOfItems;
// eslint-disable-next-line no-unused-vars
let basketCount;
let assetTitle;
let typeOfAsset;

Then('URL should include {string}', (urlSubString) => {
  cy.url().should('include', urlSubString);
});

And('Title of Basket page is {string}', (title) => {
  basket.getTitle().should('have.text', title);
});

And('I add to basket', () => {
  cy.contains('Add to basket').click();
});

And('I click on Export button', () => {
  basket.getExportButton().click();
  cy.wait(1000);
});

And('Preview results per page should be {string} {string}', (string, value) => {

  let expectedCount = 0;

  switch (string) {
  case 'equal to':
    expectedCount = value;
    break;
  case 'twice':
    expectedCount = value * 2;
    break;
  case 'thrice':
    expectedCount = value * 3;
    break;
  }

  cy.wait(2000);

  widgets.getAssetsInGrid().should('have.length', expectedCount);
});

And('I scroll beyond the last asset in preview', () => {
  widgets.getAssetsInGrid().last().trigger('mouseover');
  cy.scrollTo(0, 40000, { ensureScrollable: false });
});

And('I add the first asset to Basket', () => {
  basket.getFirstAsset().click();
  countOfItems = 1;
  basket.getBasketCount().invoke('text').then(text => {
    basketCount = text;
  });
  cy.contains('Add to basket').click();
});

And('I click on the first Asset in Basket', () => {
  widgets.getAssetName().first().invoke('text').then(text => {
    assetTitle = text;
  });
  widgets.getAssetType().first().invoke('text').then(text => {
    typeOfAsset = text;
  });
  widgets.getAssetName().first().click();
  cy.url().should('include', 'assetDetails');
});

And('I click on the last Asset in Basket', () => {
  widgets.getAssetName().last().invoke('text').then(text => {
    assetTitle = text;
  });
  widgets.getAssetType().last().invoke('text').then(text => {
    typeOfAsset = text;
  });
  widgets.getAssetName().last().click();
});

Then('Asset Details Page opens with AssetName as Title', () => {
  cy.url().should('include', 'assetDetails');
  widgets.getAssetDetailTitle().should('have.text', assetTitle);
});

And('Asset Type is displayed on Asset Details Page', () => {
  cy.url().should('include', 'assetDetails');
  widgets.getAssetDetailsType().should('have.text', typeOfAsset);
});

And('Asset Preview is displayed on Asset Details Page', () => {
  widgets.getAssetPreview().should('be.visible');
});

And('URL captures Asset Details Page', () => {
  cy.url().should('include', 'detailItem=');
});

And('I am on Basket page on going back', () => {
  cy.go('back');
  basket.getBasketContainer().should('be.visible');
});

And('I Select visible assets and Add to basket', () => {
  widgets.getSpinnerLabel().should('not.exist');
  widgets.getSelectVisibleIcon().click();
  cy.contains('Add to basket').click();
});

And('I Select visible assets', () => {
  widgets.getSpinnerLabel().should('not.exist');
  widgets.getSelectVisibleIcon().click();
  // cy.contains('Add to basket').click();
  // cy.get('.cdk-overlay-container .mat-simple-snackbar span').should('be.visible');
});

And('I click on Select visible icon on Basket', () => {
  widgets.getSpinnerLabel().should('not.exist');
  basket.getSelectVisible().click();
  widgets.getSpinnerLabel().should('not.exist');
});

And('Count of selected items {string} is displayed on Basket snack bar', (resultCount) => {
  let count;
  let snackBarCount;
  let countOnBasketTitle;

  widgets.getSnackbar().invoke('text').then(text => {
    count = text;
  });

  widgets.getBasketCount().invoke('text').then(basketCountText => {
    countOnBasketTitle = basketCountText.split(' ');
    countOnBasketTitle = countOnBasketTitle[1];
  }).then(() => {
    snackBarCount = resultCount + ' of ' + countOnBasketTitle + ' items selected';
    expect(snackBarCount.toString()).to.eq(count.trim());
  });
});

And('I click on the Sort button', () => {
  basket.getSortButton().click();
});

And('I see the sort options below', (dataTable) => {
  dataTable.rawTable.forEach(($ele, index) => {
    cy.get(`.mat-menu-content > :nth-child(${index+1})`).should('have.text', ' ' + $ele.toString() + ' ');
  });
});

And('I click on active sort option', () => {
  widgets.getActiveSortOption().click();
});

And('I click away from the dropdown', () => {
  basket.getBackground().click();
});

And('I click on the remove button', () => {
  widgets.getSnackBarRemoveButton().click();
  cy.contains('Remove all').click();
  cy.contains('Basket emptied').should('be.visible');
});

And('Assets in the export are in the same order as the list', () => {
  cy.parseXlsx('/cypress/downloads/Statistics.xlsx').then(jsonData => {
    expect(jsonData[0].data[1]).to.contain('hello');
  });
});

And('I select the {string} filter', (string) => {
  basket.getFiltersPanel().contains(string).click();
});

And('I click on the Download button', () => {
  basket.getDownloadButton().click();
});