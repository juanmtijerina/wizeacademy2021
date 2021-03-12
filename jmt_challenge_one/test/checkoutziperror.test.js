import LoginPage from '../pages/LoginPage'
import ProductsPage from '../pages/ProductsPage'
import CartPage from '../pages/CartPage'
import CheckoutPage from '../pages/CheckoutPage'
import { CREDENTIALS, USERINFO } from '../data/Constants'


fixture('Login feature test')
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
        .click(ProductsPage.selectButtonItem1)
        .click(ProductsPage.shoppingCart)
        .click(CartPage.checkoutButton)
        .typeText(CheckoutPage.userFirstName, USERINFO.DELIVERYINFO.FIRSTNAME)
        .typeText(CheckoutPage.userLastName, USERINFO.DELIVERYINFO.LASTNAME)
        .click(CheckoutPage.continueButton) 
    
        await t.expect(CheckoutPage.zipErrorMsg.textContent).contains(USERINFO.DELIVERYINFO.ZIPERROR);
})