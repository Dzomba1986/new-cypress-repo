/// <reference types="Cypress" />

describe('login tests', () => {
    it('visit gallery page', () =>{
         cy.visit("https://gallery-app.vivifyideas.com/"); 
     }); 
 
     it('click login button', () => {
         cy.get('a[href="/login"]').click();
     });
 
     it("login with invalid email", () => {
         cy.get('input[id="email"]').type('abcde@abcd.com');
         cy.get('input[id="password"]').type('12341234');
         cy.get('button[type="submit"]').click();
     });
 
     it("login with invalid password", () => {
         cy.get('input[id="email"]').clear().type('abcd@abcd.com');
         cy.get('input[id="password"]').clear().type('12341233');
         cy.get('button[type="submit"]').click();
     });
 
     it("login without email", () => {
         cy.get('input[id="email"]').clear();
         cy.get('input[id="password"]').clear().type('12341233');
         cy.get('button[type="submit"]').click();
     });
 
     it("login without password", () => {
         cy.get('input[id="email"]').clear().type('abcd@abcd.com');
         cy.get('input[id="password"]').clear();
         cy.get('button[type="submit"]').click();
     });
 
     it("login without 7 digit password", () => {
         cy.get('input[id="email"]').clear().type('abcd@abcd.com');
         cy.get('input[id="password"]').clear().type('1234123');
         cy.get('button[type="submit"]').click();
     });
 
     it("login with valid data", () => {
         cy.get('input[id="email"]').clear().type('abcd@abcd.com');
         cy.get('input[id="password"]').clear().type('12341234');
         cy.get('button[type="submit"]').click();
     });
 
     it('logout', () => {
         cy.get('a[role="button "]').click();
     });
 
 });