# Inventory Management App
## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributors](#contributing)
## Overview
An advanced, feature-rich Inventory Management Web Application built with a modern tech stack to manage, organize, and monitor inventory efficiently. This application leverages Next.js for the frontend and Node.js for the backend, with seamless integrations for storage, APIs, and cloud hosting.

## Features
- Inventory Tracking: Manage and track inventory in real time.
- Role-Based Access: Admins, users, and managers have distinct roles and permissions.
- Data Grid Integration: Intuitive data table for efficient inventory visualization and manipulation.
- API Integration: High-performance APIs for CRUD operations using AWS API Gateway.
- Cloud Hosting: Scalable backend and database hosted on AWS EC2 and AWS RDS.
- File Uploads: Upload inventory-related documents and images using AWS S3.
## Tech Stack
### Frontend
- Next.js: React-based framework for server-side rendering and static site generation.
- Tailwind CSS: Utility-first CSS framework for rapid UI development.
- Redux Toolkit: State management with simplified configurations.
- Redux Toolkit Query (RTK Query): Efficient data fetching and caching.
- Material UI Data Grid: Feature-packed, customizable data grid for data visualization.
### Backend
- Node.js: Backend runtime for building APIs and server logic.
- Prisma: Modern ORM for database schema and queries.
### Cloud Services
- AWS EC2: Hosting scalable backend services.
- AWS RDS: Managed relational database service for reliable database hosting.
- AWS API Gateway: Managed API layer for secure and scalable API calls.
- AWS Amplify: Simplifies the hosting and deployment of frontend assets.
- AWS S3: Cloud storage for file uploads and static assets.
## Setup Instructions
### Prerequisites:
- Node.js (>=20.0.0)
- PostgreSQL Database in AWS RDS instance
- AWS Account for cloud services
- Prisma CLI 
## Installation
 - Create AWS account
 ### Using AWS console to deploy APP
 - Create VPC, Subnet-public, Subnet-private
 - Create an Internet Gateway
 - An Internet Gateway (IGW) is attached to the VPC.
 - Create public and private route tables in AWS
### Set Up AWS EC2 for Backend Hosting
- Launch an EC2 Instance
- Select an Amazon Linux  for Node.js support
- Configure security groups:Open ports 22 (SSH), 80 (HTTP), and 443 (HTTPS)
- Access the Instance:Open a command prompt in Amazon Linux
<pre><code id="copy-command">ssh -i "your-key.pem" ec2-user@<EC2-public-IP></code></pre>
- Install Node.js
<pre><code id="copy-command">
sudo su -curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
<EC2-public-IP></code></pre
- Activate nvm by typing the following at the command line

<pre><code id="copy-command">. ~/.nvm/nvm.sh</code></pre>
- Use nvm to install the latest version of Node.js 
<pre><code id="copy-command">nvm install node</code></pre>
- Verify installation
<pre><code id="copy-command">
node -v
npm -v
</code></pre>
- Install Prisma CLI
<pre><code id="copy-command">npm install -g prisma</code></pre>
- Initialize Prisma
<pre><code id="copy-command">npx prisma init</code></pre>
 - Install github
 <pre><code id="copy-commands">
 sudo  yum update -y
 sudo yum install git -y
 git — version
 </code></pre>
 - Clone the repository: git clone https://github.com/your-username/Term-Project-Group-4.git
- Get inside the directory 
<pre><code id="copy-commands">
cd Term-Project-Group-4
cd server
</code></pre>
### Install dependencies
- Install Packages
 <pre><code id="copy-command">npm install</code></pre>
  - Start the application 
  <pre><code id="copy-command">npm run dev</code></pre>   
   - Set up the environment variables
   - Create .env files for both the server and client
   <pre><code id="copy-command">echo “PORT=80” >.env</code></pre>
   - Install PM2 to manage and keep Node.js applications running
   <pre><code id="copy-commands">
   npm i pm2 -g
   pm2 start ecosystem.config.js
   pm2 status
   pm2 delete all
   </code></pre>
   ### Set Up AWS RDS for the Database
   - Create an RDS Instance
   - Choose a database engine -PostgreSQL
   - Configure Database Credentials:Save the database endpoint, username, and password
   - Update Prisma Configuration:Edit the prisma/schema.prisma file to include your RDS database  
   <pre><code id="copy-commands">
sudo su –ls
cd Term-Project-Group-4
cd server
</code></pre>
   - open .env file and Add :DATABASE_URL=postgresql://username:password@aws-rds-endpoint:5432/database_name?schema=public
   <pre><code id="copy-command">nan .env</code></pre>
   - Push Prisma Schema
<pre><code id="copy-command">npx prisma migrate dev --name init</code></pre>
- Start an EC2 instance in consol :Set instance to connect
- Seed instance
<pre><code id="copy-command">npm run seed </code></pre>
- Check data
<pre><code id="copy-command">
pm2 start ecosystem.config.js
pm2 monit  - for  monitor data 
</code></pre>
    - Create .env.local file in client directory and add:NEXT_PUBLIC_API_BASE_URL=https://your-api-gateway-endpoint
   - Start the development server: 
  <pre><code id="copy-command">npm run dev</code></pre>
 ###Set Up AWS S3 for File Storage in AWS
 - Create an S3 Bucket
 - Enter a unique bucket name
 - Choose a region and configure permissions
<pre><code id="copy-commands">{
"Version":"2012-10-17",
"Statement":[
    {
    "Sid": "PublicReadGetObject",
    "Effect": "Allow",
    "Principal": "*",
    "Action" : "s3:GetObject",
    "Resource":"arn:aws:s3:::s3-i/*"
    
}
    ]
}
 </code></pre>
 - Inside the bucket, click Upload
 - Drag and drop your picture files or click Add files to select them
- Click Upload

## Deployment
   - Frontend
     - Deploy the Next.js frontend using AWS Amplify  hosting service:
       - Set Up Amplify for Frontend
         - 	Navigate to the AWS Amplify console and select Get Started
         -  Connect your Git repository 
         - Choose the  main branch to deploy
         - Configure Amplify Environment Variables:
             - Add NEXT_PUBLIC_API_BASE_URL pointing to your API Gateway
             - Add NEXT_PUBLIC_AWS_S3_BUCKET_NAME and NEXT_PUBLIC_AWS_REGION for S3 integration
       - Amplify publish
   - Backend:
     - Deploy the backend to an AWS EC2 instance.
     - Use AWS API Gateway to expose backend endpoints.
   - Database:
     - Use AWS RDS for production-ready PostgreSQL hosting.
## Usage
- Visit the deployed application in your browser.
-  Managed inventory or as a user to track items.
- Add, update, delete, and search inventory items using the Material UI Data Grid interface. 
##  Contributors
- Mike Henke
- Benjamin Amoussou
- Katkoe Teko
- Patrick Nikiema
- Uladzimir Lahvinovich






    






