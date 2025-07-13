import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que acesso a página de login", () => {
  cy.allure().step("Acessando a página de login");
  cy.visit("https://opensource-demo.orangehrmlive.com/");
});

When("preencho o usuário {string} e a senha {string}", (usuario, senha) => {
  cy.allure().step(`Preenchendo usuário: ${usuario}`);
  cy.get('input[name="username"]').type(usuario);
  cy.get('input[name="password"]').type(senha);
});

When("clico no botão de login", () => {
  cy.allure().step("Clicando no botão de login");
  cy.get('button[type="submit"]').click();
});

Then("devo visualizar tela de {string}", (dashboard) => {
  cy.allure().step(`Verificando tela: ${dashboard}`);
  cy.contains(dashboard).should("be.visible");
});

Then("devo ver a mensagem {string}", (mensagem) => {
  cy.allure().step(`Verificando mensagem: ${mensagem}`);
  cy.contains(mensagem).should("be.visible");
});

