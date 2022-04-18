import { Given, And, Then, When } from 'cypress-cucumber-preprocessor/steps';
import HomePage from '../PageObjects/HomePage';
import '@4tw/cypress-drag-drop';

const homePage = new HomePage();

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

And('padding for {string} widget is set to {string}', (widgetName, spacing) => {
  if (widgetName === 'Section') {
    homePage.getSectionWidget().should('have.attr', 'style')
      .and('contain', spacing+'px');
  }
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
  cy.get('.ItgResourceListResultGrid-result').last().trigger('mouseover');
});

And('I click button based on aria-label {string}', (label) => {
  cy.get('[aria-label="' + label + '"]').click();
});