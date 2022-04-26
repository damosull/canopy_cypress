import { Given, And, Then, When } from 'cypress-cucumber-preprocessor/steps';
import HomePage from '../PageObjects/HomePage';
import '@4tw/cypress-drag-drop';

const homePage = new HomePage();

let assetName = 'damo';
let assetType = 'damo1';
let myUrl = '';

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

// TODO: can I refactor this to use same step as in line 101?
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
    homePage.getHeadingWidgetContent().should('have.css', 'font-weight', '700'); // Bold = 700
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
  homePage.getAssetsInGrid().last().trigger('mouseover');
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
  cy.get('[formcontrolname=subDomains]').click();
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
  if (string === 'equal to') {
    expectedCount = value;
    homePage.getAssetsInGrid().should('have.length', expectedCount);
  }
});

Then('Grid View is set by default on Config Panel', () => {
  cy.xpath('//span[text() = " Grid "]//ancestor::mat-radio-button').should('have.attr', 'class')
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
  cy.get('.ItgResourceListDetailLink-resultSubTitle').should('be.visible');
});

And('I click on the first AssetName in Asset {string} view', (view) => {
  if (view === 'Grid') {
    homePage.getAssetType().first().then($el => {
      assetType = $el.text();
    });
    homePage.getAssetName().first().then($el => {
      assetName = $el.text();
    }).click();
  }

  if (view === 'List') {
    homePage.getAssetTypeInList().get(1).then($el => {
      assetType = $el.text();
    });
    homePage.getAssetNameInList().first().then($el => {
      assetName = $el.text();
    }).click();
  }
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
  cy.url().should('include', 'detailItem=');
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
  if (view === 'Grid') {
    homePage.getAssetsInGrid().first().should('be.visible');
  }

  if (view === 'List') {
  }
});

And('I select {string} pagination and {string} results per page', (pagination, results) => {

  if (pagination === 'Pagination') {
    homePage.getPaginationPaginationStyleRdo().should('be.visible');
    homePage.getPaginationPaginationStyleRdo().click();
  }

  // homePage.getResultsPerPageDropdown().click();

  homePage.getResultsPerPageDropdown().click().get('mat-option').contains(results).click();
});

And('I click on Select Visible icon', () => {
  cy.get('.ItgResourceListWidget-selectVisible').click();
});

Then('All visible assets are selected', () => {

  // TODO: tomorrow, compare the count of the below, should match.
  // tricky to get them to compare thoug

  cy.get('.ItgResourceListResultGrid-checkbox');

  cy.get('.ItgResourceListResultGrid-checkbox.mat-checkbox-checked');
});