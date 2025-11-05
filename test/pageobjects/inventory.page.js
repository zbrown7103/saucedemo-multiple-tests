class InventoryPage {
    // ---------- ELEMENT GETTTERS ---------- //
    get appLogo() {
        return $('.app_logo')
    }

    get btnHamburgerMenu() {
        return $('#react-burger-menu-btn')
    }

    // ---------- METHODS ---------- //
    async openMenu() {
        await this.btnHamburgerMenu.click()
    }
}

export default new InventoryPage();