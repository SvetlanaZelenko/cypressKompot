
class ClientPage {

    createBtn = () => cy.get('[data-qa="create-client-button"]').should('contain', 'Create Client')
    headerCreateNewClient = () => cy.get('[class="jss31 MuiBox-root css-0"]').first().should('have.text', 'Create New Client')
    saveBtn = () => cy.get('[type="submit"]').contains('Save')
    cancelBtn = () => cy.get('[type="button"]').contains('Cancel')
    additionalPhoneNumber = () => cy.get('[type="button"]').should('contain', '+ Add Phone Number')
    clientLink = () => cy.get('[href="/client"]');
    headerClients = () => cy.get('[data-qa="page-title"]').should('have.text','Clients');

    //Placeholder
    firstName = () => cy.get('[id="firstName"]');
    lastName = () => cy.get('#lastName');
    companyName = () => cy.get('[id="company"]');
    email = () => cy.get('[id="email"]');
    phone = () => cy.get('[id="phone"]')
    address = () => cy.get('#addressLine1');
    city = () => cy.get('#city');
    state = () => cy.get('[id="StateClick"]');
    stateDropdown = () => cy.get('[role="listbox"]')
    zip = () => cy.get('#zipCode');
    additionalInformation = () => cy.get('[id="additionalInfo"]');
    countriesPhone = () => cy.get('[aria-label="Select country"]')
    pnoneCountries = () => cy.get('.dial-code')
// Full Form


    placeHolderIsCorrect() {
        const key = ["First Name", "Last Name", "Company Name", "E-mail", "Phone", "Ext",
            "Address", "Unit", "City", "State", "Zip", "Additional Information"]
        cy.get('.MuiBox-root.css-0')
            .find('.MuiOutlinedInput-root')
            .each((el, i) => {
                cy.wrap(el).then(value => {
                    const itemText = value.text().trim()
                    expect(itemText).contains(key[i])
                })
             })
        this.additionalPhoneNumber().should('be.visible');
        this.cancelBtn().click()
    }
}



export default new ClientPage()