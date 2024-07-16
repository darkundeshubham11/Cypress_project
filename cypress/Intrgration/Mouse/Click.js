describe('Click', () => {
    it('Right Click', () => {
        cy.visit('https://demo.guru99.com/test/simple_context_menu.html')
        cy.xpath("//*[.='right click me']").rightclick();
        cy.xpath('//li[@class="context-menu-icon-quit"]').click();
        // cy.xpath('//button').dblclick();
    });
});