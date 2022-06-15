import { And, Then } from 'cypress-cucumber-preprocessor/steps';
import Shares from '../PageObjects/SharesPage';
import Widgets from '../PageObjects/WidgetsPage';

const shares = new Shares();
const widgets = new Widgets();

let countSplit;
let count;

let name;
let enabled;
let start;
let end;
let owner;
let created;
let modified;
let description;

let shareDetails = {};

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
  cy.wait(1000);
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

And('I access Share Details page of Share', () => {
  shares.getCellsTitle().first().click();
});

Then('Share detail page header shows ShareName, Id, Available', () => {
  shares.getShareDetailsName().should('be.visible');
  shares.getShareDetailsSubTitle().invoke('text').then(text => {
    expect(text.trim()).to.eq('Share (Available)');
  });
});

And('Share detail page shows Share Guests count', () => {
  shares.getSharesDetailsItemLabel().first().invoke('text').then(text => {
    expect(text.trim()).to.eq('Share guests');
  });
  shares.getShareDetailsItemSubtitle().first().invoke('text').then(text => {
    expect(text.trim()).to.eq('No Guests');
  });
});

And('Share detail page shows Share Assets count', () => {
  shares.getSharesDetailsItemLabel().eq(1).invoke('text').then(text => {
    expect(text).to.equal('Share assets');
  });
});

And('Share detail page shows Share Availability period', () => {
  shares.getSharesDetailsItemLabel().eq(2).invoke('text').then(text => {
    expect(text).to.equal('Availability period:');
  });
  shares.getShareDetailsItemSubtitle().eq(2).invoke('text').then(text => {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0
    let yyyy = today.getFullYear();

    today = dd + '/' + mm + '/' + yyyy;
    expect(text.trim()).to.equal(today + ' - ∞');
  });
});

And('Share details page is recorded on the url', () => {
  cy.url().should('include', '/shares/shareDetails/');
});

And('I select the last share', () => {
  shares.getCellsTitle().last().click();
  cy.wait(1000);
});

And('I am navigated to Shares list page on clicking on Back button', () => {
  shares.getShareDetailsBackButton().click();
  shares.getShareDetailsBackButton().should('not.exist');
  shares.getCellsTitle().first().should('be.visible');
});

And('I click on Assets Tab on the Share', () => {
  cy.get('.mat-tab-label-content').contains('Assets').click();
});

Then('Shared Assets tab title is {string}', (title) => {
  cy.get('.ItgShareDetailsAssets-title').invoke('text').then(text => {
    expect(text.trim()).to.equal(title);
  });
});

And('Assets on Assets tab are listed in grid format', () => {
  cy.get('.ItgResourceListResultGrid-container').first().should('be.visible');
});

And('Assets tab has the count of Assets displayed', () => {
  cy.get('.ItgShareDetailsAssets-count').should('be.visible');
});

Then('Shares Assets tab is recorded in the url', () => {
  cy.url().should('include', 'shareTab=assets');
});

And('the below sort options are available', (dataTable) => {
  cy.get('.ItgResourceListSorter-container > .mat-menu-trigger').click();
  dataTable.rawTable.forEach(($ele, index) => {
    cy.get(('.mat-menu-content > :nth-child(value)').replace('value', index + 1)).should('have.text', ' ' + $ele.toString() + ' ');
  });
});

And('I click on Guest sort options', () => {
  cy.get('.ItgResourceListSorter-container > .mat-menu-trigger').click();
});

And('the below guest sort options are available', (dataTable) => {
  dataTable.rawTable.forEach(($ele, index) => {
    cy.get(('.mat-menu-content > :nth-child(value)').replace('value', index + 1)).should('have.text', ' ' + $ele.toString() + ' ');
  });
});

And('I see the same sort options on refreshing the URL', () => {
  let originalSortOption;
  let originalSortDirection;
  shares.getShareDetailsSortOption().invoke('text').then(text => {
    originalSortOption = text;
  });

  shares.getShareDetailsSortDirection().invoke('attr', 'aria-label').then(currentDirection => {
    originalSortDirection = currentDirection;
  }).then(() => {
    cy.reload();

    shares.getShareDetailsSortOption().should('have.text', originalSortOption);
    shares.getShareDetailsSortDirection().should('have.attr', 'aria-label', originalSortDirection);
  });
});

And('I click on Select visible icon on Shares Assets tab', () => {
  cy.get('.ItgShareDetailsAssets-selectVisible').click();
});

And('Count of selected items is displayed on Share snack bar', () => {
  widgets.getSnackBar().should('be.visible');
});

And('First asset is unselected as i uncheck the first asset', () => {
  cy.get('.ItgResourceListResultGrid-item .mat-checkbox-inner-container').click();

  cy.get('.ItgResourceListResultGrid-item .mat-checkbox-inner-container').should('have.attr', 'class')
    .and('not.contain', 'mat-checkbox-checked');
});

And('I click on Remove CTA on Shares SnackBar', () => {
  cy.get('.ItgShareAssetsSnackbarButtons-removeButton').click();
});

