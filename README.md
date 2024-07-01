# Employee Management Application

## Overview
The Employee Management Application is a web-based application designed to manage employee information efficiently. This project is developed using React for the frontend and Express.js for backend. The application allows users to perform CRUD (Create, Read, Update, Delete) operations on employee data, ensuring a seamless experience for managing employee records.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [File Structure](#file-structure)

## Features
- **Employee Listing:** View a list of all employees with their details.
- **Sorting Functionality:** Sort the employees by name or other criteria.
- **Employee Listing:** View a list of all employees with their details.
- **Add Department:** Add new department records to the database.
- **Edit Department:** Update existing department information.
- **Delete Department:** Remove department records from the database.

## Technologies Used
- **React:** A JavaScript library for building user interfaces.
- **Axios:** A promise-based HTTP client for making API requests.
- **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
- **Node.js:** JavaScript runtime used for the backend server.
- **Express.js:** Web framework for Node.js.
- **MongoDB:** NoSQL database for storing employee data.

## Installation
To run this project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/love211/Pangram.git
    ```
    **Backend:**
    ```bash
    cd ./i_Pangram_backend
    ```
    ```bash
    npm install
   ```
   ```bash
   npm start
   ```

   **Frontend:**
    ```bash
    cd ./i_Pangram_frontend
    ```
    ```bash
    npm install
   ```
   ```bash
   npm start
   ```

## File structure
    ```
    i_Pangram_frontend/
    │
    ├── i_Pangram_backend/
    │   │
    │   ├── src/
    │   │   ├── config/
    │   │   │   ├── database.js
    │   │   │   └── ...
    │   │   │
    │   │   ├── controllers/
    │   │   │   └── authController.js
    │   │   │   └── employeeController.js
    │   │   │   └── ...
    │   │   │
    │   │   ├── middlewares/
    │   │   │   └── auth.js
    │   │   │   └── ...
    │   │   │
    │   │   ├── models/
    │   │   │   └── userModel.js
    │   │   │   └── employeeModel.js
    │   │   │   └── ...
    │   │   │
    │   │   ├── services/
    │   │   │   └── userService.js
    │   │   │   └── employeeService.js
    │   │   │   └── ...
    │   │   │
    │   │   ├── models/
    │   │   │   └── constant.js.
    │   │   │
    │   │   ├── app.js
    │   │   ├── routes.js
    │   │   └── ...
    │   │
    │   ├── package.json
    │   ├── .env
    │   └── ...
    │   │
    │   deeporion-frontend/
    │   │
    │   ├── public/
    │   │   ├── index.html
    │   │   └── ...
    │   │
    │   ├── src/
    │   │   ├── components/
    │   │   │   ├── ProtectedRoute.jsx
    │   │   │   └── ...
    │   │   │
    │   │   ├── pages/
    │   │   │   └── EmployeeList.jsx
    │   │   │   └── Login.jsx
    │   │   │   └── ...
    │   │   │
    │   │   ├── routes/
    │   │   │   └── ManagerRoute.jsx
    │   │   │
    │   │   ├── App.js
    │   │   ├── index.js
    │   │   └── ...
    │   │
    │   ├── package.json
    │   ├── .env
    │   └── ...

