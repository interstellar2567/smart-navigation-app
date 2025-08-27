# Smart Navigation App Backend

A real-time navigation application backend with SOS functionality and user management.

## 🚀 Quick Start

1. **Install Dependencies**

   ```bash
   npm install
   ```

2. **Configure Environment**
   Create `.env` file in root:

   ```env
   MONGO_URI=your_mongodb_uri
   TWILIO_ACCOUNT_SID=your_twilio_sid
   TWILIO_AUTH_TOKEN=your_twilio_token
   TWILIO_PHONE_NUMBER=your_twilio_phone
   JWT_SECRET=your_jwt_secret
   ```

3. **Start Server**

   ```bash
   # Development
   npm run dev

   # Production
   npm start
   ```

## 📡 API Endpoints

### SOS Routes (`/api/sos`)

| Method | Endpoint    | Description                          | Request Body                      | Response                                          |
| ------ | ----------- | ------------------------------------ | --------------------------------- | ------------------------------------------------- |
| POST   | `/api/sos/` | Send SOS alert to emergency contacts | `{ latitude, longitude, userId }` | Status of sent messages and location confirmation |

### User Routes (`/api/users`)

| Method | Endpoint                        | Description               | Request Body                                | Response                  |
| ------ | ------------------------------- | ------------------------- | ------------------------------------------- | ------------------------- |
| POST   | `/api/users/register`           | Register new user         | `{ email, password, firstName, lastName }`  | User data with auth token |
| POST   | `/api/users/login`              | User login                | `{ email, password }`                       | User data with auth token |
| GET    | `/api/users/profile`            | Get user profile          | -                                           | User profile data         |
| PUT    | `/api/users/profile`            | Update user profile       | `{ firstName, lastName, email }`            | Updated user data         |
| PUT    | `/api/users/emergency-contacts` | Update emergency contacts | `{ contacts: [{ name, phone, relation }] }` | Updated contacts list     |

## 🛠️ Project Structure

```
backend/
├── config/
│   └── connectDB.js      # MongoDB connection
├── controllers/
│   ├── sosController.js  # SOS logic
│   └── userController.js # User management logic
├── middleware/
│   └── auth.js          # JWT authentication
├── models/
│   └── user.model.js    # User schema
├── routes/
│   ├── sosRoutes.js     # SOS endpoints
│   └── userRoutes.js    # User endpoints
├── .env
└── server.js            # Entry point
```

## 🔒 Authentication

- Protected routes require JWT token
- Add token to request header:
  ```
  Authorization: Bearer <your_token>
  ```

## 🚨 SOS Feature

- Sends emergency alerts via SMS using Twilio
- Includes real-time location data
- Notifies all registered emergency contacts

## 💻 Technologies

- Node.js & Express
- MongoDB with Mongoose
- JWT Authentication
- Twilio SMS API
- CORS enabled

## ⚠️ Error Responses

```json
{
	"error": "Error message description"
}
```

Common Status Codes:

- 200: Success
- 400: Bad Request
- 401: Unauthorized
- 404: Not Found
- 500: Server Error
