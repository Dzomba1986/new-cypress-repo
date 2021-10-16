export default class DeleteGalleryPage {
    get deleteGalleryButton(){
        return cy.get('.btn.btn-custom').first();
    }
    
    get galleryDivClass(){
        return cy.get('.cell');
    }

    get galleryTitleField(){
       return cy.get('.box-title').first(); 
    }
}

  export const deleteGalleryPage = new DeleteGalleryPage();