const request = require('supertest');
const { updateStatusScreening } = require('../../../data/user/UpdateStage');
const { updateStatusHR_interview } = require('../../../data/user/UpdateStage');
const { updateStatusSkillTest } = require('../../../data/user/UpdateStage');
const { updateStatusUser_interview } = require('../../../data/user/UpdateStage');
const { updateStatusOffering } = require('../../../data/user/UpdateStage');
const { updateStatusHired } = require('../../../data/user/UpdateStage');
const { BASE_URL } = require('../../../data/url')
const data = require('../../../data/token.json')

describe("admin Update Status Screening", () => {
  it("admin Succeed Update Status Screening", async () => {
    const create = await request(`${BASE_URL}`)
    .put("/api/v1/applicants/status")
    .set("Authorization",`Bearer ${data.token}`)
    .send({...updateStatusScreening})

    expect(create.status).toBe(200);
    console.log(create.body)
  });
});

describe("admin Update Status HR_Interview", () => {
  it("admin Succeed Update Status HR_Interview", async () => {
    const create = await request(`${BASE_URL}`)
    .put("/api/v1/applicants/status")
    .set("Authorization",`Bearer ${data.token}`)
    .send({...updateStatusHR_interview})

    expect(create.status).toBe(200);
    console.log(create.body)
  });
});

describe("admin Update Status SkillTest", () => {
  it("admin Succeed Update Status SkillTest", async () => {
    const create = await request(`${BASE_URL}`)
    .put("/api/v1/applicants/status")
    .set("Authorization",`Bearer ${data.token}`)
    .send({...updateStatusSkillTest})
  
    expect(create.status).toBe(200);
    console.log(create.body)
  });
});


describe("admin Update Status UserInterview", () => {
  it("admin Succeed Update Status UserInterview", async () => {
    const create = await request(`${BASE_URL}`)
    .put("/api/v1/applicants/status")
    .set("Authorization",`Bearer ${data.token}`)
    .send({...updateStatusUser_interview})
  
    expect(create.status).toBe(200);
    console.log(create.body)
  });
});

describe("admin Update Status Offering", () => {
  it("admin Succeed Update Status Offering", async () => {
    const create = await request(`${BASE_URL}`)
    .put("/api/v1/applicants/status")
    .set("Authorization",`Bearer ${data.token}`)
    .send({...updateStatusOffering})
  
    expect(create.status).toBe(200);
    console.log(create.body)
  });
});

describe("admin Update Status Hired", () => {
  it("admin Succeed Update Status Hired", async () => {
    const create = await request(`${BASE_URL}`)
    .put("/api/v1/applicants/status")
    .set("Authorization",`Bearer ${data.token}`)
    .send({...updateStatusHired})

    expect(create.status).toBe(200);
    console.log(create.body)
  });
});