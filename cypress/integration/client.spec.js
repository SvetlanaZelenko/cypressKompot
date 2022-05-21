import {navigateTo} from "../support/page.object/navigationPge";
import ClientPage from "../support/page.object/client.page";
import LoginPage from "../support/page.object/login.page";
import { client } from "../fixtures/example.json"
import clientPage from "../support/page.object/client.page";

// const clientPage = new ClientPage

describe("CLIENT", () => {
    before("Login", () => {
        //cy.fixture('example.json')
        cy.Login
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
    describe("Client Page", () => {
        it("Client Page", () => {
            navigateTo.clientPageIsopen()
        })
        it("Client create", () => {
            ClientPage.createBtn().click()
        })
        it("headerCreateNewClient", () => {
            ClientPage.headerCreateNewClient()
        })
        it('First name', () => {
            ClientPage.firstName()
        })
        it('Last name', () => {
            ClientPage.lastName()
        })
        it('Address', () => {
            ClientPage.address()
        })
        it('City', () => {
            ClientPage.city()
        })
            it('State', () => {
                ClientPage.state()
            })
                it('Zip', () => {
                    ClientPage.zip()
                })
                    it('Company Name', () => {
                        ClientPage.companyName()
                    })

                    it('Phone', () => {
                        ClientPage.phone()
                    })
                    it('E-mail', () => {
                        ClientPage.email()
                    })
                    it('SaveBtn', () => {
                        ClientPage.saveBtn().click()
                    })
                    it('cancelBtn', () => {
                        ClientPage.cancelBtn()
                    })
                    it('additionalPnoneNumber', () => {
                        ClientPage.additionalPnoneNumber()
                    })
        it('Client create placeholder is correct ', () => {
            // clientPage.createBtn().click()
            // clientPage.headerCreateNewClient()
               clientPage.placeHolderIsCorrect()
    })
                    it('Client create placeholder is correct ', () => {
                        cy.createClientAllData(client.firstName, client.lastName, client.phone, client.address, client.city, client.email, client.companyName, client.zip)
                    })
                 })
            })



