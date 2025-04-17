# Blog Application

A full-stack blog application built with React, Node.js, Express, and MongoDB. This application allows users to create, read, update, and delete blog posts with rich text editing capabilities.

## Features

- User authentication (register, login, logout)
- Create, read, update, and delete blog posts
- Rich text editing with ReactQuill
- Image upload for post covers
- Responsive design with Tailwind CSS
- Secure authentication with JWT
- MongoDB database integration

## Tech Stack

### Frontend
- React.js
- React Router for navigation
- ReactQuill for rich text editing
- Tailwind CSS for styling
- Axios for API calls

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- Multer for file uploads

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd blog-app
```

2. Install backend dependencies:
```bash
cd api
npm install
```

3. Install frontend dependencies:
```bash
cd ../client
npm install
```

4. Create a `.env` file in the api directory:
```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

5. Start the development servers:

Backend:
```bash
cd api
npm start
```

Frontend:
```bash
cd client
npm start
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend: http://localhost:4000

## Project Structure

```
blog-app/
├── api/                    # Backend
│   ├── models/            # MongoDB models
│   ├── routes/            # API routes
│   ├── uploads/           # Uploaded images
│   └── index.js           # Main server file
│
└── client/                # Frontend
    ├── public/            # Static files
    ├── src/
    │   ├── components/    # React components
    │   ├── pages/         # Page components
    │   └── App.js         # Main React component
    └── package.json
```

## Deployment

### Backend Deployment (Render)

1. Create a Render account at https://render.com
2. Create a new Web Service
3. Connect your GitHub repository
4. Configure the service:
   - Build Command: `npm install`
   - Start Command: `node index.js`
   - Environment Variables:
     - `MONGODB_URI`: Your MongoDB connection string
     - `JWT_SECRET`: Your JWT secret
     - `PORT`: 4000

### Frontend Deployment (Vercel)

1. Create a Vercel account at https://vercel.com
2. Import your GitHub repository
3. Configure the project:
   - Framework Preset: Create React App
   - Environment Variables:
     - `REACT_APP_API_URL`: Your deployed backend URL

### MongoDB Setup (MongoDB Atlas)

1. Create a MongoDB Atlas account at https://www.mongodb.com/cloud/atlas
2. Create a new cluster
3. Set up database access and network access
4. Get your connection string

## Environment Variables

### Backend (.env)
```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=4000
```

### Frontend (.env)
```env
REACT_APP_API_URL=your_backend_url
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

Your Name - your.email@example.com

Project Link: [https://github.com/yourusername/blog-app](https://github.com/yourusername/blog-app) 