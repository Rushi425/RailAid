## RailAid – Monorepo

A full-stack project with:
- Backend: Express + MongoDB
- Chatbot: Flask API
- Frontend: React (Vite)

### Project structure
```
Backend/      # Express API server
chatbot/      # Flask chatbot API
Frontend/     # React web app (Vite)
```

### Prerequisites
- Node.js 18+ and npm
- Python 3.10+
- MongoDB URI (Atlas or local)

---

## Backend (Express + MongoDB)
Location: `Backend/`

### Environment
Create `Backend/.env` with:
```
MONGO_URI=<your_mongodb_connection_string>
PORT=4000
```

### Install & run
```bash
cd Backend
npm install
# development (use a process manager or nodemon if configured)
node server.js
```

Notes:
- DB connection uses `MONGO_URI` from `.env` (`Backend/config/db.js`).
- CORS and JSON body parsing are enabled.

---

## Chatbot (Flask)
Location: `chatbot/`

### Install & run
It’s recommended to use a virtual environment.
```bash
cd chatbot
python -m venv .venv
source .venv/bin/activate   # Windows: .venv\Scripts\activate
pip install flask flask-cors
python chatbot_api.py
```

Default server: `http://127.0.0.1:5000`
- Endpoint: `POST /chat` with JSON `{ "message": "..." }`
- Response: `{ "reply": "..." }`

---

## Frontend (React + Vite)
Location: `Frontend/`

### Install & run
```bash
cd Frontend
npm install
npm run dev
```

Default dev URL: as printed by Vite (typically `http://localhost:5173`).

### Build
```bash
npm run build
npm run preview
```

---

## Chatbot integration in the UI
- A floating chat bubble appears on most pages (bottom-right).
- Clicking it toggles a compact chat panel that uses the existing `Chatbot` component (`Frontend/src/components/Chatbot.jsx`).
- The chat component sends messages to `http://127.0.0.1:5000/chat`.
- Hidden on auth-related routes: `/user-login`, `/staff-login`, `/admin-login`, `/user-register`.

If your Flask server runs on a different host/port, update the fetch URL inside `Chatbot.jsx`.

---

## Common issues
- Chatbot not responding: ensure the Flask server is running on `127.0.0.1:5000` and CORS is enabled.
- Backend DB not connecting: verify `MONGO_URI` in `Backend/.env` and that MongoDB is reachable.
- CORS errors between apps: both Backend and Chatbot enable CORS; confirm ports/hosts match the environment.

---

## Scripts quick reference
- Backend: `cd Backend && npm install && node server.js`
- Chatbot: `cd chatbot && pip install flask flask-cors && python chatbot_api.py`
- Frontend: `cd Frontend && npm install && npm run dev`

