const Page = require('./page');

class NonSecurePage extends Page {
    get checkBoxesLink () { return $('a[href="/checkboxes"]') }
    get checkBoxHeading () { return $('h3') }

    clickCheckBox(){
        this.checkBoxesLink.click();
    }

}
module.exports = new NonSecurePage();
