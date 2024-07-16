describe('Handle New Window', () => {
    it('should open the new window in the same tab', () => {
      // Visit the page
      cy.visit('https://the-internet.herokuapp.com/windows');
  
      // Intercept the link and modify the target to open in the same tab
      cy.contains('Click Here').invoke('removeAttr', 'target').click();
  
      // Verify that the new page contains the expected content
      cy.url().should('include', '/windows/new');
      cy.contains('h3', 'New Window').should('be.visible');
    });
  });
  