import {client} from 'nightwatch-cucumber';
import {Given, Then, When} from 'cucumber';

const demoPage = client.page.demoPage();

Given('Demo page is opened', async () => {
  await demoPage
    .navigate()
    .waitForElementVisible('#app', 5000)
});

When('I click on the collapse', async () => {
  await demoPage.assert.elementPresent('@collapse')
});

Then('I can see header', async () => {
  await demoPage.assert.containsText('@collapseHeader', 'Click me')
  await demoPage.assert.elementCount('img', 3)
});
