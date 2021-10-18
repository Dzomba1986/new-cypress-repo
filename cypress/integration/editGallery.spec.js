/// <reference types="Cypress" />

import { createGalleryPage } from './../Page_objects/createGallery';
import { loginPage } from '../Page_objects/loginPage';
import { registerPage } from '../Page_objects/registerPage'
import { editGallery } from '../Page_objects/editGallery';
import { allGalleriesPage } from '../Page_objects/allGalleries';

const faker = require('faker');

describe('create gallery page', () =>{

    let correctEmail = 'abcd@abcd.com';
    let correctPassword = '12341234';
    let imgUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Matterhorn_from_Domh%C3%BCtte_-_2.jpg/285px-Matterhorn_from_Domh%C3%BCtte_-_2.jpg';
    let imgUrl2 = 'https://thumbs.dreamstime.com/b/sea-water-ocean-wave-surfing-surface-colorful-vibrant-sunset-barrel-shape-124362369.jpg';
    let imgUrl3 = 'http://static1.everypixel.com/ep-libreshot/0242/0259/3015/99837/2420259301599837355.jpg';
    let incorrectTitle = '  ';
    let correctTitle = 'Title changed';
    
    let userData = {
        randomTitle: faker.name.title(),
        randomDescription: faker.lorem.word(),
        randomImage: faker.image.animals()+'.jpg'
        }

    beforeEach('visit link', () =>{
        cy.visit('/');
        loginPage.login(correctEmail, correctPassword);
        loginPage.submitButton.click();
        cy.url().should("contain", "https://gallery-app");
        cy.wait(2000);
        registerPage.myGalleryButton.click();
        cy.wait(2000);
        editGallery.galleryTitleField.click();
        editGallery.editGalleryButton.click();
    })

    it('editing first gallery by moving order of img', () =>{
        editGallery.img2arrowUpButton.click();
        editGallery.submitGallery();
    })

    it('editing first gallery by adding third img', () =>{
        
        editGallery.addThirdImage(userData.randomImage);
        editGallery.submitGallery();
    })

    it('editing first gallery by deleting last img', () =>{
        editGallery.trashImg3Button.click();
        editGallery.submitGallery();
        editGallery.thirdImage.should('not.exist');
    })

    it('testing arrowUp of first img', ()=>{
        editGallery.img1arrowUpButton.click();
        editGallery.submitGallery();
    })

    it('testing arrowDown of first img', ()=>{
        editGallery.img1arrowDownButton.click();
        editGallery.submitGallery();
    })

    it('testing arrowUp of second img', ()=>{
        editGallery.img2arrowUpButton.click();
        editGallery.submitGallery();
    })
    
    it('testing arrowDown of second img', ()=>{
        editGallery.img2arrowDownButton.click();
        editGallery.submitGallery();
    })

    it.only('changing title of gallery', () =>{
        editGallery.titleChange(correctTitle);
        editGallery.submitGallery();
    })
})

   