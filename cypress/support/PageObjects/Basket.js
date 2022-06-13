class Basket {

  getFirstAsset () {
    return cy.get('#mat-checkbox-1 > .mat-checkbox-layout > .mat-checkbox-inner-container');
  }

  getBasketCount () {
    return cy.get('#mat-badge-content-1');
  }

  getExportButton () {
    return cy.get('.ItgBasket-exportButton');
  }

  getFiltersPanel () {
    return cy.get('.ItgResourceListFilters-panel');
  }

  getDownloadButton () {
    return cy.get('.ItgBasketSnackbarButtons-downloadButton');
  }

  getTitle () {
    return cy.get('.ItgBasket-title');
  }

  getBasketContainer () {
    return cy.get('.ItgBasket-container');
  }

  getSelectVisible () {
    return cy.get('.ItgBasket-selectVisible');
  }

  getSortButton () {
    return cy.get('.ItgResourceListSorter-container > .mat-menu-trigger > .mat-button-wrapper');
  }

  getBackground () {
    return cy.get('.cdk-overlay-backdrop');
  }
}

export default Basket;