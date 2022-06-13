class AssetDetails {
  getActionsMenu () {
    return cy.get('.ItgAssetDetails-menuContainer');
  }

  getToastNotification () {
    return cy.get('.mat-snack-bar-container');
  }
}

export default AssetDetails;