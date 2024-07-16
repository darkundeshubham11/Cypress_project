describe('CuntactUS', () => {
    it('Countact', () => {
        cy.visit('https://automationteststore.com/');

        cy.get('a[href="https://automationteststore.com/index.php?rt=content/contact"]').click();
        cy.get('input[id="ContactUsFrm_first_name"]').type('Darkunde Shubham').should('have.value','Darkunde Shubham');
        cy.get('input[id="ContactUsFrm_email"]').type('darkunde@gmail.com').should('have.value','darkunde@gmail.com');
        cy.get('textarea[id="ContactUsFrm_enquiry"]').type('Hi, I am Shubham Darkunde, I have purchased two T-shirt from your site but they have not deliver yet.').should('have.value','Hi, I am Shubham Darkunde, I have purchased two T-shirt from your site but they have not deliver yet.');
        cy.get('button[class="btn btn-primary lock-on-click"]').click();
        cy.title().should('include','Contact Us');
        cy.xpath("//p[contains(text(),'Your enquiry has been successfully sent to the store owner!')]").should('include.text','Your enquiry has been successfully sent to the store owner!');


    });
});