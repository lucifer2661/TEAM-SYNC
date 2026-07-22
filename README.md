# TeamSync

A full-stack **Employee Management System** with a modern React frontend, integrating with a secure JWT-authenticated REST API for employee and user management.

> Frontend architecture, state management, auth flow integration, and UI/UX built end-to-end. Backend API consumed via a documented REST interface.

---

## 🚀 Features

- **Secure Authentication** — JWT-based login/register with access & refresh token rotation, password hashing via bcrypt
- **Employee Management** — Full CRUD operations with pagination, search, and filtering (by department, role, status)
- **Protected Routes** — Route-level access control on both frontend (React Router guards) and backend (auth middleware)
- **Responsive UI** — Built with Tailwind CSS, form validation via React Hook Form
- **State Management** — Redux Toolkit for predictable, centralized app state
- **RESTful API** — Clean, resource-based endpoint design following REST conventions

---

## 🛠️ Tech Stack

**Frontend**
- React (Vite)
- Redux Toolkit
- React Router DOM
- React Hook Form
- Axios
- Tailwind CSS

**Backend (API)**
- REST API with JWT-based authentication
- Consumed via Axios with credentialed (cookie-based) requests

---

## 📂 Project Structure

```
team-sync/
├── src/
│   ├── app/
│   │   ├── constants/
│   │   ├── layouts/
│   │   ├── protectedRoutes/
│   │   └── routes/
│   ├── features/             # Feature-based modules (auth, employees, etc.)
│   ├── shared/state/         # Redux slices
│   └── App.jsx
├── public/
└── vite.config.js
```

---

## 🔐 API Overview

**Auth**
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Create a new user account |
| POST | `/api/auth/login` | Authenticate and issue tokens |
| GET | `/api/auth/me` | Get current authenticated user |
| GET | `/api/auth/get-accessToken` | Refresh access token |
| POST | `/api/auth/logout` | Invalidate session |

**Employees**
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/employee` | List employees (supports pagination, search, filters) |
| POST | `/api/employee` | Create a new employee record |
| PUT | `/api/employee/:id` | Update an employee record |
| DELETE | `/api/employee/:id` | Remove an employee record |

---

## ⚙️ Getting Started

### Prerequisites
- Node.js (v18+)

### Setup
```bash
git clone https://github.com/lucifer2661/TEAM-SYNC.git
cd TEAM-SYNC
npm install
npm run dev
```

The app runs on `http://localhost:5173` and connects to the API base URL configured in `src/config` (Axios instance).

---

## 🗺️ Roadmap

- [x] Project scaffolding & architecture
- [x] Auth pages (Login/Register UI)
- [ ] Full API integration (auth flow + employee CRUD)
- [ ] OAuth (Google/GitHub) login
- [ ] Deployment

---

## 👤 Author

**Aditya Thakur**
- GitHub: [@lucifer2661](https://github.com/lucifer2661)
- LinkedIn: [aditya-thakur](https://linkedin.com/in/aditya-thakur-615b75194)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
