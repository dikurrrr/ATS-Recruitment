const request = require('supertest');
const { updateSkill } = require('../../data/user/updateSkill');
const { BASE_URL } = require('../../data/url')
const data = require('../../data/token.json')

describe("admin Update Skill Test", () => {
  it("admin succeed Update Skill Test", async () => {
    const create = await request(`${BASE_URL}`)
    .put("/api/v1/skill_test/fe184741-e406-4f0d-971e-4d6790578b5c")
    .set("Authorization",`Bearer ${data.token}`)
    .send({...updateSkill})

    expect(create.status).toBe(200);
    console.log(create.body)
  });


});