
describe('tabs', () => {
    it('test1', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.xpath("//*[.='Open Tab']").invoke('removeAttr','target').click();
        cy.origin('https://www.qaclickacademy.com/',()=>{
            cy.visit('')
            cy.contains('Access all our Courses').click();
            
        })
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy,xpath('')

    });
    it('open new window', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#openwindow').invoke('removeAttr','onclick').click();
    });
});