class LoginPage {

    navigate() {
        cy.visit('/user/login')
    }

    enterEmail() {
        return cy.get('[id="email"]')
    }

    enterPassword() {
        return cy.get('[id="password"]')
    }

    submit() {
        return cy.get('[type="submit"]')
    }
}
export default new LoginPage();



