class CoreConfigFields {
  getSpacingSlider () {
    return cy.get('[formcontrolname = "spacing"]');
  }

  getTopSpacingButton () {
    return cy.get('#mat-button-toggle-5-button > .mat-button-toggle-label-content');
  }

  getRightSpacingButton () {
    return cy.get('#mat-button-toggle-6-button > .mat-button-toggle-label-content');
  }

  getBottomSpacingButton () {
    return cy.get('#mat-button-toggle-7-button > .mat-button-toggle-label-content');
  }

  getLeftSpacingButton () {
    return cy.get('#mat-button-toggle-8-button > .mat-button-toggle-label-content');
  }

  getSpacingSliderLabel () {
    return cy.get('.ItgWidgetSettings-spacingSlider > :nth-child(1)');
  }
}

export default CoreConfigFields;