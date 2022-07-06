import LoginPage from './PageObjects/LoginPage';

const loginPage = new LoginPage();
const username = 'itgappro';
const password = '1Qwertasdf';
const project3Url = 'https://cloud-automation-eu.itgcanopy.com/itg/content/site/home.jsp#!/7/list_test/v3project/list?filters=W3sibmFtZSI6IlRlc3QiLCJ0eXBlIjoiY29tLmludHJlcGlhLmx1bWEuQWR2YW5jZWRTZWFyY2hGaWx0ZXIiLCJhcHBsaWVkIjpbeyJmbGFncyI6WyJGdXp6eSIsIkZpZWxkIl0sInJlYWxtIjoiY29tLmludHJlcGlhLmx1bWEiLCJuYW1lIjoiVGVzdCJ9XSwiY2xhdXNlcyI6W3siZmxhZ3MiOlsiRnV6enkiLCJGaWVsZCJdLCJyZWFsbSI6ImNvbS5pbnRyZXBpYS5sdW1hIiwibmFtZSI6IlRlc3QifV19LHsibmFtZSI6Ik5hbWUiLCJ0eXBlIjoiY29tLmludHJlcGlhLmx1bWEuQWR2YW5jZWRTZWFyY2hGaWx0ZXIiLCJhcHBsaWVkIjpbeyJmbGFncyI6WyJGdXp6eSIsIk5hbWUiXSwicmVhbG0iOiJjb20uaW50cmVwaWEubHVtYSJ9XSwiY2xhdXNlcyI6W3siZmxhZ3MiOlsiRnV6enkiLCJOYW1lIl0sInJlYWxtIjoiY29tLmludHJlcGlhLmx1bWEifV19XQ%3D%3D&offset=0&searches=W3sicHJvcGVydHkiOiJwaGFzZSIsInZhbHVlIjpudWxsfV0%3D&sort=eyJzb3J0IjoiYXNzZXQtY3JlYXRlZCIsIm9yZGVyIjoiRGVzY2VuZGluZyJ9';

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('login', () => {
  cy.visit(project3Url);
  loginPage.getUserName().type(username);
  loginPage.getPassword().type(password);
  loginPage.getLoginButton().click();
  cy.get('.menu > .brand > .logo').should('be.visible');
});