Then('Title on Remove Share Asset Overlay is populated correctly', () => {
  shares.getDialogTitle().should('be.visible');
});

And('Overlay has description {string}', (message_expected) => {
  cy.get('.ItgButtonsModal-description').invoke('text').then(text => {
    expect(text).to.equal(message_expected);
  });
});

And('Asset count {string} updated on Shares Assets tab', (bool) => {
  if (bool === 'is') {
    cy.get('#mat-tab-label-0-1 > .mat-tab-label-content').should('be.visible');
  } else if (bool === 'is not') {
    cy.get('#mat-tab-label-0-1 > .mat-tab-label-content').should('be.visible');
  }
});

And('Asset count {string} updated on Shares Title', (bool) => {
  if (bool === 'is') {
    cy.get('.ItgShareDetailsAssets-count').should('be.visible');
  } else if (bool === 'is not') {
    cy.get('.ItgShareDetailsAssets-count').should('be.visible');
  }
});

And('I click on Confirm Button on the Remove Share Asset Overlay', () => {
  cy.contains('Confirm').click();
});

And('I click on Guests Tab on the Share', () => {
  cy.get('.mat-tab-label-content').contains('Guests').click();
});

And('Shares Guests tab is recorded on URL', () => {
  cy.url().should('include', 'shareTab=guests');
});

And('Shares Guests tab has a title {string}', (title) => {
  cy.get('.ItgShareGuests-title').invoke('text').then(text => {
    expect(text).to.equal(title);
  });
});

And('Shares Guests tab shows a message when there are no Guests', () => {
  cy.get('.ItgShareGuests-noGuests p').invoke('text').then(text => {
    expect(text.trim()).to.equal('No Guests. Please Invite New Share Guests.');
  });
});

And('Guest count is not displayed when there are no guests on a share', () => {
  shares.getGuestsTabCount().should('not.exist');
});

And('Invite New Guests CTA is displayed', () => {
  cy.get('.ItgShareGuests-inviteGuests').contains('Invite New Guests');
});

Then('Count of Guests is shown on Guests tab Header', () => {
  cy.get('.mat-tab-label-content').contains('Guests').should('be.visible');
});

And('Count of Guests is shown in Guests tab', () => {
  shares.getGuestsTabCount().should('be.visible');
});

And('Guests table has below columns', (dataTable) => {
  dataTable.rawTable.forEach(($ele) => {
    cy.get('.ItgShareGuests-container [role="columnheader"]').invoke('text').then(text => {
      expect(text).contains($ele.toString());
      cy.log(text);
    });
  });
});

And('I click on the Invite New Guests CTA', () => {
  cy.contains('Invite New Guests').click();
});

And('Title on Overlay is {string}', (modalTitle) => {
  shares.getDialogTitle().contains(modalTitle);
});

And('I enter Guest details {string},{string},{string}', (email, message, duration) => {
  if (email.includes('@')) {
    email = email.split('@');
    email = email[0] + Date.now() + '@' + email[1];
  } else {
    email = email + Date.now();
  }
  cy.get('#mat-chip-list-input-0').type(email+'{enter}');

  if (message !== 'null') {
    cy.get('[formcontrolname="message"]').type(message);
  }
  shares.getDurationDropdown().click();
  cy.get('.mat-select-panel .mat-option').contains(duration).click();
  cy.wait(1000);
});

And('I click the active sort option', () => {
  cy.get('.ItgResourceListSorter-activeOption').click();
});

And('I click on X Button on the Overlay', () => {
  cy.get('.ItgDialogHeader-closeButton').click();
});

Then('Confirm button on Invite guests Overlay is {string}', bool => {
  if (bool === 'disabled') {
    cy.contains('Confirm').should('have.attr', 'disabled', 'disabled');
  } else {
    cy.contains('Confirm').should('be.enabled');
  }
});

And('the below Duration options are available', (dataTable) => {
  shares.getDurationDropdown().click();
  dataTable.rawTable.forEach(($ele, index) => {
    cy.get(('#mat-select-0-panel > :nth-child(value)').replace('value', index + 1)).should('have.text', ' ' + $ele.toString() + ' ');
  });
  cy.get('#mat-option-0').click();
});

And('Confirm button on Overlay is disabled', () => {
  cy.contains('Confirm').should('not.be.enabled');
});

Then('Shares Overview tab has title {string}', (title) => {
  cy.get('.ItgShareDetailsInfo-title').should('have.text', title);
});

And('Field Titles on Shares Overview tab are populated correctly', () => {
  let expectedOverviewFields = 'Name: *Available from:Available until:Owner:Created on:Modified on:Description:';
  cy.get('.ItgShareDetailsInfo-form .mat-form-field .mat-form-field-label').invoke('text').then(text => {
    expect(text).to.eql(expectedOverviewFields);
  });
});

Then('Edit Share button is disabled and says Editing', () => {
  cy.get('.ItgShareDetailsInfo-header > .mat-focus-indicator').should('be.disabled').should('contain', 'Editing');
});

