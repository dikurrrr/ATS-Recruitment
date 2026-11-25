const request = require('supertest');
const { createUser } = require('../../data/user/createUser');
const { updateUser } = require('../../data/user/updateUser');
const { BASE_URL } = require('../../data/url')
const data = require('../../data/auth')

describe("Superadmin Create user", () => {
  it("admin succeed Create user", async () => {
    const create = await request(`${BASE_URL}`)
    .post("/api/v1/user")
    .set("Authorization",`Bearer ${data.token}`)
    .send({...createUser})

    //expect(create.status).toBe(201);
    expect(create.status).toBe(201);
    console.log(create.body)
  });

});

describe("Get user by PrivyID", () => {
    it("admin succeed get user by PrivyID", async () => {
      const create = await request(`${BASE_URL}`)
      .get("/api/v1/profile")
      .set("Authorization",`Bearer ${data.token}`)
  
      expect(create.status).toBe(200);
      console.log(create.body)
    });
  });

  describe("admin get List All User", () => {
    it("admin succeed get List All User", async () => {
      const create = await request(`${BASE_URL}`)
      .get("/api/v1/user")
      .set("Authorization",`Bearer ${data.token}`)
  
      expect(create.status).toBe(201);
      console.log(create.body)
    });
  });

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