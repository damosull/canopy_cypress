class CoreConfigFields {
  getSpacingSlider () {
    return cy.get('[formcontrolname = "spacing"]');
  }

  getTopSpacingButton () {
    return cy.get('[value="top"]');
  }

  getRightSpacingButton () {
    return cy.get('[value="right"]');
  }

  getBottomSpacingButton () {
    return cy.get('[value="bottom"]');
  }

  getLeftSpacingButton () {
    return cy.get('[value="left"]');
  }

  getSpacingSliderLabel () {
    return cy.get('.ItgWidgetSettings-spacingSlider > :nth-child(1)');
  }
}

export default CoreConfigFields;