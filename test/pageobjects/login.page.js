import { $, browser } from '@wdio/globals'
import inventoryPage from './inventory.page'

class LoginPage {
    // ---------- ELEMENT GETTTERS ---------- //
    get inputUsername() {
        return $('#user-name')
    }

    get inputPassword() {
        return $('#password')
    }

    get btnSubmit() {
        return $('input[type="submit"]')
    }

    // ---------- METHODS ---------- //
    open() {
        return browser.url('https://www.saucedemo.com/inventory.html')
    }

    async login(username = 'standard_user', password = 'secret_sauce') {
        this.open()
        await this.inputUsername.setValue(username)
        await this.inputPassword.setValue(password)
        await this.btnSubmit.click()
        await expect(inventoryPage.appLogo).toBeExisting()
    }
}

export default new LoginPage();
