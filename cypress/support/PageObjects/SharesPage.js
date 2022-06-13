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
}

export default Shares;