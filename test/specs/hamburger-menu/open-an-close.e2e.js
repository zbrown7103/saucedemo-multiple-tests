import menuComponent from "../../componentobjects/menu.component";
import loginPage from "../../pageobjects/login.page";

describe("Open and Close the Hamburger Menu", () => {
  beforeEach(async () => {
    await loginPage.login();
  });

  it("should open and close using the button", async () => {
    await menuComponent.openMenu();
    await menuComponent.closeMenu();
  });

  it("should open and close using the ESC key", async () => {
    await menuComponent.openMenu();
    await menuComponent.closeMenu(true);
  });
});