And('Owner, CreatedOn, ModifiedOn fields are Read only', () => {
  cy.get('[formcontrolname="owner"]')
    .should('have.attr', 'readonly');
  cy.get('[formcontrolname="created"]')
    .should('have.attr', 'readonly');
  cy.get('[formcontrolname="modified"]')
    .should('have.attr', 'readonly');
});

And('I edit the Share {string}', (shareName) => {
  cy.get('input[formcontrolname="name"]').invoke('val').then((text) => {
    name = text;
  });

  cy.get('mat-checkbox[formcontrolname="enabled"]').invoke('val').then(text => {
    enabled = text;
  });

  cy.get('input[formcontrolname="start"]').invoke('text').then(text => {
    start = text;
  });

  cy.get('input[formcontrolname="end"]').invoke('val').then(text => {
    end = text;
  });

  cy.get('input[formcontrolname="owner"]').invoke('val').then(text => {
    owner = text;
  });

  cy.get('input[formcontrolname="created"]').invoke('val').then(text => {
    created = text;
  });

  cy.get('input[formcontrolname="modified"]').invoke('val').then(text => {
    modified = text;
  });

  cy.get('textarea[formcontrolname="description"]').invoke('val').then(text => {
    description = text;
  }).then(() => {

    const date = new Date();

    shareDetails.name = shareName + date;
    shareDetails.availableFrom = date.toLocaleDateString('en-US');
    shareDetails.availableUntil = date.toLocaleDateString('en-US');

    shareDetails.description = 'auto_editedDescription';

    cy.get('input[formcontrolname="name"]').clear().type(shareDetails.name);

    cy.get('.mat-checkbox-inner-container').click().then(() => {
      cy.get('mat-checkbox[formcontrolname="enabled"]').invoke('attr', 'class').then(getClassAttribute => {
        if (getClassAttribute.includes('mat-checkbox-checked')) {
          shareDetails.enabled = true;
        } else {
          shareDetails.enabled = false;
        }
      });
    });

    cy.get('input[formcontrolname="start"]').click().clear().type(shareDetails.availableFrom);

    cy.get('input[formcontrolname="end"]').click().clear().type(shareDetails.availableUntil);

    cy.get('textarea[formcontrolname="description"]').clear().type(shareDetails.description);
  });
});

Then('Share is not edited on clicking on Cancel Button', () => {
  cy.contains('Cancel').click();

  cy.get('input[formcontrolname="name"]').invoke('val').then((text) => {
    expect(name).to.eq(text);
  });

  cy.get('mat-checkbox[formcontrolname="enabled"]').invoke('val').then(text => {
    expect(enabled).to.eq(text);
  });

  cy.get('input[formcontrolname="start"]').invoke('text').then(text => {
    expect(start).to.eq(text);
  });

  cy.get('input[formcontrolname="end"]').invoke('val').then(text => {
    expect(end).to.eq(text);
  });

  cy.get('input[formcontrolname="owner"]').invoke('val').then(text => {
    expect(owner).to.eq(text);
  });

  cy.get('input[formcontrolname="created"]').invoke('val').then(text => {
    expect(created).to.eq(text);
  });

  cy.get('input[formcontrolname="modified"]').invoke('val').then(text => {
    expect(modified).to.eq(text);
  });

  cy.get('textarea[formcontrolname="description"]').invoke('val').then(text => {
    expect(description).to.eq(text);
  });
});

Then('I add guests to the share', () => {
  cy.contains('Invite New Guests').click();
  cy.get('#mat-chip-list-input-0').type('guest@guest.com'+'{enter}');
  cy.get('[formcontrolname="message"]').type('some message');
  cy.get('.mat-select-placeholder').click();
  cy.contains('3 days').click();
  cy.contains('Confirm').click();
});

And('Share Guests Sort options {string} and {string} are shown in URL', (SortOption, SortOrder) => {
  if (SortOption === 'Modified') {
    cy.url().should('include', 'guest-modified');
  }
  cy.url().should('include', SortOrder);
});

And('Guests are sorted as per Sort options {string} and {string}', () => {
  cy.get('.ItgShareGuests-emailCell').should('be.visible');
});

Then('Share is edited on clicking on Save Button', () => {
  cy.get('.ItgShareDetailsInfo-saveButton').click();

  cy.get('.ItgSnackbar-text').should('be.visible').invoke('text').then((text) => {
    expect(text).to.eq('Share saved');
  });

  cy.get('input[formcontrolname="name"]').invoke('val').then((text) => {
    expect(text).to.eq(shareDetails.name);
  });

  cy.get('mat-checkbox[formcontrolname="enabled"]').then(($ele) => {
    if ($ele.hasClass('mat-checkbox-checked')) {
      expect(shareDetails.enabled).to.eq(true);
    } else {
      expect(shareDetails.enabled).to.eq(false);
    }
  });

  cy.get('input[formcontrolname="start"]').invoke('val').then(text => {
    expect(text).to.eq(shareDetails.availableFrom);
  });

  cy.get('input[formcontrolname="end"]').invoke('val').then(text => {
    expect(text).to.eq(shareDetails.availableUntil);
  });
});