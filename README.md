# nodejs-ci-cd-demo
Markdown
# TASK 1: CI/CD Pipeline Automation for Node.js Application

## 📌 Project Overview
This project demonstrates an automated **CI/CD Pipeline** built using **GitHub Actions**, **Docker**, and **DockerHub**. Whenever new code is pushed to the `main` branch, GitHub Actions automatically builds a Docker image for the Node.js application and pushes it to DockerHub.
🛠️ Tech Stack & Tools Used
Application Framework: Node.js (Express.js)

Containerization: Docker

Version Control: GitHub

CI/CD Tool: GitHub Actions

Container Registry: DockerHub

🚀 How It Works (Step-by-Step Execution)
Code & Dockerfile Preparation:

A sample Node.js web application is created in index.js.

Dependencies are defined in package.json.

A Dockerfile is written to define container configurations and dependencies.

GitHub Repository & Secrets Setup:

Source code is pushed to the GitHub repository.

DOCKER_USERNAME and DOCKER_PASSWORD (Personal Access Token) are securely added under Repository Settings -> Secrets and variables -> Actions.

Automation Pipeline (.github/workflows/main.yml):

Triggered automatically on every push event to the main branch.

Downloads the code (Checkout).

Sets up the Node.js v18 environment and installs dependencies (npm install).

Authenticates with DockerHub using stored secrets.

Builds the Docker image and pushes it as dhananjay03/nodejs-demo-app:latest to DockerHub.

📄 Code Structure & Line-by-Line Explanation
1. index.js (Web Server Code)
JavaScript
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, World! CI/CD Pipeline successfully running!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
2. Dockerfile (Container Rules)
Dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
3. .github/workflows/main.yml (CI/CD Pipeline Rules)
YAML
name: Build and Deploy Node.js App

on:
  push:
    branches: [ "main" ]

jobs:
  build-and-push:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout Code
      uses: actions/checkout@v3

    - name: Set up Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'

    - name: Install Dependencies
      run: npm install

    - name: Log in to DockerHub
      uses: docker/login-action@v2
      with:
        username: ${{ secrets.DOCKER_USERNAME }}
        password: ${{ secrets.DOCKER_PASSWORD }}

    - name: Build and Push Docker Image
      uses: docker/build-push-action@v4
      with:
        context: .
        push: true
        tags: dhananjay03/nodejs-demo-app:latest
✅ Results & Verification
GitHub Actions Workflow: Passed successfully with a Green Checkmark (✅ Status: Success).

DockerHub Registry: The Docker image dhananjay03/nodejs-demo-app:latest is successfully published.

🔗 Project Links
GitHub Repository: er-dhananjay/nodejs-ci-cd-demo

DockerHub Repository: dhananjay03/nodejs-demo-app
