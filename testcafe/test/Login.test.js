import WelcomePage from '../pages/WelcomePage'
import LoginPage from '../pages/LoginPage'
import MyNotesPage from '../pages/MyNotesPage'
import { CREDENTIALS } from '../data/constant'


fixture('Login feature test')
    .page `http://testapp.galenframework.com`
    .beforeEach(async t => {
        await t.click(WelcomePage.loginButton)
})

test('Users can login using valid credentials', async t => {
    await t
        .typeText(LoginPage.userName, CREDENTIALS.VALID_USER.USERNAME), {pass:true}
        .typeText(LoginPage.userPass, CREDENTIALS.VALID_USER.PASSWORD), {pass:true}
        .click(LoginPage.loginButton)
    
        await t.expect(MyNotesPage.pageTitle.exist).ok()

})

