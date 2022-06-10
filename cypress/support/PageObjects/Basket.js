class Basket {

  getFirstAsset () {
    return cy.get('#mat-checkbox-1 > .mat-checkbox-layout > .mat-checkbox-inner-container');
  }

  getBasketCount () {
    return cy.get('#mat-badge-content-1');
  }
}

export default Basket;