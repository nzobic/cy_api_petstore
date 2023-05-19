import endpoints from "../fixtures/endpoints.json"

describe('API QASE Tests: DELETE', () => {

  it('delete-request: Delete Project by Code', () => {

    cy.deleteRequest(
      endpoints.qaseDelete.deleteProject.replace('$','API')
    ).then(response => {
      expect(response.status).eq(200)
      expect(response.body.status).eq(true)
    })
  })
})