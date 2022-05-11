import { Given, And, Then, When } from 'cypress-cucumber-preprocessor/steps';
import HomePage from '../PageObjects/HomePage';
import '@4tw/cypress-drag-drop';

const homePage = new HomePage();

let assetName = '';
let assetType = '';
let myUrl = '';
let countOfAssets;
let countOfFilters;
let textOnFilter;
let textOnSecondFilter;

Given('I login to ITG', () => {
  cy.login();
});

And('I click on {string} button', (button) => {
  cy.contains(button).click();
});

And('I see {string} button', (button) => {
  cy.contains(button);
});

And('I click on clear layout Button', () => {
  homePage.getClearLayoutButton().should('be.visible');
  homePage.getClearLayoutButton().click();
});

And('I create a {string} Widget', (widget) => {

  var value;

  switch (widget) {
  case 'Section':
    value = '0';
    break;
  case 'Heading':
    value = '1';
    break;
  case 'Image':
    value = '2';
    break;
  case 'WYSIWYG':
    value = '3';
    break;
  case 'Resource List':
    value = '4';
    break;
  case 'Button':
    value = '5';
    break;
  }

  cy.get('.ItgToolbarWidget-container').eq(value).drag('.ItgSectionWidget-column', { target: { position: 'top' }});
  cy.contains('Editing ' + widget).should('be.visible');
});

And('Left hand panel is shown', () => {
  homePage.getWidgetPanel().should('be.visible');
});

And('Left hand panel is titled {string}', (widgetTitle) => {
  homePage.getWidgetPanelTitle().should('have.text', widgetTitle);
});

And('I click on close button on Widget panel', () => {
  homePage.getWidgetPanelCloseBtn().click();
});

And('Widget Panel is collapsed', () => {
  homePage.getWidgetPanel().should('not.be.visible');
});

And('I click on widget Settings Button', () => {
  homePage.getWidgetSettingsBtn().click();
});

And('I update the widget title to {string}', (text) => {
  cy.get('[formcontrolname=title]').clear().type(text);
});

Then('widget title is set to {string}', (title) => {
  homePage.getActiveWidgetTitle().should('have.text', title);
});

And('Right hand panel is shown', () => {
  homePage.getEditingSectionPanel().should('be.visible');
});

And('Config panel is collapsed', () => {
  homePage.getEditingSectionPanel().should('not.be.visible');
});

And('Right hand panel is titled {string}', (widgetHeader) => {
  homePage.getEditingSectionPanelHeader().should('have.text', widgetHeader);
});

And('Widget is removed', () => {
  homePage.getActiveWidgetTitle().should('not.exist');
});

And('I select {string} widget Alignment on Config Panel', (alignment) => {
  cy.get('[aria-label="' + alignment + '"]').click();
});

And('I set the widget Width on Config Panel to {string}', (value) => {

  const currentValue = 100;
  const targetValue = 70;
  const increment = 1;
  const steps = (currentValue - targetValue) / increment;
  const arrows = '{leftarrow}'.repeat(steps);

  homePage.getConfigWidth().should('have.attr', 'aria-valuenow', currentValue).type(arrows);

  homePage.getConfigWidth().should('have.attr', 'aria-valuenow', value);
});

And('Widget is aligned to {string}', (alignment) => {
  if (alignment === 'Left') {
    alignment = 'margin: 0px;';
  } else if (alignment === 'Center') {
    alignment = 'margin: 0px auto;';
  } else if (alignment === 'Right') {
    alignment = '0px 0px 0px auto;';
  }

  homePage.getActiveWidget().should('have.attr', 'style')
    .and('contain', alignment);
});

And('Widget width is set to {string}', (value) => {
  homePage.getActiveWidget().should('have.attr', 'style')
    .and('contain', 'width: '+value+'%;');
});

And('All widgets are cleared', () => {
  homePage.getWidgets().should('have.length', 1);
});

And('Widget being edited is highlighted', () => {
  homePage.getActiveWidget().should('have.attr', 'class')
    .and('contain', 'is-active');
});

And('padding for widget is set to {string}', (spacing) => {
  homePage.getSectionWidget().should('have.attr', 'style')
    .and('contain', spacing+'px');
});

And('I set the {string} Spacing Option to {string}', (padding, value) => {

  const currentValue = 0;
  const targetValue = value;
  const increment = 5;
  const steps = (targetValue - currentValue) / increment;
  const arrows = '{leftarrow}'.repeat(steps);

  cy.contains(padding).click();
  homePage.getWidgetSpacingSlider().should('have.attr', 'aria-valuenow', currentValue).type(arrows);
  homePage.getWidgetSpacingSlider().should('have.attr', 'aria-valuenow', value);
});

