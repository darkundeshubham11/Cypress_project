///<reference types="cypress"/>
describe('OrangeHRM Suite',()=>{
    it('login Test1',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get("input[name='username']").type('Admin');
        cy.get("input[name='password']").type('admin123');
        cy.get(".orangehrm-login-button").click();
        // cy.get(".orangehrm-login-forgot").click();
    });
    it('Facebook login', () => {
        cy.visit("https://www.facebook.com/");
        cy.get("#email").type("darkundeshubham11@gmail.com");
        cy.get("#pass").type("shubhshiv");
        cy.get(".name='login'").click();
        
    });
    it('USe Xpath', () => {
        cy.visit("https://the-internet.herokuapp.com/login");
        cy.xpath('//input[@id="username"]').type('asdfgh');
        cy.xpath('//input[@id="password"]').type('lkjhg');
        cy.xpath('//button[@class="radius"]').click();
        
    });
});