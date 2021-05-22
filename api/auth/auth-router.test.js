const request = require("supertest");
const server = require("../server");
const db = require("../data/db-config");

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

const registerEP = "api/auth/register";
const loginEP = "api/auth/login";

const user1 = {
  user_username: "mariomario",
  user_password: "its-a-m3",
  user_email: "mario@mushroom.kdm",
};
const user2 = {
  user_username: "luigimario",
  user_password: "w33-g33",
  user_email: "luigi@mushroom.kdm",
};

describe("/auth", () => {
  describe(`[POST] ${registerEP}`, () => {
    describe(`Happy Path`, () => {
      let res;
      beforeEach(async () => {
        res = await request(server).post(registerEP).send(user1);
      });

      it("responds with 201", () => expect(res.status).toEqual(201));

      it("responds with new user", () => {
        // eslint-disable-next-line no-unused-vars
        const { user_password, ...user1NoPwd } = user1;
        expect(res.body).toMatchObject(user1NoPwd);
      });

      it("responds with user id", () =>
        expect(res.body).toHaveProperty("user_id"));

      it("responds with hashed password", () =>
        expect(res.body.user_password).not.toEqual(user1.user_password));
    }); //Happy Path
  }); //[POST] ${register}
}); ///auth
