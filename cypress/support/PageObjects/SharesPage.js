class Shares {

  getShares () {
    return cy.get('itg-user-shares');
  }

  getTitle () {
    return cy.get('.ItgShares-title');
  }

  getCount () {
    return cy.get('.mat-badge-content');
  }

  getTableHeaders () {
    return cy.get('[role="columnheader"]');
  }

  getTableCells () {
    return cy.get('.ItgShares-idCell');
  }

  getCellsTitle () {
    return cy.get('.ItgShares-detailLink');
  }

  getShareDetailsName () {
    return cy.get('.ItgShareDetails-name');
  }

  getShareDetailsSubTitle () {
    return cy.get('.ItgShareDetails-subTitle');
  }

  getCreateShareButton () {
    return cy.get('.mat-dialog-actions > :nth-child(2)');
  }

  getShareName () {
    return cy.get('.ItgCreateShare-nameField');
  }

  getShareDescription () {
    return cy.get('.ItgCreateShare-descriptionField');
  }

  getCloseButton () {
    return cy.get('.ItgDialogHeader-container > .mat-focus-indicator > .mat-button-wrapper > .mat-icon');
  }

  getShareableAssetHeader () {
    return cy.get(':nth-child(1) > .mat-subheader');
  }

  getNonShareableAssetHeader () {
    return cy.get(':nth-child(2) > .mat-subheader');
  }

  getSharesDetailsItemLabel () {
    return cy.get('.ItgShareDetails-summaryItemLabel');
  }

  getShareDetailsItemSubtitle () {
    return cy.get('.ItgShareDetails-summaryItemSubtitle');
  }

  getShareDetailsBackButton () {
    return cy.get('.ItgShareDetails-header > .mat-focus-indicator');
  }

  getShareDetailsSortOption () {
    return cy.get('.ItgResourceListSorter-label .mat-button-wrapper');
  }

  getShareDetailsSortDirection () {
    return cy.get('.ItgResourceListSorter-direction');
  }

  getGuestsTabCount () {
    return cy.get('.ItgShareGuests-count');
  }

  getDialogTitle () {
    return cy.get('.mat-dialog-title');
  }

  getDurationDropdown () {
    return cy.get('mat-select[formcontrolname="hours"]');
  }
}

export default Shares;