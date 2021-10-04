/// <reference types="cypress" />

describe('SignUp' , () => {
    beforeEach(() => {
        cy.visit('https://test.fullsession.io/registration');
        cy.wait(2000);
      })

      it('Signup With Email Exist and Password Correct' , ()=> {
        cy.url().should('eq' , 'https://test.fullsession.io/registration');
        cy.wait(2000);
        cy.get(':nth-child(1) > .fs-form-control').clear().type("hamedabdelhaq@gmail.com");
        cy.wait(1000);
        cy.get(':nth-child(2) > .fs-form-control').clear().type("test@FS21");
        cy.wait(1000);
        cy.get('.button').should("include.text" , "SIGN UP FREE");
        cy.get('.button').should('be.visible').click();
        cy.wait(2000);
        cy.get('.server-error').should("include.text" , "This email already exist");
      })

      it('Signup With Email Not Exist and Password Incorrect' , ()=> {
        cy.url().should('eq' , 'https://test.fullsession.io/registration');
        cy.wait(2000);
        cy.get(':nth-child(1) > .fs-form-control').clear().type("thahernoha@gmail.com");
        cy.wait(1000);
        cy.get(':nth-child(2) > .fs-form-control').clear().type("test@fs21");
        cy.wait(1000);
        cy.get('p.error').should("include.text" , "Your password should contains at least the following");
        cy.get('ul.error > :nth-child(1)').should("include.text" , "Eight characters");
        cy.get('ul.error > :nth-child(2)').should("include.text" , "One lower case letter");
        cy.get('ul.error > :nth-child(3)').should("include.text" , "One upper case letter");
        cy.get('ul.error > :nth-child(4)').should("include.text" , "One number");
        cy.get('.button').should('not.be.disabled');
      })

      it('Signup With Email Not Exist and Password Correct' , ()=> {
        cy.url().should('eq' , 'https://test.fullsession.io/registration');
        cy.wait(2000);
        cy.get(':nth-child(1) > .fs-form-control').clear().type("nohathaher2000@gmail.com");
        cy.wait(1000);
        cy.get(':nth-child(2) > .fs-form-control').clear().type("test@FS21");
        cy.wait(1000);
        cy.get('.button').should("include.text" , "SIGN UP FREE");
        cy.get('.button').should('be.visible').click();
        cy.wait(40000);
        cy.url().should('eq' , 'https://test.fullsession.io/registration');
        cy.wait(2000);
        cy.get('.ant-result-title').should("include.text" , "Successfully Registered to FullSession!");
        cy.get('.ant-result-extra > :nth-child(1)').should("include.text" , "If you have not received a verification email, you can resend the verification email");
        // cy.get('.fs-form-control').should("include.text" , "nohathaher29@gmail.com");
        cy.wait(2000)
        cy.get('.next-button').should("include.text" , "Resend");
        cy.get('.next-button').should('be.visible').click();
        
      })

      it("Move To Login Page From Signup Page" , ()=> {
            cy.url().should('eq' , 'https://test.fullsession.io/registration');
            cy.wait(2000);
            cy.get('a').should('be.visible').click();
            cy.wait(4000);
            cy.url().should('eq' , "https://test.fullsession.io/login") ;
            cy.wait(2000);

      })


   
})