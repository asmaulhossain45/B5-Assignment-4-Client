# 📚 Minimal Library Management System (Frontend)

A minimal library management system built with **React**, **TypeScript**, **Redux Toolkit Query (RTK Query)**, and **Tailwind CSS**. This application allows users to manage a list of books, borrow books, and view a borrow summary—all with a clean, public interface and RESTful API integration.

---

## 🚀 Features

### ✅ Public Routes
- All routes are accessible without login or authentication.

### 📖 Book Management
- **Book List Table** with columns: Title, Author, Genre, ISBN, Copies, Availability, Actions.
- **Add Book** form with: Title, Author, Genre, ISBN, Description, Copies, Available.
- **Edit Book** feature via modal or separate route.
- **Delete Book** with confirmation dialog.
- **Borrow Book** directly from the book list.

### 📦 Borrow Book
- Borrow form includes:
  - Quantity (cannot exceed available copies)
  - Due Date (date selector)
- Business logic ensures:
  - Updates available copies
  - Marks book unavailable if no copies remain
- Redirects to the borrow summary after submission.

### 📊 Borrow Summary
- Aggregated summary of borrowed books.
- Columns: Book Title, ISBN, Total Quantity Borrowed.

---

## 📦 Tech Stack

- **React**
- **TypeScript**
- **Redux Toolkit** & **RTK Query**
- **React Router**
- **ShadCN UI** or **Tailwind CSS**

---


## 🧪 Setup & Development

### 1️⃣ Clone the Repository

```bash
git clone asmaulhossain45/B5-Assignment-4-Client
cd B5-Assignment-4-Client
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Start Development Server

```bash
npm run dev
```