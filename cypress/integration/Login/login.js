/// <reference types="cypress" />

describe('Login ' , () => {

    beforeEach(() => {
        cy.visit('https://test.fullsession.io/login');
        cy.wait(2000);
      })
    
    it('Login If The Email Not Exist' , ()=> {
        cy.url().should ('eq' , "https://test.fullsession.io/login");
        cy.get('[formcontrolname="username"]').focus().type('thahernoha7@gmail.com');
        cy.wait(1000);
        cy.get('[formcontrolname="password"]').focus().type('test@FS21');
        cy.wait(1000);
        cy.get('button.form-control').should("include.text" , "Log in to FullSession");
        cy.get('button.form-control').should('be.visible').click();
        cy.get('.errormessage').should("include.text" , "Invalid username or password")
        cy.wait(1000) ;
    })

    it('Login If The Email Exist and Password Incorrect' , ()=> {
        cy.url().should ('eq' , "https://test.fullsession.io/login");
        cy.get('[formcontrolname="username"]').focus().type('hamedabdelhaq@gmail.com');
        cy.wait(1000);
        cy.get('[formcontrolname="password"]').focus().type('test@FS20');
        cy.wait(1000);
        cy.get('button.form-control').should("include.text" , "Log in to FullSession");
        cy.get('button.form-control').should('be.visible').click();
        cy.get('.errormessage').should("include.text" , "Invalid username or password")
        cy.wait(1000) ;
    })

    it('Login If The Email Exist and Password Correct' , ()=> {
        cy.url().should ('eq' , "https://test.fullsession.io/login");
        cy.get('[formcontrolname="username"]').focus().type('hamedabdelhaq@gmail.com');
        cy.wait(1000);
        cy.get('[formcontrolname="password"]').focus().type('test@FS21');
        cy.wait(1000);
        cy.get('button.form-control').should("include.text" , "Log in to FullSession");
        cy.get('button.form-control').should('be.visible').click();
        cy.wait(30000);
        cy.url().should('eq' ,"https://test.fullsession.io/insights" );
        cy.wait(2000);
    })

    
    it('Move To Signup Page From Ligin' , ()=> {
        cy.url().should ('eq' , "https://test.fullsession.io/login");
        cy.get('a').should('be.visible').click();
        cy.wait(4000);
        cy.url().should('eq' , "https://test.fullsession.io/registration") ;
        cy.wait(2000);
       
    })
})