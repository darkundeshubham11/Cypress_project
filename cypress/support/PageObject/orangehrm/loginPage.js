class Login_po{
EnterURL(){
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
}
Login(){
    cy.get("input[name='username']").type('Admin');
    cy.get("input[name='password']").type('admin123');
    cy.get(".orangehrm-login-button").click();
}
clickonforgotpassword(){
    cy.get('.orangehrm-login-forgot-header').click();
}
}
export default Login_po;