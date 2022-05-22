class NavigationPge {

    clientPageIsopen() {
        cy.get('[href="/client"]').click()
        cy.url().should('eq', 'https://kompot.us/client')
        cy.get('[data-qa="page-title"]').should('contain', 'Clients')
        cy.get('[data-qa="create-client-button"]').should('contain', 'Create Client')
    }

    orderPageIsopen() {
        cy.get('[href="/order"]').click()
        cy.url().should('eq', 'https://kompot.us/order')
        cy.get('[data-qa="page-title"]').should('contain', 'Orders')
        cy.get('[type="button"]').should('contain', 'Create Order')
    }

    estimatePageIsopen() {
        cy.get('[href="/estimate"]').click()
        cy.url().should('eq', 'https://kompot.us/estimate')
        cy.get('[data-qa="page-title"]').should('contain', 'Estimates')
        cy.get('[type="button"]').should('contain', 'Estimate')
    }

    invoicePageIsopen() {
        cy.get('[href="/invoice"]').click()
        cy.url().should('eq', 'https://kompot.us/invoice')
        cy.get('[data-qa="page-title"]').should('contain', 'Invoices')
        cy.get('[type="button"]').should('contain', 'Create Invoice')
    }

    paymentPageIsopen() {
        cy.get('[href="/payment"]').click()
        cy.url().should('eq', 'https://kompot.us/payment')
        cy.get('[data-qa="page-title"]').should('contain', 'Payments')
        cy.get('[type="button"]').should('contain', 'Create Payment')
    }

    schedulePageIsopen() {
        cy.get('[href="/schedule/calendar"]').first().click()
        cy.url().should('eq', 'https://kompot.us/schedule/calendar')
    }

    humburgerDropdownIsopen() {
        cy.get('nav .ant-dropdown-link.pointer.item').click()
        const humburger = ['Workers', 'Addresses', 'Vendors', 'Products', 'Purchase Orders', 'Absences'];
        for (let i = 0; i < humburger.length; i++) {
            cy.get('.ant-dropdown-menu-title-content').contains(humburger[i])
        }
    }
        informationPageIsopen() {
            cy.get('[src="/static/info.0af523ca.svg"]').click()
            cy.url().should('eq', 'https://kompot.us/info')
            cy.get('[data-qa="page-title"]').should('contain', 'Information')
        }

        settingsPageIsopen() {
            cy.get('[src="/static/gear.d77b4860.svg"]').click()
            cy.url().should('eq', 'https://kompot.us/settings/companyAccount')

        }
        profilePageIsopen() {
            cy.get('[src="/static/avatar.d73a25e8.svg"]').click()
            cy.get('[data-qa="profile"]').should('contain', 'Profile')
            cy.get('[data-qa="settings"]').should('contain', 'Company Account')
            cy.get('[class="ant-dropdown-menu-title-content"]').should('contain', 'Logout')
        }

}

export const navigateTo = new NavigationPge()






