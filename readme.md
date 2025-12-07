# 📢 Notice Management Backend (Express.js + MongoDB)

This backend provides APIs for creating, listing, updating, and managing notices. It is designed to work with a Next.js (App Router) frontend and follows clean code, modular architecture, and REST best practices.

---

## 🧩 Tech Stack

- Node.js

- Express.js

- MongoDB + Mongoose

- CORS

- Dotenv

## 🚀Features 

- Allows creating new notices with full backend validation.

- Automatic Notice Publishing Based on Scheduled Time

- Prevents saving empty or invalid data.

- Fetches notices with pagination and sorting by createdAt in descending order.

- Centralized error handling for all API requests.



## 📂 Project Structure

```bash
notice-module-server/
│── src/
│   ├── app.js
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   └── notice.controller.js
│   ├── jobs/
│   │   └── isPublishedNotice.job.js
│   ├── services/
│   │   └── notice.service.js
│   ├── validators/
│   │   └── notice.validator.js
│   ├── models/
│   │   └── notice.model.js
│   ├── routes/
│   │   └── notice.routes.js
│   ├── middlewares/
│── │   ├── error.middleware.js
│   │   └── loggger.middleware.js
│   └── utils/
│   
├── server.js
│── .env
│── .gitIgnore
│── package-lock.json
│── package.json
└── README.md
```

## ⚙️ Installation & Setup

### 1️⃣ Clone the repo
```bash
git clone https://github.com/mahim-dewan/notice-module-server.git

cd notice-module-server
```
### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Create a .env file
```bash
MONGO_URI = "Your MongoDB URI"
PORT = 4000
```

### 4️⃣ Start development server
```bash
npm run dev
```

### 5️⃣Finally open it
```bash
http://localhost:4000
```  

## 🗝️ API Endpoints

#### ♦️Base URL
```bash

```
#### 🟠create notice 
```bash
POST : /api/notices

{
  "title": "Monthly Performance Review",
  "target_department": ["HR", "Web", "IT", "Individual"],
  "employee_id": "EMP12345",
  "employee_name": "Mahim Dewan",
  "employee_position": "Web Developer",
  "type": "Performance Improvement",
  "publish_date": "2025-12-06T00:00:00.000Z",
  "body": "Please review your monthly performance and submit your self-assessment by the end of this week.",
  "attaches": [
    "https://example.com/attachments/performance_review.pdf",
    "https://example.com/attachments/guidelines.docx"
  ]
}
```


## 🧑‍💻 Author

Developed by Mahim Dewan

🔗 [portfolio](https://mahim-dewan.vercel.app/)   
🔗 [Linkedin](https://www.linkedin.com/in/mahim-dewan79/)   
🔗 [GitHub](https://github.com/mahim-dewan) 