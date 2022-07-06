class LoginPage {
  //   public userName = $('input[type="text"]');
  //   public password = $('input[type="password"]');
  //   public loginButton = $('button[data-test-id="button-login"]');
  //   public logoutButton = $('i[class="fa-door-open"]');
  //   public loginError = $('[class="error ng-binding ng-scope"]');
  //   public resetPassword = $('[data-test-id="button-reset"]');
  //   public restPasswordPage = $('h4');
  //   public emailRestTypeBox = $('input[data-test-id=\'field-email\']');
  //   public passwordResetPopup = $('[ng-bind-html="content.body"]');
  //   public validationElement = $('[ng-if="validation.message"]');
  //   public backToLogin = $('[data-test-id="button-login"]');
  //   public onLogin = $('span[class=\'ng-scope\']');
  //   public logOutBtn = $('canopy-header fa-door-open');

  getUserName () {
    return cy.get('input[type="text"]');
  }

  getPassword () {
    return cy.get('input[type="password"]');
  }

  getLoginButton () {
    return cy.get('button[data-test-id="button-login"]');
  }

  getLogoutButton () {
    return cy.get('i[class="fa-door-open"]');
  }

  getloginError () {
    return cy.get('[class="error ng-binding ng-scope"]');
  }

  getResetPassword () {
    return cy.get('[data-test-id="button-reset"]');
  }

  getRestPasswordPage () {
    return cy.get('[data-test-id="button-reset"]');
  }

  getEmailRestTypeBox () {
    return cy.get('input[data-test-id=\'field-email\']');
  }

  getPasswordResetPopup () {
    return cy.get('input[data-test-id=\'field-email\']');
  }

  getValidationElement () {
    return cy.get('[ng-if="validation.message"]');
  }

  getBackToLogin () {
    return cy.get('[data-test-id="button-login"]');
  }

  getOnLogin () {
    return cy.get('span[class=\'ng-scope\']');
  }

  getLogOutBtn () {
    return cy.get('canopy-header fa-door-open');
  }
}
export default LoginPage;