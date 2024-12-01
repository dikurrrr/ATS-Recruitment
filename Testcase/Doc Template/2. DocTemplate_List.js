const request = require('supertest');
const { BASE_URL } = require('../../data/url')
const data = require('../../data/token.json')

describe("admin get List Job", () => {
  it("admin Succeed get List Jobs", async () => {
    const create = await request(`${BASE_URL}`)
    .get("/api/v1/doc_templates")
    .set("Authorization",`Bearer ${data.token}`)

    expect(create.status).toBe(200);
    console.log(create.body)
  });


});