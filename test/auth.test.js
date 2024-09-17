const request = require("supertest");
const app = require("../backend/server");
const User = require("../backend/models/User");

describe("Auth Endpoints", () => {
  it("should register a new user", async () => {
    const res = await request(app).post("/api/auth/register").send({
      name: "newuser",
      email: "newuser@example.com",
      password: "password123",
      role: "user",
    });
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("msg", "User registered successfully");
  });

  it("should login a user and return a token", async () => {
    await User.create({
      name: "newuser",
      email: "newuser@example.com",
      password: "password123",
      role: "user",
    });

    const res = await request(app).post("/api/auth/login").send({
      email: "newuser@example.com",
      password: "password123",
    });
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("token");
  });
});
