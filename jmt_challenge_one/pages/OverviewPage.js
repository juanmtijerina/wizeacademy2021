import {Selector} from 'testcafe'

class OverviewPage {
    constructor(){
        this.overviewPageTitle = Selector('.subheader')
        this.overviewFinishButton = Selector('.btn_action.cart_button')
        this.overviewItem1 = Selector('#item_4_title_link .inventory_item_name')    
        this.overviewItem2 = Selector('#item_0_title_link .inventory_item_name')    
    }
}

export default new OverviewPage()