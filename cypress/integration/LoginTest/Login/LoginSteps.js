import { Given, And } from "cypress-cucumber-preprocessor/steps"
import  loginPage from '../../../support/page-objects/loginPage'


Given('User is navigated to login page',()=>{
    loginPage.visit();
});

And('User click on login button',()=>{
    loginPage.clickLogin();
});

And('User enter details as below:',(dataTable)=>{
    dataTable.hashes().forEach(element => {
        loginPage.typeUsername(element.username);
        loginPage.typePassword(element.password);
    });
});

And('User should be logged in',()=>{
    loginPage.isLoggedIn();
});

And('Error message should be displayed as below:',(dataTable)=>{
    dataTable.hashes().forEach(element => {
        loginPage.getErrorMessage(element.error_message);
    });
});