Then('the {string} button style radio button is {string}', (button, option) => {
  if (button === 'Button') {
    homePage.getButtonButtonStyleRadioButton().should(`be.${option}`);
  }
});

Then('Open in New Tab option is {string}', (option) => {
  if (option === 'checked') {
    homePage.getOpenInTabCheckBox().should('be.checked');
  }
});

And('Destination URL is {string}', (url) => {
  homePage.getDestinationUrlInput().should('have.text', `${url}`);
});

When('I add {string} text to the widget', (text) => {
  homePage.getWidgetTextInput().type(text);
});

And('I set Destination URL to {string}', (url) => {
  cy.get('[formcontrolname=url]').clear().type(url);
});

And('I {string} open in new tab checkbox', (checkOrUncheck) => {
  if (checkOrUncheck === 'check') {
    homePage.getOpenInTabCheckBox().check({force: true});
  } else {
    homePage.getOpenInTabCheckBox().uncheck({force: true});
  }
});

And('clicking {string} button opens url in the same tab', (text) => {
  cy.contains(text).should('have.attr', 'target', '_self');
});

And('clicking {string} button opens url in a new tab', (text) => {
  cy.contains(text).should('have.attr', 'target', '_blank');
});

And('I set the Font Size on Config Panel to {string}', (value) => {

  const currentValue = 24;
  const targetValue = 17;
  const increment = 1;
  const steps = (currentValue - targetValue) / increment;
  const arrows = '{leftarrow}'.repeat(steps);

  homePage.getFontSizeSlider().should('have.attr', 'aria-valuenow', currentValue).type(arrows);

  homePage.getFontSizeSlider().should('have.attr', 'aria-valuenow', value);
});

And('I select the font type {string}, {string}, {string}', (bold, italic, underline) => {
  if (bold === 'true') {
    homePage.getBoldFontButton().click();
  }

  if (italic === 'true') {
    homePage.getItalicFontButton().click();
  }

  if (underline === 'true') {
    homePage.getUnderlineFontButton().click();
  }
});

Then('Text {string} is shown on the widget with selected font size and type {string}, {string}, {string}', (freeText, bold, italic, underline) => {
  homePage.getHeadingWidgetContent().should('have.text', ' ' + freeText + ' ');
  homePage.getHeadingWidgetContent().should('have.css', 'font-size', '14px');

  if (bold === 'true') {
    homePage.getHeadingWidgetContent().should('have.css', 'font-weight', '700');
  }

  if (italic === 'true') {
    homePage.getHeadingWidgetContent().should('have.css', 'font-style', 'italic');
  }

  if (underline === 'true') {
    homePage.getHeadingWidgetContent().should('have.css', 'text-decoration-line', 'underline');
  }
});

Then('Asset count is listed on the Resource list widget', () => {
  homePage.getResourceListWidgetCount().contains('items found');
});

And('I enter {string} into the {string} input', (text, inputField) => {
  if (inputField === 'Resource List Search') {
    homePage.getResourceListSearchInput().clear().type(text);
  }
});

And('I click the search option', () => {
  cy.get('.mat-option-text').click();
});

And('{string} is displayed', (text)=> {
  cy.contains(text).should('be.visible');
});

And('I navigate to the last asset', () => {
  cy.get('.ItgResourceListResultGrid-result').last().trigger('mouseover');
});

And('I click button based on aria-label {string}', (label) => {
  cy.get('[aria-label="' + label + '"]').click();
});

And('I click on Domain option on Toolbar', () => {
  cy.get('.ItgDomainDropdown-menuButton').click();
});

And('I select {string} domain', (domain) => {
  cy.get('.mat-menu-content').contains(domain).click();
});

And('I check the Include Sub Domains in results checkbox', () => {
  homePage.getIncludeSubDomains().click();
});

And('I check the Include Parent Domains in results checkbox', () => {
  cy.get('[formcontrolname=inheritDomains]').click();
});

Then('Load More pagination style is selected', () => {
  cy.get('[id=mat-radio-5]').should('have.attr', 'class')
    .and('contain', 'mat-radio-checked');
});

And('Results per page config is {string}', (result) => {
  cy.get('[formcontrolname=pageSize]').should('have.text', result);
});

