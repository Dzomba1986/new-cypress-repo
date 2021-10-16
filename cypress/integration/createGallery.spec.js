/// <reference types="Cypress" />

import { createGalleryPage } from './../Page_objects/createGallery';
import { loginPage } from '../Page_objects/loginPage';
import { allGalleriesPage } from '../Page_objects/allGalleries';

const faker = require('faker');

describe('create gallery page', () =>{

    let correctEmail = 'abcd@abcd.com';
    let correctPassword = '12341234';
    let imgUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Matterhorn_from_Domh%C3%BCtte_-_2.jpg/285px-Matterhorn_from_Domh%C3%BCtte_-_2.jpg';
    let imgUrl2 = 'https://thumbs.dreamstime.com/b/sea-water-ocean-wave-surfing-surface-colorful-vibrant-sunset-barrel-shape-124362369.jpg';
    let incorrectTitle = '  ';
    
    let userData = {
        randomTitle: faker.name.title(),
        randomDescription: faker.lorem.word(),
        randomImage: faker.image.animals()
        }

     before('log into the app', () =>{
            cy.loginViaBackend(Cypress.env('validEmail', 'validPassword'));
         });

         it('visit default url', () => {
             cy.visit('/create');
             loginPage.logoutButton.should('be.visible');
         })

    beforeEach('visit link', () =>{
        cy.visit('/');
        cy.url().should("contain", "https://gallery-app");
    })

    it('create gallery with spaces title', () => {
        createGalleryPage.login(correctEmail, correctPassword);
        createGalleryPage.loginSubmitButton.should('not.exist');
        
        cy.intercept('POST', 'https://gallery-api.vivifyideas.com/api/galleries', (req) =>{}).as('invalidTitle');

        createGalleryPage.create(incorrectTitle, userData.randomDescription, imgUrl);
        createGalleryPage.submitGallery();
       
        cy.wait('@invalidTitle').then((request) =>{
            expect(request.response.statusCode).eq(422);
            expect(request.response.body.message).eq("The given data was invalid.");
        })
       
        createGalleryPage.titleErrorMessage.should('contain', 'The title field is required.');
        createGalleryPage.createGallerySubmitButton.should('be.visible');
    });


    it('create gallery with with one image', () => {
        createGalleryPage.login(correctEmail, correctPassword);
        createGalleryPage.loginSubmitButton.should('not.exist');

        cy.intercept('POST', 'https://gallery-api.vivifyideas.com/api/galleries', (req) =>{}).as('oneImage');

        createGalleryPage.create(userData.randomTitle, userData.randomDescription, imgUrl);
        createGalleryPage.submitGallery();

        cy.wait('@oneImage').then((request) =>{
            expect(request.response.statusCode).eq(201);
        })
        
        createGalleryPage.createGallerySubmitButton.should('not.exist');
    });

    it('create gallery with two images', () => {
        createGalleryPage.login(correctEmail, correctPassword);
        createGalleryPage.loginSubmitButton.should('not.exist');

        cy.intercept('POST', 'https://gallery-api.vivifyideas.com/api/galleries', (req) =>{}).as('twoImages');

        createGalleryPage.create(userData.randomTitle, userData.randomDescription, imgUrl);
        createGalleryPage.addSecondImage(userData.randomTitle, userData.randomDescription, imgUrl2);
        createGalleryPage.submitGallery();

        cy.wait('@twoImages').then((request) =>{
            expect(request.response.statusCode).eq(201);
        })
        
        createGalleryPage.createGallerySubmitButton.should('not.exist');
        allGalleriesPage.mainTitleField.should('contain', 'All Galleries');
    });

    it('test create gallery via BE', () => {
        cy.loginViaBackend("abcd@abcd.com", "12341234");
        cy.visit('/create');
        loginPage.logoutButton.should('be.visible');
        cy.createGalleryViaBackend("pokusaj", "beautiful sunflowers field", "http://static1.everypixel.com/ep-libreshot/0242/0259/3015/99837/2420259301599837355.jpg").then((responseObject) => {
            let id = responseObject.body.id;
            console.log(id)
            cy.writeFile('galleryId.json', id.toString());
        });

        cy.visit('/');
        allGalleriesPage.mainTitleField.should('have.text', 'All Galleries');
    });

    it.only('test delete gallery via BE', () => {
        cy.loginViaBackend("abcd@abcd.com", "12341234");
        cy.readFile('./galleryId.json').then((file) => {
            let galleryId = file;
            cy.deleteGalleryViaBackend(galleryId);
        });
    })
});
