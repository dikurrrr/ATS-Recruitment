const request = require('supertest');
const { BASE_URL } = require('../../data/url')
const data = require('../../data/token.json')

describe("admin get Details Job", () => {
  it("admin succeed get Details Job", async () => {
    const create = await request(`${BASE_URL}`)
    .get("/api/v1/job_posting/013043c9-8bde-4870-a0db-c94de7b895f7")
    .set("Authorization",`Bearer ${data.token}`)

    expect(create.status).toBe(200);
    console.log(create.body)
  });


});