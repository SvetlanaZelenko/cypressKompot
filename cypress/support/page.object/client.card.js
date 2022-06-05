class ClientCard {

    firstNameInTable = () => cy.get('[href="/client/628ef87171dcbcb1d633b4e9"]').first().click()
    clientLink = () => cy.get('[href="/client"]');
    name = () => cy.get('[data-qa="page-title"]').should('have.text', "Shimma Murthy");
    address = () => cy.get('[class="mb-4"]').should('contain', "1954 Piner Rd  Santa Rosa California 94123");
    phone = () => cy.get('[class="MuiBox-root css-70qvj9"]').should('contain', "+1 (415) 456-7891")
    email = () => cy.get('[class="pe-4"]').should('contain', "Email").next()
        .should('contain', "test@gmail.com");
    companyName = () => cy.get('[class="pe-4"]').should('contain', "Company").next()
        .should('contain', "Rucksa");
    clientEditButton = () => cy.get('[data-testid="EditIcon"]').first().click()

        headerFullForm = () => cy.get('[data-qa="page-title"]')
        ordersFullForm = () => cy.get('[data-qa="orders"]')
        estimatesFullForm = () => cy.get('[data-qa="estimates"]')
        invoicesFullForm = () => cy.get('[data-qa="estimates"]')
        paymentsFullForm = () => cy.get('[data-qa="payments"]')
        callsFullForm = () => cy.get('[data-qa="calls"]')
        messagesFullForm = () => cy.get('[data-qa="messages"]')
        attachmentsFullForm = () => cy.get('[data-qa="attachments"]')
        purchaseOrders = () => cy.get('[data-qa="purchase orders"]')
        notesFullForm = () => cy.get('[data-qa="notes"]')
        tasksFullForm = () => cy.get('[data-qa="tasks"]')
        addressesFullForm = () => cy.get('[data-qa="addresses"]')

    ClientLeftDashboard() {
        this.headerFullForm().should('exist')
        this.ordersFullForm().should('exist')
        this.estimatesFullForm().should('exist')
        this.invoicesFullForm().should('exist')
        this.paymentsFullForm().should('exist')
        this.callsFullForm().should('exist')
        this.messagesFullForm().should('exist')
        this.attachmentsFullForm().should('exist')
        this.purchaseOrders().should('exist')
        this.notesFullForm().should('exist')
        this.tasksFullForm().should('exist')
        this.addressesFullForm().should('exist')
    }
    // ClientLeftDashboard() {
    //     const key = ["Orders", "Estimates", "Invoices", "Payments", "Calls", "Messages", "Attachments", "Purchase Orders", "Notes", "Tasks", "Addresses"]
    //     cy.get('.MuiBox-root')
    //         .find('.MuiListItem-root')
    //         .each((el, i) => {
    //             cy.wrap(el).then(value => {
    //                 const itemText = value.text().trim()
    //                 expect(itemText).contains(key[i])
    //             })
    //         })
   // }
}


    //createButton = () => cy.get('[id="create-button"]').should('contain', "CREATE")

//          ClientFillFormCardIsCorrect
//         const key = ["Create button", "Client Edit button", "Phone button"]
//         cy.get('.MuiSvgIcon-root MuiSvgIcon-fontSizeInherit css-1cw4hi4')
//     .find('.MuiSvgIcon-root MuiSvgIcon-fontSizeInherit css-1cw4hi4')
//

export default new ClientCard()