import { Given, And, Then } from 'cypress-cucumber-preprocessor/steps';
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

  cy.get('.ItgToolbarWidget-container').eq(value).drag('.ItgSectionWidget-column');
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

And('I update {string} widget title with {string}', (title, text) => {
  var value;

  switch (title) {
  case 'Section':
    value = 'title';
    break;
  }

  cy.get(`[formcontrolname="${value}"]`).clear().type(text);
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
  homePage.getActiveWidgetTitle().should('not.be.visible');
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