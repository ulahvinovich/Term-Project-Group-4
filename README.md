[![Tutorial Video](https://img.youtube.com/vi/ddKQ8sZo_v8/0.jpg)](https://www.youtube.com/watch?v=ddKQ8sZo_v8)

# Inventory Management Web App
## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
## Overview
An advanced, feature-rich Inventory Management Web Application built with a modern tech stack to manage, organize, and monitor inventory efficiently. This application leverages Next.js for the frontend and Node.js for the backend, with seamless integrations for storage, APIs, and cloud hosting.

## Features
Inventory Tracking: Manage and track inventory in real time.
Role-Based Access: Admins, users, and managers have distinct roles and permissions.
Data Grid Integration: Intuitive data table for efficient inventory visualization and manipulation.
API Integration: High-performance APIs for CRUD operations using AWS API Gateway.
Cloud Hosting: Scalable backend and database hosted on AWS EC2 and AWS RDS.
File Uploads: Upload inventory-related documents and images using AWS S3.
## Tech Stack
### Frontend:
Next.js: React-based framework for server-side rendering and static site generation.
Tailwind CSS: Utility-first CSS framework for rapid UI development.
Redux Toolkit: State management with simplified configurations.
Redux Toolkit Query (RTK Query): Efficient data fetching and caching.
Material UI Data Grid: Feature-packed, customizable data grid for data visualization.
### Backend
Node.js: Backend runtime for building APIs and server logic.
Prisma: Modern ORM for database schema and queries.
### Cloud Services
- AWS EC2: Hosting scalable backend services.
- AWS RDS: Managed relational database service for reliable database hosting.
- AWS API Gateway: Managed API layer for secure and scalable API calls.
- AWS Amplify: Simplifies the hosting and deployment of frontend assets.
- AWS S3: Cloud storage for file uploads and static assets.
## Setup Instructions
### Prerequisites:
- Node.js (>=16.0.0)
- PostgreSQL Database (or AWS RDS instance)
- AWS Account for cloud services
- Prisma CLI : npm install -g prisma
### Installation:
   Clone the repository: git clone https://github.com/your-username/Term-Project-Group-4.git
   cd Term-Project-Group-4
   Install dependencies: npm install
   Set up the environment variables:
      Create .env files for both the server and frontend:
            Server .env:
               DATABASE_URL=postgresql://username:password@aws-rds-endpoint:5432/database_name
               AWS_ACCESS_KEY_ID=your-access-key
               AWS_SECRET_ACCESS_KEY=your-secret-key
               AWS_REGION=your-region
            Client .env.local:
               NEXT_PUBLIC_API_BASE_URL=https://your-api-gateway-endpoint
   Initialize Prisma: prisma migrate dev --name init
   Start the development server: npm run dev
## Deployment
    Frontend:
      Deploy the Next.js frontend using AWS Amplify or any preferred hosting service:
        amplify init
        amplify publish
    Backend:
      Deploy the backend to an AWS EC2 instance.
      Use AWS API Gateway to expose backend endpoints.
    Database:
      Use AWS RDS for production-ready PostgreSQL hosting.
## Usage
Visit the deployed application in your browser.
Log in as an admin to manage inventory or as a user to track items.
Add, update, delete, and search inventory items using the Material UI Data Grid interface.     




    






