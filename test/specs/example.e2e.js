const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');
const NonSecure = require('../pageobjects/non-secure.page');
var assert = require('assert');
const nonSecurePage = require('../pageobjects/non-secure.page');
var expect = require('chai').expect;

describe('My Login application', () => {
    it('without login test case', () => {
        browser.url('https://the-internet.herokuapp.com/');
        NonSecure.checkBoxesLink.waitForClickable({ timeout: 3000 });
        NonSecure.checkBoxesLink.waitForDisplayed({timeout : 3000, message: 'element not found after 3 seconds'});
        NonSecure.clickCheckBox();
        NonSecure.checkBoxHeading.waitForExist();
        NonSecure.checkBoxHeading.waitUntil(() => {
            return NonSecure.checkBoxHeading.getText() === "Checkboxes"
        }, {
            timeout: 5000, timeoutMsg: "connection timed out to find an element"
        });
        
        var heading = NonSecure.checkBoxHeading.getText();
        console.log(`heading value is ${heading}`);
        assert.strictEqual(heading, 'Checkboxes');
        //browser.saveScreenshot();
    });
    it('should login with valid credentials', () => {
        LoginPage.open();

        LoginPage.login('tomsmith', 'SuperSecretPassword!');
        expect(SecurePage.flashAlert).toBeExisting();
        expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!');
        expect(SecurePage.bodyText).toHaveTextContaining('Welcome to the Secure Area. When you are done click logout below.')
    });
    it.only('myautomation test case', ()=> {
        browser.deleteCookies();
        browser.maximizeWindow();
        browser.url('file:///C:/gitspace/js-exercises/automationpage.html');
        browser.getTitle();
        var val = NonSecure.pagelabel.getText();
        console.log(val);
        var tboxdefval = NonSecure.textbox.getValue();
        console.log(tboxdefval);
        NonSecure.textbox.clearValue();
        //browser.pause(3000);
        NonSecure.textbox.setValue('entered from automation script');
        var getattr = NonSecure.textbox.getAttribute('type');
        if(getattr) {console.log(getattr)};
        var htmlinfo = NonSecure.pagelabel.getHTML();
        console.log(htmlinfo);
        var getprop = NonSecure.textbox.getProperty('id');
        console.log(getprop);
        var gettagnm = NonSecure.pagelabel.getTagName();
        console.log(gettagnm);
        console.log(NonSecure.buttonelem.isClickable());
        console.log(NonSecure.dropdown.isDisplayed());
        console.log(NonSecure.textbox.isEnabled());
        console.log(NonSecure.pagelabel.isExisting());
        console.log(NonSecure.dropdown.isSelected());
        console.log(NonSecure.textbox.isFocused());
        NonSecure.dropdown.selectByIndex(2);
        //browser.pause(2000);
        NonSecure.dropdown.selectByVisibleText('cinco');
        //browser.pause(2000);
        NonSecure.dropdown.selectByAttribute('name', 'someName5');
        //browser.pause(1500);
        NonSecure.buttonelem.waitForClickable({timeout: 4000, timeoutMsg: 'element not clickable'});
        NonSecure.timerbasedelem.waitForExist({timeout: 2000, timeoutMsg: 'element not exists'});
        //NonSecure.timerbasedelem.waitForDisplayed({timeout: 2000, timeoutMsg: 'element not displayed'});
        NonSecure.timerbasedelem.waitForEnabled({timeout: 2000, timeoutMsg: 'element not enabled'});
        NonSecure.timerbasedelem.waitUntil(()=> {
            return NonSecure.timerbasedelem.getText() === "Timer based web element or DOM"
        },{
            timeoutMsg: 'cannot fetch text',
            timeout: 5000
        })
        NonSecure.buttonelem.click();
        browser.pause(2000);
        console.log('alert open check' + browser.isAlertOpen());
        browser.acceptAlert();
        browser.pause(2000);
        console.log('before last line of  code ' + val);
        expect(val).to.have.string('Page for automation practise');//will fail if spelling is diff
        expect(NonSecure.buttonelem.isClickable()).to.not.be.true; //fail because true will be returned
        expect(val).to.equal('Page for automation practise');
        expect(NonSecure.pagelabel.getText()).to.include('automation');
    })
});


