/// <reference types="Cypress" />

describe("Validar adição de produtos ao carrinho", () => {

    it("Deve fazer uma pesquisa no filtro", () => {
        cy.visit('https://www.amazon.com.br/'); 

        cy.get('#twotabsearchtextbox').click();
        cy.get('#twotabsearchtextbox').type("Mochila de carrinho infantil menina")
        cy.get('#nav-search-submit-button').click();
        cy.get('.s-no-outline > .a-size-medium-plus').should('contain', "RESULTADOS")
    });

    it("Deve selecionar um produto e adiciona-lo ao carrinho", () => {
        cy.visit('https://www.amazon.com.br/s?k=mochila+de+carrinho+infantil+menina&crid=2PW6SMHF7NTR2&sprefix=%2Caps%2C1279&ref=nb_sb_ss_recent_3_0_recent');
        cy.get('[data-asin="B0BQ19F2DB"] > .sg-col-inner > .s-widget-container > .s-card-container > .a-spacing-base > .a-spacing-small > .s-title-instructions-style > .a-size-mini > .a-link-normal > .a-size-base-plus').click();
        cy.get('#title').should('contain', "Mochila com Rodinhas 16 Frozen R 10610 - Xeryus 2023")
        cy.get('#add-to-cart-button').click();
        cy.get('.a-size-medium-plus').should('contain', "Adicionado ao carrinho")
    });
    });

describe("Teste para calcular valor de todos produtos do carrinho", () =>{
        function soma(param1, param2, param3) {
        let result = param1 + param2 + param3;
        return result;
        }
   
 it("Deve conter 3 itens no carrinho", () => {
       cy.visit('https://www.amazon.com.br/');
       cy.get('#twotabsearchtextbox').type("caderno frozen");
       cy.get('#nav-search-submit-button').click();
       cy.get('.s-no-outline > .a-size-medium-plus').should('contain', "RESULTADOS");
       cy.get('[data-asin="B078NHBFR5"] > .sg-col-inner > .s-widget-container > .s-card-container > .a-spacing-base > .a-spacing-small > .s-title-instructions-style > .a-size-mini > .a-link-normal > .a-size-base-plus').click();
       cy.get('#productTitle').should('contain', ' Caderno Brochura Frozen 1/4 40 Folhas Capa Dura Jandaia Ref: 59722')
       cy.get('#a-autoid-7 > .a-button-inner > .a-button-input').click();
       cy.get('#sw-gtc > .a-button-inner > .a-button-text').click();
       cy.get('h1').should('contain', 'Carrinho de compras')
   });
   
       it("Calculo do valor total no carrinho", () => {
       expect(soma(13.10, 5.99, 11.20)).to.be.below(100)
   });
   });
