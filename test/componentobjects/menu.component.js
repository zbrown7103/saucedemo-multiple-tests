class MenuComponent {
    // ---------- ELEMENT GETTTERS ---------- //
    get elementMenu() {
        return $('.bm-menu-wrap')
    }

    get btnClose() {
        return $('#react-burger-cross-btn')
    }

    // ---------- METHODS ---------- //
    async verifyIsOpen() {
        return expect(this.elementMenu).toHaveAttribute("aria-hidden", 'false')
    }

    async close() {
        return this.btnClose
    }
}

export default new MenuComponent()