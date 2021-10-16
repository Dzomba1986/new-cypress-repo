export default class CreateGalleryPage{
    get loginButton(){
        return cy.get("a[href='/login']");
    }

    get emailInput() {
        return cy.get('#email');
    }

    get passwordInput(){
        return cy.get('#password');
    }

    get loginSubmitButton(){
        return cy.get('button[type="submit"]');
    }

    get createGalleryButton(){
        return cy.get('a[href="/create"]');
    }

    get titleInput(){
        return cy.get('#title');
    }

    get descriptionInput(){
        return cy.get('#description');
    }

    get imageInput() {
        return cy.get('input[type="url"]');
    }

    get secondImage(){
        return cy.get('input[class="form-control"]').eq(3);
    }

    get addImageButton(){
        return cy.get('form > :nth-child(3) > :nth-child(3)');
    }

    get createGallerySubmitButton(){
        return cy.get('button[class="btn btn-custom"]').eq(0);
    }

    get logoutButton(){
        return cy.get('a[role="button "]');
    }

    get titleErrorMessage(){
        return cy.get('.alert');
    }

    login (email, password){
        this.loginButton.click();
        this.emailInput.type(email);
        this.passwordInput.type(password);
        this.loginSubmitButton.click();
    }

    create (title, description, image){
        this.createGalleryButton.click();
        this.titleInput.type(title);
        this.descriptionInput.type(description);
        this.imageInput.type(image);
        
    }

    addSecondImage (title, description, image2){
        this.addImageButton.click();
        this.secondImage.type(image2);
        this.createGallerySubmitButton.click();
    }

    submitGallery () {
        this.createGallerySubmitButton.click();
    }
}

export const createGalleryPage = new CreateGalleryPage();