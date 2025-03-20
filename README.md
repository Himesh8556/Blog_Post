# Blog Post - Full Stack Project

## Overview
Blog Post is a full-stack web application built using **Node.js**, **Express.js**, **MongoDB**, and **React.js**. This project allows users to create, read, update, and delete blog posts with a simple and interactive UI.

## Tech Stack

### Backend
- **Node.js** (v23.4)
- **Express.js**
- **Mongoose** (MongoDB ODM)
- **CORS** (Cross-Origin Resource Sharing)
- **dotenv** (Environment variable management)
- **Nodemon** (For automatic server restarts during development)

### Frontend
- **React.js**
- **React Router DOM** (For routing)
- **Axios** (For making API requests)

## Installation & Setup

### Prerequisites
Make sure you have the following installed:
- **Node.js v23.4**
- **MongoDB** (Locally or through MongoDB Atlas)
- **npm** or **yarn**

### Backend Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/blogpost.git
   cd blogpost/backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file in the backend directory and add your MongoDB connection string:
   ```env
   MONGO_URI=your_mongodb_connection_string
   ```
4. Start the backend server:
   ```sh
   npm run dev
   ```
   The backend server will start on **http://localhost:8081**.

### Frontend Setup
1. Navigate to the frontend directory:
   ```sh
   cd ../frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the frontend application:
   ```sh
   npm start
   ```
   The frontend will run on **http://localhost:3000**.

## Features
- Create, read, update, and delete blog posts
- Interactive UI with React.js
- RESTful API using Express.js
- MongoDB as the database
- CORS enabled for frontend-backend communication

## License
This project is open-source and available under the MIT License.

## Author
Himesh Kumar

