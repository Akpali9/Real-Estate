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

## 📁 Project Structure

\`\`\`
├── app/                    # Next.js 14 App Router
│   ├── (auth)/            # Authentication pages
│   ├── admin/             # Admin dashboard
│   ├── api/               # API routes
│   ├── properties/        # Property pages
│   └── ...
├── components/            # Reusable components
│   ├── ui/               # shadcn/ui components
│   └── ...
├── lib/                   # Utility libraries
│   ├── auth/             # Authentication config
│   ├── db/               # Database connection & schema
│   └── services/         # Business logic services
├── hooks/                 # Custom React hooks
├── scripts/              # Database scripts
├── public/               # Static assets
│   └── uploads/          # Uploaded images
└── ...
\`\`\`

## 🔧 Available Scripts

\`\`\`bash
# Development
npm run dev              # Start development server
npm run build           # Build for production
npm run start           # Start production server
npm run lint            # Run ESLint

# Database
npm run db:migrate      # Run database migrations
npm run db:seed         # Seed database with sample data
npm run db:reset        # Reset database (migrate + seed)

# Utilities
npm run type-check      # TypeScript type checking
\`\`\`

## 🗄️ Database Schema

The application uses MySQL with the following main tables:

- **users** - User accounts (admin, agent, user roles)
- **properties** - Property listings with JSON fields for images/features
- **inquiries** - Contact form submissions and leads
- **reviews** - Agent reviews and ratings
- **favorites** - User saved properties

### Key Features:
- **JSON columns** for flexible data storage (images, features, specializations)
- **Full-text search** indexes for property search
- **Geographic search** using Haversine formula
- **Automatic triggers** for rating calculations
- **UUID primary keys** for better security

## 🔐 Authentication & Authorization

### User Roles:
- **Admin**: Full access to all features
- **Agent**: Can manage own properties and inquiries
- **User**: Can browse properties and submit inquiries

### Protected Routes:
- `/admin/*` - Admin only
- `/dashboard/*` - Agent and Admin
- `/api/protected/*` - Authenticated users

## 📤 File Upload System

### Local File Storage:
- **Upload Directory**: `public/uploads/`
- **File Types**: JPEG, PNG, WebP, GIF
- **Max Size**: 5MB (configurable)
- **Security**: File type validation, size limits
- **Naming**: Timestamp + random string for uniqueness

### Usage:
\`\`\`javascript
// Upload file via API
const formData = new FormData()
formData.append('file', file)

const response = await fetch('/api/upload', {
  method: 'POST',
  body: formData
})

const result = await response.json()
console.log(result.url) // /uploads/filename.jpg
\`\`\`

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**:
\`\`\`bash
git add .
git commit -m "Initial commit"
git push origin main
\`\`\`

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Configure environment variables
   - Deploy!

3. **Set up Production Database**:
   - Use PlanetScale, Railway MySQL, or any MySQL provider
   - Update `DATABASE_URL` in Vercel environment variables
   - Run migrations in production

### Deploy to Railway

1. **Install Railway CLI**:
\`\`\`bash
npm install -g @railway/cli
\`\`\`

2. **Deploy**:
\`\`\`bash
railway login
railway init
railway add mysql
railway up
\`\`\`

### Environment Variables for Production:

Make sure to set these in your deployment platform:

\`\`\`env
DATABASE_URL=your_production_mysql_url
NEXTAUTH_SECRET=your_production_secret
NEXTAUTH_URL=https://your-domain.com
UPLOAD_DIR=public/uploads
MAX_FILE_SIZE=5242880
ALLOWED_FILE_TYPES=image/jpeg,image/jpg,image/png,image/webp,image/gif
# ... other variables
\`\`\`

## 🔧 Configuration

### Google OAuth Setup (Optional):

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing
3. Enable Google+ API
4. Create OAuth 2.0 credentials
5. Add authorized redirect URIs:
   - `http://localhost:3000/api/auth/callback/google` (development)
   - `https://yourdomain.com/api/auth/callback/google` (production)

### Google Maps Integration (Optional):

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Enable Maps JavaScript API and Places API
3. Create an API key
4. Restrict the API key to your domains

## 🐛 Troubleshooting

### Common Issues:

**Database Connection Error:**
- Ensure MySQL is running: `brew services start mysql` (macOS) or `sudo systemctl start mysql` (Linux)
- Check DATABASE_URL format: `mysql://user:password@host:port/database`
- Verify user permissions

**Migration Errors:**
\`\`\`bash
# Reset database (development only)
mysql -u root -p -e "DROP DATABASE realestate_db; CREATE DATABASE realestate_db;"
npm run db:migrate
npm run db:seed
\`\`\`

**File Upload Issues:**
- Ensure `public/uploads` directory exists and is writable
- Check file size and type restrictions
- Verify UPLOAD_DIR environment variable

**Build Errors:**
\`\`\`bash
# Clear Next.js cache
rm -rf .next
npm run build

# Clear node_modules
rm -rf node_modules
npm install
\`\`\`

**Authentication Issues:**
- Verify `NEXTAUTH_SECRET` is set
- Check `NEXTAUTH_URL` matches your domain
- Ensure Google OAuth credentials are correct

## 📚 API Documentation

### Properties API:
- `GET /api/properties` - List properties with filtering
- `POST /api/properties` - Create property (Agent/Admin)
- `GET /api/properties/[id]` - Get property details
- `PUT /api/properties/[id]` - Update property (Agent/Admin)
- `DELETE /api/properties/[id]` - Delete property (Agent/Admin)

### Inquiries API:
- `POST /api/inquiries` - Submit inquiry
- `GET /api/inquiries` - List inquiries (Agent/Admin)

### Search API:
- `GET /api/search?q=query` - Search properties

### Upload API:
- `POST /api/upload` - Upload image file

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues or need help:

1. Check the [Troubleshooting](#-troubleshooting) section
2. Search existing [GitHub Issues](https://github.com/your-repo/issues)
3. Create a new issue with detailed information

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - UI components
- [NextAuth.js](https://next-auth.js.org/) - Authentication
- [MySQL](https://www.mysql.com/) - Database
- [Zod](https://zod.dev/) - Schema validation

---

**Happy coding! 🚀**

*Built with ❤️ using modern web technologies*
