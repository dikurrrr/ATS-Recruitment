const request = require('supertest');
const { createJobPost } = require('../../data/job/postJob');
const { updateJob } = require('../../data/job/updateJob');
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

describe("admin get List Job", () => {
    it("admin Succeed get List Jobs", async () => {
      const create = await request(`${BASE_URL}`)
      .get("/api/v1/job_posting")
      .set("Authorization",`Bearer ${data.token}`)
  
      expect(create.status).toBe(200);
      console.log(create.body)
    });
  
  
  });

  describe("admin get List Job by ID", () => {
    it("admin succeed get List Job by ID", async () => {
      const create = await request(`${BASE_URL}`)
      .get("/api/v1/job_posting?id=9b975f28-5ec9-4e8f-bfe1-01636c0edf49")
      .set("Authorization",`Bearer ${data.token}`)
    
      expect(create.status).toBe(200);
      console.log(create.body)
    });
    
  });

  describe("admin get Details Job", () => {
    it("admin succeed get Details Job", async () => {
      const create = await request(`${BASE_URL}`)
      .get("/api/v1/job_posting/013043c9-8bde-4870-a0db-c94de7b895f7")
      .set("Authorization",`Bearer ${data.token}`)
  
      expect(create.status).toBe(200);
      console.log(create.body)
    });
  
  
  });

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

  describe("admin get Activity Job", () => {
    it("admin succeed get Activity Job", async () => {
      const create = await request(`${BASE_URL}`)
      .get("/api/v1/activity/job_posting/9c4cd9e4-cd77-45f8-ba3e-2a1ff0c28cb6")
      .set("Authorization",`Bearer ${data.token}`)
    
      expect(create.status).toBe(200);
      console.log(create.body)
    });
  
  
  });