And('Results per page drop down has the below options', (dataTable) => {
  cy.get('#mat-select-value-3').click();
  dataTable.rawTable.forEach(($ele, index) => {
    cy.get(`#mat-select-2-panel > #mat-option-${index +4}`).should('have.text', ' ' + $ele.toString() + ' ');
  });
});

And('Results per page should be {string} {string}', (string, value) => {
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

  homePage.getAssetsInGrid().should('have.length', expectedCount);
});

Then('Grid View is set by default on Config Panel', () => {
  homePage.getGridCheckBox().should('have.attr', 'class')
    .and('contain', 'mat-radio-checked');
});

And('Resource List columns should have the below headings', (dataTable) => {
  dataTable.rawTable.forEach(($ele, index) => {
    cy.get('tr > th').eq(index + 1).should('have.text', ' ' + $ele.toString() + ' ');
  });
});

And('Assets on Resource List are shown in {string} view', (string) => {
  if (string === 'Grid') {
    cy.get('.ItgResourceListResultGrid-container').should('be.visible');
  }
  if (string === 'List') {
    cy.get('.ItgResourceListResultTable-container').should('be.visible');
  }
});

And('I select {string} view as Search Result style', (string) => {
  if (string === 'List') {
    homePage.getListCheckBox().should('be.visible');
    homePage.getListCheckBox().click();
  }
  if (string === 'Grid') {
    homePage.getGridCheckBox().should('be.visible');
    homePage.getGridCheckBox().click();
  }
});

And('AssetName and AssetType are shown under the asset in Grid view', () => {
  homePage.getAssetName().should('be.visible');
  cy.get('.ItgResourceListResultGrid-resultSubTitle').should('be.visible');
});

And('I click on the first AssetName in Asset {string} view', (view) => {
  if (view === 'Grid') {
    homePage.getAssetType().first().click();
    //   assetType = $el.text();
    // });
    homePage.getAssetName().first().click();
    //   // assetName = $el.text();
    // });
    // cy.get('.ItgAssetDetails-name').should('be.visible');
  }

  if (view === 'List') {
    homePage.getAssetTypeInList().first().click();
    //   assetType = $el.text();
    // });
    homePage.getAssetNameInList().first().click();
    //   assetName = $el.text();
    // }).click();
  }

  // need to check URL contains assetDetails
});

Then('Asset Details Page opens with AssetName as Title', () => {
  cy.url().should('include', 'assetDetails');
  cy.get('.ItgAssetDetails-name').should('have.text', assetName);
});

And('Asset Type is displayed on Asset Details page', () => {
  cy.url().should('include', 'assetDetails');
  cy.get('.ItgAssetDetails-type').invoke('text').should('include', assetType);
});

And('Asset Preview is displayed on Asset Details page', () => {
  cy.get('.ItgAssetDetails-image').should('be.visible');
});

And('URL captures Asset Details page', () => {
  cy.url().then(url => {
    myUrl = url;
  });
});

And('I am on same page on refreshing the page', () => {
  cy.reload();
  cy.url().should('include', myUrl);
});

And('I click on Browser Back button', () => {
  cy.go('back');
});

And('I see the first asset on Asset {string} view', (view) => {
  let firstAsset;
  if (view === 'Grid') {
    homePage.getAssetsInGrid().first().should('be.visible');
    homePage.getAssetsInGrid().first().then($el => {
      firstAsset = $el.text();
      expect(firstAsset).to.contain(assetName);
    });
  }

  if (view === 'List') {
    homePage.getAssetNameInList().first().should('be.visible');
    homePage.getAssetNameInList().first().then($el => {
      firstAsset = $el.text();
      expect(firstAsset).to.contain(assetName);
    });
  }
});

And('I select {string} pagination and {string} results per page', (pagination, results) => {

  if (pagination === 'Pagination') {
    homePage.getPaginationPaginationStyleRdo().click();
  }
  if (pagination === 'Load more') {
    homePage.getLoadMorePaginationStyleRdo().click();
  }

  if (pagination === 'Infinite scroll') {
    homePage.getInfiniteScrollPaginationStyleRdo().click();
  }

  homePage.getResultsPerPageDropdown().click().get('mat-option').contains(results).click();
});

And('I click on Select Visible icon', () => {
  cy.get('.ItgResourceListWidget-selectVisible').click();
});

Then('All visible assets are selected', () => {
  cy.get('.ItgResourceListResultGrid-checkbox.mat-checkbox-checked').then($el => {
    const checkedResultsCount = $el.length;
    cy.get('.ItgResourceListResultGrid-checkbox').then($el => {
      expect($el).to.have.length(checkedResultsCount);
    });
  });
});

