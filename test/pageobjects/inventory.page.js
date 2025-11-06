class InventoryPage {
  // ---------- ELEMENT GETTERS ---------- //
  get appLogo() {
    return $(".app_logo");
  }

  get btnAddBackpackToCart() {
    return $('[data-test="add-to-cart-sauce-labs-backpack"]');
  }

  get shoppingCartBadge() {
    return $('[data-test="shopping-cart-badge"]');
  }

  get shoppingCartIconLink() {
    return $('[data-test="shopping-cart-link"]');
  }

  // ---------- METHODS ---------- //
  async verifyShoppingCartBadgeNumber(expectedNumber) {
    const badgeText = await this.shoppingCartBadge.getText();
    expect(badgeText).toBe(expectedNumber);
  }
}

export default new InventoryPage();
