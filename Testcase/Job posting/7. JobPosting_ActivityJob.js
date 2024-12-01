const request = require('supertest');
const { BASE_URL } = require('../../data/url')
const data = require('../../data/token.json')

describe("admin get Activity Job", () => {
  it("admin succeed get Activity Job", async () => {
    const create = await request(`${BASE_URL}`)
    .get("/api/v1/activity/job_posting/9c4cd9e4-cd77-45f8-ba3e-2a1ff0c28cb6")
    .set("Authorization",`Bearer ${data.token}`)
  
    expect(create.status).toBe(200);
    console.log(create.body)
  });


});