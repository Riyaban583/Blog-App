<div align="center">

# 📝 BlogVerse
### A Full Stack Blogging Platform Built with Next.js 14

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Latest-47A248?style=for-the-badge&logo=mongodb)](https://www.mongodb.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](LICENSE)

*A modern, feature-rich blogging platform with a clean reader experience and a powerful admin panel.*

[Live Demo](#) · [Report Bug](https://github.com) · [Request Feature](https://github.com)

</div>

---

## 📌 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#️-tech-stack)
- [Project Structure](#-project-structure)
- [Application Flow](#-application-flow)
- [API Reference](#-api-reference)
- [Screenshots](#-screenshots)
- [Getting Started](#-getting-started)
- [Environment Variables](#️-environment-variables)
- [Future Roadmap](#-future-roadmap)
- [Author](#-author)

---

## 🌟 Overview

**BlogVerse** is a full-stack blogging application that provides a seamless reading experience for users and a powerful admin dashboard for content management. Built with the latest version of Next.js, it leverages both server-side rendering and API routes to deliver a fast, SEO-friendly blogging experience.

Whether you're publishing your thoughts, managing a newsletter, or building a content-driven site — BlogVerse has you covered.

---

## 🚀 Features

### 👤 For Readers
- 📰 Browse all published blog posts on the homepage
- 🔍 Filter blogs by **category**
- 📖 Read full blog detail pages with rich content
- 📧 **Subscribe** to the newsletter with email

### 🛠️ For Admins
| Feature | Description |
|---|---|
| ✍️ Add Blog | Create new posts with image upload |
| 🗑️ Delete Blog | Remove posts and associated images |
| 📋 Blog List | View and manage all published blogs |
| 📬 Subscriptions | View and delete subscriber emails |

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [Next.js](https://nextjs.org/) | 14 | Fullstack Framework (Frontend + API) |
| [React.js](https://reactjs.org/) | 18 | Component-based UI |
| [MongoDB](https://www.mongodb.com/) | Latest | NoSQL Database |
| [Mongoose](https://mongoosejs.com/) | Latest | ODM / Schema Modeling |
| [Tailwind CSS](https://tailwindcss.com/) | 3 | Utility-first Styling |
| [Axios](https://axios-http.com/) | Latest | HTTP Client |
| [React Toastify](https://fkhadra.github.io/react-toastify/) | Latest | Toast Notifications |

---

## 📂 Project Structure

```
project-root/
│
├── 📁 app/
│   ├── 📁 api/
│   │   ├── 📁 blogs/
│   │   │   └── route.js          # Blog CRUD endpoints
│   │   └── 📁 email/
│   │       └── route.js          # Email subscription endpoints
│   │
│   ├── 📁 admin/
│   │   ├── 📁 addProduct/
│   │   │   └── page.jsx          # Add new blog (admin)
│   │   ├── 📁 blogList/
│   │   │   └── page.jsx          # Manage all blogs (admin)
│   │   └── 📁 subscriptions/
│   │       └── page.jsx          # View subscribers (admin)
│   │
│   ├── 📁 blogs/
│   │   └── 📁 [id]/
│   │       └── page.jsx          # Dynamic blog detail page
│   │
│   ├── layout.js                 # Root layout
│   └── page.jsx                  # Homepage
│
├── 📁 Components/
│   ├── 📁 AdminComponents/
│   │   ├── BlogTableItem.jsx     # Blog row in admin table
│   │   └── SubsTableItem.jsx     # Subscriber row in admin table
│   │
│   ├── BlogItem.jsx              # Blog card component
│   ├── BlogList.jsx              # Blog grid/list component
│   ├── Footer.jsx                # Site footer
│   └── Header.jsx                # Site header & navigation
│
├── 📁 lib/
│   ├── 📁 config/
│   │   └── db.js                 # MongoDB connection
│   └── 📁 models/
│       ├── BlogModel.js          # Blog Mongoose schema
│       └── EmailModel.js         # Email Mongoose schema
│
├── 📁 public/                    # Static assets & uploaded images
├── .env                          # Environment variables
├── package.json
└── README.md
```

---

## 🔄 Application Flow

### 1. 📰 Fetch & Display All Blogs
```
User Opens Homepage
       │
       ▼
BlogList Component Mounts
       │
       ▼
Axios GET → /api/blogs
       │
       ▼
API Queries MongoDB
       │
       ▼
JSON Response Returned
       │
       ▼
Blogs Rendered on UI
```

### 2. 📖 Read a Single Blog
```
User Clicks Blog Card
       │
       ▼
Navigate to /blogs/[id]
       │
       ▼
Axios GET → /api/blogs?id=blogId
       │
       ▼
MongoDB Finds Document
       │
       ▼
Blog Detail Page Rendered
```

### 3. ✍️ Admin — Add a Blog
```
Admin Fills Blog Form
       │
       ▼
Image + Form Data Submitted
       │
       ▼
POST → /api/blogs
       │
       ▼
Image Saved to /public
       │
       ▼
Blog Document Stored in MongoDB
       │
       ▼
✅ Success Toast Displayed
```

### 4. 🗑️ Admin — Delete a Blog
```
Admin Clicks Delete
       │
       ▼
DELETE → /api/blogs?id=id
       │
       ▼
Blog Removed from MongoDB
       │
       ▼
Associated Image Deleted from /public
       │
       ▼
UI Refreshed Automatically
```

### 5. 📧 Email Subscription
```
User Enters Email Address
       │
       ▼
POST → /api/email
       │
       ▼
Email Stored in MongoDB
       │
       ▼
✅ Success Toast Displayed
```

---

## 🌐 API Reference

### Blogs

| Method | Endpoint | Description | Body / Params |
|---|---|---|---|
| `GET` | `/api/blogs` | Fetch all blogs | — |
| `GET` | `/api/blogs?id={id}` | Fetch single blog | `id` query param |
| `POST` | `/api/blogs` | Create a new blog | `FormData` with image |
| `DELETE` | `/api/blogs?id={id}` | Delete a blog | `id` query param |

### Email Subscriptions

| Method | Endpoint | Description | Body / Params |
|---|---|---|---|
| `POST` | `/api/email` | Add subscriber email | `{ email }` |
| `GET` | `/api/email` | Get all subscribers | — |
| `DELETE` | `/api/email?id={id}` | Remove a subscriber | `id` query param |

---

## 📸 Screens

| Page | Description |
|---|---|
| 🏠 **Homepage** | Blog grid with category filters |
| 📄 **Blog Detail** | Full article view |
| ➕ **Admin — Add Blog** | Form to publish new posts with image |
| 📋 **Admin — Blog List** | Table of all posts with delete actions |
| 📬 **Admin — Subscriptions** | Table of all subscriber emails |

---

## 🏁 Getting Started

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v18+)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- A [MongoDB](https://www.mongodb.com/) instance (local or Atlas)

### Installation

**1. Clone the repository**
```bash
git clone https://github.com/your-username/blogverse.git
cd blogverse
```

**2. Install dependencies**
```bash
npm install
# or
yarn install
```

**3. Set up environment variables**

Create a `.env` file in the root directory:
```env
MONGO_URI=your_mongodb_connection_string
```

**4. Run the development server**
```bash
npm run dev
# or
yarn dev
```

**5. Open in browser**

Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production
```bash
npm run build
npm start
```

---

## ⚙️ Environment Variables

| Variable | Description | Required |
|---|---|---|
| `MONGO_URI` | MongoDB connection string (Atlas or local) | ✅ Yes |

> 💡 **Tip:** For local development, you can use [MongoDB Atlas Free Tier](https://www.mongodb.com/cloud/atlas) or a local MongoDB instance.

---

## 🗺️ Future Roadmap

Here's what's planned for upcoming releases:

- [ ] 🔐 **Authentication** — Secure admin login with NextAuth.js
- [ ] 📝 **Rich Text Editor** — WYSIWYG editor (e.g., TipTap or Quill) for content creation
- [ ] 🔎 **Search Functionality** — Full-text search across blog titles and content
- [ ] 🌙 **Dark Mode** — System-aware and toggle-able theme
- [ ] 📃 **Pagination** — Paginate blog listings for better performance
- [ ] 💬 **Comments System** — Allow readers to engage with posts
- [ ] ❤️ **Blog Likes** — Like/upvote system for blogs
- [ ] 🏷️ **Tags** — Tag-based filtering in addition to categories
- [ ] 🗺️ **Sitemap & SEO** — Auto-generated sitemap and Open Graph meta tags
- [ ] 📊 **Analytics Dashboard** — Track page views and popular posts

---

## 👩‍💻 Author

<div align="center">

**Riya Bansal**

[![GitHub](https://img.shields.io/badge/GitHub-@riyabansal-181717?style=for-the-badge&logo=github)](https://github.com/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin)](https://linkedin.com/)

*Built with ❤️ using Next.js 14*

</div>

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

<div align="center">

⭐ **If you found this project helpful, please give it a star!** ⭐

</div>
