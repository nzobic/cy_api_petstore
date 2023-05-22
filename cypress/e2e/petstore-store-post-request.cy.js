import endpoints from "../fixtures/endpoints.json";
import storeBody from "../fixtures/storeBody.json";

describe('API Petstore Tests', () => {

  it('post-request: Create an Order for a pet from TC01', () => {

    // Create Order for turtle Tucker

    cy.postRequest(
      endpoints.store.postStore,
      storeBody.TC01
    ).then(response => {
      expect(response.status).eq(200)
      expect(response.body.id).eq(storeBody.TC01.id)
      expect(response.body.petId).eq(storeBody.TC01.petId)
      expect(response.body.status).eq(storeBody.TC01.status)
    })
  })

  it('post-request: Create an Order for a pet from TC02', () => {

    // Create Order for rabbit Charlie

    cy.postRequest(
      endpoints.store.postStore,
      storeBody.TC02
    ).then(response => {
      expect(response.status).eq(200)
      expect(response.body.id).eq(storeBody.TC02.id)
      expect(response.body.petId).eq(storeBody.TC02.petId)
      expect(response.body.status).eq(storeBody.TC02.status)
    })
  })


})