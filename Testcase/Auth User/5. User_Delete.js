const request = require('supertest');
const { BASE_URL } = require('../data/url')
const data = require('../data/token.json')

describe("admin Delete User", () => {
  it("admin succeed Delete User", async () => {
    const create = await request(`${BASE_URL}`)
    .delete("/api/v1/user/b6e081dd-07ca-475a-a3f3-acfa5a25abef")
    .set("Authorization",`Bearer ${data.token}`)

    expect(create.status).toBe(201);
    console.log(create.body)
  });


});