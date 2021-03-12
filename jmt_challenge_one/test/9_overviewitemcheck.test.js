import LoginPage from '../pages/LoginPage'
import ProductsPage from '../pages/ProductsPage'
import CartPage from '../pages/CartPage'
import CheckoutPage from '../pages/CheckoutPage'
import OverviewPage from '../pages/OverviewPage'
import { CREDENTIALS, USERINFO, PRODUCTS } from '../data/Constants'


fixture('Check items in overview test')
    .page `https://www.saucedemo.com/`
    .beforeEach(async t => {
        await t.click(LoginPage.loginButton)
})

test('Users can check the items in the checkout overview and the items in the quote', async t => {
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
    
        await t.expect(OverviewPage.overviewItem1.textContent).contains(PRODUCTS.ITEMNAMES.ITEMNAME1);
        await t.expect(OverviewPage.overviewItem2.textContent).contains(PRODUCTS.ITEMNAMES.ITEMNAME2);
})