And('I select pagination Navigator {string}', (page) => {
  if (page === 'First page') {
    homePage.getPaginatorFirst().click();
  }

  if (page === 'Last page') {
    homePage.getPaginatorLast().click();
  }

  if (page === 'Next page') {
    homePage.getPaginatorNext().click();
  }

  if (page === 'Previous page') {
    homePage.getPaginatorPrev().click();
  }
});

Then('All visible assets are not selected', () => {
  cy.get('.ItgResourceListResultGrid-checkbox').should('have.attr', 'class')
    .and('not.contain', 'mat-checkbox-checked');
});

Then('Sort options are defaulted to Date Created and Descending', () => {
  homePage.getSortOption().should('have.text', ' By: Date Created arrow_drop_down');

  homePage.getSortDirectionBtn().should('have.attr', 'aria-label', 'Descending');
});

And('the below sort options are available', (dataTable) => {
  cy.get('.ItgResourceListSorter-label').click();
  dataTable.rawTable.forEach(($ele, index) => {
    cy.get('.mat-menu-content > button').eq(index).should('have.text', ' ' + $ele.toString() + ' ');
  });
  cy.get('.ItgResourceListSorter-activeOption').click();
});

And('I see {string} tooltip on hovering over Sort Direction', (direction) => {
  // # TODO: in below step trigger('mouseover') isn't showing tooltip, need to look into this more
  homePage.getSortDirectionBtn().trigger('mouseover');
  // TODO: below works fine if I hover manually during test so leave below, it's just the mouseover that needs to be fixed
  // cy.get('.cdk-overlay-container .mat-tooltip').should('have.text', direction);
});

And('I set the sort direction to {string}', (direction) => {
  homePage.getSortDirectionBtn().invoke('attr', 'aria-label').then(currentDirection => {
    if (direction !== currentDirection) {
      homePage.getSortDirectionBtn().click();
    }
  });
});

And('I set Include {string} Domains in Results to {string}', (domainType, includeDomain) => {
  if (domainType === 'Sub') {
    homePage.getIncludeSubDomains().invoke('attr', 'class').then(getClassAttribute => {
      if ((includeDomain === 'true' && !getClassAttribute.includes('mat-checkbox-checked')) || (includeDomain === 'false' && getClassAttribute.includes('mat-checkbox-checked'))) {
        homePage.getIncludeSubDomains().click();
      }
    });
  }
  if (domainType === 'Parent') {
    homePage.getIncludeParentDomains().invoke('attr', 'class').then(getClassAttribute => {
      if ((includeDomain === 'true' && !getClassAttribute.includes('mat-checkbox-checked')) || (includeDomain === 'false' && getClassAttribute.includes('mat-checkbox-checked'))) {
        homePage.getIncludeParentDomains().click();
      }
    });
  }
});

And('I select the Sort options {string} and {string}', (sortOption, sortOrder) => {
  homePage.getSortOption().click();
  cy.get('.mat-menu-content').contains(sortOption).click();
  homePage.getSortDirectionBtn().invoke('attr', 'aria-label').then(currentDirection => {
    if (sortOrder !== currentDirection) {
      homePage.getSortDirectionBtn().click();
    }
  });
});

Then('Selected Sort option {string} is highlighted', (sortOption) => {
  homePage.getSortOption().click();
  homePage.getActiveSortOption().should('have.text', ' ' + sortOption + ' ');
});

And('Sort options {string} and {string} is shown in URL', (sortOption, sortDirection) => {
  var value;

  switch (sortOption) {
  case 'Name':
    value = 'asset-name';
    break;
  case 'Type':
    value = 'asset-type';
    break;
  case 'State':
    value = 'asset-state';
    break;
  case 'Date Created':
    value = 'asset-created';
    break;
  case 'Date Modified':
    value = 'asset-modified';
    break;
  }
  cy.url().should('include', value);
  cy.url().should('include', sortDirection);
});

And('Assets are sorted as per Sort options {string}, {string}, {string}', (sortOption, sortOrder, resultCount) => {
  var mySortOption;

  switch (sortOption) {
  case 'Name':
    mySortOption = 'asset-name';
    break;
  case 'Type':
    mySortOption = 'asset-type';
    break;
  case 'State':
    mySortOption = 'asset-state';
    break;
  case 'Date Created':
    mySortOption = 'asset-created';
    break;
  case 'Date Modified':
    mySortOption = 'asset-modified';
    break;
  }

  // TODO:
  // Make API call to assetNameList_api(mySortOption, sortOrder, resultCount), & compare what's returned in the expect below:
  // expect().to.eq(homePage.getAssetName());
});

