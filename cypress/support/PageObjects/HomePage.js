class HomePage {

    getToggleEditingMode() {
        return cy.get('.ItgCmsPage-toggleEdit .mat-button-wrapper')
    }

    getSaveLayout() {
        return cy.get('.ItgCmsPage-saveLayout')
    }

    getClearLayoutButton() {
        return cy.get('.ItgCmsPage-clearLayout')
    }
}

export default HomePage;