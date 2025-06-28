# FastAPI + React (Vite) Template

A minimal fullstack template combining a FastAPI backend with a React (Vite) frontend.

---

## 🗺️ Architecture

```txt
.
├── backend/              # 🐍 FastAPI backend
│   └── main.py           # 🚀 Launches the API server
├── frontend/             # ⚛️ React 19 frontend (Vite)
│   ├── public/           # 🧍‍♂️ Static assets (e.g. favicon)
│   ├── src/              # 👨‍💻 Source code
│   │   ├── components/   # 🧩 Reusable UI components
│   │   ├── pages/        # 📚 Route-level pages (Home, About)
│   │   ├── App.jsx       # 🧠 Root app structure
│   │   ├── main.jsx      # 🏗️ React DOM entrypoint
│   │   ├── index.css     # 🎨 Global styles
│   │   └── assets/       # 🖼️ Local images and SVGs
│   ├── index.html        # 🚪 HTML entrypoint
│   ├── vite.config.js    # ⚡ Vite config
│   └── package.json      # ☁️ Project metadata & scripts
├── tools/                # 🛠️ Dev tools and helpers
├── .gitignore
├── .prettierrc
├── eslint.config.js
└── tailwind.config.js
```

## 👷 Local Development

```bash
cd backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
cp .env
uvicorn main:app --reload
```

The backend exposes a simple API and sets CORS for the React dev server:

```bash
cd frontend
npm install
npx vite
```

## 🍭 Bonus Features

- **🌊 Tailwind setup**
- **🧼 Prettier formatting**: Run `npm run format` from root
- **🪧 Auto-header routes**: Run `node tools/add-path-header.cjs` from root.
