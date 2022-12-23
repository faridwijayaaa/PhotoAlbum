const request = require("supertest");
const app = require("../app");
const { sequelize } = require("../models");
const userData = {
  username: "user_pertama",
  email: "user-pertama@mail.com",
  password: "123456",
};

const wrongUser = {
  username: "wrongUser",
  email: "wrong-user@mail.com",
  password: "123456",
};

describe("POST /users/register", () => {
  it("should send response with 201 status code", (done) => {
    request(app)
      .post("/users/register")
      .send(userData)
      .end(function (err, res) {
        if (err) {
          done(err);
        }
        expect(res.status).toEqual(201);
        expect(typeof res.body).toEqual("object");
        expect(res.body).toHaveProperty("id");
        expect(res.body).toHaveProperty("username");
        expect(res.body).toHaveProperty("email");
        expect(res.body.username).toEqual(userData.username);
        expect(res.body.email).toEqual(userData.email);
        done();
      });
  });
});

describe("POST /users/login", () => {
  it("should send response with 200 status code", (done) => {
    request(app)
      .post("/users/login")
      .send(userData)
      .end(function (err, res) {
        if (err) {
          done(err);
        }
        expect(res.status).toEqual(200);
        expect(typeof res.body).toEqual("object");
        expect(res.body).toHaveProperty("token");
        expect(typeof res.body.token).toEqual("string");
        done();
      });
  });
});

describe("POST /users/login", () => {
  it("should send response with 401 status code", (done) => {
    request(app)
      .post("/users/login")
      .send(wrongUser)
      .end(function (err, res) {
        if (err) {
          done(err);
        }
        expect(res.status).toEqual(401);
        expect(typeof res.body).toEqual("object");
        expect(res.body).toHaveProperty("name");
        expect(res.body).toHaveProperty("message");
        expect(res.body.name).toEqual("User Login Error");
        done();
      });
  });
});

afterAll((done) => {
  sequelize.queryInterface
    .bulkDelete("Users", {})
    .then(() => {
      return done();
    })
    .catch((err) => {
      done(err);
    });
});
