import menuComponent from "../../componentobjects/menu.component";
import loginPage from "../../pageobjects/login.page";

describe("Hamburger Menu Hover Effect", () => {
  before(async () => {
    await loginPage.login();
  });

  it("should display hover effect on menu item hover", async () => {
    await menuComponent.verifyHoverEffect();
  });
});
