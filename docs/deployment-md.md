# Deploying PCS Kiosk App

This document outlines the steps to deploy the **Daycare Attendance App** to a production environment.

## Prerequisites
Before proceeding, ensure you have the following installed on your server:

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)
- Git

## Deployment Steps

1. **Clone the repository:**
   ```
   git clone https://github.com/your-username/pcs-kiosk-app.git
   cd pcs-kiosk-app
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Build the React app:**
   ```
   npm run build
   ```

4. **Set up environment variables:**
   Create a `.env` file in the root directory and add:
   ```
   NODE_ENV=production
   PORT=3000
   ```

5. **Start the server:**
   ```
   npm start
   ```

## Deployment Options
You have a few options for deploying the app in production:

## Deployment Options

| Option            | Description                                                                 |
|-------------------|-----------------------------------------------------------------------------|
| **Manual Deployment**  | Follow steps 1-5 above on your production server. Use a process manager like PM2 to keep the app running. |
| **Docker Deployment**  | Build and run a Docker container with the app using `docker build` and `docker run`.                        |
| **Platform as a Service (PaaS)** | Deploy to platforms like Heroku or DigitalOcean using their CLI tools or GitHub integration. |


## Database Setup
For a production environment:
- Consider migrating from **SQLite** to a more robust database system, like **PostgreSQL**.
- Ensure proper database backups are in place

## SSL/TLS Configuration
To secure your app:
## SSL/TLS Configuration

| Task                        | Description                                                                 |
|-----------------------------|-----------------------------------------------------------------------------|
| **Obtain SSL Certificate**   | Use Let's Encrypt or a paid service to get an SSL certificate for your domain. |
| **Web Server Configuration** | Configure your server (e.g., Nginx or Apache) to use the SSL certificate for HTTPS. |


## Monitoring and Logging
To maintain stability and diagnose issues:
- Set up application monitoring (e.g., **New Relic**, **Datadog**)
- Implement centralized logging (e.g., **ELK stack**, **Papertrail**)

## Updating the Application
When updating your app:

1. **Pull latest changes:**
   ```
   git pull origin main
   ```
2. **Install any new dependencies:**
   ```
   npm install
   ```
3. **Rebuild the app:**
   ```
   npm run build
   ```
4. **Restart the server or Docker container**
   - For manual deployments, restart the app using PM2.
   - For Docker deployments, stop and start the container again.

   > Note: Remember to test thoroughly in a staging environment before deploying to production.