class CommandsPage {
  getAdaptorType () {
    return cy.get('.ItgAssetDetailsInfo-adaptorType > .mat-list-item-content > .mat-list-text > :nth-child(2)');
  }

  getMasterFileType () {
    return cy.get('.ItgAssetDetailsInfo-masterFileType > .mat-list-item-content > .mat-list-text > :nth-child(2)');
  }

  getMasterFileSize () {
    return cy.get('.ItgAssetDetailsInfo-masterFileSize > .mat-list-item-content > .mat-list-text > :nth-child(2)');
  }

  getVersionNo () {
    return cy.get('.ItgAssetDetailsInfo-versionNumber > .mat-list-item-content > .mat-list-text > :nth-child(2)');
  }

  getMasterFile () {
    return cy.get('.ItgAssetDetailsInfo-masterFile > .mat-list-item-content > .mat-list-text > :nth-child(2)');
  }

  getModified () {
    return cy.get(':nth-child(7) > .mat-list-item-content > .mat-list-text > :nth-child(2) > span');
  }

  getAssetFolder () {
    return cy.get(':nth-child(8) > .mat-list-item-content > .mat-list-text > :nth-child(2) > span');
  }
}

export default CommandsPage;