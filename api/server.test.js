const request = require("supertest");
const server = require("./server");
const db = require("./data/db-config");

beforeAll(async () => {
  await db.migrate.rollback();
  await db.migrate.latest();
});
beforeEach(async () => {
  await db.seed.run();
});
afterAll(async (done) => {
  await db.destroy();
  done();
});

it("sanity check", () => {
  expect(true).not.toBe(false);
});

describe("server.js", () => {
  it("is the correct testing environment", async () => {
    expect(process.env.NODE_ENV).toBe("testing");
  });

  it.todo(
    "responds with api docs page"
    //, async ()=>{
    // const res = await request(server).get("/api")
    // expect(res.body).
    //}
  );

  it("responds", async () => {
    const res = await request(server).get("/");
    expect(res.body.message).toMatch(/server up/i);
  });
});
