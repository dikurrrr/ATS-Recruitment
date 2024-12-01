const request = require('supertest');
const { BASE_URL } = require('../../data/url')
const data = require('../../data/token.json')

describe("admin get Stage User Interview", () => {
  it("admin Succeed Stage User Interview", async () => {
    const create = await request(`${BASE_URL}`)
    .get("/api/v1/applicants?stage=user_interview")
    .set("Authorization",`Bearer ${data.token}`)

    expect(create.status).toBe(200);
    console.log(create.body)
  });
});