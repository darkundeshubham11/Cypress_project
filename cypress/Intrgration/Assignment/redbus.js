///<reference types="cypress"/>
describe('Redbus tests', () => {
    it('test1', () => {
        cy.visit("https://www.redbus.com/");
        cy.xpath('//div[@class="rdc-login"]').click();
        cy.xpath('//li[@id="signInLink"]').click();
        cy.wait(2000);
        cy.xpath('//div[@class="modalCloseSmall"]').click();
        cy.xpath('//div[@class="manageHeaderLbl"]').click();
        cy.xpath('//div[@id="hmb"]').click();
        cy.wait(2000);
        cy.xpath('//input[@placeholder="Enter Ticket No"]').type('T-87594265');
        cy.xpath('//input[@placeholder="Enter Email"]').type('sd@gmail.com');
    });
});