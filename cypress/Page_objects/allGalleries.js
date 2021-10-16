export default class AllGalleriesPage {
    get mainTitleField(){
        return cy.get('h1[class="title-style"]');
    }
  
    get searchInputField(){
        return cy.get('input[type="text"]');
    }
  
    get filterButton(){
        return cy.get('.btn.btn-outline-secondary.input-button');
    } 
  
    get loadMoreButton(){
        return cy.get('button[class="btn btn-custom"]');
    }

    get galleryDivClass(){
        return cy.get('.cell');
    }
  }

  export const allGalleriesPage = new AllGalleriesPage();