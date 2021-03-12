import {Selector} from 'testcafe'

class LoginPage {
    constructor(){
        this.productPageTitle = Selector('.product_label')
        this.hambuerguerMenu = Selector('#react-burger-menu-btn')
        this.logoutLink = Selector('#logout_sidebar_link')
        this.shoppingCart = Selector('.shopping_cart_link.fa-layers.fa-fw')
    }
}

export default new LoginPage()