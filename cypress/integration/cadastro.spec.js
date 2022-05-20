import { faker } from "@faker-js/faker";

describe("test sign-up and login", () => {
  const userDate = {
    email: faker.internet.email(),
    name: faker.name.findName(),
    password: faker.internet.password(),
  };
  const data = "2022-12-22";
  const local =
    "Midway Mall - Av. Nevaldo Rocha, 3775 - Tirol, Natal - RN, Brasil";

  it("test sign-up and login", async () => {
    cy.visit("http://localhost:3000/cadastro");

    cy.get('input[placeholder="Entre com um email"]').type(userDate.email);
    cy.get('input[placeholder="Escolha seu nickname"]').type(userDate.name);
    cy.get('input[placeholder="Escolha sua senha"]').type(userDate.password);
    cy.get('input[placeholder="Confirme sua senha"]').type(userDate.password);

    cy.intercept("post", "/signUp").as("signUp");
    cy.get("div button").click();
    cy.wait("@signUp");
    cy.url().should("eq", "http://localhost:3000/login");

    cy.get('input[placeholder="Entre com seu email"]').type(userDate.email);
    cy.get('input[placeholder="Entre com sua senha"]').type(userDate.password);

    cy.intercept("post", "/login").as("login");
    cy.get("div button").click();
    cy.wait("@login");
    cy.url().should("eq", "http://localhost:3000/");

    cy.get("main button").click();
    cy.url().should("eq", "http://localhost:3000/NewGame");

    cy.get('input[name="name"]').type("Peladinha Massa");
    cy.get('input[name="date"]').type(data);
    cy.get('input[name="inicio"]').type("15:00");
    cy.get('input[name="termino"]').type("18:00");
    cy.get('input[name="local"]').type(local);

    cy.intercept("post", "/meeting").as("create");
    cy.get("form button").last().click();
    cy.wait("@create");
    cy.url().should("eq", "http://localhost:3000/");
  });
});
