const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');
const NonSecure = require('../pageobjects/non-secure.page');
var assert = require('assert');

describe('My Login application', () => {
    it('without login test case', () => {
        browser.url('https://the-internet.herokuapp.com/');
        NonSecure.checkBoxesLink.waitForClickable({ timeout: 3000 });
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
        assert
        //heading.isEqual('Checkboxes');
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
});


