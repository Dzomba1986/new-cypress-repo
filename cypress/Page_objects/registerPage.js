
export default class RegisterPage{
    //////GETERI//////
        get registerButton(){
            return cy.get("a[href='/register']");
        }
    
        get firstNameInput(){
            return cy.get('#first-name');
        }
    
        get lastNameInput(){
            return cy.get('#last-name');
        }
    
        get emailInput() {
            return cy.get('#email');
        }
    
        get passwordInput(){
            return cy.get('#password');
        }
    
        get confirmationPasswordInput(){
            return cy.get('#password-confirmation');
        }
    
        get checboxInput(){
            return cy.get('input[type="checkbox"]');
        }
    
        get submitButton(){
            return cy.get('button[type="submit"]');
        }
    
        get allGalleriesButton(){
            return cy.get("a[href='/']").eq(1);
        }
    
        get myGalleryButton(){
            return cy.get("a[href='/my-galleries']");
        }
    
        get createGalleryButton(){
            return cy.get("a[href='/create']");
        }
    
        get logoutButton(){
            return cy.get("a[role='button ']");
        }
    
        get emailErrorMessage(){
            return cy.get('p[class="alert alert-danger"]').first();
        }
    
        get passwordErrorMessage(){
            return cy.get('.alert');
        }
    
        get checkboxErrorMessage(){
            return cy.contains('The terms and conditions must be accepted.');
        }
    
        get mainTitle(){
            return cy.get('.title-style');
        }
    ///SETERI///
        getInputField(id){
            return cy.get(`#${id}`);
        }
    
    register (firstName, lastName, email, password){
        this.registerButton.click();
        this.firstNameInput.type(firstName);
        this.lastNameInput.type(lastName);
        this.emailInput.type(email);
        this.passwordInput.type(password);
        }
    
    passwordConfirmation (confirmedPassword){
        this.confirmationPasswordInput.type(confirmedPassword);
    }
    
    checkbox(){
        this.checboxInput.check();
    }
    
    submitRegister (){
        this.submitButton.click();
        }    
    }
    
    export const registerPage = new RegisterPage();