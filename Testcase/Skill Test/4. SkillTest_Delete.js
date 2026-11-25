const request = require('supertest');
const { BASE_URL } = require('../../data/url')
const data = require('../../data/auth')

describe("admin Delete Skill Test", () => {
  it("admin succeed Delete Skill Test", async () => {
    const create = await request(`${BASE_URL}`)
    .delete("/api/v1/skill_test/{{id_test_skill}}")
    .set("Authorization",`Bearer ${data.token}`)

    expect(create.status).toBe(200);
    console.log(create.body)
  });


});