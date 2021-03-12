import {Selector} from 'testcafe'

class LoginPage {
    constructor(){
        this.userName = Selector('input[name="login.username"]')
        this.userPass = Selector('input[name="login.password"]')
        this.loginButton = Selector('.btn-lg.btn-primary').withExactText('Login')
        this.errorMessage = Selector('#login-error-message')
    }
}

export default new LoginPage()