import { expect, browser } from "@wdio/globals";
import inventoryPage from "./inventory.page";
import checkoutStep1Page from "./checkout-step-1.page";

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

    await expect(this.cartItems).toBeElementsArrayOfSize(1);
    await expect(this.inventoryItemName).toHaveText("Sauce Labs Backpack");
    await expect(this.inventoryItemDesc).toHaveText(
      "carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.",
    );
    await expect(this.inventoryItemPrice).toHaveText("$29.99");

    await this.btnCheckout.click();
    await expect(browser).toHaveUrl(
      "https://www.saucedemo.com/checkout-step-one.html",
    );

    await checkoutStep1Page.cancelButton.click();
    await expect(browser).toHaveUrl("https://www.saucedemo.com/cart.html");

    await this.btnRemoveBackpack.click();
    await expect(this.cartItems).toBeElementsArrayOfSize(0);
    await expect(inventoryPage.shoppingCartBadge).not.toExist();

    await this.btnContinueShopping.click();
    await expect(browser).toHaveUrl("https://www.saucedemo.com/inventory.html");
  }
}

export default new CartPage();
