const request = require('supertest');
const { createJobPost } = require('../../data/job/postJob');
const { BASE_URL } = require('../../data/url')
const data = require('../../data/token.json')

describe("admin Create job", () => {
  it("admin should succeed Create job", async () => {
    const create = await request(`${BASE_URL}`)
    .post("/api/v1/job_posting")
    .set("Authorization",`Bearer ${data.token}`)
    .send({...createJobPost})
  
    expect(create.status).toBe(200);
    console.log(create.body)
  });


});