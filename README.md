# MERN Boilerplate

A clean and minimal **MERN (MongoDB, Express, React, Node.js) Boilerplate** to quickly start full-stack web applications with a structured backend and modern frontend setup.

---

## 🚀 Tech Stack

### Frontend
- React
- Vite
- Tailwind CSS
- Axios

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- dotenv
- CORS

---


---

## ⚙️ Prerequisites

Make sure you have the following installed:

- Node.js (v18 or higher)
- MongoDB (local or MongoDB Atlas)
- Git

---

## 🛠️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/suryanshuverma0/MERN-Boilerplate.git
cd MERN-Boilerplate
```


### 2️⃣ Backend Setup
```bash
cd server
npm install
```


Create a .env file inside the server directory:
```bash
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Start the backend server:
```bash
npm run dev
```

Backend runs at:
```bash
http://localhost:5000
```

### 3️⃣ Frontend Setup

Open a new terminal:
```bash
cd client
npm install
npm run dev
```

Frontend runs at:

```bash
http://localhost:5173
```

## 🔗 API Configuration

Ensure the frontend is pointing to the backend API:
```bash
http://localhost:5000/api
```

You can configure this using environment variables in the frontend if needed.

## ✨ Features

- Clean MERN folder structure

- Environment variable support

- Ready-to-use Express API

- MongoDB connection with Mongoose

- Modern React + Vite setup

- Easy to extend for authentication and CRUD features

## 📌 Future Improvements

- JWT Authentication

- Role-based access control

- Request validation

- Docker support

- Deployment guides

## 🤝 Contributing

Contributions are welcome!
Fork the repository and submit a pull request.

## 📜 License

This project is open-source and available under the MIT License.

## 👨‍💻 Author

Suryanshu Verma

GitHub: https://github.com/suryanshuverma0

Portfolio: https://suryanshuverma.com.np


---
