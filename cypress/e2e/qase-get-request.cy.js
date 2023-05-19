import endpoints from "../fixtures/endpoints.json"

describe('API QASE Tests: GET', () => {

  it('get-request: Get All Projects', () => {

    cy.getRequest(
      endpoints.qaseGet.getProjects
    ).then(response => {
      expect(response.status).eq(200)
      expect(response.body.status).eq(true)
      // expect(response.body.result.total).eq(5)
      expect(response.body.result.entities[0].title).eq("Demo Project")
      expect(response.body.result.entities[0].code).eq("DEMO")
      expect(response.body.result.entities[0].counts.cases).eq(10)
      expect(response.body.result.entities[0].counts.defects.total).eq(1)
    })
})

})