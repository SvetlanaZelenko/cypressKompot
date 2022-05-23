import ClientCard from "../support/page.object/client.card";
import LoginPage from "../support/page.object/login.page";
import {navigateTo} from "../support/page.object/navigationPge";
import ClientPage from "../support/page.object/client.page";


before("Login", () => {

    LoginPage.navigate()
    LoginPage.enterEmail().clear()
    LoginPage.enterEmail().type('s.zelenko@interreserve.com')
    LoginPage.enterPassword().clear()
    LoginPage.enterPassword().type('Inter123')
    LoginPage.submit().click()
    //cy.visit('https://kompot.us/client/6289317b583218d2b0a2be1d')
})
beforeEach(() => {
    Cypress.Cookies.preserveOnce('connect.sid', 'user_auth')
})

describe("Created Client is correct", () => {
    describe("Client List", () => {
        it("Client List", () => {
            navigateTo.clientPageIsopen()
        })
        it("Clients Search", () => {
            ClientCard.clientLink()
        })
        it('Name', () => {
            ClientCard.name()
        })
        it('Address', () => {
           ClientCard.address()
         })
        it('PhoneNumber', () => {
            ClientCard.phone()
        })
        it('Email', () => {
            ClientCard.email()
        })
        it('Company Name', () => {
            ClientCard.companyName()
        })
    })
})


