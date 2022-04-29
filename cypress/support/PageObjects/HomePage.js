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

  getListCheckBox () {
    return cy.xpath("//span[text() = ' List ']//ancestor::mat-radio-button");
  }

  getGridCheckBox () {
    return cy.xpath("//span[text() = ' Grid ']//ancestor::mat-radio-button");
  }

  getAssetsInGrid () {
    return cy.get('.ItgResourceListResultGrid-result');
  }

  getAssetName () {
    return cy.get('.ItgResourceListDetailLink-resultName');
  }

  getAssetType () {
    return cy.get('.ItgResourceListResultGrid-resultSubTitle');
  }

  getAssetNameInList () {
    return cy.get('.ItgResourceListDetailLink-resultName');
  }

  getAssetTypeInList () {
    return cy.get('.cdk-column-type');
  }

  getPaginationPaginationStyleRdo () {
    return cy.get('#mat-radio-7 > .mat-radio-label');
  }

  getResultsPerPageDropdown () {
    return cy.get('mat-select[formcontrolname="pageSize"]');
  }

  getPaginatorFirst () {
    return  cy.get('.mat-paginator-navigation-first');
  }

  getPaginatorLast () {
    return cy.get('.mat-paginator-navigation-last');
  }

  getPaginatorPrev () {
    return  cy.get('.mat-paginator-navigation-previous');
  }

  getPaginatorNext () {
    return  cy.get('.mat-paginator-navigation-next');
  }

  getSortDirectionBtn () {
    return cy.get('.ItgResourceListSorter-direction');
  }

  getIncludeSubDomains () {
    return cy.get('[formcontrolname=subDomains]');
  }

  getIncludeParentDomains () {
    return cy.get('[formcontrolname="inheritDomains"]');
  }

  getSortOption () {
    return cy.get('.ItgResourceListSorter-label .mat-button-wrapper');
  }

  getPaginationStyle () {
    return cy.get('mat-radio-group[formcontrolname="paginationStyle"]');
  }
}

export default HomePage;