const request = require('supertest');
const { createMerchant } = require('../../data/user/createMerchant');
const { BASE_URL } = require('../../data/url')
const data = require('../../data/token.json')

describe("Superadmin Create Merchant", () => {
  it("admin succeed Create user", async () => {
    const create = await request(`${BASE_URL}`)
    .post("/api/v1/client")
    .set("Authorization",`Bearer ${data.token}`)
    .send({...createMerchant})

    expect(create.status).toBe(201);
    console.log(create.body)
  });
});

describe("admin get Merchant by uname magepos", () => {
    it("admin Succeed get Merchant by uname magepos", async () => {
      const create = await request(`${BASE_URL}`)
      .get("/api/v1/client-username/magepos")
      .set("Authorization",`Bearer ${data.token}`)
  
      expect(create.status).toBe(201);
      console.log(create.body)
    });
  });

  describe("admin get Merchant by uname telkomsel", () => {
    it("admin Succeed get Merchant by uname telkomsel", async () => {
      const create = await request(`${BASE_URL}`)
      .get("/api/v1/client-username/telkomsel")
      .set("Authorization",`Bearer ${data.token}`)
  
      expect(create.status).toBe(201);
      console.log(create.body)
    });
  });

  describe("admin get Merchant by uname thisA", () => {
    it("admin Succeed get Merchant by uname thisA", async () => {
      const create = await request(`${BASE_URL}`)
      .get("/api/v1/client-username/ThisA")
      .set("Authorization",`Bearer ${data.token}`)
  
      expect(create.status).toBe(201);
      console.log(create.body)
    });
  });

  describe("admin get Merchant by uname thisB", () => {
    it("admin Succeed get Merchant by uname thisB", async () => {
      const create = await request(`${BASE_URL}`)
      .get("/api/v1/client-username/ThisB")
      .set("Authorization",`Bearer ${data.token}`)
  
      expect(create.status).toBe(201);
      console.log(create.body)
    });
  });