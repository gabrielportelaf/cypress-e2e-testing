/// <reference types="Cypress" />

import HomePage from "../page-objects/home-page";
import HomePageActions from "../actions/home-page-actions";
import signUpActions from "../actions/signUp-actions";

describe("Sign up flow - test cases", () => {
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

    it("TC-01 - should be able to sign up", () => {
      HomePageActions.menuSignUp();
      cy.wait(4000);
      signUpActions.signup( 
        testData.userSignData.name, 
        testData.userSignData.email,
        testData.userSignData.password
      );
    });
    it("TC-02 - should be able to sign in", () => {
    });
    it("TC-03 - should be able to sign out", () => {});
  });

  describe("New user - negative scenarios", () => {
    beforeEach(() => {});

    it("TC-04 - should not be able to sign up - with invalid data", () => {});
    it("TC-05 - should not be able to sign up - with a email registered before", () => {});
    it("TC-06 - should not be able to sign up - with a weak passpord", () => {});
  });
});
