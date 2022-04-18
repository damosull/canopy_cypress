class HomePage {

  getSaveLayout () {
    return cy.get('.ItgCmsPage-saveLayout');
  }

  getClearLayoutButton () {
    return cy.get('.ItgCmsPage-clearLayout');
  }

  getWidgetPanel () {
    return cy.get('.ItgCmsPageToolkit-container');
  }

  getWidgetPanelTitle () {
    return cy.get('.ItgCmsPageToolkit-title');
  }

  getWidgetPanelCloseBtn () {
    return cy.get('.ItgCmsPageToolkit-closeButton');
  }

  getWidgetSettingsBtn () {
    return cy.get(':nth-child(1) > .ItgActiveWidget > .ItgActiveWidget-container > .ItgActiveWidget-buttons > .ItgActiveWidget-button');
  }

  getEditingSectionPanel () {
    return cy.get('.ItgCmsPage-widgetSettings');
  }

  getEditingSectionPanelHeader () {
    return cy.get('.ItgWidgetSettings-header');
  }

  getActiveWidgetTitle () {
    return cy.get(':nth-child(1) > .ItgActiveWidget > .ItgActiveWidget-container > .ItgActiveWidget-header > .ItgActiveWidget-title');
  }

  getActiveWidget () {
    return cy.get('itg-active-widget[class*="is-active"]');
  }

  getConfigWidth () {
    return cy.get('.ItgWidgetSettings-widthField > .ItgWidgetSettings-inputContainer > .mat-slider');
  }

  getWidgets () {
    return cy.get('.ItgActiveWidget');
  }

  getSectionWidget () {
    return cy.get('.ItgSectionWidget-activeWidget > .ItgActiveWidget-container');
  }

  getWidgetSpacingSlider () {
    return cy.get('.ItgWidgetSettings-spacingSlider > label > .ItgWidgetSettings-inputContainer > .mat-slider');
  }

  getBasket () {
    return cy.get('.ItgToolbar-basket');
  }

  getButtonButtonStyleRadioButton () {
    return cy.get('[id=mat-radio-2-input]');
  }

  getOpenInTabCheckBox () {
    return cy.get('#mat-checkbox-1-input');
  }

  getDestinationUrlInput () {
    return cy.get('[formcontrolname="url"]');
  }

  getWidgetTextInput () {
    return cy.get('[formcontrolname="text"]');
  }

  getFontSizeSlider () {
    return cy.get('.ItgHeadingWidgetSettings-fontSizeField > .mat-slider');
  }

  getBoldFontButton () {
    return cy.get('#mat-button-toggle-10-button');
  }

  getItalicFontButton () {
    return cy.get('#mat-button-toggle-11-button');
  }

  getUnderlineFontButton () {
    return cy.get('#mat-button-toggle-12-button');
  }

  getHeadingWidgetContent () {
    return cy.get('.ItgHeadingWidget-content');
  }

  getResourceListWidgetCount () {
    return cy.get('.ItgResourceListWidget-count');
  }

  getResourceListSearchInput () {
    return cy.get('.ItgResourceListSearch-searchInput');
  }
}

export default HomePage;