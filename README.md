# Final Exam Preparation API

This is a simple REST API for managing a list of restaurants. The API provides CRUD operations and supports pagination for the GET endpoint.

## Base URL

http://localhost:3000

swift
Copy code

## Endpoints

### GET /api/restaurants

Retrieve a paginated list of restaurants.  
**Query parameters:**

- `page` (optional, default = 1): page number

**Response:**

```json
{
  "page": 1,
  "limit": 10,
  "totalItems": 50,
  "totalPages": 5,
  "restaurants": [
    {
      "_id": "64b8f0c2e1b2c3d4e5f67890",
      "name": "Pizza Palace",
      "address": "123 Main St, Toronto",
      "phoneNumber": "416-123-4567",
      "emailAddress": "info@pizzapalace.com",
      "rating": 8
    }
  ]
}
POST /api/restaurants
Create a new restaurant.
Request body:

json
Copy code
{
  "name": "Pizza Palace",
  "address": "123 Main St, Toronto",
  "phoneNumber": "416-123-4567",
  "emailAddress": "info@pizzapalace.com",
  "rating": 8
}
Response: 201 Created

json
Copy code
{
  "_id": "64b8f0c2e1b2c3d4e5f67890",
  "name": "Pizza Palace",
  "address": "123 Main St, Toronto",
  "phoneNumber": "416-123-4567",
  "emailAddress": "info@pizzapalace.com",
  "rating": 8
}
DELETE /api/restaurants/:_id
Delete a restaurant by ID.
Response:

json
Copy code
{
  "message": "Restaurant deleted",
  "_id": "64b8f0c2e1b2c3d4e5f67890"
}
404 Response if not found:

json
Copy code
{
  "message": "Restaurant not found"
}
Setup
Clone the repository:

bash
Copy code
git clone https://github.com/Nina-Jasmine/ninaliu-finalexam.git
Install dependencies:

bash
Copy code
npm install
Create a .env file with the following:

ini
Copy code
MONGO_URI=mongodb+srv://examadmin:MySecretPassword@cluster0.uyymkg3.mongodb.net/COMP3033
Start the server:

bash
Copy code
npm start
API documentation is available at:

bash
Copy code
http://localhost:3000/api-docs
Notes
Pagination is implemented in GET /api/restaurants (10 items per page).

Basic Auth is not required.

This API was implemented for the COMP3033 final exam.
```
