class CreateProjectPage {

  selectProjectFromCreateDD (type) {
    console.log(type);
    cy.get('.option-title').contains('Digital - Display').click();
  }

  create_ProjectID () {
    cy.get('.pull-right > .dropdown > .canopy-core-dropdown > .dropdown-button-label > .pull-left').click();
  }

  checkForCreateProjectModal () {
    cy.get('.modal-title').should('be.visible');
  }

  setProjectName (projectName) {
    cy.get("[field-label='Project Name'] input").clear().type(projectName + Date.now());
  }

  setProjectDate (dateType, year, month, day) {
    if (dateType === 'Start') {
      cy.get('i[class="far fa-calendar"]').first().click();
    } else {
      cy.get('i[class="far fa-calendar"]').eq(1).click();
    }
    cy.get('strong').click().get('strong').click();
    cy.get('.text-info').contains(year).click();
    cy.get('span').contains(month).click().get('button > span').contains(day).click();
  }

  setDropdownValue (fieldName, value ) {
    cy.get("[field-label='"+fieldName +"'] > .form-control").select(value);
  }

  setcheckBoxValue (checkboxName) {
    cy.get("[field-label='"+checkboxName +"'] > .form-control").check();
  }

  setTextboxValue (value, fieldName) {
    cy.get("[field-label='"+fieldName+"'] > [ng-show='!fieldRows || fieldRows <= 1'] > [placeholder]").type(value);
  }

  setTextAreaValue (value) {
    cy.get("[rows='6']").type(value);
  }

  setMultiCheckbox (value, fieldName) {
    cy.get("[field-label='"+fieldName+"'] .pull-left").click();
    cy.get('.option-title').contains(value).click();
  }

  clickOnButton (btnName) {
    cy.contains(btnName).click();
  }

  getFormValidationMessages () {
    return cy.get('.canopy-form-field-validation-msg');
  }

  getFieldLabelByName (name) {
    return cy.get(`[field-label="${name}"]`);
  }

  getOptionPill () {
    return cy.get('.option-pill');
  }

  getProjectNames () {
    return cy.get('[ng-click="onViewItemDetails(item, null, $event)"]');
  }

  clickOnProjectBurgerMenu (val) {
    let projectNames=[];
    if (val ==='has not') {
      this.getProjectNames().then($els => {
        projectNames = Array.from($els, el => el.innerText);
        cy.contains('td', projectNames[0])
          .siblings().eq(10)
          .click();
      });
    } else {
      // TODO: Need to use process.env
    }
  }
}
export default CreateProjectPage;