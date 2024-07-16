///<reference types="cypress"/>
describe('Dynamic Dropdown', () => {
    it('Dynamic', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('.ui-autocomplete-input').type('In');
        cy.get('.ui-menu-item').each(($country)=>{
            if($country.text()=='India'){
                cy.wrap($country).click();
            }
        });
    });
    it('dy', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('.ui-autocomplete-input').type('lan');
        cy.get('.ui-menu-item').each(($country)=>{
            if($country.text()=='Poland'){
                cy.wrap($country).click();
            }
        });
    });
});