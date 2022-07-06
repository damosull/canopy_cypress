import { Given, And, Then, When } from 'cypress-cucumber-preprocessor/steps';
import Widgets from '../PageObjects/WidgetsPage';
import '@4tw/cypress-drag-drop';

const widgets = new Widgets();

Then('{string} Section panels are added to CMS Editor panel', count => {
  widgets.getActiveSectionWidgets().should('have.length', count);
});

And('I drag the bottom section to the top of the CMS Editor panel', () => {
  cy.get('.ItgSectionWidget-activeWidget').eq(1).contains('drag_handle').drag('.ItgMenu-nodeContainer', { target: { position: 'top' }, force: true});
});