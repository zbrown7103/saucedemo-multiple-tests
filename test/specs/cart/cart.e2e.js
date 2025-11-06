import cartPage from "../../pageobjects/cart.page";
import loginPage from "../../pageobjects/login.page";

describe("Cart Page", () => {
  before(async () => {
    await loginPage.login();
  });

  it("should handle backpack cart workflow correctly", async () => {
    await cartPage.run();
  });
});
