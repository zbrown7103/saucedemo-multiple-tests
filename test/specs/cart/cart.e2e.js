import menuComponent from "../../componentobjects/menu.component";
import cartPage from "../../pageobjects/cart.page";
import checkoutStep1Page from "../../pageobjects/checkout-step-1.page";
import inventoryPage from "../../pageobjects/inventory.page";
import loginPage from "../../pageobjects/login.page";
import { expect, browser } from "@wdio/globals";

describe("Cart Page", () => {
  before(async () => {
    await loginPage.login();
  });

  it("should handle backpack cart workflow correctly", async () => {
    await cartPage.run();
  });
});
