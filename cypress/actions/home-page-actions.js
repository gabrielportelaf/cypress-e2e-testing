/// <reference types="Cypress" />

import HomePageObjects from "../page-objects/home-page";

class HomePageActions {
  menuSignIn() {
    HomePageObjects.getMobileSignInLink().should("exist").click();
  }
  menuSignUp() {
    HomePageObjects.getMobileSignUpLink().should("exist").click();
  }
}


export default new HomePageActions();