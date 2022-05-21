// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })



import clientPage from "./page.object/client.page";

Cypress.Commands.add('Login', () => {
    cy.visit('/')
})
Cypress.Commands.add('createClientAllData', (firstName, lastName, phone, address, city, email, companyName, zip) => {


        clientPage.createBtn().first().click();
        clientPage.firstName().type(firstName)
        clientPage.lastName().type(lastName);
        clientPage.companyName().type(companyName);
        clientPage.phone().type(phone);
        clientPage.address().type(address);
        clientPage.email().type(email);
        clientPage.state().click();
        clientPage.stateDropdown().contains('California').click();
        clientPage.city().type(city);
        clientPage.zip().type(zip);
        //
    // clientPage.saveBtn().click();
        //clientPage.linkClient().click()
        //clientPage.headerClients().should('contain', 'Clients');

    });

// import LoginPage from "./page.object/login.page";
// const loginPage = new LoginPage()
//
// Cypress.Commands.add('login', () => {
//   loginPage('user/login')
//   loginPage.login()
// })

//
// Cypress.Commands.add('smartSelect', {prevSubject: 'element'}, (subject, item) => {
//     cy.wrap(subject)
//         .click()
//     cy.get(`[class="ant-dropdown-trigger ant-dropdown-link pointer item"][href="${item}"]`)
//         .click()
//
//
// })



