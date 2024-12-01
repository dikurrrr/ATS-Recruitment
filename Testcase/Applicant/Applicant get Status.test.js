const request = require('supertest');
const { BASE_URL } = require('../../data/url')
const data = require('../../data/token.json')

describe("admin get List All Applicant", () => {
  it("admin Succeed List All Applicant", async () => {
    const create = await request(`${BASE_URL}`)
    .get("/api/v1/applicants")
    .set("Authorization",`Bearer ${data.token}`)

    expect(create.status).toBe(200);
    console.log(create.body)
  });
});

describe("admin get list by ID Applicant", () => {
  it("admin Succeed list by ID Applicant", async () => {
    const create = await request(`${BASE_URL}`)
    .get("/api/v1/applicants/690e3961-16fa-494b-aead-274c69f95199")
    .set("Authorization",`Bearer ${data.token}`)

    expect(create.status).toBe(200);
    console.log(create.body)
  });
});

describe("admin get Stage Screening", () => {
  it("admin Succeed Stage Screening", async () => {
    const create = await request(`${BASE_URL}`)
    .get("/api/v1/applicants?stage=screening")
    .set("Authorization",`Bearer ${data.token}`)

    expect(create.status).toBe(200);
    console.log(create.body)
  });
});

describe("admin get Stage HR_Interview", () => {
  it("admin Succeed Stage HR_Interview", async () => {
    const create = await request(`${BASE_URL}`)
    .get("/api/v1/applicants?stage=hr_interview")
    .set("Authorization",`Bearer ${data.token}`)

    expect(create.status).toBe(200);
    console.log(create.body)
  });
});

describe("admin get Stage Skill Test", () => {
  it("admin Succeed Stage Skill Test", async () => {
    const create = await request(`${BASE_URL}`)
    .get("/api/v1/applicants?stage=skill_test")
    .set("Authorization",`Bearer ${data.token}`)

    expect(create.status).toBe(200);
    console.log(create.body)
  });
});

describe("admin get Stage User Interview", () => {
  it("admin Succeed Stage User Interview", async () => {
    const create = await request(`${BASE_URL}`)
    .get("/api/v1/applicants?stage=user_interview")
    .set("Authorization",`Bearer ${data.token}`)

    expect(create.status).toBe(200);
    console.log(create.body)
  });
});

describe("admin get Stage Offering", () => {
  it("admin Succeed Stage Offering", async () => {
    const create = await request(`${BASE_URL}`)
    .get("/api/v1/applicants?stage=offering")
    .set("Authorization",`Bearer ${data.token}`)

    expect(create.status).toBe(200);
    console.log(create.body)
  });
});

describe("admin get Stage Hired", () => {
  it("admin Succeed Stage Hired", async () => {
    const create = await request(`${BASE_URL}`)
    .get("/api/v1/applicants?stage=hired")
    .set("Authorization",`Bearer ${data.token}`)

    expect(create.status).toBe(200);
    console.log(create.body)
  });
});