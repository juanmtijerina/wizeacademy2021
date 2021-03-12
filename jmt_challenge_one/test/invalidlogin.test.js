import LoginPage from '../pages/LoginPage'
import ProductsPage from '../pages/ProductsPage'
import { CREDENTIALS } from '../data/Constants'


fixture('Invalid login feature test')
    .page `https://www.saucedemo.com/`
    .beforeEach(async t => {
        await t.click(LoginPage.loginButton)
})

test('Users can not login using invalid credentials', async t => {
    await t
        .maximizeWindow()
        .typeText(LoginPage.userName, CREDENTIALS.INVALID_USER.USERNAME)
        .typeText(LoginPage.userPass, CREDENTIALS.INVALID_USER.PASSWORD) 
        .click(LoginPage.loginButton)
    
        await t.expect(LoginPage.errorMessage.exists).ok()

})