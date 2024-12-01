const request = require('supertest');
const { updateUser } = require('../../data/user/updateUser');
const { BASE_URL } = require('../../data/url')
const data = require('../../data/token.json')

describe("admin Update User", () => {
  it("admin succeed Update User", async () => {
    const create = await request(`${BASE_URL}`)
    .put("/api/v1/user/f3f3aa3d-766f-4a8d-a010-e46cfca9ec32")
    .set("Authorization",`Bearer ${data.token}`)
    .send({...updateUser})

    expect(create.status).toBe(200);
    console.log(create.body)
  });


});