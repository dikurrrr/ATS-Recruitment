const request = require('supertest');
const { BASE_URL } = require('../../data/url')
const data = require('../../data/token.json')

describe("admin get Stage Skill Test", () => {
  it("admin Succeed Stage Skill Test", async () => {
    const create = await request(`${BASE_URL}`)
    .get("/api/v1/applicants?stage=skill_test")
    .set("Authorization",`Bearer ${data.token}`)

    expect(create.status).toBe(200);
    console.log(create.body)
  });
});