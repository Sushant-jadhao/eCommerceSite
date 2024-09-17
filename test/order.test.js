const request = require("supertest");
const app = require("../backend/server"); // Adjust the path as needed
const Order = require("../backend/models/Order");
const Product = require("../backend/models/Product");
const User = require("../backend/models/User");
const jwt = require("jsonwebtoken");

let token;
let productId;

beforeAll(async () => {
  await Order.deleteMany(); // Clean up before tests
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

  const product = await Product.create({
    name: "Product 1",
    description: "Description for Product 1",
    price: 100,
    category: "Category 1",
    stock: 10,
  });

  productId = product._id;
});

describe("Order Endpoints", () => {
  it("should place a new order", async () => {
    const res = await request(app)
      .post("/api/orders")
      .set("Authorization", `Bearer ${token}`)
      .send({
        products: [{ productId, quantity: 1 }],
        totalPrice: 100,
        status: "pending",
      });
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("totalPrice", 100);
  });

  it("should get all orders", async () => {
    const res = await request(app)
      .get("/api/orders")
      .set("Authorization", `Bearer ${token}`);
    expect(res.statusCode).toBe(200);
    expect(res.body).toBeInstanceOf(Array);
  });
});
