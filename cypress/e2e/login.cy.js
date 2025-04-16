describe("Login Tests", () => {
  before(() => {
    cy.fixture("users").as("users");
  });

  it("should log in all users", function () {
    this.users.forEach((user) => {
      cy.visit("/auth");

      cy.get('input[name="email"]').clear().type(user.email);
      cy.get('input[name="password"]').clear().type(user.password);

      cy.contains("ion-button", "Login").click();
      // Optional logout step if needed before next test
    });
  });
});
