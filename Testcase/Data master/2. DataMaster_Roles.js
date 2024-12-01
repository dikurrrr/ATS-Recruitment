const request = require('supertest');
const { BASE_URL } = require('../../data/url')
const data = require('../../data/token.json')

describe("admin get data Roles", () => {
  it("admin Succeed get data Roles", async () => {
    const create = await request(`${BASE_URL}`)
    .get("/api/v1/additional_data?type=roles")
    .set("Authorization",`Bearer ${data.token}`)

    expect(create.status).toBe(200);
    console.log(create.body)
  });


});