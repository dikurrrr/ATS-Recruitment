const request = require('supertest');
const { BASE_URL } = require('../../data/url')
const data = require('../../data/token.json')

describe("admin get List All User", () => {
  it("admin succeed get List All User", async () => {
    const create = await request(`${BASE_URL}`)
    .get("/api/v1/user")
    .set("Authorization",`Bearer ${data.token}`)

    expect(create.status).toBe(201);
    console.log(create.body)
  });


});