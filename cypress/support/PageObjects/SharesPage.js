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

  getTabs () {
    return cy.get('.mat-tab-label-content');
  }

  getAssetsTabTitle () {
    return cy.get('.ItgShareDetailsAssets-title');
  }

  getAssetsGrid () {
    return cy.get('.ItgResourceListResultGrid-container');
  }

  getAssetsCountOnTab () {
    return cy.get('.ItgShareDetailsAssets-count');
  }

  getSelectVisibileAssetsIcon () {
    return cy.get('.ItgShareDetailsAssets-selectVisible');
  }

  getAssetCheckbox () {
    return cy.get('.ItgResourceListResultGrid-item .mat-checkbox-inner-container');
  }

  getRemoveBtn () {
    return cy.get('.ItgShareAssetsSnackbarButtons-removeButton');
  }

  getOverlay () {
    return cy.get('.ItgButtonsModal-description');
  }

  getAssetCount () {
    return cy.get('#mat-tab-label-0-1 > .mat-tab-label-content');
  }

  getConfirmButton () {
    return cy.contains('Confirm');
  }

  getGuestsTabTitle () {
    return cy.get('.ItgShareGuests-title');
  }

  getNoGuestsParagraph () {
    return cy.get('.ItgShareGuests-noGuests p');
  }

  getInviteGuestsButton () {
    return cy.get('.ItgShareGuests-inviteGuests');
  }

  getGuestsTableHeaders () {
    return cy.get('.ItgShareGuests-container [role="columnheader"]');
  }

  getSortOptions () {
    return cy.get('.ItgResourceListSorter-container > .mat-menu-trigger');
  }

  getEmailInput () {
    return cy.get('#mat-chip-list-input-0');
  }

  getMessageInput () {
    return cy.get('[formcontrolname="message"]');
  }

  getDropdownOption () {
    return cy.get('.mat-select-panel .mat-option');
  }

  getCancelOverlayButton () {
    return cy.get('.ItgDialogHeader-closeButton');
  }

  getFirstOption () {
    return cy.get('#mat-option-0');
  }

  getDetailsInfoTitle () {
    return cy.get('.ItgShareDetailsInfo-title');
  }

  getFieldTitles () {
    return cy.get('.ItgShareDetailsInfo-form .mat-form-field .mat-form-field-label');
  }

  getEditButton () {
    return cy.get('.ItgShareDetailsInfo-header > .mat-focus-indicator');
  }

  getOwnerInput () {
    return cy.get('[formcontrolname="owner"]');
  }

  getCreatedInput () {
    return cy.get('[formcontrolname="created"]');
  }

  getModifiedInput () {
    return cy.get('[formcontrolname="modified"]');
  }

  getNameInput () {
    return cy.get('input[formcontrolname="name"]');
  }

  getEnabledInput () {
    return cy.get('mat-checkbox[formcontrolname="enabled"]');
  }

  getStartInput () {
    return cy.get('input[formcontrolname="start"]');
  }

  getEndInput () {
    return cy.get('input[formcontrolname="end"]');
  }

  getDescriptionInput () {
    return cy.get('textarea[formcontrolname="description"]');
  }

  getBtnCancel () {
    return cy.contains('Cancel');
  }

  getCheckbox () {
    return cy.get('.mat-checkbox-inner-container');
  }

  getSelect () {
    return cy.get('.mat-select-placeholder');
  }

  getEmailCell () {
    return cy.get('.ItgShareGuests-emailCell');
  }

  getBtnSave () {
    return cy.get('.ItgShareDetailsInfo-saveButton');
  }

  getSnackBarText () {
    return cy.get('.ItgSnackbar-text');
  }

  getOptionValue (index) {
    return cy.get(('.mat-menu-content > :nth-child(value)').replace('value', index + 1));
  }

  getSelectValue (index) {
    return cy.get(('#mat-select-0-panel > :nth-child(value)').replace('value', index + 1));
  }

  getDuration (string) {
    return cy.contains(string);
  }

  getElementByText (string) {
    return cy.contains(string);
  }

  // getAsset (string) {
  //   return cy.contains(`/^${string}/`).parents('.ItgResourceListResultGrid-item').find('.mat-checkbox-inner-container');
  // }
}

export default Shares;