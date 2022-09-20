/// <reference types="Cypress" />

export default class HomePageObjects {
  static getMobileSignInLink() {
    return cy.get(".right_list_fix > :nth-child(1) > a");
  }

  static getMobileSignUpLink() {
    return cy.get(".right_list_fix > :nth-child(2) > a");
  }

  static open() {
    cy.visit("http://automationpratice.com.br");
  }
}
