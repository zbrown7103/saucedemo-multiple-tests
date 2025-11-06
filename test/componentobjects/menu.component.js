import { $, browser, expect } from "@wdio/globals";
import inventoryPage from "../pageobjects/inventory.page";

class MenuComponent {
  // ---------- ELEMENT GETTERS ---------- //
  get elementMenu() {
    return $(".bm-menu-wrap");
  }
  get btnClose() {
    return $("#react-burger-cross-btn");
  }
  get btnHamburgerMenu() {
    return $("#react-burger-menu-btn");
  }
  get btnAllItems() {
    return $('[data-test="inventory-sidebar-link"]');
  }
  get btnAbout() {
    return $('[data-test="about-sidebar-link"]');
  }
  get btnLogout() {
    return $('[data-test="logout-sidebar-link"]');
  }
  get btnResetAppState() {
    return $('[data-test="reset-sidebar-link"]');
  }

  // ---------- METHODS ---------- //
  async openMenu() {
    await this.btnHamburgerMenu.click();
    await expect(this.elementMenu).toHaveAttribute("aria-hidden", "false");
  }

  async closeMenu(useEsc = false) {
    useEsc ? await browser.keys("Escape") : await this.btnClose.click();
    await expect(this.elementMenu).toHaveAttribute("aria-hidden", "true");
  }

  async verifyHoverEffect() {
    await this.openMenu();
    await this.btnAllItems.moveTo();
    await browser.waitUntil(
      async () =>
        (await this.btnAllItems.getCSSProperty("color")).parsed.hex ===
        "#3ddc91",
      { timeout: 5000, timeoutMsg: "Hover color did not change in time" },
    );
    const color = await this.btnAllItems.getCSSProperty("color");
    expect(color.parsed.hex).toBe("#3ddc91");
  }

  async verifyAllItemsRedirect() {
    await this.openMenu();
    await this.btnAllItems.click();
    await expect(browser).toHaveUrl("https://www.saucedemo.com/inventory.html");
  }

  async verifyAboutRedirect() {
    await this.openMenu();
    await this.btnAbout.click();
    await expect(browser).toHaveUrl("https://saucelabs.com/", { wait: false });
  }

  async verifyLogoutRedirect() {
    await this.openMenu();
    await this.btnLogout.click();
    await expect(browser).toHaveUrl("https://www.saucedemo.com/");
  }

  async verifyResetAppStateClick() {
    await inventoryPage.btnAddBackpackToCart.click();
    await inventoryPage.verifyShoppingCartBadgeNumber("1");
    await this.openMenu();
    await this.btnResetAppState.click();
    await this.closeMenu();
    await expect(inventoryPage.shoppingCartBadge).not.toExist();
  }
}

export default new MenuComponent();
