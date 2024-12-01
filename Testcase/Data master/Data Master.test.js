const request = require('supertest');
const { BASE_URL } = require('../../data/url')
const data = require('../../data/token.json')

describe("admin get data Province", () => {
  it("admin Succeed get data Province", async () => {
    const create = await request(`${BASE_URL}`)
    .get("/api/v1/additional_data?type=provinces")
    .set("Authorization",`Bearer ${data.token}`)

    expect(create.status).toBe(200);
    console.log(create.body)
  });
});

describe("admin get data Roles", () => {
  it("admin Succeed get data Roles", async () => {
    const create = await request(`${BASE_URL}`)
    .get("/api/v1/additional_data?type=roles")
    .set("Authorization",`Bearer ${data.token}`)

    expect(create.status).toBe(200);
    console.log(create.body)
  });
});

describe("admin get data Departments", () => {
  it("admin Succeed get data Departments", async () => {
    const create = await request(`${BASE_URL}`)
    .get("/api/v1/additional_data?type=departments")
    .set("Authorization",`Bearer ${data.token}`)

    expect(create.status).toBe(200);
    console.log(create.body)
  });
});

describe("admin get data JobPosition", () => {
  it("admin Succeed get JobPosition", async () => {
    const create = await request(`${BASE_URL}`)
    .get("/api/v1/additional_data?type=job_positions")
    .set("Authorization",`Bearer ${data.token}`)

    expect(create.status).toBe(200);
    console.log(create.body)
  });
});

describe("admin get data Levels", () => {
  it("admin Succeed get data Levels", async () => {
    const create = await request(`${BASE_URL}`)
    .get("/api/v1/additional_data?type=levels")
    .set("Authorization",`Bearer ${data.token}`)

    expect(create.status).toBe(200);
    console.log(create.body)
  });
});

describe("admin get data JobPostingStatus", () => {
  it("admin Succeed get data JobPostingStatus", async () => {
    const create = await request(`${BASE_URL}`)
    .get("/api/v1/additional_data?type=job_posting_status")
    .set("Authorization",`Bearer ${data.token}`)

    expect(create.status).toBe(200);
    console.log(create.body)
  });
});

describe("admin get data ApplicantStages", () => {
  it("admin Succeed get data ApplicantStages", async () => {
    const create = await request(`${BASE_URL}`)
    .get("/api/v1/additional_data?type=applicant_stages")
    .set("Authorization",`Bearer ${data.token}`)

    expect(create.status).toBe(200);
    console.log(create.body)
  });


});

describe("admin get data JobType", () => {
  it("admin Succeed get data JobType", async () => {
    const create = await request(`${BASE_URL}`)
    .get("/api/v1/additional_data?type=job_types")
    .set("Authorization",`Bearer ${data.token}`)

    expect(create.status).toBe(200);
    console.log(create.body)
  });
});