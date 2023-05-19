import endpoints from "../fixtures/endpoints.json"
import projectBody from "../fixtures/projectBody.json"
import suiteBody from "../fixtures/suiteBody.json"
import caseBody from "../fixtures/caseBody.json"
import planBody from "../fixtures/planBody.json"
import defectBody from "../fixtures/defectBody.json"
import runBody from "../fixtures/runBody.json"
import runResultsBody from "../fixtures/runResultsBody.json"

describe('API QASE Tests: POST', () => {

  it('post-request: Create New Project', () => {

      cy.postRequest(
        endpoints.qasePost.postProject,
        projectBody
      ).then(response => {
        expect(response.status).eq(200)
        expect(response.body.result.code).eq("API")
      })

   })


  it('post-request: Create New Suite', () => {

      cy.postRequest(
        endpoints.qasePost.postSuite.replace('$','API'),
        suiteBody
      ).then(response => {
        expect(response.status).eq(200)
      })
  })


  it('post-request: Create New Test Case', () => {

      cy.postRequest(
        endpoints.qasePost.postCase.replace('$','API'),
        caseBody
      ).then(response => {
        expect(response.status).eq(200)
      })
  })


  it('post-request: Create New Test Plan', () => {
    
      cy.postRequest(
        endpoints.qasePost.postPlan.replace('$','API'),
        planBody
      ).then(response => {
        expect(response.status).eq(200)
      })
  })


  it('post-request: Create New Defect', () => {

      cy.postRequest(
        endpoints.qasePost.postDefect.replace('$','API'),
        defectBody
      ).then(response => {
        expect(response.status).eq(200)
      })
  })


  it('post-request: Create New Test Run', () => {

      cy.postRequest(
        endpoints.qasePost.postTestRun.replace('$','API'),
        runBody
      ).then(response => {
        expect(response.status).eq(200)
      })
  })
  

  it('post-request: Set Test Run Result', () => {

      cy.postRequest(
        endpoints.qasePost.postSetResults.replace('$','API').replace('$$','1'),
        runResultsBody
      ).then(response => {
        expect(response.status).eq(200)
      })
  })

})