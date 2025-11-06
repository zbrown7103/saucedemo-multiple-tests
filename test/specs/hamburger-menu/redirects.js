import menuComponent from "../../componentobjects/menu.component";
import loginPage from "../../pageobjects/login.page";

beforeEach(async () => {
  await browser.reloadSession();
});

describe("Hamburger Menu Redirects", () => {
  beforeEach(async () => {
    await loginPage.login();
  });

  it("should redirect to inventory when 'All Items' is clicked", async () => {
    await menuComponent.verifyAllItemsRedirect();
  });

  it("should redirect to About page when 'About' is clicked", async () => {
    await menuComponent.verifyAboutRedirect();
  });

  it("should logout and redirect when 'Logout' is clicked", async () => {
    await menuComponent.verifyLogoutRedirect();
  });

  it("should reset app state when 'Reset App State' is clicked", async () => {
    await menuComponent.verifyResetAppStateClick();
  });
});
