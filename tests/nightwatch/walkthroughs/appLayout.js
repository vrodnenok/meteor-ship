// add tests to this file using the Nightwatch.js API
// http://nightwatchjs.org/api

module.exports = {
  "Layout & Static Pages" : function (client) {
    client
      .url("http://localhost:3000/contact")
      .resizeWindow(1024, 768)
      .waitForElementVisible('h1', 3000)
      .verify.elementPresent("h1")
      .verify.elementPresent("div[view_id = 'login-button']")
      .assert.containsText(("div[view_id = 'login-button']"), 'Login')
      //.useXpath() // every selector now must be xpath
      .pause(3000)
      .click("div[view_id = 'login-button']")
      .pause(3000)
      .useCss()
      .waitForElementVisible("div[view_id='loginForm']", 3000)
      .assert.containsText("div[view_id='loginForm']", 'login form')
      .sendKeys('#username', 'admin')
      .sendKeys('#password', 'admin123')
      .click("div[view_id='submit-button']")
      .waitForElementVisible('h1', 3000)
      .assert.containsText('body', 'Welcome')
      .end();
  }
};
