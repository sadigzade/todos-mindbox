describe("Todos is available", () => {
  beforeEach(function () {
    cy.visit("/");
  });

  it("should viewing the work of the project", function () {
    cy.get('[id="input-record"]').as("input-record");
    cy.get('[id="form"]').as("form");

    cy.get("@input-record").click();
    cy.get("@input-record").type("React is power");
    cy.get("@form").submit();

    cy.get('[id="check"]').as("check");

    cy.get("@check").click();

    cy.get("@input-record").click();
    cy.get("@input-record").type("Typescript is strong");
    cy.get("@form").submit();

    cy.get("@input-record").click();
    cy.get("@input-record").type("HTML and CSS are forever");
    cy.get("@form").submit();

    cy.wait(1000).get('[id="ACTIVE"]').click();
    cy.wait(1000).get('[id="COMPLETED"]').click();
    cy.wait(1000).get('[id="ALL"]').click();

    cy.wait(1000).get('[id="clear"]').click();
  });
});
