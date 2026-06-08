describe('OrangeHRM Login Feature', () => {
 
    beforeEach(() => {

        
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('input[name="username"]').should('be.visible')
    })

    it ('TC-LOGIN-001 - Login menggunakan username dan password yang valid', () =>{
        cy.intercept('POST', '**/auth/validate')
    .as('loginRequest')
      
        cy.get('input[name="username"]').type('Admin')
      cy.get('input[name="password"]').type('admin123')
      cy.get('button[type="submit"]').click()


    cy.wait('@loginRequest')
    .its('response.statusCode')
    .should('eq', 302)

      cy.url().should('include', '/dashboard')
       cy.contains('Dashboard').should('be.visible')
    })


      it ('TC-LOGIN-002 - Login menggunakan Password yang invalid', () =>{
            cy.intercept('POST', '**/auth/validate')
    .as('loginRequest2')
      cy.get('input[name="username"]').type('Admin')
      cy.get('input[name="password"]').type('admin1234')
      cy.get('button[type="submit"]').click()
       
      cy.wait('@loginRequest2');
       cy.contains('Invalid credentials').should('be.visible')
    })

    it ('TC-LOGIN-003 - Login menggunakan username yang invalid', () =>{
       cy.intercept('POST', '**/auth/validate')
      .as('invalidUserName')
      cy.get('input[name="username"]').type('hehe')
      cy.get('input[name="password"]').type('admin123')
      cy.get('button[type="submit"]').click()

        cy.wait('@invalidUserName')
    .its('request.method')
    .should('eq', 'POST')

        cy.url().should('include', '/login')
        cy.contains('Invalid credentials').should('be.visible')
    })

    it ('TC-LOGIN-004 - Login menggunakan Username yang kosong', () =>{
  
      cy.get('input[name="password"]').type('admin123')
      cy.get('button[type="submit"]').click()

       cy.url().should('include', '/login')
       cy.contains('Required').should('be.visible')
    })

     it ('TC-LOGIN-005 - Login menggunakan password yang kosong', () =>{
      cy.get('input[name="username"]').type('Admin')
      cy.get('button[type="submit"]').click()

      
       cy.contains('Required').should('be.visible')
    })

    it('TC-LOGIN-006 - Login menggunakan Username dan Password kosong', () => {

        cy.get('button[type="submit"]').click()

        cy.get('.oxd-input-field-error-message').should('have.length', 2)

    })

    it('TC-LOGIN-007 - Verifikasi fitur forgot password', () => {

        cy.get('.orangehrm-login-forgot-header').click()

        cy.intercept('GET', '**/auth/requestPasswordResetCode')
    .as('forgotPassword')

        cy.url().should('include', '/requestPasswordResetCode')
        cy.contains('Reset Password').should('be.visible')

    })

    
    it('TC-LOGIN-008 - Login tanpa Authentikasi', () => {
      cy.intercept('GET', '**/dashboard/**')
    .as('dashboardRequest')
       cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
       cy.wait('@dashboardRequest')
       cy.url().should('include', '/auth/login')

    })
})