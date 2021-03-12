import LoginPage from '../pages/LoginPage'
import ProductsPage from '../pages/ProductsPage'
import CartPage from '../pages/CartPage'
import CheckoutPage from '../pages/CheckoutPage'
import OverviewPage from '../pages/OverviewPage'
import { CREDENTIALS, USERINFO } from '../data/Constants'


fixture('Reach the checkout test')
    .page `https://www.saucedemo.com/`
    .beforeEach(async t => {
        await t.click(LoginPage.loginButton)
})

test('Users can reach the checkout overview page', async t => {
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
        .typeText(CheckoutPage.userZipCode, USERINFO.DELIVERYINFO.ZIPCODE)
        .click(CheckoutPage.continueButton) 
    
        await t.expect(OverviewPage.overviewPageTitle.textContent).contains(USERINFO.DELIVERYINFO.CHECKOUTM);
})