And('I scroll beyond the last asset', () => {
  homePage.getAssetsInGrid().last().trigger('mouseover');
  cy.scrollTo(0, 40000);
});

Then('Icons {string} and {string} are disabled when I click {string}', (icon1, icon2, page) => {
  if (page === 'Last Page') {

    if (homePage.getPaginatorLast().should('be.enabled')) {
      homePage.getPaginatorLast().click();
      homePage.getPaginatorNext().should('not.be.enabled');
      homePage.getPaginatorLast().should('not.be.enabled');
    }
  } else {
    if (homePage.getPaginatorFirst().should('be.enabled')) {
      homePage.getPaginatorFirst().click();
      homePage.getPaginatorPrev().should('not.be.enabled');
      homePage.getPaginatorFirst().should('not.be.enabled');
    }
  }
});

And('I search for the first asset', () => {
  homePage.getAssetName().first().then($el => {
    homePage.getResourceListSearchInput().clear().type($el.text());
    cy.get('.mat-option-text').should('be.visible');
    cy.get('#cdk-overlay-1').click();
    homePage.getSpinnerLabel().should('not.exist');
    cy.get('.ItgResourceListResultGrid-result').then($el => {
      countOfAssets = $el.length;
    });
  });
});

And('Load More button is not displayed', () => {
  cy.contains('Load More').should('not.exist');
});

And('Pagination is disabled', () => {
  cy.get('#mat-radio-7').invoke('attr', 'class').then(getClassAttribute => {
    if (getClassAttribute.includes('mat-radio-checked')) {
      homePage.getPaginatorFirst().should('not.be.enabled');
      homePage.getPaginatorLast().should('not.be.enabled');
      homePage.getPaginatorPrev().should('not.be.enabled');
      homePage.getPaginatorNext().should('not.be.enabled');
    } else {
      homePage.getPaginatorFirst().should('not.exist');
      homePage.getPaginatorLast().should('not.exist');
      homePage.getPaginatorPrev().should('not.exist');
      homePage.getPaginatorNext().should('not.exist');
    }
  });
});

And('Count of selected items {string} is displayed on snack bar', (resultCount) => {
  cy.get('.ItgAssetSnackbar-label').then($el1 => {
    let assetCount;
    const countText = $el1.text();
    homePage.getResourceListWidgetCount().then($el => {
      assetCount = $el.text();
      const snackBarCount = ' ' + resultCount + ' of ' + assetCount.replace(' items found ', '').trim() + ' items selected ';
      expect(snackBarCount).to.eq(countText);
    });
  });
});

And('First asset is unselected as I uncheck the first asset', () => {
  cy.get('#mat-checkbox-11 > .mat-checkbox-layout > .mat-checkbox-inner-container').first().click();

  cy.get('.ItgResourceListResultGrid-checkbox').first().should('have.attr', 'class')
    .and('not.contain', 'mat-checkbox-checked');
});

And('All visible Assets are unselected and Snack bar is not displayed', () => {
  cy.get('.ItgResourceListResultGrid-checkbox.mat-checkbox-checked').should('have.length', 0);

  homePage.getSnackBar().should('not.exist');
});

Then('Snack bar is displayed', () => {
  homePage.getSnackBar().should('be.visible');
});

Then('Back to Top arrow is displayed with {string} tooltip upon hover', () => {
  homePage.getBackToTopBtn().should('be.visible');
  // TODO: need to check how to hover & validate the tooltip text
});

And('I am brought back to top', () => {
  cy.window().its('scrollY').should('equal', 0);
});

When('Enable {string} Filter is unchecked on CMS Editor', (filterType) => {
  let panelId;
  let selectorId;

  switch (filterType) {
  case 'keyword':
    selectorId = '#mat-checkbox-4';
    break;

  case 'types':
    selectorId = '#mat-checkbox-5';
    break;

  case 'state':
    selectorId = '#mat-checkbox-6';
    break;

  case 'domains':
    panelId = '#mat-expansion-panel-header-3';
    selectorId = '#mat-checkbox-7';
    break;

  case 'adaptor':
    panelId = '#mat-expansion-panel-header-4';
    selectorId = '#mat-checkbox-8';
    break;

  case 'phase':
    selectorId = '#mat-checkbox-9';
    break;
  }
  // below is just for domains for now, need to write if statement & group whatever together
  if (filterType === 'adaptor') {
    cy.get(panelId).click();
    cy.get(selectorId).should('not.be.checked');
  }


});

