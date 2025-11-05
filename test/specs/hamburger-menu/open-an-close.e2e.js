// import { expect } from '@wdio/globals'
// import LoginPage from '../pageobjects/login.page.js'
// import SecurePage from '../pageobjects/secure.page.js'

import menuComponent from "../../componentobjects/menu.component"
import inventoryPage from "../../pageobjects/inventory.page"
import loginPage from "../../pageobjects/login.page"
import { $, browser } from '@wdio/globals'

// describe('My Login application', () => {
//     it('should login with valid credentials', async () => {
//         await LoginPage.open()

//         await LoginPage.login('tomsmith', 'SuperSecretPassword!')
//         await expect(SecurePage.flashAlert).toBeExisting()
//         await expect(SecurePage.flashAlert).toHaveText(
//             expect.stringContaining('You logged into a secure area!'))
//     })
// })

describe('Open and Close the Hamburger Menu', () => {
    it('should open and close as expected', async () => {
        await loginPage.login()
        await inventoryPage.openMenu()
        await menuComponent.verifyIsOpen()
        await browser.pause(5000)
    })
})