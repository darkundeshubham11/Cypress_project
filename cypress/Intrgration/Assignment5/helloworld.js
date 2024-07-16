describe('Hello World', () => {
    it('Test1', () => {
      // Visit the page
      cy.visit('https://the-internet.herokuapp.com/dynamic_loading/1');
  
      // Click the start button to initiate the dynamic loading
      cy.get('#start button').click();
      
      cy.wait(2000)
      // Wait for the loading spinner to disappear
      cy.xpath('//div[@class="example"]/div[@id="loading"]').should('not.be.visible');
  
      // Verify that "Hello World" is displayed
      cy.get('#finish').should('contain', 'Hello World');
    });
  });
  