describe('Table Values', () => {

    it('Test using XPath', () => {
      // Visit the page
      cy.visit('https://the-internet.herokuapp.com/tables');
    // Fetch the 4th row 3rd column value from the 1st table
    cy.xpath('//*[@id="table1"]/tbody/tr[4]/td[3]').then(($cell) => {
        if ($cell.length) {
          cy.wrap($cell).invoke('text').then((text) => {
            cy.log(text);
          });
        }
      });
  
      // Fetch the 2nd row last column value from the 2nd table
      cy.xpath('//*[@id="table2"]/tbody/tr[2]/td[last()]').then(($cell) => {
        if ($cell.length) {
          cy.wrap($cell).invoke('text').then((text) => {
            cy.log(text);
          });
        }
      });
    });
  });
  