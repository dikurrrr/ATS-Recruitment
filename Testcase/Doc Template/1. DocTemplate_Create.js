const request = require('supertest');
const { BASE_URL } = require('../../data/url')
const {createTemplate} = require('../../data/user/createTemplate')
const data = require('../../data/token.json')

describe("admin Create Template Doc", () => {
  it("admin Create Template Doc", async () => {
    const create = await request(`${BASE_URL}`)
    .post("/api/v1/doc_templates")
    .set("Authorization",`Bearer ${data.token}`)
    .send({...createTemplate})

    expect(create.status).toBe(200);
    console.log(create.body)
  });


});