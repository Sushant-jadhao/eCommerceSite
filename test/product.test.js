const request = require("supertest");
const app = require("../server"); // Adjust the path as needed
const Product = require("../models/Product");
const User = require("../models/User");
const jwt = require("jsonwebtoken");

let token;

beforeAll(async () => {
  await Product.deleteMany(); // Clean up before tests
  await User.deleteMany(); // Clean up before tests

  const admin = await User.create({
    name: "Admin",
    email: "admin@example.com",
    password: "adminpassword",
    role: "admin",
  });

  token = jwt.sign(
    { id: admin._id, role: admin.role },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );
});

describe("Product Endpoints", () => {
  it("should create a new product", async () => {
    const res = await request(app)
      .post("/api/products")
      .set("Authorization", `Bearer ${token}`)
      .send({
        name: "Product 1",
        description: "Description for Product 1",
        price: 100,
        category: "Category 1",
        stock: 10,
      });
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("name", "Product 1");
  });

  it("should get all products", async () => {
    const res = await request(app).get("/api/products");
    expect(res.statusCode).toBe(200);
    expect(res.body).toBeInstanceOf(Array);
  });
});
