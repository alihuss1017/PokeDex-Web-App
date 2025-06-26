# Pokédex Web App

A full-stack Pokédex application that lets users explore Pokémon data with beautiful visuals and responsive design.
![alt text](images/app-preview.png)
## 🧠 Technologies Used

- **Backend**: FastAPI + PostgreSQL
- **Frontend**: React + Tailwind CSS
- **Web Scraping**: Python + BeautifulSoup
- **Charting**: Chart.js (for Pokémon stat radar charts)
- **Routing**: React Router

---

## 🌟 Features

- 📦 Scraped all Pokémon data using BeautifulSoup
- 🧮 Structured and stored data in PostgreSQL
- 🔍 Search Pokémon by name
- 🧭 Navigate to detail pages with radar charts of stats
- 💡 Toggle between light and dark mode
- 🧼 Excludes alternate forms (e.g., Mega, Alolan, Galarian) from main list
- ⚙️ Environment variable-based secure DB connection

---

## 🚀 Getting Started

### 1. Clone the Repository, Install Required Packages

```bash
git clone https://github.com/your-username/pokedex-web-app.git
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

### 2. Backend Setup (FastAPI)
Create a .env file and initialize the following:
```
DB_NAME=your_db
DB_USER=your_user
DB_PASSWORD=your_password
DB_HOST=localhost
DB_PORT=5432
```

Then in terminal:
```
uvicorn main:app --reload
```

### 3. Set up FastAPI 
In a separate terminal:
```
cd pokedex-frontend
npm install 
npm start
```