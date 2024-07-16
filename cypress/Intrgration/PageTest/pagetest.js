import Link_po from "../../support/PageObject/orangehrm/link_po";
import Login_po from "../../support/PageObject/orangehrm/loginPage";
import Logout_po from "../../support/PageObject/orangehrm/Logout_po";



describe('', () => {
    const login_po=new Login_po;
    const logout_po=new Logout_po;
    const link_po=new Link_po;

    it('test1', () => {
        // Login
        login_po.EnterURL();
        login_po.Login();

        // Click on Admin link
        link_po.linkclick('Admin');

        // Logout
        logout_po.logout();
    });
});