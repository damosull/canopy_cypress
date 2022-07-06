class LoginPage {

  getUsernameInput () {
    return cy.get('[formcontrolname="email"]');
  }

  getPasswordInput () {
    return cy.get('[formcontrolname="password"]');
  }

  getLoginButton () {
    return cy.get('button[type="submit"]');
  }

  getLogoutButton () {
    return cy.get('.ItgToolbar-signOut');
  }

  getLoginError () {
    return cy.get('.ItgLogin-error');
  }

  getBtnEditingMode () {
    return cy.get('.ItgCmsPage-toggleEdit .mat-button-wrapper');
  }
}

export default LoginPage;