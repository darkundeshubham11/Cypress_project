describe('Table', () => {
    it('test1', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        // cy.xpath('(//table)[2][@id="product"]/tbody/tr[6]/td[3]');
        cy.xpath('//table[@name="courses"]/tbody/tr[6]/td[3]').should('includes.text','Learn JMETER from Scratch - (Performance + Load) Testing Tool');
    });
    it('test2', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.wait(2000)
        cy.xpath('//table[@name="courses"]/tbody/tr[9]/td').each(($ele)=>{
            if($ele.text().includes('Python')){
                cy.wrap($ele).next().then((num)=>{
                    cy.log(num.text())
                })
            }
        })
    });
});