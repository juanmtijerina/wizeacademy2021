import LoginPage from '../pages/LoginPage'
import ProductsPage from '../pages/ProductsPage'
import CartPage from '../pages/CartPage'
import CheckoutPage from '../pages/CheckoutPage'
import OverviewPage from '../pages/OverviewPage'
import FinishPage from '../pages/FinishPage'
import { CREDENTIALS, USERINFO, PRODUCTS } from '../data/Constants'


fixture('Final Test - Thanks for your order')
    .page `https://www.saucedemo.com/`
    .beforeEach(async t => {
        await t.click(LoginPage.loginButton)
})

test('Users can check the items in the checkout overview', async t => {
    await t
        .maximizeWindow()
        .typeText(LoginPage.userName, CREDENTIALS.VALID_USER.USERNAME)
        .typeText(LoginPage.userPass, CREDENTIALS.VALID_USER.PASSWORD) 
        .click(LoginPage.loginButton)
        .click(ProductsPage.selectButtonItem1)
        .click(ProductsPage.selectButtonItem2)
        .click(ProductsPage.shoppingCart)
        .click(CartPage.checkoutButton)
        .typeText(CheckoutPage.userFirstName, USERINFO.DELIVERYINFO.FIRSTNAME)
        .typeText(CheckoutPage.userLastName, USERINFO.DELIVERYINFO.LASTNAME)
        .typeText(CheckoutPage.userZipCode, USERINFO.DELIVERYINFO.ZIPCODE)
        .click(CheckoutPage.continueButton)
        .click(OverviewPage.overviewFinishButton) 
    
        await t.expect(FinishPage.finishPageThanks.textContent).contains('THANK YOU FOR YOUR ORDER');
})