And('I {string} Enable {string} Filter on Config panel', (check, filterType) => {

  let panelId;
  let selectorId;

  switch (filterType) {
  case 'keyword':
    panelId = '#mat-expansion-panel-header-0';
    selectorId = '#mat-checkbox-4';
    break;
  case 'types':
    panelId = '#mat-expansion-panel-header-1';
    selectorId = '#mat-checkbox-5';
    break;
  case 'state':
    panelId = '#mat-expansion-panel-header-2';
    selectorId = '#mat-checkbox-6';
    break;
  case 'domains':
    panelId = '#mat-expansion-panel-header-3';
    selectorId = '#mat-checkbox-7';
    break;
  case 'adaptor':
    panelId = '#mat-expansion-panel-header-4';
    selectorId = '#mat-expansion-panel-header-7';
    break;
  case 'phase':
    panelId = '#mat-expansion-panel-header-4';
    selectorId = '#mat-expansion-panel-header-8';
    break;
  }

  if (check === 'check') {
    if (filterType === 'adaptor') {
      cy.get(panelId).click();
      cy.get(selectorId).click();
      cy.get('#mat-checkbox-8').invoke('attr', 'class').then(getClassAttribute => {
        if (!getClassAttribute.includes('mat-checkbox-checked')) {
          cy.get('#mat-checkbox-8').click();
        }
      });
    } else if (filterType === 'phase') {
      cy.get(panelId).click();
      cy.get(selectorId).invoke('attr', 'class').then(getClassAttribute => {
        if (!getClassAttribute.includes('mat-checkbox-checked')) {
          cy.get(selectorId).click();
        }
      });
      cy.get('#mat-checkbox-9').invoke('attr', 'class').then(getClassAttribute => {
        if (!getClassAttribute.includes('mat-checkbox-checked')) {
          cy.get('#mat-checkbox-9').click();
        }
      });
    } else {
      cy.get(panelId).click();
      cy.get(selectorId).invoke('attr', 'class').then(getClassAttribute => {
        if (!getClassAttribute.includes('mat-checkbox-checked')) {
          cy.get(selectorId).click();
        }
      });
    }
  }
  if (check === 'uncheck') {
    if (filterType === 'adaptor') {
      cy.get('#mat-checkbox-8').invoke('attr', 'class').then(getClassAttribute => {
        if (getClassAttribute.includes('mat-checkbox-checked')) {
          cy.get('#mat-checkbox-8').click();
        }
      });
    } else if (filterType === 'phase') {
      cy.get('#mat-checkbox-9').invoke('attr', 'class').then(getClassAttribute => {
        if (getClassAttribute.includes('mat-checkbox-checked')) {
          cy.get('#mat-checkbox-9').click();
        }
      });
    } else {
      cy.get(selectorId).invoke('attr', 'class').then(getClassAttribute => {
        if (getClassAttribute.includes('mat-checkbox-checked')) {
          cy.get(panelId).click();
          cy.get(selectorId).click();
        }
      });
    }
  }
});

And('{string} filter {string} shown in widget', (filterType, bool) => {

  let filterButton;

  switch (filterType) {
  case 'keyword':
    filterButton = '.ItgResourceListKeywordFilter-panel';
    break;

  case 'types':
    filterButton = 'itg-resource-list-types-filter [role="button"]';
    break;

  case 'state':
    filterButton = 'itg-resource-list-state-filter [role="button"]';
    break;

  case 'domains':
    filterButton = 'itg-resource-list-domain-filter [role="button"]';
    break;

  case 'adaptor':
    filterButton = 'itg-resource-list-adaptor-filter [role="button"]';
    break;

  case 'phase':
    filterButton = 'itg-resource-list-phase-filter [role="button"]';
    break;
  }

  if (bool === 'is') {
    cy.get(filterButton).should('be.visible');
  } else {
    cy.get(filterButton).should('not.exist');
  }

});

// Then('Show {string} count option is checked by default', (filterType) => {
//   switch (filterType) {
//   case 'keyword':
//     // filterButton = '';
//     break;

//   case 'types':
//     // filterButton = '';
//     break;

//   case 'domain':
//     // filterButton = '';
//     break;

//   case 'state':
//     // filterButton = '';
//     break;
//   }
// });

