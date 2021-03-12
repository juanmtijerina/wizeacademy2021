import {Selector} from 'testcafe'

class FinishPage {
    constructor(){
        this.finishPageThanks = Selector('.complete-header') 
    }
}

export default new FinishPage()