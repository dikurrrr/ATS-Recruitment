const request = require('supertest');
const { createSkill } = require('../../data/user/createSkill');
const { BASE_URL } = require('../../data/url')
const data = require('../../data/token.json')

describe("Superadmin Create Skill Test", () => {
  it("admin succeed Create Skill Test", async () => {
    const create = await request(`${BASE_URL}`)
    .post("/api/v1/skill_test")
    .set("Authorization",`Bearer ${data.token}`)
    .send({...createSkill})

    expect(create.status).toBe(201);
    console.log(create.body)
  });


});