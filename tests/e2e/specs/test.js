// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'default e2e tests': browser => {
    browser
      .url(process.env.VUE_DEV_SERVER_URL)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('.collapse')
      .assert.containsText('.collapse strong', 'Click me')
      .assert.elementCount('img', 3)
      .end()
  }
}
