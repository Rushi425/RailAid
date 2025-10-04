# RailAid

A comprehensive railway assistance platform built with modern web technologies, featuring a React frontend, Node.js backend, and machine learning capabilities.

## 🚀 Project Structure

```
RailAid/
├── Frontend/          # React + Vite frontend application
├── Backend/           # Node.js + Express backend API
├── ML/               # Machine learning models and scripts
├── .gitignore        # Git ignore rules
├── .gitattributes    # Git attributes for line endings and LFS
└── README.md         # This file
```

## 🛠️ Tech Stack

### Frontend
- **React 19** - Modern React with latest features
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Axios** - HTTP client for API calls
- **React Icons** - Icon library

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database with Mongoose ODM
- **JWT** - JSON Web Tokens for authentication
- **bcrypt** - Password hashing
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

### Machine Learning
- **Python** - Primary ML language
- **Jupyter Notebooks** - Interactive development
- **Various ML libraries** - (To be specified based on requirements)

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (v6 or higher)
- Python 3.8+ (for ML components)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd RailAid
   ```

2. **Install Backend Dependencies**
   ```bash
   cd Backend
   npm install
   ```

3. **Install Frontend Dependencies**
   ```bash
   cd ../Frontend
   npm install
   ```

4. **Install ML Dependencies** (when ML components are added)
   ```bash
   cd ../ML
   pip install -r requirements.txt
   ```

### Environment Setup

1. **Backend Environment**
   ```bash
   cd Backend
   cp .env.example .env
   # Edit .env with your configuration
   ```

2. **Frontend Environment**
   ```bash
   cd Frontend
   cp .env.example .env
   # Edit .env with your configuration
   ```

### Running the Application

1. **Start the Backend Server**
   ```bash
   cd Backend
   npm run dev
   # Server will run on http://localhost:5000
   ```

2. **Start the Frontend Development Server**
   ```bash
   cd Frontend
   npm run dev
   # Frontend will run on http://localhost:5173
   ```

3. **Start ML Services** (when available)
   ```bash
   cd ML
   python app.py
   # ML API will run on http://localhost:8000
   ```

## 📁 Project Components

### Frontend (`/Frontend`)
- Modern React application with Vite
- Responsive design with Tailwind CSS
- Component-based architecture
- State management with React Context
- API integration with Axios

### Backend (`/Backend`)
- RESTful API with Express.js
- MongoDB database integration
- JWT-based authentication
- CORS enabled for cross-origin requests
- Environment-based configuration

### ML (`/ML`)
- Machine learning models and scripts
- Data processing pipelines
- Model training and evaluation
- API endpoints for ML predictions

## 🔧 Development

### Code Style
- ESLint configuration for consistent code style
- Prettier for code formatting
- Git hooks for pre-commit checks

### Git Workflow
- Feature branches for new development
- Pull requests for code review
- Conventional commits for clear history

### Database
- MongoDB for data storage
- Mongoose for object modeling
- Environment-based database configuration

## 📝 API Documentation

### Backend Endpoints
- `GET /api/health` - Health check
- `POST /api/auth/login` - User authentication
- `POST /api/auth/register` - User registration
- `GET /api/routes` - Get available routes
- `POST /api/bookings` - Create new booking
- `GET /api/bookings/:id` - Get booking details

### ML Endpoints (when implemented)
- `POST /api/ml/predict` - Get ML predictions
- `GET /api/ml/models` - List available models
- `POST /api/ml/train` - Train new model

## 🚀 Deployment

### Production Build
```bash
# Frontend
cd Frontend
npm run build

# Backend
cd Backend
npm start
```

### Docker (Optional)
```bash
# Build and run with Docker Compose
docker-compose up --build
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- **Frontend Developer** - React and UI/UX
- **Backend Developer** - Node.js and API development
- **ML Engineer** - Machine learning and data science
- **DevOps Engineer** - Deployment and infrastructure

## 📞 Support

For support, email support@railaid.com or create an issue in the repository.

## 🔮 Roadmap

- [ ] User authentication and authorization
- [ ] Route planning and booking system
- [ ] Real-time train tracking
- [ ] ML-powered delay predictions
- [ ] Mobile application
- [ ] Advanced analytics dashboard
- [ ] Integration with railway APIs
- [ ] Multi-language support

---

**RailAid** - Making railway travel smarter and more accessible! 🚄✨
