const request = require("supertest");
const { sequelize } = require("../models");
const app = require("../app");

//  test create photo
describe("POST /photos", () => {
  const photoData = {
    title: "demo photo test",
    caption: "demo photo test",
    image_url: "demophototest.co",
    UserId: 23,
  };
  test("should send response with 200 status code", (done) => {
    request(app)
      .post("/photos")
      .set(photoData)
      .end(function (err, res) {
        if (err) {
          done(err);
        }
        expect(res.status).toEqual(200);
        expect(typeof res.body).toEqual("object");
        expect(res.body).toHaveProperty("id");
        expect(res.body).toHaveProperty("title");
        expect(res.body).toHaveProperty("caption");
        expect(res.body).toHaveProperty("UserId");
        expect(res.headers["content-type"]).toMatch(/json/);
        done();
      });
  });
});

describe("POST /photos", () => {
  const photoData = {
    title: "",
    caption: "demo photo test",
    image_url: "demophototest.co",
  };
  test("should send response with 400 status code", (done) => {
    request(app)
      .post("/photos")
      .send(photoData)
      .end(function (err, res) {
        if (err) {
          done(err);
        }
        expect(res.headers["content-type"]).toMatch(/json/);
        expect(res.status).toEqual(400);
        done();
      });
  });
});

// test get all photos
describe("GET /photos", () => {
  test("respond with json containing a list of all photos", (done) => {
    request(app)
      .get("/photos")
      .set("Accept", "application/json")
      .set("Content-Type", "application/json")
      .end((err, res) => {
        if (err) {
          done(err);
        }
        expect(res.status).toEqual(201);

        done();
      });
  });
});

// test get one photo by id
describe("GET /photos/:id", () => {
  // let id = 1;
  test("respond with json containing a single photos", (done) => {
    request(app)
      .get(`/photos/?id=100`)
      .set("Accept", "application/json")
      .set("Content-Type", "application/json")
      .end((err, res) => {
        if (err) {
          done(err);
        }
        expect(res.status).toEqual(201);
        done();
      });
  });

  test("response 404 status code with json containing a single photos", (done) => {
    request(app)
      .get(`/photos/1`)
      .set("Accept", "application/json")
      .set("Content-Type", "application/json")
      .end((err, res) => {
        expect(res.status).toEqual(404);
        expect(res.body.msg).toEqual("Photo not found");
        if (err) {
          done(err);
        }
        done();
      });
  });
});

afterAll((done) => {
  sequelize.queryInterface
    .bulkDelete("Photos", {})
    .then(() => {
      return done();
    })
    .catch((err) => {
      done(err);
    });
});
