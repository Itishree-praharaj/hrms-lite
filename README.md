# HRMS Lite — Full Stack Application

## Live Application

Frontend: https://hrms-lite-ivory-chi.vercel.app/
Backend API: https://hrms-lite-c9kn.onrender.com/api/health/

## GitHub Repository

https://github.com/Itishree-praharaj/hrms-lite

---

## Project Overview

HRMS Lite is a lightweight Human Resource Management System designed for internal administrative use.
The application allows an admin to manage employee records and track daily attendance through a clean and simple web interface.

The goal of this project is to demonstrate full-stack development capabilities including API design, database modeling, frontend integration, validation, and deployment readiness.

---

## Features

### Employee Management

* Add new employee
* Unique employee ID validation
* Email validation
* View employee list
* Delete employee
* View individual employee attendance

### Attendance Management

* Mark attendance (Present / Absent)
* Prevent duplicate attendance per date
* View attendance history per employee

### UI/UX

* Clean dashboard layout
* Loading, empty and error states
* Reusable components
* Toast error handling

---

## Tech Stack

### Frontend

* React (Vite)
* TailwindCSS
* Axios
* React Router
* React Hot Toast

### Backend

* Django
* Django REST Framework
* PostgreSQL (Render)
* Gunicorn
* Whitenoise

### Deployment

* Backend: Render
* Frontend: Vercel
* Database: Render PostgreSQL

---

## Run Project Locally

### 1. Clone repository

```
git clone https://github.com/Itishree-praharaj/hrms-lite.git
cd hrms-lite
```

---

### 2. Backend Setup

```
cd backend
python -m venv venv
venv\Scripts\activate      (Windows)
source venv/bin/activate   (Linux/Mac)

pip install -r requirements.txt
```

Create `.env` file inside backend:

```
DB_NAME=your_db
DB_USER=your_user
DB_PASSWORD=your_password
DB_HOST=your_host
DB_PORT=5432
SECRET_KEY=django-secret
DEBUG=True
ALLOWED_HOSTS=*
```

Run migrations:

```
python manage.py migrate
python manage.py runserver
```

Backend runs at:

```
http://127.0.0.1:8000
```

---

### 3. Frontend Setup

```
cd ../frontend
npm install
```

Create `.env` file:

```
VITE_API_URL=http://127.0.0.1:8000/api/
```

Run:

```
npm run dev
```

Frontend runs at:

```
http://localhost:5173
```

---

## Assumptions & Limitations

* Single admin user (no authentication implemented as per requirements)
* No leave or payroll management included
* Attendance tracked only per day (no time tracking)
* Minimal dashboard analytics

---

## Notes

This project focuses on clean architecture, validation, and production-ready structure rather than feature quantity.
