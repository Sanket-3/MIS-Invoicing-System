# MIS and Invoicing System

A comprehensive Management Information System (MIS) and Invoicing System built with modern web technologies. This application provides user management, group management, and invoicing capabilities with a clean, responsive interface.

##  Architecture

This project follows a full-stack architecture with separate backend and frontend applications:

- **Backend**: Spring Boot REST API (`ims/`)
- **Frontend**: React.js Single Page Application (`ims-frontend/`)

##  Technologies Used

### Backend (Spring Boot)
- **Java 17+**
- **Spring Boot 3.x**
- **Spring Security** - Authentication and authorization
- **Spring Data JPA** - Database operations
- **MySQL/H2** - Database
- **Maven** - Dependency management

### Frontend (React)
- **React 18**
- **Vite** - Build tool and dev server
- **JavaScript/JSX**
- **CSS3** - Custom styling
- **Axios** - HTTP client for API calls

##  Project Structure

```
mis-invoicing-system/
│
├── ims/                                    # Spring Boot Backend
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/com/codeb/ims/
│   │   │   │   ├── CodebImsApplication.java
│   │   │   │   ├── controller/
│   │   │   │   │   ├── AuthController.java
│   │   │   │   │   └── GroupController.java
│   │   │   │   ├── dto/
│   │   │   │   │   ├── LoginRequest.java
│   │   │   │   │   └── RegisterRequest.java
│   │   │   │   ├── model/
│   │   │   │   │   ├── User.java
│   │   │   │   │   └── Group.java
│   │   │   │   ├── repository/
│   │   │   │   │   ├── UserRepository.java
│   │   │   │   │   └── GroupRepository.java
│   │   │   │   ├── security/
│   │   │   │   │   ├── SecurityConfig.java
│   │   │   │   │   └── PasswordConfig.java
│   │   │   │   └── service/
│   │   │   │       ├── UserService.java
│   │   │   │       ├── UserServiceImpl.java
│   │   │   │       ├── GroupService.java
│   │   │   │       └── GroupServiceImpl.java
│   │   │   └── resources/
│   │   │       └── application.properties
│   │   └── test/
│   ├── mvnw
│   ├── mvnw.cmd
│   └── pom.xml
│
└── ims-frontend/                           # React Frontend
    ├── public/
    │   └── vite.svg
    ├── src/
    │   ├── components/
    │   │   ├── Sidebar.jsx
    │   │   └── Topbar.jsx
    │   ├── layout/
    │   │   ├── AuthLayout.jsx
    │   │   └── DashboardLayout.jsx
    │   ├── pages/
    │   │   ├── Login.jsx
    │   │   ├── Register.jsx
    │   │   ├── Dashboard.jsx
    │   │   ├── DashboardHome.jsx
    │   │   ├── Groups.jsx
    │   │   └── CreateGroup.jsx
    │   ├── services/
    │   │   ├── authService.js
    │   │   ├── groupService.js
    │   │   └── groupApi.js
    │   ├── styles/
    │   │   ├── auth.css
    │   │   ├── Dashboard.css
    │   │   ├── DashboardLayout.css
    │   │   ├── groups.css
    │   │   ├── Sidebar.css
    │   │   ├── Topbar.css
    │   │   └── theme.css
    │   ├── App.jsx
    │   ├── App.css
    │   ├── main.jsx
    │   └── index.css
    ├── index.html
    ├── package.json
    ├── package-lock.json
    ├── vite.config.js
    └── eslint.config.js
```

##  Features

### User Management
- User registration and authentication
- Secure login with password encryption
- User profile management

### Group Management
- Create and manage user groups
- Group-based access control
- Group member management

### Dashboard
- Clean, intuitive user interface
- Responsive design for all devices
- Real-time data visualization

##  Setup Instructions

### Prerequisites
- Java 17 or higher
- Node.js 16+ and npm
- MySQL (optional, H2 in-memory database available)
- Git

### Backend Setup (Spring Boot)
1. Navigate to the backend directory:
   ```bash
   cd ims
   ```

2. Configure database in `src/main/resources/application.properties`

3. Run the application:
   ```bash
   ./mvnw spring-boot:run
   ```
   Or on Windows:
   ```cmd
   mvnw.cmd spring-boot:run
   ```

4. Backend will be available at `http://localhost:8080`

### Frontend Setup (React)
1. Navigate to the frontend directory:
   ```bash
   cd ims-frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Frontend will be available at `http://localhost:5173`

##  Configuration

### Backend Configuration
- Database settings: `ims/src/main/resources/application.properties`
- Security settings: `ims/src/main/java/com/codeb/ims/security/SecurityConfig.java`

### Frontend Configuration
- API base URL: Update in service files under `ims-frontend/src/services/`
- Build settings: `ims-frontend/vite.config.js`

##  API Endpoints

### Authentication
- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration

### Groups
- `GET /api/groups` - Get all groups
- `POST /api/groups` - Create new group
- `PUT /api/groups/{id}` - Update group
- `DELETE /api/groups/{id}` - Delete group

