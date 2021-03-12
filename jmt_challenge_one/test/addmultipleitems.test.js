import LoginPage from '../pages/LoginPage'
import ProductsPage from '../pages/ProductsPage'
import CartPage from '../pages/CartPage'
import { CREDENTIALS } from '../data/Constants'
import { PRODUCTS } from '../data/Constants'


fixture('Add items to cart test')
    .page `https://www.saucedemo.com/`
    .beforeEach(async t => {
        await t.click(LoginPage.loginButton)
})

test('Users can add an multiple items to shopping cart', async t => {
    await t
        .maximizeWindow()
        .typeText(LoginPage.userName, CREDENTIALS.VALID_USER.USERNAME)
        .typeText(LoginPage.userPass, CREDENTIALS.VALID_USER.PASSWORD) 
        .click(LoginPage.loginButton)
        .click(ProductsPage.selectButtonItem1)
        .click(ProductsPage.selectButtonItem2)
        .click(ProductsPage.selectButtonItem3)
        .click(ProductsPage.shoppingCart)
    
         await t.expect(CartPage.itemName1.textContent).contains(PRODUCTS.ITEMNAMES.ITEMNAME1);
         await t.expect(CartPage.itemName2.textContent).contains(PRODUCTS.ITEMNAMES.ITEMNAME2);
         await t.expect(CartPage.itemName3.textContent).contains(PRODUCTS.ITEMNAMES.ITEMNAME3);
})