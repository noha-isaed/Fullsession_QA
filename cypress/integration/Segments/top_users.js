
/// <reference types="cypress" />

describe('Top Users Card' , () => {

    // it('Ckeck Refresh Icon' , ()=> {

    //         const token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Im50VzVuOFNXdGk4SFBIWXU3eklnMyJ9.eyJuaWNrbmFtZSI6ImhhbWVkYWJkZWxoYXEiLCJuYW1lIjoiaGFtZWRhYmRlbGhhcUBnbWFpbC5jb20iLCJwaWN0dXJlIjoiaHR0cHM6Ly9zLmdyYXZhdGFyLmNvbS9hdmF0YXIvMjU0YmM2Nzg5MjRmZjc5MDIwOGRhMGVhMTUxZjY2YjU_cz00ODAmcj1wZyZkPWh0dHBzJTNBJTJGJTJGY2RuLmF1dGgwLmNvbSUyRmF2YXRhcnMlMkZoYS5wbmciLCJ1cGRhdGVkX2F0IjoiMjAyMS0xMC0xMVQwNjowMDoxMi43NTRaIiwiZW1haWwiOiJoYW1lZGFiZGVsaGFxQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJpc3MiOiJodHRwczovL2Rldi1mdWxsc2Vzc2lvbi51cy5hdXRoMC5jb20vIiwic3ViIjoiYXV0aDB8NjBmZDEyZjdkMDU2NzUwMDcwZDk1OWU3IiwiYXVkIjoiczVzeDFONnhlOG9sZGVmb1JSV09CV1FEeno0UEdkODMiLCJpYXQiOjE2MzM5MzIwMTIsImV4cCI6MTYzMzk2ODAxMn0.Uj5823mR_hJ-qbaFani_z_RH23-Bd_qg3syDx5tb-iWZzKJOsybgti1lv9ZHwHB6VwvgLoR8HMAuO7DQWfT9i_Q9ptiMVOMr6P4KJoFzc6nENoUa9tva3LeJhcXZki4mNlsZ0r8Vfhl8Kc82g05p6YfHEcSbDUf8_nTRma3s1sGNevMYMqeo352uwVcw9HvLo1Ijz4g2VhTIDTaATVUOxGMDlHRhazS4a1mCRpPTnHm6S-pDF-poAlz0IuYXFM2JrvANTTWjYeeFzapadFZ9Y_-UHj3Wv6TUHunJawqrq8ypA8JQptQJQl0W2jxp0uqVdYKa-IzwLGH4lhL-fATeYw'
    //         const authorization = `Bearer ${ token }`;

    //         cy.visit('https://test.fullsession.io/login');
    //         cy.wait(2000);
    //         cy.url().should ('eq' , "https://test.fullsession.io/login");
    //         cy.get('[formcontrolname="username"]').focus().type('hamedabdelhaq@gmail.com');
    //         cy.wait(1000);
    //         cy.get('[formcontrolname="password"]').focus().type('test@FS21');
    //         cy.wait(1000);
    //         cy.get('button.form-control').should('be.visible').click();
    //         cy.wait(5000) ;

    //         cy.url().should ('eq' , "https://test.fullsession.io/insights");
    //         cy.get('top-users > .user-sessions > .header > .right > .refresh > fs-clock').should('be.visible').click();
    //         cy.wait(2000)

    //         cy.request({
    //           method: 'POST',
    //           url: 'https://test.fullsession.io/v1/sessions/getTopUsers',
    //           body: {
    //               "size": 4,
    //               "customerID": "krivsgmdqk",
    //               "siteID": "krivvr1rtzc",
    //               "JSONquery": {
    //                 "startTime": [
    //                   {
    //                     "from": 1633327213736,
    //                     "to": 1633932013752
    //                   }
    //                 ]
    //               }
    //           } ,
    //           headers: {
    //               authorization,
    //             }

    //     }).then((response) => {
    //                   expect(response.body).has.property('status', 201);
    //                   expect(response.body).has.property('message', 'success');
    //                   expect(response.body).to.have.property('data')
    //                   const array = response.body.data ; 
    //                   cy.get(":nth-child(1) > .item-left > .visitorid").invoke('text').then((text) => {
    //                     expect(text).to.include(array[0].key)
    //                   })
    //                   cy.get(":nth-child(2) > .item-left > .visitorid").invoke('text').then((text) => {
    //                     expect(text).to.include(array[1].key)                      
    //                   })
    //                   cy.get(":nth-child(3) > .item-left > .visitorid").invoke('text').then((text) => {
    //                     expect(text).to.include(array[2].key)                      
    //                   })
    //                   cy.get(":nth-child(4) > .item-left > .visitorid").invoke('text').then((text) => {
    //                     expect(text).to.include(array[3].key)                      
    //                   })
    //       })
    // })


    // it('Ckeck Full Width Icon' , ()=> {

    //     cy.visit('https://test.fullsession.io/login');
    //     cy.wait(2000);
    //     cy.url().should ('eq' , "https://test.fullsession.io/login");
    //     cy.get('[formcontrolname="username"]').focus().type('hamedabdelhaq@gmail.com');
    //     cy.wait(1000);
    //     cy.get('[formcontrolname="password"]').focus().type('test@FS21');
    //     cy.wait(1000);
    //     cy.get('button.form-control').should('be.visible').click();
    //     cy.wait(20000) ;

    //     cy.url().should ('eq' , "https://test.fullsession.io/insights");

    //     cy.get('top-users > .user-sessions > .header > .right > .zoom-in > fs-full-size > .clickable').should('be.visible').click();
    //     cy.wait(4000);
    //     cy.get('#cdk-overlay-0 > .ng-trigger').should('have.css' , 'color' , 'rgba(0, 0, 0, 0.85)')
    //     cy.get('top-users > .user-sessions').should('be.visible')
    //     cy.get('top-users > .user-sessions > .header > .right > .refresh > fs-clock > svg').last().should('be.visible').click();
    //     cy.wait(2000)
        
    //     cy.get("top-users > .user-sessions > .content > .list > :nth-child(1) > .item-left").last().find('.visitorid').invoke('text').then((text) => {
    //         cy.get(' top-users > .user-sessions > .content > .list > :nth-child(1)').last().should('be.visible').click();
    //         cy.wait(9000)
    //         cy.url().should ('eq' , "https://test.fullsession.io/insights/playlist");  
    //         cy.get('.modal').should('be.visible')
    //         cy.get('.primary > .ant-select-selector > .ant-select-selection-item').should('be.visible').should("include.text" , "User ID")
    //         cy.get('.input-container > .group-input > .fs-form-control').should('be.visible').should('have.value' , text.trim())

    //         cy.get('.go-back ').click();
    //         cy.url().should ('eq' , "https://test.fullsession.io/insights");  
    //     });
        
    //     cy.get(' top-users > .user-sessions > .header > .right > .zoom-in > fs-full-size > .clickable').last().should('be.visible').click();
    //     cy.get('top-users > .user-sessions').last().not().should('be.visible')

    // })

    it('Ckeck Click ON UserId' , ()=> {

        const token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Im50VzVuOFNXdGk4SFBIWXU3eklnMyJ9.eyJuaWNrbmFtZSI6ImhhbWVkYWJkZWxoYXEiLCJuYW1lIjoiaGFtZWRhYmRlbGhhcUBnbWFpbC5jb20iLCJwaWN0dXJlIjoiaHR0cHM6Ly9zLmdyYXZhdGFyLmNvbS9hdmF0YXIvMjU0YmM2Nzg5MjRmZjc5MDIwOGRhMGVhMTUxZjY2YjU_cz00ODAmcj1wZyZkPWh0dHBzJTNBJTJGJTJGY2RuLmF1dGgwLmNvbSUyRmF2YXRhcnMlMkZoYS5wbmciLCJ1cGRhdGVkX2F0IjoiMjAyMS0xMC0xMVQwNjowMDoxMi43NTRaIiwiZW1haWwiOiJoYW1lZGFiZGVsaGFxQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJpc3MiOiJodHRwczovL2Rldi1mdWxsc2Vzc2lvbi51cy5hdXRoMC5jb20vIiwic3ViIjoiYXV0aDB8NjBmZDEyZjdkMDU2NzUwMDcwZDk1OWU3IiwiYXVkIjoiczVzeDFONnhlOG9sZGVmb1JSV09CV1FEeno0UEdkODMiLCJpYXQiOjE2MzM5MzIwMTIsImV4cCI6MTYzMzk2ODAxMn0.Uj5823mR_hJ-qbaFani_z_RH23-Bd_qg3syDx5tb-iWZzKJOsybgti1lv9ZHwHB6VwvgLoR8HMAuO7DQWfT9i_Q9ptiMVOMr6P4KJoFzc6nENoUa9tva3LeJhcXZki4mNlsZ0r8Vfhl8Kc82g05p6YfHEcSbDUf8_nTRma3s1sGNevMYMqeo352uwVcw9HvLo1Ijz4g2VhTIDTaATVUOxGMDlHRhazS4a1mCRpPTnHm6S-pDF-poAlz0IuYXFM2JrvANTTWjYeeFzapadFZ9Y_-UHj3Wv6TUHunJawqrq8ypA8JQptQJQl0W2jxp0uqVdYKa-IzwLGH4lhL-fATeYw'
        const authorization = `Bearer ${ token }`;

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

        
        cy.get(":nth-child(1) > .item-left > .visitorid").invoke('text').then((text) => {
            cy.get(' top-users > .user-sessions > .content > .list > :nth-child(1)').should('be.visible').click();
            cy.wait(9000)
            cy.url().should ('eq' , "https://test.fullsession.io/insights/playlist");  
            cy.get('.modal').should('be.visible')
            cy.get('.primary > .ant-select-selector > .ant-select-selection-item').should('be.visible').should("include.text" , "User ID")
            cy.get('.input-container > .group-input > .fs-form-control').should('be.visible').should('have.value' , text.trim())

            cy.request({
              method: 'POST',
              url: 'https://test.fullsession.io/v1/sessions/getTopUsers',
              body: {
                  "size": 4,
                  "customerID": "krivsgmdqk",
                  "siteID": "krivvr1rtzc",
                  "JSONquery": {
                    "userId": [
                      {
                        "expression": false,
                        "operation": "is",     
                         "text": text.trim()
                      }
                    ],
                    "startTime": [
                      {
                        "from": 1633327213736,
                        "to": 1633932013752
                      }
                    ]
                  }
              } ,
              headers: {
                  authorization,
                }

        }).then((response) => {
                      expect(response.body).has.property('status', 201);
                      expect(response.body).has.property('message', 'success');
                      expect(response.body).to.have.property('data')
                      expect(response.body.data[0].key).to.include(text.trim())

          })

            cy.get('.go-back ').click();
            cy.url().should ('eq' , "https://test.fullsession.io/insights");  
        });

        cy.get('fs-bold-close > svg').should('be.visible').click();
        cy.get("top-users > .user-sessions > .content > .list > :nth-child(2) > .item-left").should('be.visible')
        cy.get("top-users > .user-sessions > .content > .list > :nth-child(3) > .item-left").should('be.visible')
        cy.get("top-users > .user-sessions > .content > .list > :nth-child(4) > .item-left").should('be.visible')

    })

})