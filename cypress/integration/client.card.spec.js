import ClientCard from "../support/page.object/client.card";
import LoginPage from "../support/page.object/login.page";
import {navigateTo} from "../support/page.object/navigationPge";
import {client} from "../fixtures/example.json";



before("Login", () => {

    LoginPage.navigate()
    LoginPage.enterEmail().clear()
    LoginPage.enterEmail().type('s.zelenko@interreserve.com')
    LoginPage.enterPassword().clear()
    LoginPage.enterPassword().type('Inter123')
    LoginPage.submit().click()

})
beforeEach(() => {
    Cypress.Cookies.preserveOnce('connect.sid', 'user_auth')
})

describe("Full Form Card is correct", () => {
    describe("Client List", () => {
        it("Client  Full Form Is Correct", () => {
            navigateTo.clientPageIsopen()
           ClientCard.firstNameInTable()
        })
        // it("Client Full Form Card Is Correct", () => {
        //     ClientCard.ClientFullFormCard ()
        // })
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
        it('Client Edit Button', () => {
            ClientCard.clientEditButton()
         })
        it('Client Left Dashboard is correct', () => {
            ClientCard.ClientLeftDashboard()
        })
     })
})


