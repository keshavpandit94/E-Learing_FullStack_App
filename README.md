# E-Learning Full Stack App

This repository contains a complete e-learning platform with separate user-facing and admin-facing frontends plus a Node.js/Express backend.

## Project Structure

- `Backend/` - Express API server, MongoDB integration, Cloudinary uploads, Razorpay payments, authentication and course/enrollment management.
- `Frontend/` - React user portal for browsing courses, viewing instructors, enrolling, profile management, and course playback.
- `AdminFrontend/` - React admin dashboard for managing courses, instructors, students, enrollments, and transactions.

## Tech Stack

- Backend: Node.js, Express 5, MongoDB, Mongoose, JWT, Cloudinary, Razorpay
- Frontend: React 19, Vite, Tailwind CSS, React Router, Axios
- Admin Frontend: React 19, Vite, Tailwind CSS, React Router, Axios

## Getting Started

### 1. Install dependencies

Open separate terminals for each service and install dependencies:

```bash
cd Backend
npm install

cd ../Frontend
npm install

cd ../AdminFrontend
npm install
```

### 2. Configure environment variables

Create a `.env` file inside `Backend/` with values for your environment. Typical variables include:

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
```

### 3. Run the backend

```bash
cd Backend
npm run dev
```

The backend starts with `nodemon` and loads environment variables using `dotenv`.

### 4. Run the frontend apps

User frontend:

```bash
cd Frontend
npm run dev
```

Admin frontend:

```bash
cd AdminFrontend
npm run dev
```

## Available Scripts

### Backend
- `npm run dev` - Start the backend server with nodemon.

### Frontend / AdminFrontend
- `npm run dev` - Start the development server
- `npm run build` - Create a production build
- `npm run preview` - Preview the production build
- `npm run lint` - Run ESLint

## Features

### User Frontend
- Browse available courses
- View course details and instructors
- Enroll in courses
- Authentication flow: signup and login
- Course player and progress tracking
- User profile management

### Admin Frontend
- Course creation and editing
- Instructor and student management
- Enrollment and progress monitoring
- Transaction overview and admin dashboard

### Backend
- Secure authentication and authorization
- Course, enrollment, instructor, and progress APIs
- File upload support via Cloudinary
- Payment processing with Razorpay

## Notes

- This repo contains three separate apps, so run each service independently.
- Ensure the backend is running before using the frontend apps.
- Customize `.env` values to match your MongoDB, Cloudinary, and Razorpay accounts.

## License

This project is provided as-is. Update the license section if needed.
