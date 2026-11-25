const request = require('supertest');
const { BASE_URL } = require('../../data/url')
const data = require('../../data/auth')

describe("Get user by PrivyID", () => {
  it("admin succeed get user by PrivyID", async () => {
    const create = await request(`${BASE_URL}`)
    .get("/api/v1/profile")
    .set("Authorization",`Bearer ${data.token}`)

    expect(create.status).toBe(200);
    console.log(create.body)
  });


});