/// <reference types="Cypress" />

export default class MyAccountPageObjects {
  static getLoggedInPopup(text) {
    return cy.get('#swal2-title').contains(text);
  }
  static getBodyEmail(text) {
    return cy.get('body').contains(text);
  }
  static getOkButton(){
    return cy.get('.swal2-confirm');
  }
}