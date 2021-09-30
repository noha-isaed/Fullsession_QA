
/// <reference types="cypress" />

describe('SignUp' , () => {
    
    it('Settings Step' , () => {

        cy.visit('https://test.fullsession.io/login');
        cy.url().should ('eq' , "https://test.fullsession.io/login");
        cy.get('[formcontrolname="username"]').focus().type('nohathaher29@gmail.com');
        cy.wait(1000);
        cy.get('[formcontrolname="password"]').focus().type('test@FS21');
        cy.wait(1000);
        cy.get('button.form-control').should('be.visible').click();
        cy.wait(80000);
        cy.url().should('eq' ,"https://test.fullsession.io/registration/steps" );
        cy.wait(2000);

        cy.get(':nth-child(1) > step-title > .container > .content > .title-icon > .title').should("include.text" , "Settings").should('have.css', 'color', 'rgb(0, 0, 0)');
        cy.get(':nth-child(2) > step-title > .container > .content > .title-icon > .title').should("include.text" , "Add Website").should('have.css', 'color', 'rgb(230, 60, 52)');
        cy.get(':nth-child(3) > step-title > .container > .content > .title-icon > .title').should("include.text" , "Install Code").should('have.css', 'color', 'rgb(230, 60, 52)');
        cy.get(':nth-child(4) > step-title > .container > .content > .title-icon > .title').should("include.text" , "Invite Team").should('have.css', 'color', 'rgb(230, 60, 52)');

        cy.get('.main').should('includ.test' , 'Welcome to FullSession');
 
  
    })


    })