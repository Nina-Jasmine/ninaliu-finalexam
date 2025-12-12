# Nina Liu - Final Exam API

This is my submission for the **Final Exam - Web Frameworks and APIs**.  
The API allows you to manage a **Restaurant directory** with full CRUD operations, pagination, and optional Swagger documentation.

---

## Project Setup

1. Clone the repository:

```bash
git clone https://github.com/Nina-Jasmine/ninaliu-finalexam.git
cd ninaliu-finalexam
Install dependencies:

bash
Copy code
npm install
Create a .env file in the project root and add your MongoDB connection string:

env
Copy code
MONGO_URI=mongodb+srv://examadmin:MySecretPassword@cluster0.7yu7ckk.mongodb.net/COMP3033
Start the server:

bash
Copy code
npm start
By default, the API runs on http://localhost:3000

Endpoints
Restaurants
GET /api/restaurants
Retrieve all restaurants (paginated, 10 per page by default).
Query parameters: ?page=<number>

POST /api/restaurants (optional Basic Auth for testing in Postman)
Add a new restaurant. Body must include:

json
Copy code
{
  "name": "Example Restaurant",
  "address": "123 Main St",
  "phoneNumber": "555-1234",
  "emailAddress": "example@email.com",
  "rating": 8
}
DELETE /api/restaurants/:_id (optional Basic Auth for testing in Postman)
Deletes a restaurant by ID.

Note: Basic authentication is optional and only required if you test POST/DELETE routes in Postman. Credentials are set in .env as BASIC_AUTH_USER and BASIC_AUTH_PASS.

Pagination
The GET endpoint supports pagination:

Default page: 1

Items per page: 10

Response includes page, limit, total, pages, and data (list of restaurants)

Swagger Documentation
Access Swagger UI for interactive API documentation:
http://localhost:3000/api-docs

The Swagger YAML file is located at swagger.yaml in the project root.

Notes
MongoDB connection is required to run the API.

All sensitive information (connection string, optional Basic Auth credentials) is stored in .env.

No deployment is required for this exam.
```
