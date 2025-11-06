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
}

export default new CartPage();
