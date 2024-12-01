const request = require('supertest');
const { BASE_URL } = require('../../data/url')
const data = require('../../data/token.json')

// describe("admin get List Job by Status", () => {

// it("admin succeed get List Job by Status", async () => {
//   const create = await request(`${BASE_URL}`)
//   .get("/api/v1/job_posting?status=active")
//   .set("Authorization",`Bearer ${data.token}`)

//   expect(create.status).toBe(200);
//   console.log(create.body)
//   });

// });