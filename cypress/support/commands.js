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
      Token: "176f27f11d53996090b2aa3a8826cf681d4fb2379f2a7e79701c751588b4f51d"
    }
  })
})


/**
 * @method deleteRequest
 * @param url Endpoint URL
 * @param description use to send DELETE Requests
 */

Cypress.Commands.add('deleteRequest', (url) => { 
  cy.request({
    method: "DELETE",
    url: url,
    headers:{
      Token: "176f27f11d53996090b2aa3a8826cf681d4fb2379f2a7e79701c751588b4f51d"
    }
  })
})