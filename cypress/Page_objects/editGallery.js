export default class EditGallery{

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

    get thirdImage(){
        return cy.get('input[class="form-control"]').eq(4);
    }

    get addImageButton(){
        return cy.contains('Add image');
    }

    get createGallerySubmitButton(){
        return cy.get('button[class="btn btn-custom"]').eq(0);
    }

    get titleErrorMessage(){
        return cy.get('.alert');
    }

    get editGalleryButton(){
        return cy.get('a[type="button"]');
    }

    get trashImg1Button(){
        return cy.get('i[class="fas fa-trash"]').first();
    }

    get trashImg2Button(){
        return cy.get('i[class="fas fa-trash"]').eq(1);
    }
    
    get trashImg3Button(){
        return cy.get('i[class="fas fa-trash"]').eq(2);
    }

    get img1arrowUpButton(){
        return cy.get('i[class="fas fa-chevron-circle-up"]').first();
    }

    get img1arrowDownButton(){
        return cy.get('i[class="fas fa-chevron-circle-down"]').first();
    }

    get img2arrowUpButton(){
        return cy.get('i[class="fas fa-chevron-circle-up"]').eq(1);
    }

    get img2arrowDownButton(){
        return cy.get('i[class="fas fa-chevron-circle-down"]').eq(1);
    }

    get img3arrowUpButton(){
        return cy.get('i[class="fas fa-chevron-circle-up"]').last();
    }

    get img3arrowDownButton(){
        return cy.get('i[class="fas fa-chevron-circle-down"]').last(1);
    }

    get galleryTitleField(){
        return cy.get('.box-title').first(); 
     }

    get imgField(){
        return cy.get('img[class="d-block img-fluid w-100"]');
    } 

    get titleInput(){
        return cy.get('#title');
    }

    titleChange(title){
        this.titleInput.type(title);
    }

    addThirdImage (image3) {
        this.addImageButton.click();
        this.thirdImage.type(image3);
    }

    submitGallery () {
        this.createGallerySubmitButton.click();
    }
}

export const editGallery = new EditGallery();