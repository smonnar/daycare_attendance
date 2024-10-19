# Daycare Attendance App Architecture

## Overview
The **Daycare Attendance App** is a web-based kiosk application with a **React frontend** and an **Express.js backend**, using **SQLite** for data storage. The app allows parents to sign their children in and out of school via a touchscreen tablet interface.

## System Components

| Component        | Description                                                                 |
|------------------|-----------------------------------------------------------------------------|
| **Frontend**      | Built with **React.js**, responsible for the user interface and interactions. |
| **Backend**       | Powered by **Express.js**, it serves API endpoints and handles business logic. |
| **Database**      | Uses **SQLite** for storing student information and check-in/check-out data.  |

### Frontend (React.js)

| Component        | Purpose                                                   |
|------------------|-----------------------------------------------------------|
| **LandingPage**   | Displays the school logo and "Touch anywhere to begin" button. |
| **ClassroomSelection** | Shows classroom options for parents to select.        |
| **StudentSelection**   | Allows parents to select students from the chosen classroom. |
| **ConfirmSelection**   | Displays selected students and allows parents to confirm or add more. |
| **SignaturePad**  | Captures the parent’s signature digitally.               |

### Backend (Express.js)
- **API Endpoints**: Serves RESTful API routes for managing student check-ins/outs and fetching data.
- **Database Management**: Handles interactions with SQLite for data persistence.

### Database (SQLite)
- **Data Storage**: Stores student records, check-in/check-out timestamps, and signatures.

## Data Flow
This table explains the data flow between the frontend and backend, clarifying how the app works:

| Step                | Description                                                                                   |
|---------------------|-----------------------------------------------------------------------------------------------|
| 1. **User Interaction** | Parents interact with the touchscreen (React.js frontend) to select their classroom, students, and sign-in. |
| 2. **API Request**     | The frontend sends an API request (via Axios/Fetch) to the Express backend to log the check-in. |
| 3. **Database Operation** | The backend processes the request and updates/checks the SQLite database for the student's records. |
| 4. **API Response**     | The backend sends a response back to the frontend, confirming the check-in or indicating errors. |
| 5. **UI Update**        | The frontend updates the UI to display a success message or prompt the user to retry if necessary. |

## State Management
- **Local Component State**: Managed using **React Hooks** ( `useState` , `useEffect` ), each component tracks its own state.
- **Global State**: **App.js** handles global state for navigation and storing selected students.

## API Design
The backend serves several key API endpoints for communication between the frontend and the server:

| Method  | Endpoint             | Description                                      |
|---------|----------------------|--------------------------------------------------|
| `GET`   | `/api/students`       | Retrieves a list of students from the database.  |
| `POST`  | `/api/checkin`        | Submits check-in data, including selected students and parent signature. |
| `GET`   | `/api/checkin/:id`    | Retrieves check-in status for a particular student. |

> For a more detailed breakdown of API routes and parameters, refer to the `API.md` document.

## Security

| Feature                 | Description                                                                 |
|-------------------------|-----------------------------------------------------------------------------|
| **Inactivity Timer**     | Resets the app after 1 minute of inactivity to prevent unauthorized access.  |
| **(TODO) Authentication**| Implement authentication to ensure only authorized users can check students in/out. |
| **(TODO) Authorization** | Define role-based access control (admin/parent).                             |

## Scalability Considerations
- The current use of **SQLite** is suitable for a single kiosk deployment.
- For **multi-kiosk** setups or scaling to multiple locations, consider migrating to **PostgreSQL** or **MySQL** for better performance and concurrent access.

| Factor                | Current Implementation     | Scalable Solution            |
|-----------------------|----------------------------|------------------------------|
| **Database**           | SQLite                     | PostgreSQL or MySQL           |
| **Backend API**        | Single-server Express.js   | Load-balanced Express servers |
| **Real-time Updates**  | Not implemented            | WebSockets for live updates   |

## Deployment Architecture
- **Single Tablet Deployment**: The app is designed to be installed on a local tablet that runs both the frontend and backend.
- **Cloud Deployment (Optional)**: For a multi-kiosk or remote deployment, the frontend could interact with a cloud-hosted backend.

| Deployment Option      | Description                                                   |
|------------------------|---------------------------------------------------------------|
| **Local Deployment**    | All components run locally on the tablet.                     |
| **Cloud Deployment**    | Backend hosted on a cloud service, tablets connect via API.   |

## Future Enhancements

| Feature                          | Purpose                                                                 |
|-----------------------------------|-------------------------------------------------------------------------|
| **Real-time updates**             | Implement real-time check-in/out status using WebSockets for live syncing across multiple kiosks. |
| **Admin Panel**                   | Develop an admin dashboard for managing student data and viewing check-in history. |
| **Integration with School Systems** | Connect the app to existing school databases for a seamless experience. |

