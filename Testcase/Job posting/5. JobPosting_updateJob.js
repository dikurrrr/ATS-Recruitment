const request = require('supertest');
const { updateJob } = require('../../data/job/updateJob');
const { BASE_URL } = require('../../data/url')
const data = require('../../data/token.json')

describe("admin Update Job", () => {
  it("admin succeed Update Job", async () => {
    const create = await request(`${BASE_URL}`)
    .put("/api/v1/job_posting/9b975f28-5ec9-4e8f-bfe1-01636c0edf49")
    .set("Authorization",`Bearer ${data.token}`)
    .send({...updateJob})
  
    expect(create.status).toBe(200);
    console.log(create.body)
  });


});