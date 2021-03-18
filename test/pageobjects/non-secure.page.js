const Page = require('./page');

class NonSecurePage extends Page {
    get checkBoxesLink () { return $('a[href="/checkboxes"]') }
    get checkBoxHeading () { return $('h3') }
    //automation page localhost elements
    get pagelabel () { return $('<label>')}
    get textbox() { return $('#txtbox') }
    get buttonelem() { return $('.submitbtn') }
    get timerbasedelem() { return $('//div[@id="timer"]') }
    get dropdown() { return $('#selectbox') }


    clickCheckBox(){
        this.checkBoxesLink.click();
    }

}
module.exports = new NonSecurePage();
