import { Given, Then, When } from '@wdio/cucumber-framework';
import homePage from '../page-objects/home.page.js';
import signinPage from '../page-objects/signin.page.js';
import myAccountPage from '../page-objects/my-account.page.js';
import { users } from '../test-data/users.js';
import AllureReporter from '@wdio/allure-reporter';

When('I click on the Sign In link', async function() {
    await homePage.signInLink.click();
});

When('I enter {string} into {word} input field', async function(text, inputTitle) {
    await signinPage.input(inputTitle).setValue(text);
});

When('I click the Sign In button', async function() {
    await signinPage.signInButton.click();
});

Then('My Account page contains email {string}', async function(email) {
    await homePage.selectUserDropdown('My Account');
    await expect(myAccountPage.contactInformationContent).toHaveText(expect.stringContaining(email));
});

Given('I have logged in as {word}', async function(name) {
    if (!Object.keys(users).includes(name)) {
        throw Error(`User ${name} is not recognized`);
    }
    
    const user = users[name];
    const expectedGreetMessage = `Welcome, ${user.firstName} ${user.lastName}!`;
    AllureReporter.addArgument('user', user);
    
    await homePage.signInLink.click();
    await signinPage.input("Email").setValue(user.email);
    await signinPage.input("Password").setValue(user.password);
    await signinPage.signInButton.click();
    await expect(homePage.greetMessage).toHaveText(expectedGreetMessage);
});
