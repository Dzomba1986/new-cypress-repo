/// <reference types="Cypress" />

const Locators = require("../fixtures/locators.json");
const faker = require('faker');

describe('Improved login', () =>{
    let correctEmail = 'abcd@abcd.com';
    let correctPassword = '12341234';

    let userData = {
        randomName: faker.name.findName(),
        randomEmail: faker.internet.email(),
        randomPassword: faker.internet.password()
    }

    beforeEach('visit link', () =>{
            cy.visit('/');
            cy.get(Locators.Header.loginButton).click();
    })
    it('login with valid credentials', () => {
            cy.get(Locators.loginPage.emailInputField).type('abcd@abcd.com');
            cy.get(Locators.loginPage.passwordInputField).type('12341234');
            cy.get(Locators.loginPage.submitButton).click();
            cy.get(Locators.logoutPage.logoutButton).should('be.visible');
    });

    it('login with random credentials', () => {
        cy.get(Locators.loginPage.emailInputField).type(correctEmail);
        cy.get(Locators.loginPage.passwordInputField).type(correctPassword) ;
        cy.get(Locators.loginPage.submitButton).click();
        cy.get(Locators.logoutPage.logoutButton).should('be.visible');
        
});

it('login with invalid random data', () => {
    cy.get(Locators.loginPage.emailInputField).type(userData.randomEmail);
    cy.get(Locators.loginPage.passwordInputField).type(userData.randomPassword);
    cy.get(Locators.loginPage.submitButton).click();
    cy.get(Locators.logoutPage.logoutButton).should('not.exist');
})
}); 