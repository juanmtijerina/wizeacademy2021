import {Selector} from 'testcafe'

class LoginPage {
    constructor(){
        this.productPageTitle = Selector('.product_label')
        this.hambuerguerMenu = Selector('#react-burger-menu-btn')
        this.logoutLink = Selector('#logout_sidebar_link')
        this.shoppingCart = Selector('.shopping_cart_link.fa-layers.fa-fw')
        this.selectButtonItem1 = Selector('.btn_primary.btn_inventory')
        this.selectButtonItem2 = Selector('div.inventory_item:nth-child(2) > div:nth-child(3) > button:nth-child(2)')
        this.selectButtonItem3 = Selector('div.inventory_item:nth-child(3) > div:nth-child(3) > button:nth-child(2)')
      }
}

export default new LoginPage()