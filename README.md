Setup Instructions

1. Clone the Repository
   Clone the repository using Git:
   
   git clone https://github.com/Sushant-jadhao/eCommerceSite.git

3. Navigate to the Project Directory
   Change to the project directory:
   cd eCommerceSite

4. Install Dependencies
   Install the necessary packages:
   npm install

5. Start the Server
   node server.js

MongoDB Setup

1. Install MongoDB
   Local: Download and install MongoDB Compass for a local MongoDB instance.
   Cloud: Alternatively, use MongoDB Atlas for a cloud-based MongoDB solution.
   
3. Create a Database
   Create a database named ecommerceDatabase.
   
4. Configure the Connection
   Copy the connection string (e.g., mongodb://127.0.0.1:27017/eCommerceDatabase) and add it to your .env file.

POSTMAN Setup

1. Register a User
   Use the Register endpoint to create a new user account by providing the required details.
   
3. Log In
   Use the Login endpoint to authenticate as either a user or admin.
   
4. Adding a Product
   Log in as an admin.
   Copy the JWT token received upon login and save it.
   Use the Create Product endpoint to add a product.
   In Postman, go to the Authorization tab, select Bearer Token, and paste the copied token.
   
5. Placing an Order
   Log in as a user.
   Copy the JWT token received upon login and save it.
   Use the Place Order endpoint to create an order.
   In Postman, go to the Authorization tab, select Bearer Token, and paste the copied token.
   
6. Admin Capabilities
   Admin users can perform all other tasks, including updating and deleting products, and updating order statuses.

Important API Endpoints

Register User: POST http://localhost:5000/api/auth/register

Login: POST http://localhost:5000/api/auth/login

Create Product: POST http://localhost:5000/api/products/ (Admin only)

Update Product: PUT http://localhost:5000/api/products/:id (Admin only)

Delete Product: DELETE http://localhost:5000/api/products/:id (Admin only)

Get Products: GET http://localhost:5000/api/products/

Place Order: POST http://localhost:5000/api/orders/

Update Order: PUT http://localhost:5000/api/orders/:id (Admin only)

Get Orders: GET http://localhost:5000/api/orders/
