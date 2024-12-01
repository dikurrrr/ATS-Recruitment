const request = require('supertest');
const { BASE_URL } = require('../../data/url')
const data = require('../../data/token.json')

describe("admin get List Skill Test", () => {
  it("admin succeed get List Skill Test ", async () => {
    const create = await request(`${BASE_URL}`)
    .get("/api/v1/skill_test")
  
    .set("Authorization",`Bearer ${data.token}`)

    expect(create.status).toBe(201);
    console.log(create.body)
  });


});