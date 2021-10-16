/// <reference types="Cypress" />

import { allGalleriesPage } from "../Page_objects/allGalleries";
import { registerPage } from "../Page_objects/registerPage";
import { loginPage } from "../Page_objects/loginPage";

describe('check gallery pagination', () =>{
    before ('visit link', () =>{
        cy.visit('https://gallery-app.vivifyideas.com/');
        cy.url().should("contain", "https://gallery-app");

        registerPage.registerButton.should('be.visible');
        registerPage.allGalleriesButton.should('be.visible');
        registerPage.myGalleryButton.should('not.exist');
        registerPage.createGalleryButton.should('not.exist');
        registerPage.logoutButton.should('not.exist');
        loginPage.loginButton.should('be.visible');
        
    })

    it('load more button', ()=> {
        allGalleriesPage.loadMoreButton.click();
        allGalleriesPage.galleryDivClass.should('have.length', 10);
    })
})