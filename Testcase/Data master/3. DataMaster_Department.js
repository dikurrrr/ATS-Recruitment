const request = require('supertest');
const { BASE_URL } = require('../../data/url')
const data = require('../../data/token.json')

describe("admin get data Departments", () => {
  it("admin Succeed get data Departments", async () => {
    const create = await request(`${BASE_URL}`)
    .get("/api/v1/additional_data?type=departments")
    .set("Authorization",`Bearer ${data.token}`)

    expect(create.status).toBe(200);
    console.log(create.body)
  });


});