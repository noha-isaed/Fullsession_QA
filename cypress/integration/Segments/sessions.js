
/// <reference types="cypress" />

describe('Session Playlist Card' , () => {

    // it('Ckeck Refresh Icon' , ()=> {
    //     const token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Im50VzVuOFNXdGk4SFBIWXU3eklnMyJ9.eyJuaWNrbmFtZSI6ImhhbWVkYWJkZWxoYXEiLCJuYW1lIjoiaGFtZWRhYmRlbGhhcUBnbWFpbC5jb20iLCJwaWN0dXJlIjoiaHR0cHM6Ly9zLmdyYXZhdGFyLmNvbS9hdmF0YXIvMjU0YmM2Nzg5MjRmZjc5MDIwOGRhMGVhMTUxZjY2YjU_cz00ODAmcj1wZyZkPWh0dHBzJTNBJTJGJTJGY2RuLmF1dGgwLmNvbSUyRmF2YXRhcnMlMkZoYS5wbmciLCJ1cGRhdGVkX2F0IjoiMjAyMS0xMC0xMlQxNzoxNTo0MS4zNTVaIiwiZW1haWwiOiJoYW1lZGFiZGVsaGFxQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJpc3MiOiJodHRwczovL2Rldi1mdWxsc2Vzc2lvbi51cy5hdXRoMC5jb20vIiwic3ViIjoiYXV0aDB8NjBmZDEyZjdkMDU2NzUwMDcwZDk1OWU3IiwiYXVkIjoiczVzeDFONnhlOG9sZGVmb1JSV09CV1FEeno0UEdkODMiLCJpYXQiOjE2MzQwNTg5NDEsImV4cCI6MTYzNDA5NDk0MX0.ZLiODjHtuzAgTdfaQEPf2823RvnlFfbvXg-mprPJqq746NuiirhkVxIumw0zbLR4yw0aIxxgEnOirAAJcmdAI_vzhr5PHe84av-5JKtR2NBypXcHRdpdLxh-7R2NL9J9wBheA0xIPA6mjLmIugfxgNqmfh_DTfnFTjwkreBO_jyi9xxakHLUeop8TZMmGG0snqcj6uODgmwkOoOiXTX7QHiKSjZQYec3q9nfc5GLWW6fF_Z25SjdtkheqTOym6NB7KL1mpq4LjuYJuUygCrDOJp2-t_AIoTqnEMGKJqancpXAwGxRF7fUj73IJBnfIdgxrVi6z_DGGDhtVVGvTe5wQ'
    //     const authorization = `Bearer ${ token }`;
    //     var option1 = {month: 'short', day: 'numeric' };
    //     var option2 = {month: 'short', day: 'numeric' ,hour: 'numeric' , minute: 'numeric' ,hour12: true };
    //     var option3 = {minute: 'numeric', second: 'numeric' };


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
    //     cy.get('users-card > .user-sessions > .header > .right > .refresh > fs-clock > svg').should('be.visible').click();
    //     cy.wait(2000)

    //     cy.request({
    //         method: 'POST',
    //         url: 'https://test.fullsession.io/v1/sessions/getUsersCard',
    //         body: {
    //             "size": 5,
    //             "customerID": "krivsgmdqk",
    //             "siteID": "krivvr1rtzc",
    //             "userId": "auth0|60fd12f7d056750070d959e7",
    //             "JSONquery": {
    //               "startTime": [
    //                 {
    //                   "from": 1633456840254
    //                 }
    //               ]
    //             }
    //         } ,
    //         headers: {
    //             authorization,
    //           }

    //   }).then((response) => {
    //                 expect(response.body).has.property('status', 201);
    //                 expect(response.body).has.property('message', 'success');
    //                 expect(response.body).to.have.property('data')
    //                 const array = response.body.data.playlist ; 

    //                 cy.get(":nth-child(4) > .item-right").invoke('text').then((text) => {
    //                   const item_right_data =  array[3].country +"  "+ array[3].device + " · " + array[3].os
    //                   expect(text.trim()).to.include(item_right_data)  
    //                 })
    //                 cy.get(":nth-child(4) > .item-left > .two-line").invoke('text').then((text) => {
    //                     const date = (new Date (array[3].userCreationDate)).toLocaleDateString("en-US", option1);
    //                     const item_right_data =  (array[3].userId) +"  SINCE "+ date;
    //                     expect(text.trim()).to.include(item_right_data)  
    //                 })
    //                 cy.get(":nth-child(4) > .item-middle > .two-line > .last-session-date").invoke('text').then((text) => {
    //                   const start_date = (new Date (array[3].startTime)).toLocaleDateString("en-US", option2);
    //                   expect(text.trim()).to.include(start_date)  
    //               })
    //               cy.get(":nth-child(4) > .item-middle > .two-line > .under-time > :nth-child(1)").invoke('text').then((text) => {
    //                   expect(text.trim()).to.include(array[3].eventsCount+ " events")  
    //             })
                    
    //     })

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
    //     cy.wait(120000) ;

    //     cy.url().should ('eq' , "https://test.fullsession.io/insights");

    //     cy.get('users-card > .user-sessions > .header > .right > .zoom-in > fs-full-size > .clickable').should('be.visible').click();
    //     cy.wait(4000);
    //     cy.url().should ('eq' , "https://test.fullsession.io/insights/playlist");

    //     cy.get('.go-back ').click();
    //     cy.url().should ('eq' , "https://test.fullsession.io/insights");  

    // })

    // it('Ckeck Video Icon In The Session' , ()=> {

    //     cy.visit('https://test.fullsession.io/login');
    //     cy.wait(2000);
    //     cy.url().should ('eq' , "https://test.fullsession.io/login");
    //     cy.get('[formcontrolname="username"]').focus().type('hamedabdelhaq@gmail.com');
    //     cy.wait(1000);
    //     cy.get('[formcontrolname="password"]').focus().type('test@FS21');
    //     cy.wait(1000);
    //     cy.get('button.form-control').should('be.visible').click();
    //     cy.wait(120000) ;

    //     cy.url().should ('eq' , "https://test.fullsession.io/insights"); 

        
    //     cy.get(":nth-child(1) > .item-left > .two-line ").find('.visitor-id').invoke('text').then((text) => {

    //         cy.get('.btn > .icon > fs-plus > svg').should('be.visible').click();
    //         cy.get('[ng-reflect-filter-name="userId"] > .container > .text').should('be.visible').click();
    //         cy.get('.group-input > .fs-form-control').focus().type(text.trim());    
    //         cy.get('.input-container').click();      
    //        cy.wait(2000)
    //         cy.get('.container > .meta').should('include.text' , '1-1 of 1 People');
    //         cy.get('fs-play-border > svg').should('be.visible').click();

    //         cy.wait(120000)
    //         cy.url().should('include', text.trim()) 
    //         cy.get('.back').should('be.visible').click();
    //         cy.wait(20000)
    //         cy.url().should ('eq' , "https://test.fullsession.io/insights");  
    //     });

    // })

    // it('Ckeck API When Using One Filter' , ()=> {
    //     const token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Im50VzVuOFNXdGk4SFBIWXU3eklnMyJ9.eyJuaWNrbmFtZSI6ImhhbWVkYWJkZWxoYXEiLCJuYW1lIjoiaGFtZWRhYmRlbGhhcUBnbWFpbC5jb20iLCJwaWN0dXJlIjoiaHR0cHM6Ly9zLmdyYXZhdGFyLmNvbS9hdmF0YXIvMjU0YmM2Nzg5MjRmZjc5MDIwOGRhMGVhMTUxZjY2YjU_cz00ODAmcj1wZyZkPWh0dHBzJTNBJTJGJTJGY2RuLmF1dGgwLmNvbSUyRmF2YXRhcnMlMkZoYS5wbmciLCJ1cGRhdGVkX2F0IjoiMjAyMS0xMC0xNFQwNjo0NjoyNi40OTdaIiwiZW1haWwiOiJoYW1lZGFiZGVsaGFxQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJpc3MiOiJodHRwczovL2Rldi1mdWxsc2Vzc2lvbi51cy5hdXRoMC5jb20vIiwic3ViIjoiYXV0aDB8NjBmZDEyZjdkMDU2NzUwMDcwZDk1OWU3IiwiYXVkIjoiczVzeDFONnhlOG9sZGVmb1JSV09CV1FEeno0UEdkODMiLCJpYXQiOjE2MzQxOTM5ODYsImV4cCI6MTYzNDIyOTk4Nn0.cF0aJsgJjLoGWYXfuhGMW8D0ZsMlZLrbcjvhLAUJLzBShzSIx5s6U136ZJvBFeJkBWbNyX9w39I074KYGe98C_XT9XqliZjdath2mgsg258ySsMY7g6xbe2oCbQMpMQK1Lp6chwY4OGohqdveAF5oaK96gBSsnkx44FNZ2xBqxBwUk_0Z10ceDDEIP7uHfYI2s7m-HJC3js7YWkJjjelcgZ_UhVFLqroEC_8eYy7bUk8EQZTG0RJCu4Z2r1e1uRoZGlB3Xlm-MMbv-RHRPnveBxNTm66VsdyC2rQnK_tmua3NGzXh15AP7llCm_c-GXiqGhYloL4YTM45xw4md4Dew'
    //     const authorization = `Bearer ${ token }`;

    //     cy.visit('https://test.fullsession.io/login');
    //     cy.wait(2000);
    //     cy.url().should ('eq' , "https://test.fullsession.io/login");
    //     cy.get('[formcontrolname="username"]').focus().type('hamedabdelhaq@gmail.com');
    //     cy.wait(1000);
    //     cy.get('[formcontrolname="password"]').focus().type('test@FS21');
    //     cy.wait(1000);
    //     cy.get('button.form-control').should('be.visible').click();
    //     cy.wait(80000) ;

    //     cy.url().should ('eq' , "https://test.fullsession.io/insights"); 

    //     cy.get('.btn > .icon > fs-plus > svg').should('be.visible').click();
    //     cy.get('[ng-reflect-filter-name="device"] > .container > .text').should('be.visible').click();
    //     cy.get('.group-input > .fs-form-control').focus().type('tablet');   
    //     cy.get('.input-container').click();
    //     cy.wait(5000)
    //     cy.request({
    //                 method: 'POST',
    //                 url: 'https://test.fullsession.io/v1/sessions/getUsersCard',
    //                 body: {
    //                     "size": 5,
    //                     "customerID": "krivsgmdqk",
    //                     "siteID": "krivvr1rtzc",
    //                     "userId": "auth0|60fd12f7d056750070d959e7",
    //                     "JSONquery": {
    //                       "device": [
    //                         {
    //                             "expression": false,
    //                             "operation": "is",
    //                             "text": "tablet"
    //                         }
    //                         ],
    //                       "startTime": [
    //                         {
    //                           "from": 1633590004797
    //                         }
    //                       ]
    //                     }
    //                 } ,
    //                 headers: {
    //                     authorization,
    //                   }
        
    //           }).then((response) => {
    //             cy.wait(2000)
    //             expect(response.body).has.property('status', 201);
    //             expect(response.body).has.property('message', 'success');
    //             expect(response.body).to.have.property('data')
    //             const array = response.body.data ; 
                
    //               cy.get(".container > .meta ").invoke('text').then((text) => {
    //                  if(array.count > 5) {
    //                    expect(text.trim()).to.include("1-5 of "+ array.count +" People")  
                     
    //                  }else if(array.count <= 5){
    //                   expect(text.trim()).to.include("1-"+array.count+" of "+ array.count+" People")  
    //                 }
    //               })   

    //               cy.get(".container > .meta ").invoke('text').then((text) => {
    //                 for(var i =1 ; i <= array.playlist.length ; i++){
    //                    cy.get(":nth-child("+i+") > .item-right > .under-country > .device").invoke('text').then((text) => {
    //                       expect(text.trim()).to.include("tablet")  
    //                 })
    //               }       
    //             }) 
    //             })


    // })


    it('Ckeck API When Using Multiple Filter' , ()=> {
      const token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Im50VzVuOFNXdGk4SFBIWXU3eklnMyJ9.eyJuaWNrbmFtZSI6ImhhbWVkYWJkZWxoYXEiLCJuYW1lIjoiaGFtZWRhYmRlbGhhcUBnbWFpbC5jb20iLCJwaWN0dXJlIjoiaHR0cHM6Ly9zLmdyYXZhdGFyLmNvbS9hdmF0YXIvMjU0YmM2Nzg5MjRmZjc5MDIwOGRhMGVhMTUxZjY2YjU_cz00ODAmcj1wZyZkPWh0dHBzJTNBJTJGJTJGY2RuLmF1dGgwLmNvbSUyRmF2YXRhcnMlMkZoYS5wbmciLCJ1cGRhdGVkX2F0IjoiMjAyMS0xMC0xNFQwNjo0NjoyNi40OTdaIiwiZW1haWwiOiJoYW1lZGFiZGVsaGFxQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJpc3MiOiJodHRwczovL2Rldi1mdWxsc2Vzc2lvbi51cy5hdXRoMC5jb20vIiwic3ViIjoiYXV0aDB8NjBmZDEyZjdkMDU2NzUwMDcwZDk1OWU3IiwiYXVkIjoiczVzeDFONnhlOG9sZGVmb1JSV09CV1FEeno0UEdkODMiLCJpYXQiOjE2MzQxOTM5ODYsImV4cCI6MTYzNDIyOTk4Nn0.cF0aJsgJjLoGWYXfuhGMW8D0ZsMlZLrbcjvhLAUJLzBShzSIx5s6U136ZJvBFeJkBWbNyX9w39I074KYGe98C_XT9XqliZjdath2mgsg258ySsMY7g6xbe2oCbQMpMQK1Lp6chwY4OGohqdveAF5oaK96gBSsnkx44FNZ2xBqxBwUk_0Z10ceDDEIP7uHfYI2s7m-HJC3js7YWkJjjelcgZ_UhVFLqroEC_8eYy7bUk8EQZTG0RJCu4Z2r1e1uRoZGlB3Xlm-MMbv-RHRPnveBxNTm66VsdyC2rQnK_tmua3NGzXh15AP7llCm_c-GXiqGhYloL4YTM45xw4md4Dew'
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

      cy.get('.btn > .icon > fs-plus > svg').should('be.visible').click();
      cy.get('[ng-reflect-filter-name="device"] > .container > .text').should('be.visible').click();
      cy.get('[ng-reflect-key="1"] > .container > .input-container >.group-input > .fs-form-control').focus().type('tablet');   
      cy.get('[ng-reflect-key="1"] > .container >.input-container').click();
      cy.wait(2000)
      cy.get(':nth-child(1) > .btn').click();
      cy.get('[ng-reflect-filter-name="os"] > .container > .text').should('be.visible').click();
      cy.get('[ng-reflect-key="2"] > .container > .input-container > .group-input > .fs-form-control').focus().type('ios');   
      cy.get('[ng-reflect-key="2"] > .container > .input-container').click();
      cy.wait(5000)
      cy.request({
                  method: 'POST',
                  url: 'https://test.fullsession.io/v1/sessions/getUsersCard',
                  body: {
                      "size": 5,
                      "customerID": "krivsgmdqk",
                      "siteID": "krivvr1rtzc",
                      "userId": "auth0|60fd12f7d056750070d959e7",
                      "JSONquery": {
                        "device": [
                          {
                              "expression": false,
                              "operation": "is",
                              "text": "tablet"
                          }
                          ],
                          "os": [
                            {
                                "expression": false,
                                "operation": "is",
                                "text": "ios"
                            }
                            ],
                        "startTime": [
                          {
                            "from": 1633595893049
                          }
                        ]
                      }
                  } ,
                  headers: {
                      authorization,
                    }
      
            }).then((response) => {
              cy.wait(3000)
              expect(response.body).has.property('status', 201);
              expect(response.body).has.property('message', 'success');
              expect(response.body).to.have.property('data')
              const array = response.body.data ; 
              

                cy.get(".container > .meta ").invoke('text').then((text) => {
                   if(array.count > 5) {
                     expect(text.trim()).to.include("1-5 of "+ array.count +" People")  
                   
                   }else if(array.count <= 5){
                    expect(text.trim()).to.include("1-"+array.count+" of "+ array.count+" People")  
                  }
                })   

                cy.get(".container > .meta ").invoke('text').then((text) => {
                  for(var i =1 ; i <= array.playlist.length ; i++){
                     cy.get(":nth-child("+i+") > .item-right > .under-country > .device").invoke('text').then((text) => {
                        expect(text.trim()).to.include("tablet · iOS")  
                  })
                }       
              }) 
              })


  })

})