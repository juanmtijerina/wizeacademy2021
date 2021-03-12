import {Selector} from 'testcafe'

class LoginPage {
    constructor(){
        this.cartPageTitle = Selector('.subheader')
    }
}

export default new LoginPage()