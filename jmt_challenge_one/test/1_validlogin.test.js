import LoginPage from '../pages/LoginPage'
import ProductsPage from '../pages/ProductsPage'
import { CREDENTIALS } from '../data/Constants'


fixture('Valid login feature test')
    .page `https://www.saucedemo.com/`
    .beforeEach(async t => {
        await t.click(LoginPage.loginButton)
})

test('Users can login using valid credentials', async t => {
    await t
        .maximizeWindow()
        .typeText(LoginPage.userName, CREDENTIALS.VALID_USER.USERNAME)
        .typeText(LoginPage.userPass, CREDENTIALS.VALID_USER.PASSWORD) 
        .click(LoginPage.loginButton)
    
        await t.expect(ProductsPage.productPageTitle.exists).ok()

})