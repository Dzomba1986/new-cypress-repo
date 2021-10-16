/// <reference types="Cypress" />

const Locators = require("../fixtures/locators.json")
const faker = require('faker');

describe('Improved registration', () =>{
let userData = {
    randomName: faker.name.findName(),
    randomEmail: faker.internet.email(),
    randomPassword: faker.random.number()*100000
}

    beforeEach('visit link', () =>{
        cy.visit('/');
        cy.url().should('contains', 'https://gallery-app');
})

it('valid registration', () => {
    cy.get(Locators.Header.registerButton).click();
    cy.get(Locators.registerPage.firstNameInputField).type('Nenad');
    cy.get(Locators.registerPage.lastNameInputField).type('Damjanovic');
    cy.get(Locators.registerPage.emailInputField).type('abcd'+Math.floor(Math.random()*10000000000)+'@123.com');
    cy.get(Locators.registerPage.passwordInputField).type('12121255');
    cy.get(Locators.registerPage.passworConfirmationdInputField).type('12121255');
    cy.get(Locators.registerPage.checbox).check();
    cy.get(Locators.registerPage.submitButton).click();
    cy.get(Locators.logoutPage.logoutButton).should('be.visible');
    });

    it('invalid random registration', () => {
        cy.get(Locators.Header.registerButton).click();
        cy.get(Locators.registerPage.firstNameInputField).type(userData.randomName);
        cy.get(Locators.registerPage.lastNameInputField).type(userData.randomName);
        cy.get(Locators.registerPage.emailInputField).type(userData.randomEmail);
        cy.get(Locators.registerPage.passwordInputField).type(userData.randomPassword);
        cy.get(Locators.registerPage.passworConfirmationdInputField).type(userData.randomPassword);
        cy.get(Locators.registerPage.checbox).check();
        cy.get(Locators.registerPage.submitButton).click();
        cy.get(Locators.logoutPage.logoutButton).should('not.exist');
        });
})