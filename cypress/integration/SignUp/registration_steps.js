
/// <reference types="cypress" />

describe('Settings Step' , () => {
    
    it('Enter Just The First Name' , () => {

        cy.visit('https://test.fullsession.io/login');
        cy.url().should ('eq' , "https://test.fullsession.io/login");
        cy.get('[formcontrolname="username"]').focus().type('nohathaher2000@gmail.com');
        cy.wait(1000);
        cy.get('[formcontrolname="password"]').focus().type('test@FS21');
        cy.wait(1000);
        cy.get('button.form-control').should('be.visible').click();
        cy.wait(70000);
        cy.url().should('eq' ,"https://test.fullsession.io/registration/steps" );
        cy.wait(2000);

        cy.get(':nth-child(1) > step-title > .container > .content > .title-icon > .title').should("include.text" , "Settings").should('have.css', 'color', 'rgb(0, 0, 0)');
        cy.get(':nth-child(2) > step-title > .container > .content > .title-icon > .title').should("include.text" , "Add Website").should('have.css', 'color', 'rgb(230, 60, 52)');
        cy.get(':nth-child(3) > step-title > .container > .content > .title-icon > .title').should("include.text" , "Install Code").should('have.css', 'color', 'rgb(230, 60, 52)');
        cy.get(':nth-child(4) > step-title > .container > .content > .title-icon > .title').should("include.text" , "Invite Team").should('have.css', 'color', 'rgb(230, 60, 52)');

        cy.get('.main').should("include.text" , 'Welcome to FullSession');
        cy.get('.sub').should("include.text" , 'Let us Know more About your self');

        cy.get('.first-name > .ng-pristine').clear().type("Noha");
        cy.get('.next-button').should('be.visible').click();
        cy.get('.ng-pristine').should('have.css', 'border-color', 'rgb(230, 60, 53)');
        cy.get('.last-name > .error-container').should("include.text" , "Please enter your last name.").should('have.css', 'border-color', 'rgb(230, 60, 53)');
  
    })

       
    it('Enter Just The Last Name' , () => {

        cy.visit('https://test.fullsession.io/login');
        cy.url().should ('eq' , "https://test.fullsession.io/login");
        cy.get('[formcontrolname="username"]').focus().type('nohathaher2000@gmail.com');
        cy.wait(1000);
        cy.get('[formcontrolname="password"]').focus().type('test@FS21');
        cy.wait(1000);
        cy.get('button.form-control').should('be.visible').click();
        cy.wait(70000);
        cy.url().should('eq' ,"https://test.fullsession.io/registration/steps" );
        cy.wait(2000);

        cy.get(':nth-child(1) > step-title > .container > .content > .title-icon > .title').should("include.text" , "Settings").should('have.css', 'color', 'rgb(0, 0, 0)');
        cy.get(':nth-child(2) > step-title > .container > .content > .title-icon > .title').should("include.text" , "Add Website").should('have.css', 'color', 'rgb(230, 60, 52)');
        cy.get(':nth-child(3) > step-title > .container > .content > .title-icon > .title').should("include.text" , "Install Code").should('have.css', 'color', 'rgb(230, 60, 52)');
        cy.get(':nth-child(4) > step-title > .container > .content > .title-icon > .title').should("include.text" , "Invite Team").should('have.css', 'color', 'rgb(230, 60, 52)');

        cy.get('.main').should("include.text" , 'Welcome to FullSession');
        cy.get('.sub').should("include.text" , 'Let us Know more About your self');

        cy.get('.last-name > .ng-untouched').clear().type("Thaher");
        cy.get('.next-button').should('be.visible').click();
        cy.get('.ng-pristine').should('have.css', 'border-color', 'rgb(230, 60, 53)');
        cy.get('.first-name > .error-container').should("include.text" , "Please enter your first name.").should('have.css', 'border-color', 'rgb(230, 60, 53)');
  
    })

    it('Enter The First Name & The Last Name' , () => {

        cy.visit('https://test.fullsession.io/login');
        cy.url().should ('eq' , "https://test.fullsession.io/login");
        cy.get('[formcontrolname="username"]').focus().type('nohathaher2000@gmail.com');
        cy.wait(1000);
        cy.get('[formcontrolname="password"]').focus().type('test@FS21');
        cy.wait(1000);
        cy.get('button.form-control').should('be.visible').click();
        cy.wait(70000);
        cy.url().should('eq' ,"https://test.fullsession.io/registration/steps" );
        cy.wait(2000);

        cy.get(':nth-child(1) > step-title > .container > .content > .title-icon > .title').should("include.text" , "Settings").should('have.css', 'color', 'rgb(0, 0, 0)');
        cy.get(':nth-child(2) > step-title > .container > .content > .title-icon > .title').should("include.text" , "Add Website").should('have.css', 'color', 'rgb(230, 60, 52)');
        cy.get(':nth-child(3) > step-title > .container > .content > .title-icon > .title').should("include.text" , "Install Code").should('have.css', 'color', 'rgb(230, 60, 52)');
        cy.get(':nth-child(4) > step-title > .container > .content > .title-icon > .title').should("include.text" , "Invite Team").should('have.css', 'color', 'rgb(230, 60, 52)');

        cy.get('.main').should("include.text" , 'Welcome to FullSession');
        cy.get('.sub').should("include.text" , 'Let us Know more About your self');

        cy.get('.first-name > .ng-untouched').clear().type("Noha");
        cy.get('.last-name > .ng-untouched').clear().type("Thaher");
        cy.get('.next-button').should('be.visible').click();

        cy.get(':nth-child(1) > step-title > .container > .content > .title-icon > .title').should("include.text" , "Settings").should('have.css', 'color', 'rgb(0, 0, 0)');
        cy.get(':nth-child(2) > step-title > .container > .content > .title-icon > .title').should("include.text" , "Add Website").should('have.css', 'color', 'rgb(0, 0, 0)');
        cy.get(':nth-child(3) > step-title > .container > .content > .title-icon > .title').should("include.text" , "Install Code").should('have.css', 'color', 'rgb(230, 60, 52)');
        cy.get(':nth-child(4) > step-title > .container > .content > .title-icon > .title').should("include.text" , "Invite Team").should('have.css', 'color', 'rgb(230, 60, 52)');
  
    })

    })

    describe('Add Website Step' , () => {
    
        it('Enter URL Invalid ' , () => {
    
            cy.visit('https://test.fullsession.io/login');
            cy.url().should ('eq' , "https://test.fullsession.io/login");
            cy.get('[formcontrolname="username"]').focus().type('nohathaher2000@gmail.com');
            cy.wait(1000);
            cy.get('[formcontrolname="password"]').focus().type('test@FS21');
            cy.wait(1000);
            cy.get('button.form-control').should('be.visible').click();
            cy.wait(70000);
            cy.url().should('eq' ,"https://test.fullsession.io/registration/steps" );
            cy.wait(2000);
    
            cy.get(':nth-child(1) > step-title > .container > .content > .title-icon > .title').should("include.text" , "Settings").should('have.css', 'color', 'rgb(0, 0, 0)');
            cy.get(':nth-child(2) > step-title > .container > .content > .title-icon > .title').should("include.text" , "Add Website").should('have.css', 'color', 'rgb(0, 0, 0)');
            cy.get(':nth-child(3) > step-title > .container > .content > .title-icon > .title').should("include.text" , "Install Code").should('have.css', 'color', 'rgb(230, 60, 52)');
            cy.get(':nth-child(4) > step-title > .container > .content > .title-icon > .title').should("include.text" , "Invite Team").should('have.css', 'color', 'rgb(230, 60, 52)');
    
            cy.get('.main').should("include.text" , 'Where do you want to Install FullSession');
            cy.get('.sub').should("include.text" , 'Analyze user behavior on your website or web app');

            cy.get('.first-url > .ng-pristine').clear().type("fullsession");
            cy.get('.later').should("include.text" , "You’ll be able to add more URLs later if needed.");
            cy.get('.next-button').should('be.visible').click();

            cy.get('.first-url > .ng-pristine').should('have.css', 'border-color', 'rgb(230, 60, 53)');
            cy.get('.error-container').should("include.text" , "Please enter a correct URL.").should('have.css', 'border-color', 'rgb(230, 60, 53)');
      
        })
    
           
        it('Enter URL Valid' , () => {
    
            cy.visit('https://test.fullsession.io/login');
            cy.url().should ('eq' , "https://test.fullsession.io/login");
            cy.get('[formcontrolname="username"]').focus().type('nohathaher2000@gmail.com');
            cy.wait(1000);
            cy.get('[formcontrolname="password"]').focus().type('test@FS21');
            cy.wait(1000);
            cy.get('button.form-control').should('be.visible').click();
            cy.wait(70000);
            cy.url().should('eq' ,"https://test.fullsession.io/registration/steps" );
            cy.wait(2000);
    
            cy.get(':nth-child(1) > step-title > .container > .content > .title-icon > .title').should("include.text" , "Settings").should('have.css', 'color', 'rgb(0, 0, 0)');
            cy.get(':nth-child(2) > step-title > .container > .content > .title-icon > .title').should("include.text" , "Add Website").should('have.css', 'color', 'rgb(0, 0, 0)');
            cy.get(':nth-child(3) > step-title > .container > .content > .title-icon > .title').should("include.text" , "Install Code").should('have.css', 'color', 'rgb(230, 60, 52)');
            cy.get(':nth-child(4) > step-title > .container > .content > .title-icon > .title').should("include.text" , "Invite Team").should('have.css', 'color', 'rgb(230, 60, 52)');
    
            cy.get('.main').should("include.text" , 'Where do you want to Install FullSession');
            cy.get('.sub').should("include.text" , 'Analyze user behavior on your website or web app');

            cy.get('.first-url > .ng-pristine').clear().type("https://www.fullsession.io");
            cy.get('.later').should("include.text" , "You’ll be able to add more URLs later if needed.");
            cy.get('.next-button').should('be.visible').click();

            cy.get(':nth-child(1) > step-title > .container > .content > .title-icon > .title').should("include.text" , "Settings").should('have.css', 'color', 'rgb(0, 0, 0)');
            cy.get(':nth-child(2) > step-title > .container > .content > .title-icon > .title').should("include.text" , "Add Website").should('have.css', 'color', 'rgb(0, 0, 0)');
            cy.get(':nth-child(3) > step-title > .container > .content > .title-icon > .title').should("include.text" , "Install Code").should('have.css', 'color', 'rgb(0, 0, 0)');
            cy.get(':nth-child(4) > step-title > .container > .content > .title-icon > .title').should("include.text" , "Invite Team").should('have.css', 'color', 'rgb(230, 60, 52)');
      
        })
    
       
        })