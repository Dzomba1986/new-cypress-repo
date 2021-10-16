/// <reference types="Cypress" />

import { loginPage } from '../Page_objects/loginPage';
const faker = require('faker');

describe('upgraded loginPage', () =>{
    let correctEmail = 'abcd@abcd.com';
    let correctPassword = '12341234';

    let userData = {
        randomEmail: faker.internet.email(),
        randomPassword: faker.internet.password()
    }

    beforeEach('visit link', () =>{
            cy.visit('https://gallery-app.vivifyideas.com/')
            cy.url().should("contain", "https://gallery-app")  
    })

    it('login with random credentials', () => {
        loginPage.login(userData.randomEmail, userData.randomPassword);
        cy.url().should("include", "/login");
        loginPage.loginTitle.should('have.text', 'Please login');
        loginPage.logoutButton.should('not.exist');
        loginPage.errorMessage.should('be.visible');
        loginPage.errorMessage.should('have.css', 'background-color', 'rgb(248, 215, 218)');
        loginPage.errorMessage.should('have.text', 'Bad Credentials');
    });

    it('login with invalid email & correct password', () => {
        loginPage.login(userData.randomEmail, correctPassword)
        loginPage.errorMessage.should('have.text', 'Bad Credentials');
        loginPage.errorMessage.should('be.visible');
    })

    it('login with valid email & incorrect password', () => {
        loginPage.login(correctEmail, userData.randomPassword)
        loginPage.errorMessage.should('have.text', 'Bad Credentials');
        loginPage.errorMessage.should('be.visible');
    })

    it("login with all spaces in email", () => {
        loginPage.login( '  ', correctPassword);
        loginPage.emailInput.should('have.value', '');
        loginPage.loginButton.should('be.visible');
    })

    it("login with all empty spaces in password", () => {
        loginPage.login(correctEmail, '  ');
        loginPage.passwordInput.should('have.value', '  ');
        loginPage.loginButton.should('be.visible');
    })

    it('login with unicode', () =>{
        loginPage.login('šđžć@žćđ.com', userData.randomPassword);
        loginPage.loginButton.should('be.visible');
    })

    it('login with two "@"', () =>{
        loginPage.login('adsad@@abc.com', userData.randomPassword);
        loginPage.loginButton.should('be.visible');
        loginPage.logoutButton.should('not.exist');
    })

    it('login with 7 digit password', () => {
        loginPage.login(correctEmail, '1234123');
        loginPage.loginButton.should('be.visible');
        loginPage.logoutButton.should('not.exist');
        loginPage.errorMessage.should('have.text', 'Bad Credentials');
    })

    it('login with 8 letter password', () => {
        loginPage.login(correctEmail, 'abcdabcd');
        loginPage.loginButton.should('be.visible');
        loginPage.logoutButton.should('not.exist');
        loginPage.errorMessage.should('have.text', 'Bad Credentials');
    })

    it('login with valid credentials', () => {
        cy.intercept(
            'POST',
            'https://gallery-api.vivifyideas.com/api/auth/login', 
            (req) => {}
        ).as("validLogin");

       loginPage.login(correctEmail, correctPassword);

       cy.wait('@validLogin').then((request) =>{
           expect(request.response.statusCode).eq(200);
       })

       loginPage.logoutButton.should('be.visible');
    });

    it('logout', () => {
        loginPage.login(correctEmail, correctPassword);

        cy.intercept(
            'POST',
            'https://gallery-api.vivifyideas.com/api/auth/logout', 
            (req) => {}
        ).as("logout");

        loginPage.logoutButton.click();

        cy.wait('@logout').then((request) => {
            expect(request.response.body.message).eq('Successfully logged out');
            expect(request.response.statusCode).eq(200);
        })
    })

})