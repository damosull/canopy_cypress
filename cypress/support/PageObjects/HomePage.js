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
}

export default HomePage;