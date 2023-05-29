/// <reference types="Cypress" />

export default class SignUpPageObjects {
  static getNameInput() {
    return cy.get('#user');
  }
  static getEmailInput() {
    return cy.get('#email');
  }
  static getPasswordInput() {
    return cy.get('#password');
  }
  static getSignUpButton() {
    return cy.get('#btnRegister');
  }
}
