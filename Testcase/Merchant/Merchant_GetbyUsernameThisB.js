const request = require('supertest');
const { BASE_URL } = require('../../data/url')
const data = require('../../data/token.json')

describe("admin get Merchant by Username", () => {
  it("admin Succeed get Merchant by Username", async () => {
    const create = await request(`${BASE_URL}`)
    .get("/api/v1/client-username/ThisB")
    .set("Authorization",`Bearer ${data.token}`)

    expect(create.status).toBe(201);
    console.log(create.body)
  });


});