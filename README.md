# 🔮 LLM Workflow Agent — Hindi-English AI Workflow Assistant  
*Built for WCHL Hackathon 2025 | Qualified for National Level*  

> **Automates everyday tasks via Hindi-English mixed prompts using LLM and APIs.**  
> Handles reminders, emails, todos, weather queries, Google Calendar scheduling with Meet links.

---

## 🧠 Problem Statement  

| **Issue** | **Description** |
|------------|----------------|
| **Task Fragmentation** | Users manage reminders, emails, todos, and calendar events separately. |
| **Language Barrier** | Existing assistants poorly support mixed Hindi-English commands. |
| **Manual Effort** | Daily workflow tasks require repetitive manual intervention. |
| **Objective** | Build an AI agent that understands mixed-language commands and automates common workflow tasks efficiently. |

---

## 💡 Our Solution — *LLM Workflow Agent Platform*  

| **Component** | **Description** |
|----------------|----------------|
| **LLM Engine** | LangChain + Google Gemini integration to parse and understand Hindi-English prompts. |
| **Task Agents** | Modular task handlers for emails, reminders, todos, weather, and calendar events. |
| **Scheduler** | Cron-like task scheduler for reminders and calendar events. |
| **Backend API** | Node.js + Express.js API exposing endpoints for frontend and external integrations. |
| **Frontend Dashboard** | React + Vite + Tailwind interface for user interaction, chat fallback, and task overview. |
| **Realtime Updates** | Socket.IO for live reminder alerts and task notifications. |

---

## 🧩 Core Features  

| **Feature** | **Description** |
|-------------|----------------|
| 🗣️ **Mixed-Language Understanding** | Supports Hindi-English commands for natural task input. |
| 🔔 **Reminders & Alarms** | Schedule tasks with live alerts via Socket.IO. |
| 📧 **Smart Email Automation** | Compose and send emails automatically using Nodemailer. |
| ☀️ **Weather Queries** | Fetch live weather info for any city. |
| ✅ **Todo Management** | Create, view, and manage todos seamlessly. |
| 🗓️ **Google Calendar Integration** | Schedule events with auto-generated Meet links. |
| 💬 **LLM Chat Fallback** | Handles general conversation if no specific task detected. |

---

## ⚙️ Tech Stack  

| **Layer** | **Technology Used** |
|-----------|-------------------|
| **Backend** | Node.js, Express.js, JWT, Session Middleware |
| **AI / LLM** | LangChain + Google Gemini API |
| **Database** | MongoDB (Mongoose) |
| **Email** | Nodemailer |
| **Calendar & Meet** | Google Calendar API |
| **Frontend** | React, Vite, Tailwind CSS |
| **Realtime** | Socket.IO |

---

## 📂 Project Structure  


```text
nl_task_automator/
├── backend/
│   ├── agents/         # Task logic modules (email, calendar, reminders, etc.)
│   ├── controllers/    # Express route handlers
│   ├── llm/            # Gemini API integration and prompt handling
│   ├── middlewares/    # Authentication and error handlers
│   ├── models/         # Mongoose database schemas
│   ├── routes/         # API route definitions
│   ├── scheduler/      # Scheduled tasks & reminder management
│   ├── utils/          # Utility functions (date parsing, OAuth setup, etc.)
│   └── server.js       # Entry point for the backend server
│
├── frontend/
│   ├── public/         # Static files (index.html, icons, manifest)
│   ├── src/            # React components and pages
│   └── vite.config.js  # Frontend bundler configuration
│
├── .gitignore           # Git ignore configuration
└── README.md            # Project documentation (this file)
```

## 🚀 Getting Started  

| **Step** | **Command / Instructions** |
|---------|---------------------------|
| **Backend Setup** | `cd backend && npm install && cp .env.example .env` <br> Edit `.env` with Mongo URI, JWT secret, Gemini API key, Google OAuth credentials <br> `npm run dev` |
| **Frontend Setup** | `cd frontend && npm install && cp .env.example .env` <br> Edit `.env` with `VITE_API_BASE_URL=http://localhost:4000` <br> `npm run dev` |

---

## 🔑 Environment Variables  

| **File** | **Variables** |
|----------|---------------|
| `backend/.env` | `PORT=4000` <br> `MONGO_URI=<mongo-uri>` <br> `JWT_SECRET=<secret>` <br> `GEMINI_API_KEY=<key>` <br> `EMAIL=<smtp_email>` <br> `EMAIL_PASS=<smtp_pass>` <br> `GOOGLE_CLIENT_ID=<id>` <br> `GOOGLE_CLIENT_SECRET=<secret>` <br> `GOOGLE_REDIRECT_URI=http://localhost:4000/api/google/callback` |
| `frontend/.env` | `VITE_API_BASE_URL=http://localhost:4000` |

---

## 🛠️ Usage  

```bash
# Example command
Create a Google Meet with team Friday 5 PM and email boss
```

## 📦 Available Scripts

## Backend

```bash
npm run dev     # Start development server with nodemon
npm start       # Start production server
```

## Frontend

```bash
npm run dev     # Start Vite development server
npm run build   # Production build
npm run preview # Preview production build
```

## 🤝 Contributing

```bash
git checkout -b feature/your-feature
git commit -m "feat: add your feature"
git push origin feature/your-feature
```

## 🎥 Demonstration Video  

| **Type** | **Link** |
|-----------|----------|
| ▶️ Video Demo | [Watch Demo](https://drive.google.com/file/d/1GJmsFnQ9A68i2jkN4p9MuwBgARkdHUXP/view?usp=sharing) |

---

© 2025 **Jeet Goyal** | Built for **WCHL Hackathon 2025 (National Level Qualification)**





