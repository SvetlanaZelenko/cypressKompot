
import {navigateTo} from "../support/page.object/navigationPge";
import LoginPage from "../support/page.object/login.page";

describe('Login successful',() =>{
    it('Login successful', () => {

        //cy.login

        LoginPage.navigate()
        LoginPage.enterEmail().clear()
        LoginPage.enterEmail().type('s.zelenko@interreserve.com')
        LoginPage.enterPassword().clear()
        LoginPage.enterPassword().type('Inter123')
        LoginPage.submit().click()
    })
})
describe('Base page navbar links', () => {
    it('Base page navbar link', () => {
        navigateTo.clientPageIsopen()
        navigateTo.orderPageIsopen()
        navigateTo.estimatePageIsopen()
        navigateTo.invoicePageIsopen()
        navigateTo.paymentPageIsopen()
        navigateTo.schedulePageIsopen()
        navigateTo.humburgerDropdownIsopen()
        navigateTo.informationPageIsopen()
        navigateTo.settingsPageIsopen()
        navigateTo.profilePageIsopen()

    })
})