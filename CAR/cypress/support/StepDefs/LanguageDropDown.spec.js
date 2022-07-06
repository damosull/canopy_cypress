import { And, Then } from 'cypress-cucumber-preprocessor/steps';
import Widgets from '../PageObjects/WidgetsPage';

const widgets = new Widgets();

Then('I see the site language is updated to selected language', () => {
  widgets.getResourceListWidgetCount().contains('resultados encontrados');
});

And('I see static content on the site is still in the default language', (dataTable) => {
  dataTable.rawTable.forEach(($ele, index) => {
    cy.get(`#mat-expansion-panel-header-${index+1}`).should('have.text', ' ' + $ele.toString() + ' ');
  });
});