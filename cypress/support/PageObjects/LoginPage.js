class LoginPage {

    getUsernameInput() {
        return cy.get(`[data-test-id="field-login"]`).first()
    }

    getPasswordInput() {
        return cy.get(`[data-test-id="field-password"]`).first()
    }
}

export default LoginPage;