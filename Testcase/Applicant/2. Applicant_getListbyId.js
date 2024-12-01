const request = require('supertest');
const { BASE_URL } = require('../../data/url')
const data = require('../../data/token.json')

describe("admin get list by ID Applicant", () => {
  it("admin Succeed list by ID Applicant", async () => {
    const create = await request(`${BASE_URL}`)
    .get("/api/v1/applicants/690e3961-16fa-494b-aead-274c69f95199")
    .set("Authorization",`Bearer ${data.token}`)

    expect(create.status).toBe(200);
    console.log(create.body)
  });


});