And('I click on {string} filter on widget', (filterType) => {
  let filterBtn;

  switch (filterType) {
  case 'keyword':
    filterBtn = homePage.getKeywordFilterBtn();
    break;
  case 'domains':
    filterBtn = homePage.getDomainFilterBtn();
    break;
  case 'state':
    filterBtn = homePage.getStateFilterBtn();
    break;
  case 'types':
    filterBtn = homePage.getTypesFilterBtn();
    break;
  }

  filterBtn.click();
});

And('Counts are displayed on {string} filter', (filterType) => {
  let filterItem;

  switch (filterType) {
  case 'keyword':
    filterItem = homePage.getKeywordFilterSubMenu();
    break;
  case 'domains':
    filterItem = homePage.getDomainFilterSubMenu();
    break;
  case 'state':
    filterItem = homePage.getStateFilterSubMenu();
    break;
  case 'types':
    filterItem = homePage.getTypesFilterSubMenu();
    break;
  }

  filterItem.then(item => {
    const listItem = item.text();
    const assetCount = Number(listItem.substring(listItem.indexOf('(') + 1,
      listItem.indexOf(')')));
    assert.isNumber(assetCount);
  });
});

And('I select the first {string} filter', (filterType) => {

  let filterMenuText;
  let filterSubMenuText;

  if (filterType === 'keyword') {

    homePage.getKeyWordsMenuText().first().invoke('text').then(text => {
      filterMenuText = text;
    });

    homePage.getKeyWordsMenu().first().click();

    homePage.getKeywordFilterSubMenu().first().invoke('text').then(text => {
      filterSubMenuText = text;
    });

    homePage.getKeywordFilterSubMenu().first().click().then(() => {
      textOnFilter = filterMenuText + ' - ' + filterSubMenuText;
    });

  } else if (filterType === 'domain') {

    homePage.getDomainFilterSubMenu().first().invoke('text').then(text => {
      filterSubMenuText = text;
    });

    homePage.getDomainFilterSubMenu().first().click().then(() => {
      textOnFilter = 'Domain' + ' - ' + filterSubMenuText;
    });
  } else if (filterType === 'state') {
    homePage.getStateFilterSubMenu().get(1).invoke('text').then(text => {
      filterSubMenuText = text;
    });

    homePage.getStateFilterSubMenu().get(1).click().then(() => {
      textOnFilter  = 'State - ' + filterSubMenuText;
    });
  } else if (filterType === 'types') {
    homePage.getTypesFilterSubMenu().get(1).invoke('text').then(text => {
      filterSubMenuText = text;
    });

    homePage.getTypesFilterSubMenu().get(1).click().then(() => {
      textOnFilter = 'Type - ' + filterSubMenuText;
    });
  } else if (filterType === 'adaptor') {
    homePage.getAdaptorFilterSubMenu().first().invoke('text').then(text => {
      filterSubMenuText = text;
    });

    homePage.getAdaptorFilterSubMenu().first().click().then(() => {
      textOnFilter = 'Adaptors - ' + filterSubMenuText;
    });
  } else if (filterType === 'phase') {
    homePage.getPhaseFilterMenu().click();
    homePage.getDropdownOverlay().eq(1).click();
    homePage.getDropdownOverlay().eq(1).invoke('text').then(text => {
      filterSubMenuText = text;
      textOnFilter = 'Phase - ' + filterSubMenuText;
    });    
  }
});

Then('Count on filter matches the count of list View', () => {
  let assetCountTextSplit;
  let filterCount;
  homePage.getSpinnerLabel().should('not.exist');

  homePage.getResourceListWidgetCount().invoke('text').then(text => {
    assetCountTextSplit = text;

    const count = textOnFilter.split(' ').pop();

    filterCount = Number(count.substring(count.indexOf('(')+1, count.indexOf(')')));


  }).then(() => {
    // TODO: for now, we can use contain, but need to get the value & compare, cause in theory 12 contains 2, so that would be a mismatch, etc.
    expect(assetCountTextSplit).to.contain(filterCount);
  });
});

And('Applied Filter is displayed as pill', () => {
  homePage.getAppliedFilters().last().invoke('text').then(text => {
    let filterText = text;
    filterText = filterText.split('\n');
    // TODO: There's a space in 'textOnFilter' that we need to remove somehow
    expect(textOnFilter).to.contain(filterText[0]);
  });
});

And('I click on X button on Applied Filter', () => {
  countOfFilters = homePage.getAppliedFilters().count();
  homePage.getCancelAppliedFilters().last().click();
});

