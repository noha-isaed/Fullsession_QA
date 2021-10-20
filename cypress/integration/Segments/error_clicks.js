/// <reference types="cypress" />

describe('Error Click Card' , () => {

    it('Ckeck Refresh Icon' , ()=> {

            const token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Im50VzVuOFNXdGk4SFBIWXU3eklnMyJ9.eyJuaWNrbmFtZSI6ImhhbWVkYWJkZWxoYXEiLCJuYW1lIjoiaGFtZWRhYmRlbGhhcUBnbWFpbC5jb20iLCJwaWN0dXJlIjoiaHR0cHM6Ly9zLmdyYXZhdGFyLmNvbS9hdmF0YXIvMjU0YmM2Nzg5MjRmZjc5MDIwOGRhMGVhMTUxZjY2YjU_cz00ODAmcj1wZyZkPWh0dHBzJTNBJTJGJTJGY2RuLmF1dGgwLmNvbSUyRmF2YXRhcnMlMkZoYS5wbmciLCJ1cGRhdGVkX2F0IjoiMjAyMS0xMC0yMFQxNzoyODoxNi45MjNaIiwiZW1haWwiOiJoYW1lZGFiZGVsaGFxQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJpc3MiOiJodHRwczovL2Rldi1mdWxsc2Vzc2lvbi51cy5hdXRoMC5jb20vIiwic3ViIjoiYXV0aDB8NjBmZDEyZjdkMDU2NzUwMDcwZDk1OWU3IiwiYXVkIjoiczVzeDFONnhlOG9sZGVmb1JSV09CV1FEeno0UEdkODMiLCJpYXQiOjE2MzQ3NTA4OTcsImV4cCI6MTYzNDc4Njg5N30.nx7hNpcgo8MNaMioq3Dd1cxz0OaDmQT9DH5gzL32spqi0fq_r-SsoTP2ySKhXFMhOYsHb_oYeX3umFcMUhlEnXfR-skIWMqC3p_XoRwesEFf-CYpXI-fN_H1XyfPCCSpywqP0dtYg8T0krHsofuH20JlIhhDN9KXiBhiVs_9Fx4MM_8UeLQX3oamHbylKALxKB8VIDlaQWDEvYhKIsei_wGczHwPSj8Ka23neDALwFXcZ6qTwpPJA4OnS8hAtdq9UQihQutDCkYmc89g1GMjz6CSEGhvlvN_hpHwSWlHHXLK9OZza-njM-QtB-xdC7JHCNiHuft25waNWQz3Nldxng'
             const authorization = `Bearer ${ token }`;

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

           

            cy.request({
              method: 'POST',
              url: 'https://test.fullsession.io/v1/sessions/getErrorDistributionCard',
              body: {
                  "customerID": "krivsgmdqk",
                  "siteID": "krivvr1rtzc",
                   "field": "noErrorEvents" ,
                   "searchAfterID": 0,
                   "size": 2 ,
                   "userId": "auth0|60fd12f7d056750070d959e7" ,
                  "JSONquery": {
                    "startTime": [
                      {
                        "from": 1634146235361,
                        "to": 1634751035447
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
                      const array = response.body.data ; 
                      cy.get("error-clicks > .user-sessions > :nth-child(3) > fs-histogram.ng-star-inserted > .container > .content > :nth-child(1) > .item-data > .meta-key > div").invoke('text').then((text) => {
                        expect(text.replace(/\s/g, '')).to.equal(array.buckets[0].key)
                      })
                      cy.get("error-clicks > .user-sessions > :nth-child(3) > fs-histogram.ng-star-inserted > .container > .content > :nth-child(2) > .item-data > .meta-key > div").invoke('text').then((text) => {
                        expect(text.replace(/\s/g, '')).to.equal(array.buckets[1].key)                      
                      })

                      cy.get("error-clicks > .user-sessions > :nth-child(3) > fs-histogram.ng-star-inserted > .container > .content > :nth-child(1) > .item-data > .meta-value > .value").invoke('text').then((text) => {
                        expect(text == array.buckets[0].sumClicks.value)
                      })
                      cy.get("error-clicks > .user-sessions > :nth-child(3) > fs-histogram.ng-star-inserted > .container > .content > :nth-child(2) > .item-data > .meta-value > .value").invoke('text').then((text) => {
                        expect(text == array.buckets[1].sumClicks.value)                      
                      })
                         cy.get("error-clicks > .user-sessions > :nth-child(3) > fs-histogram.ng-star-inserted > .container > .content > :nth-child(1) > .item-data > .meta-value > .percentage").last().invoke('text').then((text) => {
                           var num = (array.buckets[0].sumClicks.value/array.count)*100; 
                           expect(text.replace(/\s/g, '')).to.equal(Math.round (num)+ "%")
                      })
                      cy.get("error-clicks > .user-sessions > :nth-child(3) > fs-histogram.ng-star-inserted > .container > .content > :nth-child(2) > .item-data > .meta-value > .percentage").last().invoke('text').then((text) => {
                            var num = (array.buckets[1].sumClicks.value/array.count)*100; 
                            expect(text.replace(/\s/g, '')).to.equal(Math.round (num)+ "%")                     
                      })
                    
          })


          cy.get('error-clicks > .user-sessions > :nth-child(1) > .right > .refresh > fs-clock ').should('be.visible').click();
          cy.wait(2000)
    })


    it('Ckeck Full Width Icon' , ()=> {


      const token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Im50VzVuOFNXdGk4SFBIWXU3eklnMyJ9.eyJuaWNrbmFtZSI6ImhhbWVkYWJkZWxoYXEiLCJuYW1lIjoiaGFtZWRhYmRlbGhhcUBnbWFpbC5jb20iLCJwaWN0dXJlIjoiaHR0cHM6Ly9zLmdyYXZhdGFyLmNvbS9hdmF0YXIvMjU0YmM2Nzg5MjRmZjc5MDIwOGRhMGVhMTUxZjY2YjU_cz00ODAmcj1wZyZkPWh0dHBzJTNBJTJGJTJGY2RuLmF1dGgwLmNvbSUyRmF2YXRhcnMlMkZoYS5wbmciLCJ1cGRhdGVkX2F0IjoiMjAyMS0xMC0yMFQxNzozMzo1Mi43MTBaIiwiZW1haWwiOiJoYW1lZGFiZGVsaGFxQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJpc3MiOiJodHRwczovL2Rldi1mdWxsc2Vzc2lvbi51cy5hdXRoMC5jb20vIiwic3ViIjoiYXV0aDB8NjBmZDEyZjdkMDU2NzUwMDcwZDk1OWU3IiwiYXVkIjoiczVzeDFONnhlOG9sZGVmb1JSV09CV1FEeno0UEdkODMiLCJpYXQiOjE2MzQ3NTEyMzIsImV4cCI6MTYzNDc4NzIzMn0.h1Ma4YYA6WFE9gCgvva13MzJUZgr5S99MnspfnXGQeTlyLSFNCFX_8Kv6Rvcfn17NM_RS-crrKddbHVrDsyJ7KckxWV3BoNfWvJOCaCMMFH1Dbx8FZQSDa_LqwYd0g9ppDNXhszniBFhfvMqVK2wiekR2Y4QnprBB1_yUa-1HrOA65gzFdaBJNYg1b6ywv5FSxQxzPT34HhSKSCGNa565CN-kY2f7M8Nms2F8zUpbI5JcrRqpi7310zKUyQNyiJextNP52m-e0MSWwPlBQspDqDYhPmaesa8eu9cEkYVDy6SYikeuAda63kav3u9aiza8FCLys7zI5C103yzR93bKQ'
      const authorization = `Bearer ${ token }`;

      cy.visit('https://test.fullsession.io/login');
      cy.wait(2000);
      cy.url().should ('eq' , "https://test.fullsession.io/login");
      cy.get('[formcontrolname="username"]').focus().type('hamedabdelhaq@gmail.com');
      cy.wait(1000);
      cy.get('[formcontrolname="password"]').focus().type('test@FS21');
      cy.wait(1000);
      cy.get('button.form-control').should('be.visible').click();
      cy.wait(12000) ;

      cy.url().should ('eq' , "https://test.fullsession.io/insights");

      cy.get('error-clicks > .user-sessions > :nth-child(1) > .right > .zoom-in > fs-full-size > .clickable').click();
      cy.wait(4000);
      cy.get('#cdk-overlay-0 > .ng-trigger').should('have.css' , 'color' , 'rgba(0, 0, 0, 0.85)')
      cy.get('error-clicks > .user-sessions').should('be.visible')
      cy.wait(2000)

              cy.request({
              method: 'POST',
              url: 'https://test.fullsession.io/v1/sessions/getErrorDistributionCard',
              body: {
                  "customerID": "krivsgmdqk",
                  "siteID": "krivvr1rtzc",
                   "field": "noErrorEvents" ,
                   "searchAfterID": 0,
                   "size": 6 ,
                   "userId": "auth0|60fd12f7d056750070d959e7" ,
                  "JSONquery": {
                    "startTime": [
                      {
                        "from": 1634146433788,
                        "to": 1634751233847
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
                      const array = response.body.data ; 
                      cy.get("error-clicks > .user-sessions > :nth-child(3) > fs-histogram.ng-star-inserted > .container > .content > :nth-child(1) > .item-data > .meta-key > div").last().invoke('text').then((text) => {
                        expect(text.replace(/\s/g, '')).to.equal(array.buckets[0].key)
                      })
                      cy.get("error-clicks > .user-sessions > :nth-child(3) > fs-histogram.ng-star-inserted > .container > .content > :nth-child(6) > .item-data > .meta-key > div").last().invoke('text').then((text) => {
                        expect(text.replace(/\s/g, '')).to.equal(array.buckets[5].key)                      
                      })

                      cy.get("error-clicks > .user-sessions > :nth-child(3) > fs-histogram.ng-star-inserted > .container > .content > :nth-child(1) > .item-data > .meta-value > .value").last().invoke('text').then((text) => {
                        expect(text == array.buckets[0].sumClicks.value)
                      })
                      cy.get("error-clicks > .user-sessions > :nth-child(3) > fs-histogram.ng-star-inserted > .container > .content > :nth-child(6) > .item-data > .meta-value > .value").last().invoke('text').then((text) => {
                        expect(text == array.buckets[5].sumClicks.value)                      
                      })
                    
                      cy.get("error-clicks > .user-sessions > :nth-child(3) > fs-histogram.ng-star-inserted > .container > .content > :nth-child(1) > .item-data > .meta-value > .percentage").last().invoke('text').then((text) => {
                        var num = (array.buckets[0].sumClicks.value/array.count)*100; 
                        expect(text.replace(/\s/g, '')).to.equal(Math.round (num)+ "%")
                      })
                      cy.get("error-clicks > .user-sessions > :nth-child(3) > fs-histogram.ng-star-inserted > .container > .content > :nth-child(6) > .item-data > .meta-value > .percentage").last().invoke('text').then((text) => {
                        var num = (array.buckets[5].sumClicks.value/array.count)*100; 
                        expect(text.replace(/\s/g, '')).to.equal(Math.round (num)+ "%")                     
                      })
          })

      cy.get('error-clicks > .user-sessions > .header > .right > .refresh > fs-clock > svg').last().should('be.visible').click();
      
      cy.get(' error-clicks > .user-sessions > :nth-child(1) > .right > .zoom-in > fs-full-size > .clickable').last().should('be.visible').click();
      cy.get('error-clicks > .user-sessions').last().not().should('be.visible')

  })


//   it('Ckeck Click On URL' , ()=> {

//     const token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Im50VzVuOFNXdGk4SFBIWXU3eklnMyJ9.eyJuaWNrbmFtZSI6ImhhbWVkYWJkZWxoYXEiLCJuYW1lIjoiaGFtZWRhYmRlbGhhcUBnbWFpbC5jb20iLCJwaWN0dXJlIjoiaHR0cHM6Ly9zLmdyYXZhdGFyLmNvbS9hdmF0YXIvMjU0YmM2Nzg5MjRmZjc5MDIwOGRhMGVhMTUxZjY2YjU_cz00ODAmcj1wZyZkPWh0dHBzJTNBJTJGJTJGY2RuLmF1dGgwLmNvbSUyRmF2YXRhcnMlMkZoYS5wbmciLCJ1cGRhdGVkX2F0IjoiMjAyMS0xMC0xOFQwNjozODoyOC4xMTNaIiwiZW1haWwiOiJoYW1lZGFiZGVsaGFxQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJpc3MiOiJodHRwczovL2Rldi1mdWxsc2Vzc2lvbi51cy5hdXRoMC5jb20vIiwic3ViIjoiYXV0aDB8NjBmZDEyZjdkMDU2NzUwMDcwZDk1OWU3IiwiYXVkIjoiczVzeDFONnhlOG9sZGVmb1JSV09CV1FEeno0UEdkODMiLCJpYXQiOjE2MzQ1MzkxMDgsImV4cCI6MTYzNDU3NTEwOH0.ZZnoPSQ488WyTOsF1nS4hdic6al4XpVCErG89e6xetuNqTzF_aLVJ1oB9DTAjn-Rg5STkJOnDxQoPzqxKGkAbs1j5X0wcUxiilwr3z4ypRgB3tZ1JR4MLV2itRJ5SV35EmaWu_Gncl__qvE8FilO1cFO1cMtcVvYYSvYmHsczCoXagAQ25IeoLrN54woup8xnGZC3t3rcF6WX0bcUHoPMuhovb9vLAw0bGcI-nY6QPpVbLY8LDlJLsQjlIDa9tvPZMkieyJCeBNnxs3bvfHzRh8bLMDtrhxf-o7UbzKJgO9YVqyX6cBrt3SQJ6sFV4sNK0u9emOjKTRLGBYkdzUt6Q'
//     const authorization = `Bearer ${ token }`;

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

    
//     cy.get("error-clicks > .user-sessions > :nth-child(3) > fs-histogram.ng-star-inserted > .container > .content > :nth-child(1) > .item-data > .meta-key > div").invoke('text').then((text) => {
//         cy.get('error-clicks > .user-sessions > :nth-child(3) > fs-histogram.ng-star-inserted > .container > .content > :nth-child(1) > .item-data > .meta-key > div').should('be.visible').click();
//         cy.wait(9000)
//         cy.url().should ('eq' , "https://test.fullsession.io/insights/playlist");  
//         // cy.get('.modal').should('be.visible')
//         cy.get('.primary > .ant-select-selector > .ant-select-selection-item').should("include.text" , "Site Visited")
//         cy.get('.input-container > .group-input > .fs-form-control').should('have.value' , text.trim())

//         cy.request({
//           method: 'POST',
//           url: 'https://test.fullsession.io/v1/sessions',
//           body: {
//             "customerID": "krivsgmdqk",
//             "siteID": "krivvr1rtzc",
//             "field": "noErrorEvents" ,
//             "searchAfter": null,
//             "sortBy": null,
//             "sortOrder": null,
//             "size": 10 ,
//             "userId": "auth0|60fd12f7d056750070d959e7" ,
//             "JSONquery": {
//                 "startTime": [
//                      {
//                       "from": 1633934389813,
//                        "to": 1634539189856
//                      }
//                     ],
//                 "visited" :[
//                 {
//                   "expression": false,
//                   "operation": "is",
//                   "text":  text.trim()
//                   }
//              ]
//    }
//           } ,
//           headers: {
//               authorization,
//             }

//     }).then((response) => {
//                   expect(response.body).has.property('status', 201);
//                   expect(response.body).has.property('message', 'success');
//                   expect(response.body).to.have.property('data')
//                   const array = response.body.data.sessions ; 

//                   cy.get(".input-container > .group-input > .fs-form-control").invoke('val').then(sometext =>{
//                     for(var i =0 ; i< array[0].visitedPgs.length ; i++){
//                       if((array[0].visitedPgs[i].page) === ( sometext)){
//                         cy.log(array[0].visitedPgs[i].page)
//                         expect(array[0].visitedPgs[i].page).to.equal(sometext)
//                       }
//                     }

//                     for(var i =0 ; i< array[1].visitedPgs.length ; i++){
//                       if((array[1].visitedPgs[i].page) === (sometext)){
//                         cy.log(array[1].visitedPgs[i].page)
//                         expect(array[1].visitedPgs[i].page).to.equal(sometext)
//                       }
//                     }
//                   })
                
                  

//       })

//         cy.get('.go-back ').click();
//         cy.url().should ('eq' , "https://test.fullsession.io/insights");  
//     });

  

// })


})
