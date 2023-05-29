/// <reference types="Cypress" />

import HomePageObjects from "../page-objects/home-page";
import SignUpPageObjects from "../page-objects/signUp-page";
import MyAccountPageObjects from "../page-objects/myAccount-page";

class SignUpActions {
  signup(name, email, password) {
    SignUpPageObjects.getNameInput().clear().type(name);
    SignUpPageObjects.getEmailInput().clear().type(email);
    SignUpPageObjects.getPasswordInput().clear().type(password);
    SignUpPageObjects.getSignUpButton().click();

    MyAccountPageObjects.getLoggedInPopup('Cadastro realizado').should('be.visible');
  }
}

export default new SignUpActions();