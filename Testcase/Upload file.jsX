
const request = require('supertest');
const path = require('path');
const { BASE_URL } = require('../data/url')
const data = require('../data/auth')

describe("Superadmin upload file & image2", () => {
  it("admin succeed upload file & image2", async () => {
    const create = await request(`${BASE_URL}`)
    .post("/api/v1/uploader")
    .set("Authorization",`Bearer ${data.token}`)
    .attach("file", path.join(__dirname, '../banner.jpg'))


    expect(create.status).toBe(200);
    console.log(create.body)
  });


});