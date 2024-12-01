
const request = require('supertest');
const { BASE_URL } = require('../data/url')
const data = require('../data/token.json')

describe("Superadmin upload file & image2", () => {
  it("admin succeed upload file & image2", async () => {
    const create = await request(`${BASE_URL}`)
    .post("/api/v1/uploader")
    .set("Authorization",`Bearer ${data.token}`)
    .attach("file", "./banner.jpg")


    expect(create.status).toBe(200);
    console.log(create.body)
  });


});