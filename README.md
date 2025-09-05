# Beam API

Beam API is the backend service for the Beam App. It manages building, utilization, and equipment data, and connects with the Beam Web frontend for user interaction.  
Built with **Node.js, Express.js, and MySQL**.

---

## 📋 Prerequisites
- Node.js (v16+ recommended)  
- npm (comes with Node.js)  
- MySQL (local or cloud-hosted)

---

## Getting Started

### 1. Clone the Repository
git clone https://github.com/sbaru123/beamapi.git
cd beamapi

### 2. Install Dependencies
npm install

### 3. Configure the Database
CREATE DATABASE beamdb; 
--Update your configuration in config.js (or .env) with:
module.exports = {
  host: "localhost",
  user: "your_mysql_username",
  password: "your_mysql_password",
  database: "beamdb"
};

### 4. Run Migrations / Seed Data (Optional)
npm run migrate
npm run seed

### 5. Start the API Server
npm start
--The API will be available at:
http://localhost:5000


# Install dependencies
npm install

# Start the API server
npm start

# Run migrations (if available)
npm run migrate

# Seed database with initial data (if available)
npm run seed

# Run tests (if defined)
npm test
