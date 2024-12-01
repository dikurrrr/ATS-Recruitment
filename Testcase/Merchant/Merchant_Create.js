const request = require('supertest');
const { createMerchant } = require('../../data/user/createMerchant');
const { BASE_URL } = require('../../data/url')
const data = require('../../data/token.json')

describe("Superadmin Create Merchant", () => {
  it("admin succeed Create user", async () => {
    const create = await request(`${BASE_URL}`)
    .post("/api/v1/client")
    .set("Authorization",`Bearer ${data.token}`)
    .send({...createMerchant})

    expect(create.status).toBe(201);
    console.log(create.body)
  });


});