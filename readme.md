# 📢 Notice Management Backend (Express.js + MongoDB)

This backend provides APIs for creating, listing, updating, and managing notices. It is designed to work with a Next.js (App Router) frontend and follows clean code, modular architecture, and REST best practices.

---

## ☯️ Quick Links
#### [Live Link⛓️‍💥](https://nebs.onrender.com)

#### [Forntend GitHub⛓️‍💥](https://github.com/mahim-dewan/notice-module-client)

#### [Forntend Live⛓️‍💥](https://nebs-it-notice.vercel.app/notices)

## 🧩 Tech Stack

- Node.js

- Express.js

- MongoDB + Mongoose

- Cloudinary + Multer

- CORS

- Dotenv

- Joi

## 🚀Features 

- Allows creating new notices with full backend validation.

- Automatic Notice Publishing Based on Scheduled Time

- Prevents saving empty or invalid data.

- Multiple image upload to Cloudinary

- Fetches notices with pagination and sorting by createdAt in descending order.

- Only status filter has been implemented.

- Centralized error handling for all API requests.



## 📂 Project Structure

```bash
notice-module-server/
│── src/
│   ├── app.js
│   │
│   ├── config/
│   │   ├── cloudinary.js
│   │   └── db.js
│   │
│   ├── controllers/
│   │   ├── imageUpload.controller.js
│   │   └── notice.controller.js
│   │
│   ├── jobs/
│   │   └── isPublishedNotice.job.js
│   │
│   ├── services/
│   │   ├── cloudinary.service.js
│   │   └── notice.service.js
│   │
│   ├── validators/
│   │   └── notice.validator.js
│   │
│   ├── models/
│   │   └── notice.model.js
│   │
│   ├── routes/
│   │   ├── upload.middleware.js
│   │   └── notice.routes.js
│   │
│   └── middlewares/
│       ├── upload.middleware.js
│       ├── error.middleware.js
│       └── loggger.middleware.js
│    
│   
├── server.js
├── loadENV.js
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
MONGO_URI=Your_MongoDB_URI"
PORT=4000

CLOUDINARY_CLOUD_NAME=example1568
CLOUDINARY_API_KEY=example54984651231
CLOUDINARY_API_SECRET=examplePfsd-sdfs56we523sd
```

### 4️⃣ Start development server
```bash
npm run dev
```

### 5️⃣ Finally open it
```bash
http://localhost:4000
```  

## 🗝️ API Endpoints

#### ♦️Base URL
```bash
https://nebs.onrender.com
```
#### 🟠 Create notice 
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

#### 🟠 Get All Notices
```bash
GET: /api/notices
```


## 🧑‍💻 Author

Developed by Mahim Dewan

🔗 [portfolio](https://mahim-dewan.vercel.app/)   
🔗 [Linkedin](https://www.linkedin.com/in/mahim-dewan79/)   
🔗 [GitHub](https://github.com/mahim-dewan) 