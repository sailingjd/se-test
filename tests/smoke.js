var data = require('../data/info')
var main = require('../sel/main')

module.exports = {
  'Steps 1 through 5': function (browser) {
    browser
      .launch(browser.launchUrl)
      .waitForElementVisible('body', 5000)
      .moveToElement(main.whatWeDo, 5, 5, function () { console.log("--hover over 'What We Do' menu option") })
      .click(main.quality, function () { console.log("--click 'QUALITY' link") })
      .waitForElementVisible('body', 3000, 'waiting for page to load')
      .verify.containsText(main.bullet, data.bullet)
  },
  'Steps 6 through 10' : function (browser) {
    browser
      .click(main.three60, function () { console.log('--click 360Star link') })
      .useXpath()
      .waitForElementVisible(main.medicare, 5000, 'waiting for medicare link to be visible')
      .click(main.medicare, function () { console.log('--click Medicare link') })
      .pause(3000)
      .verify.title('Medicare.gov: the official U.S. government site for Medicare')
      .url(browser.launchUrl, function () { console.log('navigating back to Medhok website') })
      .useCss()
      .waitForElementVisible(main.search, 5000, 'waiting for page to load')
      .setValue(main.search, 'contact')
      .click(main.srchBtn)
      .waitForElementVisible(main.contactUs, 5000, 'waiting for search results')
      .verify.elementPresent(main.contactUs, 'verifying contact us is in search results')
      .click(main.readMore, function () { console.log('--clicking read more') })
      .waitForElementVisible(main.submitBtn, 5000, 'waiting for contact us page to load')
      .useXpath()
      .verify.containsText(main.address, data.address)
      .end()
  }
};
