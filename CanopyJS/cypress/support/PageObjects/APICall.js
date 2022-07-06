class APIPage {

  getAPI (url) {
    cy.request('GET',url);
  }

  postAPI (url) {
    cy.request('POST',url);
  }

  fetchAPI (url) {
    cy.request('FETCH',url);
  }
}
export default APIPage;