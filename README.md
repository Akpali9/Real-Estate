# 🏠 Real Estate Website

A modern, full-stack real estate website built with Next.js 14, TypeScript, MySQL, and Tailwind CSS. Features property listings, agent profiles, advanced search, user authentication, and admin dashboard.

## ✨ Features

### 🏡 **Property Management**
- **Advanced Property Listings** with detailed information
- **Image Galleries** with local file storage
- **Interactive Search & Filtering** by price, type, location, features
- **Geographic Search** with radius-based filtering
- **Property Status Tracking** (Active, Pending, Sold, Rented)

### 👥 **User Management**
- **Multi-Role Authentication** (Admin, Agent, User)
- **User Registration & Login** with NextAuth.js
- **Google OAuth Integration** (optional)
- **Agent Profiles** with ratings and reviews
- **User Dashboard** for managing properties and inquiries

### 📊 **Admin Dashboard**
- **Property Management** - Create, edit, delete properties
- **User Management** - Manage agents and users
- **Inquiry Management** - Track and respond to leads
- **Analytics Dashboard** with key metrics
- **Role-Based Access Control**

### 🔍 **Advanced Search**
- **Full-Text Search** across properties with MySQL FULLTEXT
- **Filter by Multiple Criteria** (price, type, bedrooms, etc.)
- **Geographic Search** with Haversine formula
- **Saved Searches** and favorites
- **Real-Time Search Results**

### 📱 **Modern UI/UX**
- **Responsive Design** for all devices
- **Modern Component Library** with shadcn/ui
- **Dark/Light Mode Support**
- **Optimized Performance** with Next.js 14
- **SEO Optimized** with proper meta tags

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui components
- **Backend**: Next.js API Routes, MySQL
- **Database**: MySQL 8.0+ with JSON support
- **Authentication**: NextAuth.js with JWT
- **File Storage**: Local file system storage
- **Deployment**: Vercel, Railway, or any Node.js hosting

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **MySQL** (v8.0 or higher)

## 🚀 Quick Start

### 1. Clone the Repository

\`\`\`bash
git clone <your-repo-url>
cd real-estate-website
\`\`\`

### 2. Install Dependencies

\`\`\`bash
npm install
# or
yarn install
\`\`\`

### 3. Set Up MySQL Database

#### Install MySQL:

**On macOS (using Homebrew):**
\`\`\`bash
brew install mysql
brew services start mysql
\`\`\`

**On Ubuntu/Debian:**
\`\`\`bash
sudo apt update
sudo apt install mysql-server
sudo systemctl start mysql
sudo systemctl enable mysql
\`\`\`

**On Windows:**
- Download and install MySQL from [mysql.com](https://dev.mysql.com/downloads/mysql/)

#### Create Database:

\`\`\`bash
# Connect to MySQL
mysql -u root -p

# Create database and user
CREATE DATABASE realestate_db;
CREATE USER 'realestate_user'@'localhost' IDENTIFIED BY 'your_password';
GRANT ALL PRIVILEGES ON realestate_db.* TO 'realestate_user'@'localhost';
FLUSH PRIVILEGES;

# Exit MySQL
EXIT;
\`\`\`

### 4. Environment Configuration

Create a `.env.local` file in the root directory:

\`\`\`bash
cp .env.example .env.local
\`\`\`

Update the `.env.local` file with your configuration:

\`\`\`env
# MySQL Database
DATABASE_URL=mysql://realestate_user:your_password@localhost:3306/realestate_db

# NextAuth
NEXTAUTH_SECRET=your-super-secret-nextauth-key-change-this-in-production
NEXTAUTH_URL=http://localhost:3000

# Google OAuth (Optional)
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

# File Upload Configuration
UPLOAD_DIR=public/uploads
MAX_FILE_SIZE=5242880
ALLOWED_FILE_TYPES=image/jpeg,image/jpg,image/png,image/webp,image/gif

# Email Configuration (Optional)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password

# Optional Services
GOOGLE_MAPS_API_KEY=your_google_maps_api_key
RECAPTCHA_SITE_KEY=your_recaptcha_site_key
RECAPTCHA_SECRET_KEY=your_recaptcha_secret_key
\`\`\`

### 5. Database Setup

Run the database migrations to create tables:

\`\`\`bash
npm run db:migrate
\`\`\`

Seed the database with initial data:

\`\`\`bash
npm run db:seed
\`\`\`

This will create:
- **Admin user**: `admin@realestatepro.com` / `admin123`
- **Agent user**: `sarah@realestatepro.com` / `agent123`
- **6 sample properties** with different types and prices
- **4 agent reviews** for rating system

### 6. Create Upload Directory

\`\`\`bash
mkdir -p public/uploads
\`\`\`

### 7. Start Development Server

\`\`\`bash
npm run dev
\`\`\`

Visit [http://localhost:3000](http://localhost:3000) to see your application!

