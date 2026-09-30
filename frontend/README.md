# LinkVault 🔗

The frontend of **LinkVault**, a modern web application for saving, organizing, and managing useful links in one place.

Built with **Next.js, TypeScript, and Tailwind CSS**, the frontend provides a clean and responsive interface for interacting with the LinkVault backend.

## ✨ Features

- 🔐 User authentication
- 🔗 Save and manage useful links
- 📝 Add and edit link details
- 🗂️ Organize links
- 🔍 Search through saved links
- 🗑️ Delete links
- 📱 Responsive design
- ⚡ Fast and modern UI
- 🔄 API integration with the backend

## 🛠️ Tech Stack

- **Next.js** — React framework
- **TypeScript** — Type-safe development
- **Tailwind CSS** — Styling and responsive design
- **Axios** — API requests
- **Lucide React** — Icons

## 📁 Project Structure

```text
frontend/
│
├── app/
│   ├── components/
│   ├── dashboard/
│   ├── login/
│   ├── register/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── public/
│   └── ...
│
├── .env.local
├── .gitignore
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── tsconfig.json
└── README.md
```

> The exact folder structure may change as the project develops.

## 🚀 Getting Started

### Prerequisites

Make sure you have installed:

- [Node.js](https://nodejs.org/)
- npm

### 1. Clone the repository

```bash
git clone <your-repository-url>
cd LinkVault/frontend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env.local` file in the frontend root:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

Update the API URL if your backend is running on a different port or deployed server.

### 4. Start the development server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

The application will automatically update whenever you make changes to the source code.

## 🔌 Backend

The frontend communicates with the LinkVault backend through REST APIs.

Make sure the backend is running before using features that require API access.

Example:

```text
Frontend
   │
   │ HTTP Requests
   ▼
Backend API
   │
   ▼
MongoDB
```

## 📜 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the development server |
| `npm run build` | Creates a production build |
| `npm start` | Starts the production server |
| `npm run lint` | Runs ESLint |

## 🏗️ Production Build

To create a production build:

```bash
npm run build
```

Then start the production server:

```bash
npm start
```

## 🔐 Environment Variables

The following environment variable is required:

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_API_URL` | URL of the LinkVault backend API |

**Never commit `.env.local` or other files containing private credentials or secrets.**

## 🎯 Project Goal

LinkVault was built as a full-stack project to provide a simple solution for storing and organizing useful links while practicing modern web development concepts.

The frontend focuses on:

- Component-based architecture
- API integration
- Authentication flows
- Responsive UI development
- TypeScript
- Modern Next.js App Router
- Clean and reusable components

## 🔮 Future Improvements

- ⭐ Favorite links
- 🏷️ Tags and advanced filtering
- 🔗 Link previews
- 🌙 Dark mode
- 📊 Link analytics
- 📥 Import browser bookmarks
- 📤 Export saved links
- 🌐 Browser extension
- ☁️ Production deployment

## 👩‍💻 Author

**Hamna Liaqat**

Full-Stack Developer

- GitHub: `https://github.com/humnaliaquat`
- LinkedIn: `https://www.linkedin.com/in/hamna-liaquat-9b51a2275/`

---

⭐ **LinkVault — Keep your links safe, organized, and easy to find.**