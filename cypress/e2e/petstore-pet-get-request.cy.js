import endpoints from "../fixtures/endpoints.json";

describe('API Petstore Tests', () => {

  it('get-request: Get Pet by ID', () => {

    cy.getRequest(
      endpoints.pet.getPet.replace("$", 700)
    ).then(response => {
      expect(response.status).eq(200)
      expect(response.body.id).eq(700)
      expect(response.body.category.name).eq("turtle")
      expect(response.body.name).eq("Tucker")
    })

  })

})