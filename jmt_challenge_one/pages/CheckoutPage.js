import {Selector} from 'testcafe'

class CheckoutPage {
    constructor(){
        this.checkoutPageTitle = Selector('.subheader')
        this.userFirstName = Selector('#first-name')
        this.userLastName = Selector('#last-name')
        this.userZipCode = Selector('#postal-code')
        this.zipErrorMsg = Selector('.checkout_info_wrapper form h3')
        this.continueButton = Selector('.btn_primary.cart_button')   
    }
}

export default new CheckoutPage()