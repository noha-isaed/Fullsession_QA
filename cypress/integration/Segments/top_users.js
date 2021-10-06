
/// <reference types="cypress" />

describe('Top Users Card' , () => {

    it('Ckeck Refresh Icon' , ()=> {

        cy.visit('https://test.fullsession.io/login');
        cy.wait(2000);
        cy.url().should ('eq' , "https://test.fullsession.io/login");
        cy.get('[formcontrolname="username"]').focus().type('hamedabdelhaq@gmail.com');
        cy.wait(1000);
        cy.get('[formcontrolname="password"]').focus().type('test@FS21');
        cy.wait(1000);
        cy.get('button.form-control').should('be.visible').click();
        cy.wait(120000) ;

        cy.url().should ('eq' , "https://test.fullsession.io/insights");
        cy.get('top-users > .user-sessions > .header > .right > .refresh > fs-clock').should('be.visible').click();
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

        cy.get('top-users > .user-sessions > .header > .right > .zoom-in > fs-full-size > .clickable').should('be.visible').click();
        cy.wait(4000);
        cy.get('#cdk-overlay-0 > .ng-trigger').should('have.css' , 'color' , 'rgba(0, 0, 0, 0.85)')
        cy.get('top-users > .user-sessions').should('be.visible')
        cy.get('top-users > .user-sessions > .header > .right > .refresh > fs-clock > svg').last().should('be.visible').click();
        cy.wait(2000)
        
        cy.get("top-users > .user-sessions > .content > .list > :nth-child(1) > .item-left").last().find('.visitorid').invoke('text').then((text) => {
            cy.get(' top-users > .user-sessions > .content > .list > :nth-child(1)').last().should('be.visible').click();
            cy.wait(9000)
            cy.url().should ('eq' , "https://test.fullsession.io/insights/playlist");  
            cy.get('.modal').should('be.visible')
            cy.get('.primary > .ant-select-selector > .ant-select-selection-item').should('be.visible').should("include.text" , "User ID")
            cy.get('.input-container > .group-input > .fs-form-control').should('be.visible').should('have.value' , text.trim())

            cy.get('.go-back ').click();
            cy.url().should ('eq' , "https://test.fullsession.io/insights");  
        });
        
        cy.get(' top-users > .user-sessions > .header > .right > .zoom-in > fs-full-size > .clickable').last().should('be.visible').click();
        cy.get('top-users > .user-sessions').last().not().should('be.visible')

    })

    it('Ckeck Click ON UserId' , ()=> {

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

        
        cy.get("top-users > .user-sessions > .content > .list > :nth-child(1) > .item-left").find('.visitorid').invoke('text').then((text) => {
            cy.get(' top-users > .user-sessions > .content > .list > :nth-child(1)').should('be.visible').click();
            cy.wait(9000)
            cy.url().should ('eq' , "https://test.fullsession.io/insights/playlist");  
            cy.get('.modal').should('be.visible')
            cy.get('.primary > .ant-select-selector > .ant-select-selection-item').should('be.visible').should("include.text" , "User ID")
            cy.get('.input-container > .group-input > .fs-form-control').should('be.visible').should('have.value' , text.trim())

            cy.get('.go-back ').click();
            cy.url().should ('eq' , "https://test.fullsession.io/insights");  
        });

        cy.get('fs-bold-close > svg').should('be.visible').click();
        cy.get("top-users > .user-sessions > .content > .list > :nth-child(2) > .item-left").should('be.visible')
        cy.get("top-users > .user-sessions > .content > .list > :nth-child(3) > .item-left").should('be.visible')
        cy.get("top-users > .user-sessions > .content > .list > :nth-child(4) > .item-left").should('be.visible')

    })

})