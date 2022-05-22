
class ClientPage {

    createBtn = () => cy.get('[data-qa="create-client-button"]').should('contain', 'Create Client')
    headerCreateNewClient = () => cy.get('[data-qa="page-title"]').should('contain', 'Create New Client')
    saveBtn = () => cy.get('[type="submit"]')
    cancelBtn = () => cy.get('[type="button"]').contains('Cancel')
    additionalPnoneNumber = () => cy.get('[type="button"]').should('contain', '+ Add Phone Number')

    //  firstName() {
    //      cy.get('[id="firstName"]').click()
    //          .type('firstName')
    //          .should('have.value', 'Patrick')
    //  }
    //  lastName() {
    //      cy.get('[id="lastName"]').click()
    //          .type('lastName')
    //          .should('have.value', 'Murthy')
    //
    //  }
    //  address() {
    //      cy.get('[id="addressLine1"]').click()
    //          .type('address')
    //          .should('have.value', '1954 Piner road')
    //      cy.get('[id="addressLine2"]').click()
    //          .type('unit')
    //          .should('have.value', 'STE A')
    //      cy.get('[id="city"]').click()
    //          .type('city')
    //          .should('have.value', 'Santa Rosa')
    //  }
    //  state() {
    //      cy.get('[id="StateClick"]').click()
    //      cy.get('[data-value="state"]').click()
    //  }
    //  zipCode() {
    //      cy.get('[id="zipCode"]').click()
    //          .type('zip')
    //          .should('have.value', '94105')
    //  }
    //  companyName() {
    //      cy.get('[id="company"]').click()
    //          .type('company')
    //          .should('have.value', 'Ruksa Inc')
    //
    //  }
    //  country() {
    //      cy.get('[aria-label="Select country"]').click()
    //      cy.contains("country").click()
    //      cy.get('[name="phoneNumber1.phone"]')
    //      .should('have.value', '+1')
    //
    // }
    //
    //  phone() {
    //      cy.get('[class="MuiOutlinedInput-input MuiInputBase-input MuiInputBase-inputAdornedStart css-1ixds2g"]').click()
    //          .type("phoneNumber")
    //          .should ("have.value", "+1 (415) 844-3445")
    //      cy.get('[id="ext"]').click()
    //          .type('phoneNumberExt')
    //          .should('have.value', '-')
    //  }
    //  email() {
    //      cy.get('[id="email"]').click()
    //          .type('email')
    //          .should('have.value', 'test@gmail.com')
    //
    //  }
    firstName = () => cy.get('[id="firstName"]');
    lastName = () => cy.get('#lastName');
    companyName = () => cy.get('[id="company"]');
    email = () => cy.get('#email');
    phone = () => cy.get('[id="phone"]')
    address = () => cy.get('#addressLine1');
    city = () => cy.get('#city');
    state = () => cy.get('[id="StateClick"]');
    stateDropdown = () => cy.get('[role="listbox"]')
    zip = () => cy.get('#zipCode');

    placeHolderIsCorrect() {
        // const key = ["First Name", "Last Name", "Company Name", "Phone", "Ext", "E-mail",
        //     "Address", "Unit", "City", "State", "Zip"]
        // cy.get('.MuiBox-root.css-0')
        //     .find('.MuiOutlinedInput-root')
        //     .each((el, i) => {
        //         cy.wrap(el).then(value => {
        //             const itemText = value.text().trim()
        //             expect(itemText).contains(key[i])
        //
        //          })
        //      })
        this.additionalPnoneNumber().should('be.visible');
        this.cancelBtn().click()
    }
}



export default new ClientPage()