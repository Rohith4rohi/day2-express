# 🚀 Task2 Fullstack Authentication App

A complete fullstack web application built with **React** (frontend) and **Express + PostgreSQL** (backend) implementing secure user authentication with JWT tokens.

## ✨ Features

- 📝 **User Registration**: Create new accounts with validation and secure password hashing
- 🔑 **User Login**: Authenticate users with email/password credentials  
- �️* **Protected Routes**: JWT-based authentication middleware
- � **Tonken Management**: Secure JWT storage and automatic token handling
- � ***Logout**: Clean token removal and session management
- � **oResponsive UI**: Clean, modern interface for all authentication flows

## 🏗️ Project Structure

```
Task2-application/
├── backend/                 # Express.js API server
│   ├── routes/auth.js      # Authentication routes
│   ├── models/user.js      # User database model
│   ├── middleware/auth.js  # JWT authentication middleware
│   ├── db.js              # PostgreSQL connection
│   ├── index.js           # Server entry point
│   ├── .env               # Environment variables
│   └── setup-db.sql       # Database setup script
├── frontend/               # React application
│   ├── src/
│   │   ├── pages/         # React page components
│   │   ├── components/    # Reusable components
│   │   ├── api.js        # API configuration
│   │   └── App.js        # Main app component
│   └── .env              # Frontend environment variables
└── screenshots/          # Application screenshots
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- PostgreSQL (v12 or higher)
- Git

### 1. Clone Repository
```bash
git clone https://github.com/samsanjay99/Task2-application.git
cd Task2-application
```

### 2. Database Setup
```sql
-- Connect to PostgreSQL and create database
CREATE DATABASE task2_auth_db;

-- Run the setup script
psql -U postgres -d task2_auth_db -f backend/setup-db.sql
```

### 3. Backend Setup
```bash
cd backend
npm install

# Copy and configure environment variables
cp .env.example .env
# Edit .env with your database credentials
```

**Required .env variables:**
```env
DB_HOST=localhost
DB_USER=postgres
DB_PASSWORD=your_postgres_password
DB_NAME=task2_auth_db
DB_PORT=5432
JWT_SECRET=your_super_secret_jwt_key
JWT_EXPIRES_IN=1d
PORT=5000
```

### 4. Frontend Setup
```bash
cd frontend
npm install

# Copy environment file
cp .env.example .env
```

### 5. Run the Application
```bash
# Terminal 1 - Backend
cd backend
npm run dev

# Terminal 2 - Frontend  
cd frontend
npm start
```

**Access the application:**
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## � AnPI Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/api/users/signup` | Register new user | No |
| POST | `/api/users/signin` | Login user | No |
| GET | `/api/users/me` | Get user profile | Yes |

## 📱 Application Flow

1. **Landing Page**: Choose between Sign Up or Sign In
2. **Sign Up**: Register with name, phone, email, and password
3. **Sign In**: Login with email and password
4. **Home Page**: View profile information (name and phone)
5. **Sign Out**: Logout and return to sign in page

## 🧪 Testing Checklist

- [ ] Sign up with new email → success
- [ ] Sign up with existing email → error message
- [ ] Sign in with correct credentials → success  
- [ ] Sign in with wrong credentials → error message
- [ ] Access protected route with valid token → success
- [ ] Access protected route without token → unauthorized error
- [ ] Home page displays name and phone correctly
- [ ] Sign out clears token and redirects properly

## 📸 Screenshots

### Landing Page
![Landing Page](screenshots/Screenshot%202025-10-20%20091204.png)

### Sign Up Page
![Sign Up Page](screenshots/Screenshot%202025-10-19%20133834.png)

### Sign In Success & Home Screen
![Sign In Success](screenshots/Screenshot%202025-10-19%20133949.png)

### Home Screen with User Profile
![Home Screen](screenshots/Screenshot%202025-10-19%20133909.png)

## 🛠️ Technologies Used

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **PostgreSQL** - Database
- **bcryptjs** - Password hashing
- **jsonwebtoken** - JWT authentication
- **cors** - Cross-origin resource sharing
- **dotenv** - Environment variable management

### Frontend
- **React** - UI library
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client
- **React Scripts** - Build tools

## 🔒 Security Features

- Password hashing with bcrypt
- JWT token-based authentication
- Protected API routes
- Input validation and sanitization
- Secure token storage in localStorage
- CORS configuration

## 🚀 Deployment

The application is ready for deployment on platforms like:
- **Backend**: Heroku, Railway, DigitalOcean
- **Frontend**: Netlify, Vercel, GitHub Pages
- **Database**: PostgreSQL on Heroku, AWS RDS, or similar

## 📝 License

This project is licensed under the ISC License.

## 👨‍💻 Author

**Rohith**
- GitHub: [@Rohith4rohi](https://github.com/Rohith4rohi)

---

⭐ If you found this project helpful, please give it a star!
#
