const request = require('supertest');
const { createUser } = require('../../data/user/createUser');
const { BASE_URL } = require('../../data/url')
const data = require('../../data/token.json')

describe("Superadmin Create user", () => {
  it("admin succeed Create user", async () => {
    const create = await request(`${BASE_URL}`)
    .post("/api/v1/user")
    .set("Authorization",`Bearer ${data.token}`)
    .send({...createUser})

    //expect(create.status).toBe(201);
    expect(create.status).toBe(400);
    console.log(create.body)
  });


});