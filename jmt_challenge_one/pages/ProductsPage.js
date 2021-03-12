import {Selector} from 'testcafe'

class LoginPage {
    constructor(){
        this.productPageTitle = Selector('.product_label')
    }
}

export default new LoginPage()