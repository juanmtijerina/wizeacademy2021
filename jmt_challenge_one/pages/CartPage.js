import {Selector} from 'testcafe'

class LoginPage {
    constructor(){
        this.cartPageTitle = Selector('.subheader')
        this.itemName1 = Selector('#item_4_title_link .inventory_item_name')
        this.itemName2 = Selector('#item_0_title_link .inventory_item_name')
        this.itemName3 = Selector('#item_1_title_link .inventory_item_name')
        this.checkoutButton = Selector('.btn_action.checkout_button')
    }
}

export default new LoginPage()