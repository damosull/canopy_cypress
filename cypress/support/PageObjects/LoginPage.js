class LoginPage {

    getUsernameInput() {
        return cy.get(`[formcontrolname="email"]`)
    }

    getPasswordInput() {
        return cy.get(`[formcontrolname="password"]`)
    }
}

export default LoginPage;