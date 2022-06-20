class Toolbar {
  getUsernameToolbar () {
    return cy.get('itg-luma-module-dropdown');
  }

  getOptionValue (index) {
    return cy.get(('.ItgDomainDropdown-menuContent > :nth-child(value)').replace('value', index + 1));
  }

  getMenuValue (index) {
    return cy.get(('.mat-menu-content > :nth-child(value)').replace('value', index + 1));
  }

  getMenuItem () {
    return cy.get('.ItgLumaModuleDropdown-menuItem');
  }

  getDomainMenu () {
    return cy.get('.ItgDomainDropdown-menuContent');
  }

  getSelectedModule () {
    return cy.get('.module_name.selected');
  }

  getSitesOption () {
    return cy.get('.ItgSiteDropdown-menuButton');
  }

  getSiteFromDropdown (index) {
    return cy.get(`.mat-menu-content > :nth-child(${index})`);
  }

  getSiteOptionValue (index) {
    return cy.get(('.mat-menu-content > :nth-child(value)').replace('value', index + 1));
  }

  getDefaultDomain () {
    return cy.get('.ItgDomainDropdown-menuContent > :nth-child(1)');
  }

  getElement (string) {
    return cy.contains(string);
  }

  getBtnLanguage () {
    return cy.get('.ItgLanguagePicker-menuButton');
  }

  getLanguageList () {
    return cy.get('.ItgLanguagePicker-menuItem');
  }

  getNodes () {
    return cy.get('.ItgMenu-nodeContainer .ItgMenu-node');
  }
}

export default Toolbar;