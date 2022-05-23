class ClientCard
{

    clientLink = () => cy.get('[href="/client/6289317b583218d2b0a2be1d"]').first().click()

        name = () => cy.get('[data-qa="page-title"]').should('have.text', "Shimma Murthy");
        address = () => cy.get('[class="mb-4"]').should('contain', "1954 Piner Rd  Santa Rosa California 94123");
        // phone = () => cy.get('[class="pe-4"]').should('contain', "Phone").next().should('contain', 'MuiBox-root css-70qvj9')
        //    .should('have.text', "+1 (415) 456-7891");
        phone = () => cy.get('[class="MuiBox-root css-70qvj9"]').should('contain',"+1 (415) 456-7891")
       email = () => cy.get('[class="pe-4"]').should('contain', "Email").next()
           .should('contain', "test@gmail.com");
       companyName = () => cy.get('[class="pe-4"]').should('contain', "Company").next()
           .should('contain', "Rucksa");

}

export default new ClientCard()