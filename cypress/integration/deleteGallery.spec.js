/// <reference types="Cypress" />

import { registerPage } from "../Page_objects/registerPage";
import { loginPage } from "../Page_objects/loginPage";
import { deleteGalleryPage } from "../Page_objects/deleteGallery";

    let correctEmail = 'abcd@abcd.com';
    let correctPassword = '12341234';

describe('delete gallery', () =>{
    before('visit link', () =>{
        cy.visit('https://gallery-app.vivifyideas.com/');
        cy.url().should("contain", "https://gallery-app");
        loginPage.login(correctEmail, correctPassword);
        loginPage.logoutButton.should('be.visible');

    })

    beforeEach('visit my gallery link', () =>{
        cy.visit('https://gallery-app.vivifyideas.com/')
        registerPage.myGalleryButton.click();
    })

    it('delete first gallery', ()=>{
        cy.wait(3000);
        deleteGalleryPage.galleryTitleField.click();
        cy.wait(3000);
        deleteGalleryPage.deleteGalleryButton.should('be.visible');
        cy.intercept('DELETE', 'https://gallery-api.vivifyideas.com/api/galleries/**', (req) =>{}).as('deleteGallery');
        
        cy.wait(3000);
        deleteGalleryPage.deleteGalleryButton.click();
       
        cy.wait('@deleteGallery').then((intercept) =>{
            expect(intercept.response.statusCode).eq(200);
        })
        registerPage.mainTitle.should('contain', 'All Galleries');
    })
})