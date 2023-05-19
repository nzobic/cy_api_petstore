/**
 * @method postRequest
 * @param url Endpoint URL
 * @param body JSON Body
 * @param description use to send POST Requests
 */

Cypress.Commands.add('postRequest', (url, body) => { 
    cy.request({
        method: "POST",
        url: url,
        headers:{
          accept: "application/json",
          "content-type": "application/json"
        },
        body: body
      })
})


 /**
 * @method getRequest
 * @param url Endpoint URL
 * @param description use to send GET Requests
 */

Cypress.Commands.add('getRequest', (url) => { 
  cy.request({
      method: "GET",
      url: url,
      headers:{
        accept: "application/json",
        "content-type": "application/json"
      }
    })
})