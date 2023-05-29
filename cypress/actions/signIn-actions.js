/// <reference types="Cypress" />

import HomePageObjects from "../page-objects/home-page";
import SignInPageObjects from "../page-objects/signIn-page";
import MyAccountPageObjects from "../page-objects/myAccount-page";

class SignInActions {
  signin(email, password) {
    SignInPageObjects.getEmailInput().clear().type(email);
    SignInPageObjects.getPasswordInput().clear().type(password);
    SignInPageObjects.getSignInButton().click();

    MyAccountPageObjects.getLoggedInPopup('Login realizado').should('be.visible');
    MyAccountPageObjects.getBodyEmail(email).should('be.visible');
  }
}

export default new SignInActions();