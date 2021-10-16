/// <reference types="cypress" />

describe('register test', () => {
    beforeEach('visit gallery page', () =>{
        cy.visit("https://gallery-app.vivifyideas.com/"); 
        cy.get('a[href="/register"]').click();
     });

     it("register without first-name", () => {
        cy.get('input[id="last-name"]').type('Damjanovic');
        cy.get('input[id="email"]').type('abcd'+Math.floor(Math.random()*10000000000)+'@123.com');
        cy.get('input[id="password"]').type('12121233');
        cy.get('input[id="password-confirmation"]').type('12121233');
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
    });

    it("register without last-name", () => {
        cy.get('input[id="first-name"]').type('Nenad');
        cy.get('input[id="email"]').type('abcd'+Math.floor(Math.random()*10000000000)+'@123.com');
        cy.get('input[id="password"]').type('12121233');
        cy.get('input[id="password-confirmation"]').type('12121233');
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
    });

    it("register without email", () => {
        cy.get('input[id="first-name"]').type('Nenad');
        cy.get('input[id="last-name"]').type('Damjanovic');
        cy.get('input[id="password"]').type('12121233');
        cy.get('input[id="password-confirmation"]').type('12121233');
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
    });

    it("register without password", () => {
        cy.get('input[id="first-name"]').type('Nenad');
        cy.get('input[id="last-name"]').type('Damjanovic');
        cy.get('input[id="email"]').type('abcd'+Math.floor(Math.random()*10000000000)+'@123.com');
        cy.get('input[id="password-confirmation"]').type('12121233');
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
    });

    it("register without confirmation password", () => {
        cy.get('input[id="first-name"]').type('Nenad');
        cy.get('input[id="last-name"]').type('Damjanovic');
        cy.get('input[id="email"]').type('abcd'+Math.floor(Math.random()*10000000000)+'@123.com');
        cy.get('input[id="password"]').type('12121233');
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
    });

    it("register with 256 char in first-name", () => {
        cy.get('input[id="first-name"]').type('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ullamcorper arcu ultrices nisi commodo, non rhoncus est consequat. Quisque luctus feugiat bibendum. Curabitur risus libero, finibus at odio id, tempor porttitor felis. Integer lacinia libero ac.');
        cy.get('input[id="last-name"]').type('Damjanovic');
        cy.get('input[id="email"]').type('abcd'+Math.floor(Math.random()*10000000000)+'@123.com');
        cy.get('input[id="password"]').type('12121233');
        cy.get('input[id="password-confirmation"]').type('12121233');
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
    });

    it("register with 256 char in last-name", () => {
        cy.get('input[id="first-name"]').type('Nenad');
        cy.get('input[id="last-name"]').type('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ullamcorper arcu ultrices nisi commodo, non rhoncus est consequat. Quisque luctus feugiat bibendum. Curabitur risus libero, finibus at odio id, tempor porttitor felis. Integer lacinia libero ac.');
        cy.get('input[id="email"]').type('abcd'+Math.floor(Math.random()*10000000000)+'@123.com');
        cy.get('input[id="password"]').type('12121233');
        cy.get('input[id="password-confirmation"]').type('12121233');
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
    });

    it("register with all spaces in first-name", () => {
        cy.get('input[id="first-name"]').type('     ');
        cy.get('input[id="last-name"]').type('Damjanovic');
        cy.get('input[id="email"]').type('abcd'+Math.floor(Math.random()*10000000000)+'@123.com');
        cy.get('input[id="password"]').type('12121233');
        cy.get('input[id="password-confirmation"]').type('12121233');
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
    });

    it("register with all spaces in last-name", () => {
        cy.get('input[id="first-name"]').type('Nenad');
        cy.get('input[id="last-name"]').type('         ');
        cy.get('input[id="email"]').type('abcd'+Math.floor(Math.random()*10000000000)+'@123.com');
        cy.get('input[id="password"]').type('12121233');
        cy.get('input[id="password-confirmation"]').type('12121233');
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
    });

    it("register with all spaces before '@' in email", () => {
        cy.get('input[id="first-name"]').type('Nenad');
        cy.get('input[id="last-name"]').type('         ');
        cy.get('input[id="email"]').type('abcd'+Math.floor(Math.random()*10000000000)+'@123.com');
        cy.get('input[id="password"]').type('12121233');
        cy.get('input[id="password-confirmation"]').type('12121233');
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
    });

    it("register with email not containing '@'", () => {
        cy.get('input[id="first-name"]').type('Nenad');
        cy.get('input[id="last-name"]').type('Damjanovic');
        cy.get('input[id="email"]').type('abcd'+Math.floor(Math.random()*10000000000)+'123.com');
        cy.get('input[id="password"]').type('12121233');
        cy.get('input[id="password-confirmation"]').type('12121233');
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
    });

    it("register with email not containing '.'", () => {
        cy.get('input[id="first-name"]').type('Nenad');
        cy.get('input[id="last-name"]').type('Damjanovic');
        cy.get('input[id="email"]').type('abcd'+Math.floor(Math.random()*10000000000)+'@123com');
        cy.get('input[id="password"]').type('12121233');
        cy.get('input[id="password-confirmation"]').type('12121233');
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
    });

    it("register with email not containing char between '@' and '.'", () => {
        cy.get('input[id="first-name"]').type('Nenad');
        cy.get('input[id="last-name"]').type('Damjanovic');
        cy.get('input[id="email"]').type('abcd'+Math.floor(Math.random()*10000000000)+'@.com');
        cy.get('input[id="password"]').type('12121233');
        cy.get('input[id="password-confirmation"]').type('12121233');
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
    });

    it("register with email containing unicode between '@' and '.'", () => {
        cy.get('input[id="first-name"]').type('Nenad');
        cy.get('input[id="last-name"]').type('Damjanovic');
        cy.get('input[id="email"]').type('abcd'+Math.floor(Math.random()*10000000000)+'@šđžćč.com');
        cy.get('input[id="password"]').type('12121233');
        cy.get('input[id="password-confirmation"]').type('12121233');
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
    });

    it("register with email containing unicode before '@' ", () => {
        cy.get('input[id="first-name"]').type('Nenad');
        cy.get('input[id="last-name"]').type('Damjanovic');
        cy.get('input[id="email"]').type('šđžćč'+Math.floor(Math.random()*10000000000)+'@123.com');
        cy.get('input[id="password"]').type('12121233');
        cy.get('input[id="password-confirmation"]').type('12121233');
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
    });

    it("register with email not containing 'com'", () => {
        cy.get('input[id="first-name"]').type('Nenad');
        cy.get('input[id="last-name"]').type('Damjanovic');
        cy.get('input[id="email"]').type('abcd'+Math.floor(Math.random()*10000000000)+'@123.');
        cy.get('input[id="password"]').type('12121233');
        cy.get('input[id="password-confirmation"]').type('12121233');
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
    });

    it("register with email already exists", () => {
        cy.get('input[id="first-name"]').type('Nenad');
        cy.get('input[id="last-name"]').type('Damjanovic');
        cy.get('input[id="email"]').type('abc@abc.com');
        cy.get('input[id="password"]').type('12121233');
        cy.get('input[id="password-confirmation"]').type('12121233');
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
    });

    it("register with 8 letter password", () => {
        cy.get('input[id="first-name"]').type('Nenad');
        cy.get('input[id="last-name"]').type('Damjanovic');
        cy.get('input[id="email"]').type('abcd'+Math.floor(Math.random()*10000000000)+'@123.com');
        cy.get('input[id="password"]').type('abcdabcd');
        cy.get('input[id="password-confirmation"]').type('abcdabcd');
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
    });

    it("register with 7 digit password", () => {
        cy.get('input[id="first-name"]').type('Nenad');
        cy.get('input[id="last-name"]').type('Damjanovic');
        cy.get('input[id="email"]').type('abcd'+Math.floor(Math.random()*10000000000)+'@123.com');
        cy.get('input[id="password"]').type('1234567');
        cy.get('input[id="password-confirmation"]').type('1234567');
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
    });

    it("register with unicode password", () => {
        cy.get('input[id="first-name"]').type('Nenad');
        cy.get('input[id="last-name"]').type('Damjanovic');
        cy.get('input[id="email"]').type('abcd'+Math.floor(Math.random()*10000000000)+'@123.com');
        cy.get('input[id="password"]').type('š?*ć-ž_đ');
        cy.get('input[id="password-confirmation"]').type('š?*ć-ž_đ');
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
    });

    it("register with all spaces in password", () => {
        cy.get('input[id="first-name"]').type('Nenad');
        cy.get('input[id="last-name"]').type('Damjanovic');
        cy.get('input[id="email"]').type('abcd'+Math.floor(Math.random()*10000000000)+'@123.com');
        cy.get('input[id="password"]').type('   ');
        cy.get('input[id="password-confirmation"]').type('   ');
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
    });

    it("register with diferent password confirmation", () => {
        cy.get('input[id="first-name"]').type('Nenad');
        cy.get('input[id="last-name"]').type('Damjanovic');
        cy.get('input[id="email"]').type('abcd'+Math.floor(Math.random()*10000000000)+'@123.com');
        cy.get('input[id="password"]').type('12312312');
        cy.get('input[id="password-confirmation"]').type('12312313');
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
    });

    it("register without checbox", () => {
        cy.get('input[id="first-name"]').type('Nenad');
        cy.get('input[id="last-name"]').type('Damjanovic');
        cy.get('input[id="email"]').type('abcd'+Math.floor(Math.random()*10000000000)+'@123.com');
        cy.get('input[id="password"]').type('12121233');
        cy.get('input[id="password-confirmation"]').type('12121233');
        cy.get('input[type="checkbox"]').uncheck();
        cy.get('button[type="submit"]').click();
    });

    it("register with valid data", () => {
        cy.get('input[id="first-name"]').type('Nenad');
        cy.get('input[id="last-name"]').type('Damjanovic');
        cy.get('input[id="email"]').type('abcd'+Math.floor(Math.random()*10000000000)+'@123.com');
        cy.get('input[id="password"]').type('12121212');
        cy.get('input[id="password-confirmation"]').type('12121212');
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
    });

     it("register with all digits in first-name", () => {
        cy.get('input[id="first-name"]').type(Math.floor(Math.random()*10000000000));
        cy.get('input[id="last-name"]').type('Damjanovic');
        cy.get('input[id="email"]').type('abcd'+Math.floor(Math.random()*10000000000)+'@123.com');
        cy.get('input[id="password"]').type('12121233');
        cy.get('input[id="password-confirmation"]').type('12121233');
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
    });

    it("register with all digits in last-name", () => {
        cy.get('input[id="first-name"]').type('Nenad');
        cy.get('input[id="last-name"]').type(Math.floor(Math.random()*10000000000));
        cy.get('input[id="email"]').type('abcd'+Math.floor(Math.random()*10000000000)+'@123.com');
        cy.get('input[id="password"]').type('12121233');
        cy.get('input[id="password-confirmation"]').type('12121233');
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
    });
    
    it("register with email containing only digits", () => {
        cy.get('input[id="first-name"]').type('Nenad');
        cy.get('input[id="last-name"]').type('Damjanovic');
        cy.get('input[id="email"]').type('123'+Math.floor(Math.random()*10000000000)+'@123.com');
        cy.get('input[id="password"]').type('12121233');
        cy.get('input[id="password-confirmation"]').type('12121233');
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
    });
    
        it("register with 255 char in first-name", () => {
        cy.get('input[id="first-name"]').type('Lorem ipsum dolor sit amet consectetur adipiscing elit. Duis ullamcorper arcu ultrices nisi commodo, non rhoncus est consequat. Quisque luctus feugiat bibendum. Curabitur risus libero, finibus at odio id, tempor porttitor felis. Integer lacinia libero ac.');
        cy.get('input[id="last-name"]').type('Damjanovic');
        cy.get('input[id="email"]').type('abcd'+Math.floor(Math.random()*10000000000)+'@123.com');
        cy.get('input[id="password"]').type('12121233');
        cy.get('input[id="password-confirmation"]').type('12121233');
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
    });
    
      it("register with 255 char in last-name", () => {
        cy.get('input[id="first-name"]').type('Nenad');
        cy.get('input[id="last-name"]').type('Lorem ipsum dolor sit amet consectetur adipiscing elit. Duis ullamcorper arcu ultrices nisi commodo, non rhoncus est consequat. Quisque luctus feugiat bibendum. Curabitur risus libero, finibus at odio id, tempor porttitor felis. Integer lacinia libero ac.');
        cy.get('input[id="email"]').type('abcd'+Math.floor(Math.random()*10000000000)+'@123.com');
        cy.get('input[id="password"]').type('12121233');
        cy.get('input[id="password-confirmation"]').type('12121233');
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
    });
    
        it("register with email containing '.abc'", () => {
        cy.get('input[id="first-name"]').type('Nenad');
        cy.get('input[id="last-name"]').type('Damjanovic');
        cy.get('input[id="email"]').type('abcd'+Math.floor(Math.random()*10000000000)+'@123.abc');
        cy.get('input[id="password"]').type('12121233');
        cy.get('input[id="password-confirmation"]').type('12121233');
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
    });

       it("register with email containing only one digit before '@'", () => {
        cy.get('input[id="first-name"]').type('Nenad');
        cy.get('input[id="last-name"]').type('Damjanovic');
        cy.get('input[id="email"]').type('9@123.com');
        cy.get('input[id="password"]').type('12121233');
        cy.get('input[id="password-confirmation"]').type('12121233');
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
    });

        it("register with email containing only one letter before '@'", () => {
        cy.get('input[id="first-name"]').type('Nenad');
        cy.get('input[id="last-name"]').type('Damjanovic');
        cy.get('input[id="email"]').type('w@123.com');
        cy.get('input[id="password"]').type('12121233');
        cy.get('input[id="password-confirmation"]').type('12121233');
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
    });

      it("register with all upercase letters in email", () => {
        cy.get('input[id="first-name"]').type('Nenad');
        cy.get('input[id="last-name"]').type('Damjanovic');
        cy.get('input[id="email"]').type('ABCD'+Math.floor(Math.random()*10000000000)+'@ABC.COM');
        cy.get('input[id="password"]').type('12121233');
        cy.get('input[id="password-confirmation"]').type('12121233');
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
    });
    
    it("register with 8 digit password", () => {
        cy.get('input[id="first-name"]').type('Nenad');
        cy.get('input[id="last-name"]').type('Damjanovic');
        cy.get('input[id="email"]').type('abcd'+Math.floor(Math.random()*10000000000)+'@123.com');
        cy.get('input[id="password"]').type('12341234');
        cy.get('input[id="password-confirmation"]').type('12341234');
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
    });

    it("register with mix digit + letters password", () => {
        cy.get('input[id="first-name"]').type('Nenad');
        cy.get('input[id="last-name"]').type('Damjanovic');
        cy.get('input[id="email"]').type('abcd'+Math.floor(Math.random()*10000000000)+'@123.com');
        cy.get('input[id="password"]').type('abcd1234');
        cy.get('input[id="password-confirmation"]').type('abcd1234');
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
    });

    it("register with 7 letter  + 1 digit password", () => {
        cy.get('input[id="first-name"]').type('Nenad');
        cy.get('input[id="last-name"]').type('Damjanovic');
        cy.get('input[id="email"]').type('abcd'+Math.floor(Math.random()*10000000000)+'@123.com');
        cy.get('input[id="password"]').type('abcdabc1');
        cy.get('input[id="password-confirmation"]').type('abcdabc1');
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
    });   
});
