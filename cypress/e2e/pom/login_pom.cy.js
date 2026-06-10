import LoginPage from "../../support/loginPage"
import LoginData from "../../fixtures/loginData"

const loginPage = new LoginPage()
describe('OrangeHRM Login Feature', () => {
 
    beforeEach(() => {
         loginPage.visit();
       
    })

    it ('TC-LOGIN-001 - Login menggunakan username dan password yang valid', () =>{
      
    
      loginPage.inputUsername( LoginData.validUsername);
      loginPage.inputPassword(LoginData.validPassword);
      loginPage.clickLogin();
      loginPage.assertionLogin();

    })


      it ('TC-LOGIN-002 - Login menggunakan Password yang invalid', () =>{
      
      loginPage.inputUsername( LoginData.validUsername);
       loginPage.inputPassword( LoginData.invalidPassword);
       loginPage.clickLogin();

      
       loginPage.assertionInvalidCredentials();
    })

    it ('TC-LOGIN-003 - Login menggunakan username yang invalid', () =>{
       loginPage.inputUsername( LoginData.invalidUsername);
       loginPage.inputPassword( LoginData.validPassword);
       loginPage.clickLogin();

      
       loginPage.assertionInvalidCredentials();
    })

    it ('TC-LOGIN-004 - Login menggunakan Username yang kosong', () =>{
     
      loginPage.inputPassword( LoginData.validPassword);
      loginPage.clickLogin();

      
       loginPage.assertionRequiredAlert();
    })

     it ('TC-LOGIN-005 - Login menggunakan password yang kosong', () =>{
     loginPage.inputUsername( LoginData.validUsername);
      loginPage.clickLogin();

      
       loginPage.assertionRequiredAlert();
    })

    it('TC-LOGIN-006 - Login menggunakan Username dan Password kosong', () => {

        loginPage.clickLogin();

        loginPage.assertionDoubleRequiredAlert();

    })

    it('TC-LOGIN-007 - Verifikasi fitur forgot password', () => {

       loginPage.clickForgotPassword();
       loginPage.assertionForgotPasswordPage();

    })

    
    it('TC-LOGIN-008 - Login tanpa Authentikasi', () => {

       loginPage.visitDashboard()
       loginPage.assertionLoginNoAuth()
      

    })
})