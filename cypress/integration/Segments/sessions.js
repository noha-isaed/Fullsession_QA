
/// <reference types="cypress" />

describe('Session Playlist Card' , () => {

    it('Ckeck Refresh Icon' , ()=> {

        cy.visit('https://test.fullsession.io/login');
        cy.wait(2000);
        cy.url().should ('eq' , "https://test.fullsession.io/login");
        cy.get('[formcontrolname="username"]').focus().type('hamedabdelhaq@gmail.com');
        cy.wait(1000);
        cy.get('[formcontrolname="password"]').focus().type('test@FS21');
        cy.wait(1000);
        cy.get('button.form-control').should('be.visible').click();
        cy.wait(20000) ;

        cy.url().should ('eq' , "https://test.fullsession.io/insights");
        cy.get('users-card > .user-sessions > .header > .right > .refresh > fs-clock > svg').should('be.visible').click();
         cy.wait(2000)
    })


    it('Ckeck Full Width Icon' , ()=> {

        cy.visit('https://test.fullsession.io/login');
        cy.wait(2000);
        cy.url().should ('eq' , "https://test.fullsession.io/login");
        cy.get('[formcontrolname="username"]').focus().type('hamedabdelhaq@gmail.com');
        cy.wait(1000);
        cy.get('[formcontrolname="password"]').focus().type('test@FS21');
        cy.wait(1000);
        cy.get('button.form-control').should('be.visible').click();
        cy.wait(20000) ;

        cy.url().should ('eq' , "https://test.fullsession.io/insights");

        cy.get('users-card > .user-sessions > .header > .right > .zoom-in > fs-full-size > .clickable').should('be.visible').click();
        cy.wait(4000);
        cy.url().should ('eq' , "https://test.fullsession.io/insights/playlist");

        cy.get('.go-back ').click();
        cy.url().should ('eq' , "https://test.fullsession.io/insights");  


    })

    it('Ckeck Video Icon In The Session' , ()=> {

        cy.visit('https://test.fullsession.io/login');
        cy.wait(2000);
        cy.url().should ('eq' , "https://test.fullsession.io/login");
        cy.get('[formcontrolname="username"]').focus().type('hamedabdelhaq@gmail.com');
        cy.wait(1000);
        cy.get('[formcontrolname="password"]').focus().type('test@FS21');
        cy.wait(1000);
        cy.get('button.form-control').should('be.visible').click();
        cy.wait(20000) ;

        cy.url().should ('eq' , "https://test.fullsession.io/insights"); 

        
        cy.get(":nth-child(1) > .item-left > .two-line ").find('.visitor-id').invoke('text').then((text) => {

            cy.get('.btn').should('be.visible').click();
            cy.get('[ng-reflect-filter-name="userId"] > .container > .text').should('be.visible').click();
            cy.get('.group-input > .fs-form-control').focus().type(text.trim());    
            cy.get('.input-container').click();      

            cy.get('.container > .meta').should('include.text' , '1-1 of 1 People');
            cy.get('fs-play-border > svg').should('be.visible').click();

            cy.wait(7000)
            cy.url().should('include', text.trim()) 
            cy.get('.back').should('be.visible').click();
            cy.wait(20000)
            cy.url().should ('eq' , "https://test.fullsession.io/insights");  
        });

    })

})