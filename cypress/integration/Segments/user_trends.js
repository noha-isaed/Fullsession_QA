/// <reference types="cypress" />


describe('User Trends Card' , () => {

    // it('Ckeck Refresh Icon' , ()=> {


    //         cy.visit('https://test.fullsession.io/login');
    //         cy.wait(2000);
    //         cy.url().should ('eq' , "https://test.fullsession.io/login");
    //         cy.get('[formcontrolname="username"]').focus().type('hamedabdelhaq@gmail.com');
    //         cy.wait(1000);
    //         cy.get('[formcontrolname="password"]').focus().type('test@FS21');
    //         cy.wait(1000);
    //         cy.get('button.form-control').should('be.visible').click();
    //         cy.wait(10000) ;
    //         cy.url().should ('eq' , "https://test.fullsession.io/insights");

    //         cy.get('user-trends > .user-sessions > .header > .right > .refresh > fs-clock > svg ').should('be.visible').click();
    //         cy.wait(2000)
    // })


    it('Ckeck Full Width Icon' , ()=> {
  
        cy.visit('https://test.fullsession.io/login');
        cy.wait(2000);
        cy.url().should ('eq' , "https://test.fullsession.io/login");
        cy.get('[formcontrolname="username"]').focus().type('hamedabdelhaq@gmail.com');
        cy.wait(1000);
        cy.get('[formcontrolname="password"]').focus().type('test@FS21');
        cy.wait(1000);
        cy.get('button.form-control').should('be.visible').click();
        cy.wait(10000) ;
  
        cy.url().should ('eq' , "https://test.fullsession.io/insights");
  
        cy.get('user-trends > .user-sessions > .header > .right > .zoom-in > fs-full-size > .clickable').click();
        cy.wait(4000);
        cy.get('#cdk-overlay-0 > .ng-trigger').should('have.css' , 'color' , 'rgba(0, 0, 0, 0.85)')
        cy.get('user-trends > .user-sessions').should('be.visible')
        cy.wait(2000)

        cy.get('user-trends > .user-sessions > .header > .right > .refresh > fs-clock > svg').last().should('be.visible').click();
      
        cy.get('user-trends > .user-sessions > :nth-child(1) > .right > .zoom-in > fs-full-size > .clickable').last().should('be.visible').click();
        cy.get('user-trends > .user-sessions').last().not().should('be.visible')

    })

})
