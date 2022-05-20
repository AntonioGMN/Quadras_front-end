import { faker } from "@faker-js/faker";

describe('test sign-up and login', () => {
  const userDate = {
    email: faker.internet.email(),
    name: faker.name.findName(),
    password: faker.internet.password(),
  }

  it('test sign-up and login', async () => {
    cy.visit('http://localhost:3000/cadastro');

    cy.get('input[placeholder="Entre com um email"]').type(userDate.email);
    cy.get('input[placeholder="Escolha seu nickname"]').type(userDate.name);
    cy.get('input[placeholder="Escolha sua senha"]').type(userDate.password);
    cy.get('input[placeholder="Confirme sua senha"]').type(userDate.password);

    cy.intercept("post", '/signUp').as("signUp");
    cy.get('div button').click();
    cy.wait("@signUp");
    cy.url().should("eq", "http://localhost:3000/login");

    cy.get('input[placeholder="Entre com seu email"]').type(userDate.email);
    cy.get('input[placeholder="Entre com sua senha"]').type(userDate.password);

    cy.intercept("post", '/login').as("login");
    cy.get('div button').click();
    cy.wait("@login");
    cy.url().should("eq", "http://localhost:3000/");
  })
})