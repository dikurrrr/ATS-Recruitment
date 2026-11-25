
const request = require('supertest');
const { BASE_URL } = require('../../data/url')
const data = require('../../data/auth')
// const image = require('../../data/asset/banner.jpg')
describe("Superadmin upload file & image", () => {
  it("admin succeed upload file & image", async () => {
    const create = await request(`${BASE_URL}`)
    .post("/api/v1/uploader")
    .set("Authorization",`Bearer ${data.token}`)
    //.attach(`identity_image`, `./assets//image/id-card-fake.jpeg`)
    .attach(`file`, `./data/asset/banner.jpg`)


    expect(create.status).toBe(200);
    console.log(create.body)
  });


});