import cartPage from "../../pageobjects/cart.page";
import checkoutStep1Page from "../../pageobjects/checkout-step-1.page";
import inventoryPage from "../../pageobjects/inventory.page";
import { expect, browser } from "@wdio/globals";

class CartPage {
  // ---------- ELEMENT GETTERS ---------- //
  get cartItems() {
    return $$(".cart_item");
  }

  get inventoryItemName() {
    return $('[data-test="inventory-item-name"]');
  }

  get inventoryItemDesc() {
    return $('[data-test="inventory-item-desc"]');
  }

  get inventoryItemPrice() {
    return $('[data-test="inventory-item-price"]');
  }

  get btnCheckout() {
    return $('[data-test="checkout"]');
  }

  get btnContinueShopping() {
    return $('[data-test="continue-shopping"]');
  }

  get btnRemoveBackpack() {
    return $('[data-test="remove-sauce-labs-backpack"]');
  }

  // ---------- METHODS ---------- //
  async run() {
    await inventoryPage.btnAddBackpackToCart.click();
    await inventoryPage.verifyShoppingCartBadgeNumber("1");
    await inventoryPage.shoppingCartIconLink.click();

    await expect(cartPage.cartItems).toBeElementsArrayOfSize(1);
    await expect(cartPage.inventoryItemName).toHaveText("Sauce Labs Backpack");
    await expect(cartPage.inventoryItemDesc).toHaveText(
      "carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.",
    );
    await expect(cartPage.inventoryItemPrice).toHaveText("$29.99");

    await cartPage.btnCheckout.click();
    await expect(browser).toHaveUrl(
      "https://www.saucedemo.com/checkout-step-one.html",
    );

    await checkoutStep1Page.cancelButton.click();
    await expect(browser).toHaveUrl("https://www.saucedemo.com/cart.html");

    await cartPage.btnRemoveBackpack.click();
    await expect(cartPage.cartItems).toBeElementsArrayOfSize(0);
    await expect(inventoryPage.shoppingCartBadge).not.toExist();

    await cartPage.btnContinueShopping.click();
    await expect(browser).toHaveUrl("https://www.saucedemo.com/inventory.html");
  }
}

export default new CartPage();
