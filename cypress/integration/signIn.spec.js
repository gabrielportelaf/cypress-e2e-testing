/// <reference types="Cypress" />

import HomePageObjects from "../page-objects/home-page";
import HomePageActions from "../actions/home-page-actions";
import SignInActions from "../actions/signIn-actions";
import MyAccountPageObjects from "../page-objects/myAccount-page";

describe("Sign in flow - test cases", () => {
  let testData;
  before(() => {
    cy.fixture("login-data").then((jsonTestData) => {
      testData = jsonTestData;
    });
  });

  describe("New user", () => {
    beforeEach(() => {
      HomePageObjects.open();
    });

    it.only("TC-01 - should be able to sign in", () => {
      HomePageActions.menuSignIn();
      cy.wait(4000);
      SignInActions.signin(
        testData.userSignInData.email,
        testData.userSignInData.password
      );
      MyAccountPageObjects.getOkButton().click();
    });
  });
});
