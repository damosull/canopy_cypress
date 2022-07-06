class NotFoundPage {

  title () {
    return cy.get('.ItgError-state');
  }

  message () {
    return cy.get('.ItgError-message');
  }

  btnBack () {
    return cy.get('.ItgError-back');
  }
}

export default NotFoundPage;