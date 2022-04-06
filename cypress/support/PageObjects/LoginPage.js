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
}

export default LoginPage;