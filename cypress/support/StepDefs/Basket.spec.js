import { And, Then } from 'cypress-cucumber-preprocessor/steps';

Then('URL should include {string}', (urlSubString) => {
  cy.url().should('include', urlSubString);
});

And('Title of Basket Page is {string}', (title) => {
  cy.get('.ItgBasket-title').should('have.text', title);
});

And('I add to basket', () => {
  cy.contains('Add to basket').click();
});

And('Preview results per page should be {string} {string}', (string, value) => {

  let expectedCount = 0;

  switch (string) {
  case 'equal to':
    expectedCount = value;
    break;
  case 'twice':
    expectedCount = value * 2;
    break;
  case 'thrice':
    expectedCount = value * 3;
    break;
  }

  cy.wait(2000);

  cy.get('.ItgResourceListResultGrid-previewContainer').should('have.length', expectedCount);
});

And('I scroll beyond the last asset in preview', () => {
  cy.get('.ItgResourceListResultGrid-previewContainer').last().trigger('mouseover');
  cy.scrollTo(0, 40000);
});