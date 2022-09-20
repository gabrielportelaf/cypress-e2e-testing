/// <reference types="Cypress" />

import HomePageObjects from "../page-objects/home-page";
import SignInPageObjects from "../page-objects/signIn-page";
import MyAccountPageObjects from "../page-objects/myAccount-page";

class SignInActions {
  signin(email, password) {
    HomePageObjects.getMobileSignInLink().should("exist").click();

    SignInPageObjects.getEmailInput().clear().type(email);
    SignInPageObjects.getPasswordInput().clear().type(password);
    SignInPageObjects.getSignIntButton().click();

    MyAccountPageObjects.getLoggedInPopup('Login realizado').should('be.visible');
    MyAccountPageObjects.getBodyEmail(email).should('be.visible');
  }
}

export default new SignInActions();