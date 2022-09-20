/// <reference types="Cypress" />

import HomePage from "../../page-objects/home-page";
import HomePageActions from "../../actions/home-page-actions";
import SignInActions from "../../actions/signIn-actions";

describe("Sign in flow - test cases", () => {
  let testData;
  before(() => {
    cy.fixture("login-data").then((jsonTestData) => {
      testData = jsonTestData;
    });
  });

  describe("New user - positive scenarios", () => {
    beforeEach(() => {
      HomePage.open();
    });

    it.only("TC-01 - should be able to sign in", () => {
      SignInActions.signin(
        testData.userSignInData.email,
        testData.userSignInData.password
      );

      cy.wait(4000);
    });
  });
});
