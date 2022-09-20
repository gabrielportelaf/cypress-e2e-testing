/// <reference types="Cypress" />

export default class SignInPageObjects {
  static getEmailInput() {
    return cy.get('#user');
  }
  static getPasswordInput() {
    return cy.get('#password');
  }
  static getSignIntButton() {
    return cy.get('#btnLogin');
  }
}
