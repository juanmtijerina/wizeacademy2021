import LoginPage from '../pages/LoginPage'
import ProductsPage from '../pages/ProductsPage'
import { CREDENTIALS } from '../data/Constants'


fixture('Logout feature test')
    .page `https://www.saucedemo.com/`
    .beforeEach(async t => {
        await t.click(LoginPage.loginButton)
})

test('Users can logout form the sytem', async t => {
    await t
        .maximizeWindow()
        .typeText(LoginPage.userName, CREDENTIALS.VALID_USER.USERNAME)
        .typeText(LoginPage.userPass, CREDENTIALS.VALID_USER.PASSWORD) 
        .click(LoginPage.loginButton)
        .click(ProductsPage.hambuerguerMenu)
        .click(ProductsPage.logoutLink)
    
        await t.expect(LoginPage.loginLogo.exists).ok()

})