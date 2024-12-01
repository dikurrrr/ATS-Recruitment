// describe.only("Name of the group", () => {
//   it.only("should true", () => {
//     expect(false).toBe(false);
//   });
// });

const request = require("supertest");

describe.only("POST", () => {
  it.only("should true", async () => {
    const resp = await
request("https://reqres.in/api/users").post(
      "[POST]"
    );
    expect(resp.statusCode).toBe(201);

  });
});
