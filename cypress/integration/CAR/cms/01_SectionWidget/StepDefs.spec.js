import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import LoginPage from '../../../../support/PageObjects/LoginPage';
import HomePage from '../../../../support/PageObjects/HomePage';

const loginPage = new LoginPage();
const homePage = new HomePage();

Given('I navigate to ITG test environment', () => {
    cy.visit('https://itg.staging.itgcanopy.com/');
});

When('I enter {string} and {string} on Login Page', (username, password) => {
    loginPage.getLoginButton().should('have.attr', 'disabled')
    loginPage.getUsernameInput().type(username)
    loginPage.getPasswordInput().type(password)
});

And('I click on Login Button with {string} Credentials', (validity) => {
    if (validity == 'valid' || validity == 'invalid') {
        loginPage.getLoginButton().should('not.have.attr', 'disabled')
        loginPage.getLoginButton().click()
    }
    if (validity == 'valid') {
        loginPage.getLogoutButton().should('be.visible')
    }
});

And('I click on {string} toggle button', (toggleButton) => {
    homePage.getToggleEditingMode().should('be.visible')
    if (toggleButton == 'View preview') {
        homePage.getToggleEditingMode().click()
        // this.stalenessOf(this.saveLayout) - selenium method, add this when we get to this stage
    } else if (toggleButton == 'Editing mode') {
        homePage.getToggleEditingMode().click()
        homePage.getSaveLayout().should('be.visible')
    }
});

And('I click on clear layout Button', () => {
    homePage.getClearLayoutButton().should('be.visible')
    homePage.getClearLayoutButton().click()
});

And('I create a Section Widget by API', () => {
    
    // const command: any = `curl --location --request POST '${process.env.BASE_URL}${process.env.API_KEY}/com.intrepia.luma.SaveSiteMenuPage' \
    // --header 'Content-Type: application/json' \
    // --data-raw '{"menuID":"3","page":{"name":"3","fragments":[{"widget":"section","metadata":{"width":100,"alignment":"center","spacing":{"top":0,"right":0,"bottom":0,"left":0},"title":"Section","columns":[{"size":1,"alignment":"start","items":0}]},"fragments":[]}]}}'`;
    // return await CurlRequests.curlRequest(command).catch(
    //   (error: any) => {
    //     return error;
    //   },
    // );
    // 
    // let resp: any = await child_process.execSync(command);
    // let result: any = await resp.toString('UTF8');
    // return JSON.parse(result);
});
