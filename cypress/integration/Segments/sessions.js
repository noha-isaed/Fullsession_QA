
/// <reference types="cypress" />

describe('Session Playlist' , () => {

    it('Ckeck Refresh Icon' , ()=> {

        cy.visit('https://test.fullsession.io/login');
        cy.wait(2000);
        cy.url().should ('eq' , "https://test.fullsession.io/login");
        cy.get('[formcontrolname="username"]').focus().type('hamedabdelhaq@gmail.com');
        cy.wait(1000);
        cy.get('[formcontrolname="password"]').focus().type('test@FS21');
        cy.wait(1000);
        cy.get('button.form-control').should('be.visible').click();
        cy.wait(30000) ;

        cy.url().should ('eq' , "https://test.fullsession.io/insights");
        cy.get('users-card > .user-sessions > .header > .right > .refresh > fs-clock > svg').should('be.visible').click();

        cy.get('users-card > .user-sessions > .header > .right > .zoom-in > fs-full-size > .clickable').should('be.visible').click();
        cy.wait(2000);
        cy.url().should ('eq' , "https://test.fullsession.io/insights/playlist");

        cy.get('.go-back ').click();
        cy.url().should ('eq' , "https://test.fullsession.io/insights");


})

})