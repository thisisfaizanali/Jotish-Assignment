# 🚀 Jotish Internship Assignment

A modern ReactJS dashboard application built as part of the Jotish internship assignment.

This project demonstrates authentication, API integration, data visualization, camera integration, and responsive UI design using modern frontend best practices.

---

## 🌟 Features

### 🔐 Authentication

- Login validation using environment variables
- Redirect to dashboard on successful login
- Logout functionality

### 📊 Employee Dashboard

- Fetches employee data from REST API
- Displays employees in responsive card layout
- Live search filtering
- Dashboard summary statistics:
  - Total Employees
  - Unique Cities
  - Highest Salary

### 📄 Employee Details Page

- Displays complete employee information
- Clean structured layout
- Navigation controls

### 📸 Camera Integration

- Capture employee photo using webcam
- Preview captured image
- Retake option

### 📈 Data Visualization

- Salary Bar Graph (Top 10 employees)
- Interactive Map showing employee cities

---

## 🛠 Tech Stack

- **React (Vite)**
- **TailwindCSS**
- **React Router**
- **Axios**
- **Recharts**
- **React Leaflet**
- **React Webcam**

---

## 🔌 API Integration

Data is fetched from:

```
https://backend.jotish.in/backend_dev/gettabledata.php
```

POST Request Body:

```json
{
  "username": "test",
  "password": "123456"
}
```

The API returns structured employee data which is transformed into usable objects before rendering.

---

## 🧠 Architecture Decisions

- API logic separated into `services/api.js`
- Environment variables used for credentials
- Data transformation layer for cleaner UI logic
- Loading and error states handled properly
- Responsive grid layout
- Reusable design system using Tailwind utilities

---

## ⚙️ Setup Instructions

1. Clone the repository

```bash
git clone <your-repo-url>
cd jotish-assignment
```

2. Install dependencies

```bash
npm install
```

3. Create `.env` file in root

```
VITE_API_URL=https://backend.jotish.in/backend_dev/gettabledata.php
VITE_API_USERNAME=test
VITE_API_PASSWORD=123456
VITE_APP_USERNAME=testuser
VITE_APP_PASSWORD=Test123
```

4. Start development server

```bash
npm run dev
```

---

## 📂 Folder Structure

```
src/
 ├── pages/
 ├── services/
 ├── components/
 ├── App.jsx
 ├── main.jsx
```

---

## 📸 Screenshots

Include the following in your submission:

- Login Page
- Dashboard
- Details Page
- Camera Capture
- Salary Bar Graph
- Map View

---

## 🎥 Demo

Include a 2–3 minute screen recording demonstrating:

1. Login
2. Dashboard data rendering
3. Search functionality
4. Details navigation
5. Photo capture
6. Bar graph
7. Map view
8. Logout

---

## 📌 Conclusion

This project showcases:

- API integration
- State management
- UI/UX design
- Data visualization
- Real-world frontend architecture
- Clean and scalable project structure

---

💡 Built with attention to detail and modern frontend best practices.
