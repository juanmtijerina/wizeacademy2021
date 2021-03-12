import {Selector} from 'testcafe'

class LoginPage {
    constructor(){
        this.userName = Selector('input[name="user-name"]')
        this.userPass = Selector('input[name="password"]')
        this.loginButton = Selector('#login-button')
        this.errorMessage = Selector('.login-box form h3')
    }
}

export default new LoginPage()