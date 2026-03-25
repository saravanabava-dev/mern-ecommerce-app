
# 🛒 MERN E-Commerce Application

## 📌 Description

This is a **full-stack e-commerce web application** built using the MERN stack.
It includes a dynamic frontend built with React and a powerful backend using Node.js and Express, connected to a MongoDB database.

---

## 🚀 Features

* 🔐 User Authentication (Login / Register)
* 🛍️ Product Listing & Management
* 🛒 Add to Cart functionality
* 🔄 RESTful API integration
* ⚡ Fast and responsive UI
* 🔗 Full frontend & backend integration

---

## 🛠️ Tech Stack

### 🌐 Frontend

* React.js
* HTML5
* CSS3
* JavaScript (ES6+)
* Bootstarp

### ⚙️ Backend

* Node.js
* Express.js

### 🗄️ Database

* MongoDB (with Mongoose)

---

## 📂 Project Structure

```
backend/
├── src/
│   ├── models/        # MongoDB schemas
│   ├── routes/        # API routes
│   ├── utils/         # Utility functions
│   ├── middleware/    # Middleware logic
│   ├── index.mjs      # Entry point
│
├── .env               # Environment variables (ignored)
├── .gitignore
├── package.json

│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/  # Reusable UI components
│   │   ├── pages/       # Page-level components
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│
├── .gitignore
├── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```
git clone https://github.com/your-username/mern-ecommerce-app.git
cd mern-ecommerce-app
```

---

### 2️⃣ Setup Backend

```
cd backend
npm install
```

---

### 3️⃣ Setup Frontend

```
cd ../frontend
npm install
```

---

## ▶️ Run the Application

### Start Backend Server

```
cd backend
npm start
```

---

### Start Frontend

```
cd frontend
npm start
```

👉 App runs on:

* Frontend → http://localhost:3000
* Backend → http://localhost:5000

---

## 🔐 Environment Variables

Create a `.env` file inside the **backend folder**:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

## 🧠 How It Works

* React frontend sends API requests
* Express backend handles logic
* MongoDB stores application data
* Mongoose manages schema & queries

---

## 📌 Best Practices Followed

* Separation of frontend and backend
* Secure environment variables using `.env`
* Clean folder structure
* Modular code organization

---

## 👨‍💻 Author

**Saravana Bava **

