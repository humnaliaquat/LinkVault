# LinkVault 🔗

LinkVault is a full-stack web application for saving, organizing, and managing useful links in one place.

Instead of keeping important links scattered across browser bookmarks, notes, and different apps, LinkVault provides a simple and organized space where users can store and access their links whenever they need them.

## ✨ Features

- 🔐 User authentication
- 🔗 Save and manage links
- 📝 Add titles and descriptions to links
- 🗂️ Organize links into categories
- 🔍 Search saved links
- ✏️ Edit existing links
- 🗑️ Delete links
- 📱 Responsive interface
- ⚡ Fast and simple user experience

## 🛠️ Tech Stack

### Frontend

- React
- TypeScript
- Tailwind CSS
- Axios
- React Router
- Lucide React

### Backend

- Node.js
- Express.js
- TypeScript
- MongoDB
- Mongoose
- JWT Authentication
- bcrypt

## 📁 Project Structure

```text
LinkVault/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── hooks/
│   │   └── App.tsx
│   ├── package.json
│   └── ...
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── middleware/
│   │   └── server.ts
│   ├── package.json
│   └── ...
│
└── README.md
```

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone <your-repository-url>
cd LinkVault
```

### 2. Setup the Backend

```bash
cd backend
npm install
```

Create a `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Start the backend:

```bash
npm run dev
```

The backend will run on:

```text
http://localhost:5000
```

### 3. Setup the Frontend

Open another terminal:

```bash
cd frontend
npm install
```

Create a `.env` file if required:

```env
VITE_API_URL=http://localhost:5000
```

Start the frontend:

```bash
npm run dev
```

The frontend will normally be available at:

```text
http://localhost:5173
```

## 🔑 Authentication

LinkVault uses JWT-based authentication to protect user accounts and private saved links.

Passwords are securely hashed using bcrypt before being stored in the database.

## 📌 Core Workflow

```text
User
  ↓
Register / Login
  ↓
Authentication
  ↓
Dashboard
  ↓
Add Link
  ↓
Store in MongoDB
  ↓
Organize / Search / Edit / Delete
```

## 🎯 Purpose

The main goal of LinkVault is to practice building a complete full-stack application while solving a practical problem: keeping useful links organized and easily accessible.

The project demonstrates concepts including:

- REST API development
- Authentication and authorization
- CRUD operations
- MongoDB database integration
- React state management
- API integration
- Responsive UI development
- Environment variable management
- Full-stack project structure

## 🔮 Future Improvements

- 🔖 Browser extension for saving links
- 🏷️ Tags and advanced filtering
- ⭐ Favorite links
- 📊 Link usage analytics
- 🌙 Dark mode
- 🔗 Automatic link previews
- 📤 Import/export bookmarks
- ☁️ Cloud deployment

## 👩‍💻 Author

**Hamna Liaqat**

Full-Stack Developer

- GitHub: `https://github.com/humnaliaquat`
- LinkedIn: `https://www.linkedin.com/in/hamna-liaquat-9b51a2275`

---

⭐ If you find this project useful, consider giving the repository a star!