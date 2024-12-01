const request = require('supertest');
const { BASE_URL } = require('../../data/url')
const data = require('../../data/token.json')

describe("admin get data JobPosition", () => {
  it("admin Succeed get JobPosition", async () => {
    const create = await request(`${BASE_URL}`)
    .get("/api/v1/additional_data?type=job_positions")
    .set("Authorization",`Bearer ${data.token}`)

    expect(create.status).toBe(200);
    console.log(create.body)
  });


});