And('Applied Filter is removed', () => {
  expect(homePage.getAppliedFilters.count()).to.eq(countOfFilters - 1);
});

And('Applied Filters are not shown on the widget', () => {
  homePage.getAppliedFilterText().should('not.exist');
  homePage.getAppliedFiltersArea().should('not.exist');
});

And('I {string} Show keyword count on Config panel', (selection) => {
  homePage.getShowKeyWordCount().invoke('attr', 'class').then(getClassAttribute => {
    if (selection === 'check' && !getClassAttribute.includes('mat-checkbox-checked')) {
      homePage.getShowKeyboardCount().click();
    } else if (selection === 'uncheck' && getClassAttribute.includes('mat-checkbox-checked')) {
      homePage.getShowKeyboardCount().click();
    }
  });
});

Then('Counts are not displayed on Keyword filters', () => {
  const countDisplay = [];
});

And('Keyword filter parameters are displayed on URL', () => {
  cy.url().should('include', 'keywordFilter=');
});

And('I click on Clear All button', () => {
  cy.get('.ItgResourceListSearch-clearAll').click();
});

And('All the applied filters are cleared', () => {
  homePage.getAppliedFilterText.should('not.exist');
  homePage.getAppliedFiltersArea.should('not.exist');
});

And('Keyword Filters are removed from URL', () => {
  cy.url().should('include', 'keywordFilter=%5B%5D');
});

And('I select the second adaptor filter', () => {
  homePage.getAdaptorFilterSubMenu().get(1).invoke('text').then(text => {
    textOnSecondFilter = 'Adaptors - ' + text;
  });

  homePage.getAdaptorFilterSubMenu.get(1).click();

});

And('First adaptor filter {string} UnChecked', (selection) => {
  if (selection === 'is') {
    homePage.getAdaptorFilterSubMenu().should('have.attr', 'aria-selected', true);
  } else if (selection === 'is not') {
    homePage.getAdaptorFilterSubMenu().should('have.attr', 'aria-selected', false); // try aria-checked if this doesn't work
  }
});

And('Filter pill is updated to second filter', () => {
  cy.get('#spinnerLabel').should('not.exist');
  homePage.getAppliedFilters().last().invoke('text').then(text => {
    let filterText = text;
    filterText = filterText.split('\n');
    expect(textOnSecondFilter).to.contain(filterText[0]);
  });
});

And('I {string} multiSelect option for adaptor filter', (selection) => {
  homePage.getMultiSelectAdaptorFilter().invoke('attr', 'class').then(getClassAttribute => {
    if ((selection === 'select' && !getClassAttribute.includes('mat-checkbox-checked')) || (selection === 'unSelect' && getClassAttribute.includes('mat-checkbox-checked'))) {
      homePage.getMultiSelectAdaptorFilter().click();
    }
  });
});

And('Additional filter pill is displayed with second adaptor', () => {
  homePage.getAppliedFilters.last().invoke('text').then(text => {
    let filterText = text;
    filterText = filterText.split('\n');
    expect(textOnSecondFilter).to.contain(filterText[0]);
  });

  homePage.getAppliedFilters().count().then(count => {

    homePage.getAppliedFilters().get(count - 2).invoke('text').then((textOnPill)=> {
      const myTextOnPill = textOnPill.split('\n');
      expect(textOnSecondFilter).to.contain(myTextOnPill[0]);
    });
  });
});

And('I input an adaptor label', () => {
  homePage.getAdaptorLabel().clear();
});

And('I navigate to Asset Details page of asset {string}', (assetName) => {
  homePage.getResourceListSearchInput().clear().type(assetName + '{enter}');
  homePage.getSpinnerLabel().should('not.exist');
  homePage.getAssetName().first().click();
  homePage.getAssetDetailTitle().should('be.visible');
  homePage.getAssetDetailTitle().should('have.text', assetName);
});

Then('Asset availability is shown on Asset Detail Page', () => {
  cy.get('.ItgAssetDetails-availabilityContainer').should('be.visible');
});

Then('Fields on Asset details tab are populated correctly', () => {
  let fields = cy.getAssetDetailsTabFields();
  cy.log(fields);
});

And('I select the second phase filter', () => {
  homePage.getPhaseFilterMenu().click();
  homePage.getDropdownOverlay().eq(2).click();
  homePage.getDropdownOverlay().eq(2).invoke('text').then(text => {
    textOnSecondFilter = 'Phase - ' + text;
  });
});