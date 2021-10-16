/// <reference types="Cypress" />

import { registerPage } from './../Page_objects/registerPage';
const faker = require('faker');

describe('upgraded registerPage', () =>{
    let correctFirstName = 'Nenad';
    let correctLastName = 'Damjanovic';
    let incorrectFirstName = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ullamcorper arcu ultrices nisi commodo, non rhoncus est consequat. Quisque luctus feugiat bibendum. Curabitur risus libero, finibus at odio id, tempor porttitor felis. Integer lacinia libero ac.@abcdf.com';
    let incorrectLastName = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ullamcorper arcu ultrices nisi commodo, non rhoncus est consequat. Quisque luctus feugiat bibendum. Curabitur risus libero, finibus at odio id, tempor porttitor felis. Integer lacinia libero ac.@abcdf.com';
    let incorrectPassword = '1234567';
    let inccorectEmail = '666@1234com';
    let incorrectEmail2 = 'abcde1234.com';
    let usedEmail = 'abcd@abcd.com';
    let randomEmail = faker.internet.email();

    let userData = {
        randomFirstName: faker.name.firstName(),
        randomLastName: faker.name.lastName(),
        randomEmail: faker.internet.email(),
        randomPassword: faker.internet.password()
    }

    beforeEach('visit link', () =>{
            cy.visit('https://gallery-app.vivifyideas.com/');
            cy.url().should("contain", "https://gallery-app");
    })

    it("register with email not containing '.'", () =>{
        registerPage.register(userData.randomFirstName, userData.randomLastName, inccorectEmail, userData.randomPassword);
        registerPage.passwordConfirmation(userData.randomPassword);
        registerPage.checkbox();
        registerPage.submitRegister();
        registerPage.emailErrorMessage.should('contain', 'The email must be a valid email address.');

    })

    it("register with email not containing '@'", () =>{
        registerPage.register(userData.randomFirstName, userData.randomLastName, incorrectEmail2, userData.randomPassword);
        registerPage.passwordConfirmation(userData.randomPassword);
        registerPage.checkbox();
        registerPage.submitRegister();
        registerPage.registerButton.should('be.visible');

    })

    it('register with 7 digit password', () =>{
        registerPage.register(userData.randomFirstName, userData.randomLastName, userData.randomEmail, incorrectPassword);
        registerPage.passwordConfirmation(incorrectPassword);
        registerPage.checkbox();
        registerPage.submitRegister();
        registerPage.passwordErrorMessage.should('contain', 'The password must be at least 8 characters');
    })

    it('register with wrong password confirmation', () =>{
        registerPage.register(userData.randomFirstName, userData.randomLastName, userData.randomEmail, userData.randomPassword, incorrectPassword)
        registerPage.passwordConfirmation(incorrectPassword);
        registerPage.checkbox();
        registerPage.submitRegister();
        registerPage.passwordErrorMessage.should('contain', 'The password confirmation does not match')
    })

    /*it.only('register without checkbox', () =>{
        registerPage.register( userData.randomFirstName, userData.randomLastName, userData.randomEmail, userData.randomPassword);
        registerPage.submitRegister();
        registerPage.checkboxErrorMessage.should('have.text', 'The terms and conditions must be accepted');
    })*/

    it('register with 256 characters in first-name and last-name', () =>{
        cy.intercept('POST', 'https://gallery-api.vivifyideas.com/api/auth/register', (req) =>{}).as('invalidFirstName');

        registerPage.register(incorrectFirstName, incorrectLastName, userData.randomEmail, userData.randomPassword);
        registerPage.passwordConfirmation(userData.randomPassword);
        registerPage.checkbox();
        registerPage.submitRegister();

        cy.wait('@invalidFirstName').then((request) =>{
            expect(request.response.statusCode).eq(500);
        })
        registerPage.mainTitle.should('contain', 'Register');
    })

    it('register with already used email', () =>{
        cy.intercept('POST', 'https://gallery-api.vivifyideas.com/api/auth/register', (req) =>{}).as('usedEmail');

        registerPage.register(userData.randomFirstName, userData.randomLastName, usedEmail, userData.randomPassword);
        registerPage.passwordConfirmation(userData.randomPassword);
        registerPage.checkbox();
        registerPage.submitRegister();

        cy.wait('@usedEmail').then((request) =>{
            expect(request.response.statusCode).eq(422);
        })
        registerPage.emailErrorMessage.should('contain', 'The email has already been taken');
    })

    it('register with random credentials', () => {
        registerPage.register( userData.randomFirstName, userData.randomLastName, userData.randomEmail, userData.randomPassword);
        registerPage.passwordConfirmation(userData.randomPassword);
        registerPage.checkbox();
        registerPage.submitRegister();
        registerPage.registerButton.should('not.exist');
        registerPage.allGalleriesButton.should('be.visible');
        registerPage.myGalleryButton.should('be.visible');
        registerPage.createGalleryButton.should('be.visible');
        registerPage.logoutButton.should('be.visible');
    })

    it('register with valid credentials', () => {
        cy.intercept('POST', 'https://gallery-api.vivifyideas.com/api/auth/register', (req) =>{}).as('validRegister');

        registerPage.register(correctFirstName, correctLastName, randomEmail, userData.randomPassword);
        registerPage.passwordConfirmation(userData.randomPassword);
        registerPage.checkbox();
        registerPage.submitRegister();

        cy.wait('@validRegister').then((request) => {
            expect(request.response.statusCode).eq(200);
        })

        registerPage.registerButton.should('not.exist');
        registerPage.mainTitle.should('be.visible');
     })

});