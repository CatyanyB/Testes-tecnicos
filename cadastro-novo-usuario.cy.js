/// <reference types="Cypress" />

const faker = require('faker-br');

describe("Teste de cadastro de novo usuário", () => {
  it("Deve criar cadastro de novo usuário com sucesso", () => {
    cy.visit('https://www.amazon.com.br/');
    cy.get('#nav-link-accountList > .nav-line-2 > .nav-icon').click();
    cy.get('#createAccountSubmit').click();
    cy.get(':nth-child(1) > .a-spacing-small').should('contain', "Criar conta");
    cy.get('#ap_customer_name').type(faker.name.findName());
    cy.get('#ap_email').type(faker.internet.email());
    cy.get('#ap_password').type("umasenhasegura123");
    cy.get('#ap_password_check').type("umasenhasegura123");
    cy.get('#legalTextRow').should('contain', "Ao criar uma conta, você concorda com as Condições de Uso da Amazon. Por favor verifique a Notificação de Privacidade, Notificação de Cookies e a Notificação de Anúncios Baseados em Interesse.")
  });
});
