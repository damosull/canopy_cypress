import { And, Then } from 'cypress-cucumber-preprocessor/steps';
import Shares from '../PageObjects/Shares';
import Widgets from '../PageObjects/Widgets';

const shares = new Shares();
const widgets = new Widgets();

let countSplit;
let count;

And('I click on Shares button on toolbar', () => {
  shares.getShares().click();
});

And('Title of Shares page is {string}', (title) => {
  shares.getTitle().should('have.text', title);
});

Then('Shares count is displayed on Shares icon', () => {
  shares.getCount().first().should('be.visible');
});

Then('Sort options are defaulted to Created and Descending', () => {
  widgets.getSortOption().should('have.text', ' By: Created arrow_drop_down');

  widgets.getSortDirectionBtn().should('have.attr', 'aria-label', 'Descending');
});

And('Shares table has columns', (dataTable) => {
  dataTable.rawTable.forEach(($ele, index) => {
    shares.getTableHeaders().eq(index).should('include.text', $ele.toString());
  });
});

And('Shares per page should be {string} {string}', (string, value) => {

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

  if (string === 'more than') {
    shares.getTableCells().should('have.length.above', expectedCount);
  } else {
    shares.getTableCells().should('have.length', expectedCount);
  }
});

And('I scroll beyond the last Share', () => {
  shares.getTableCells().last().trigger('mouseover');
  cy.scrollTo('0, 40000,', { ensureScrollable: false });
});

And('I click the first share', () => {
  shares.getCellsTitle().first().scrollIntoView().click();
});

And('I select the shareable test asset', () => {
  cy.contains(/^shareable test$/).parents('.ItgResourceListResultGrid-item').find('.mat-checkbox-inner-container').click();
});

And('I select the shareable2 test asset', () => {
  cy.contains(/^shareable2 test$/).parents('.ItgResourceListResultGrid-item').find('.mat-checkbox-inner-container').click();
});

And('I select the non shareable test asset', () => {
  cy.contains(/^non shareable test$/).parents('.ItgResourceListResultGrid-item').find('.mat-checkbox-inner-container').click();
});

And('Create Share button is disabled', () => {
  shares.getCreateShareButton().should('have.attr', 'disabled', 'disabled');
});

And('I input Share Name {string}', (text) => {
  const rnd = Math.floor(Math.random() * 10000000000);
  shares.getShareName().type(text+rnd);
});

And('I input Share Description {string}', (text) => {
  shares.getShareDescription().type(text);
});

And('Clicking on X icon closes the overlay', () => {
  shares.getCloseButton().click();
});

And('Share {string} is not listed on Shares list page', (text) => {
  cy.contains(text).should('not.exist');
});

And('Share {string} is listed on Shares list page', (text) => {
  cy.contains(text).should('exist');
});

And('Shareable assets are populated with counts', () => {
  shares.getShareableAssetHeader().invoke('text').then(assetCountText => {
    countSplit = assetCountText.split('(');
    count = countSplit[1].split(')');
    expect(count[0]).to.not.equal('0');
  });
});