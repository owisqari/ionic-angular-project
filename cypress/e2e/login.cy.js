describe("Login Test", () => {
  it("should log in successfully with valid credentials", () => {
    cy.visit("/auth");
    cy.get('input[name="email"]').type("testuser");
    cy.get('input[name="password"]').type("password123");
    cy.get('button[type="submit"]').click();
    cy.url().should("include", "/dashboard");
  });
});
