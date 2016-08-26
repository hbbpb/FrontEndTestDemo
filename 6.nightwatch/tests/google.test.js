/**
 * Created by pbli on 8/26/16.
 */
module.exports = {
    'Demo test Google': function (browser) {
        browser
            .pause(5000)
            .url('http://www.google.com.hk')
            .waitForElementVisible('body', 1000)
            .pause(5000)
            .setValue('input[type=text]', 'nightwatch')
            .waitForElementVisible('input[name=btnK]', 1000)
            .click('input[name=btnK]')
            .pause(1000)
            .assert.containsText('#main', 'Night Watch')
            .pause(5000)
            .end();
    }
};
