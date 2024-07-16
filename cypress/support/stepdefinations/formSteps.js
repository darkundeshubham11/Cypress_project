import {Given,When,Then,And} from"cypress-cucumber-preprocessor/steps"
Given('user open the simple form url',()=>{
    cy.visit('https://v1.training-support.net/selenium/simple-form');
})
When('user enter firstname, lastname, email, message',()=>{
    cy.get('#firstName').type('Shubham');
    cy.get('#lastName').type('Darkunde');
    cy.get('#email').type('darkundeshubham@gmail.com');
    cy.get('#number').type('8856097872');
    cy.xpath('//textarea').type('Hi I am Shubham....')
})
And('clicks on submit',()=>{
    cy.xpath('//input[@value="submit"]').click();
})
Then('An alert saying successful message has to be displayed.',()=>{
    cy.wait(2000)
    cy.on('window:confirm',(alertmsg)=>{
        expect(alertmsg).to.equal('Thank You for reaching out to us,Shabham Darkunde')
    })
})