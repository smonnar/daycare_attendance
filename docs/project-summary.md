# Daycare Attendace Project Summary

## Project Overview
This is a web-based application developed for Palmetto Christian School (PCS). It allows parents to sign their children in and out of school using a tablet with a touchscreen interface. The app is simple and intuitive, designed to enhance convenience during drop-off and pick-up.

### How It Works:
Parents start by tapping anywhere on the screen, select their child(s) class and name, and sign with their finger to confirm. If no one interacts with the app for 1 minute, it automatically resets to the starting page.

## Current Functionality
The app is organized into clear steps that guide users through the sign-in/out process:

1. **Landing Page:** Displays the school logo and a *'Touch to begin'* button.
2. **Classroom Selection:** Parents choose their child's class (e.g., Infants, K-1, K-2, etc.).
3. **Student Selection:** Parents can select one or more students from the chosen class.
4. **Confirmation Page:** Allows review of selected students, with the option to add more from another class.
5. **Signature Capture:** Parents submit their signature to complete the process.

> *Note: An inactivity timer automatically resets the app after 1 minute of no activity.*

These steps ensure a streamlined process that is quick, user-friendly, and secure, making sign-in/out easier for parents while maintaining accurate records for the school.

## Tech Stack
The app is built using modern web technologies:

| Component | Purpose | Technology |
|----------|----------|----------|
| Frontend (User Interface)  | Manages what users see and interact with on the tablet  | React.js  |
| Backend (Server)  | Processes data and handles communication between the app and the database  | Express.js  |
| Database  | Stores data locally, such as student details and parent signatures  | SQLite  |
| State management  | Keeps track of changes within the app, like selected students or user interactions  | React Hooks ( `useState` , `useEffect` )  |


## Key Components
Here are the main parts of the app that handle different functions:

- **App.js:** Manages the overall state and navigation through the app.
- **LandingPage.js:** Displays the school logo and start button.
- **ClassroomSelection.js:** Shows buttons for selecting different classrooms.
- **StudentSelection.js:** Lists students based on the selected classroom and allows choosing multiple students.
- **ConfirmSelection.js:** Summarizes selected students and offers options to continue or add more.
- **SignaturePad.js:** Allows parents to sign using their finger on the touchscreen (using a signature capture tool called react-signature-canvas).

Each of these components represents a piece of the app’s functionality. They work together to create the smooth experience parents use to sign their children in or out.

## Recent Updates
- Unified Button Styles: Standardized buttons across all screens for a cohesive look.
- Centered Layouts: Adjusted content to be centrally aligned for better display on tablets.
- Back Button: Added a back button on the student selection page, allowing users to return to the classroom selection.
- Preventing Duplicates: Stopped the ability to select the same student more than once.
- Clear Signature Button: Added a button that lets parents reset their signature if needed.
- Confirmation Notification: Added a confirmation message after a successful signature is captured.

## Current Focus
- Improving UI/UX: Enhancing the design and experience for tablet users, ensuring easy navigation and usability.
- Consistent Styling: Making sure the look and feel are uniform across all screens and functions.
- Optimizing for Touchscreens: Ensuring that buttons and interactions are large enough for easy touch use.

## About This Repository
The app’s code is version-controlled and stored in a GitHub repository. This allows for tracking changes and collaboration among developers.

Key points:
- All recent updates have been uploaded to the GitHub repository.
- The next step is to create feature branches to manage significant updates separately.

## Development Environment
The app is built and run using common development tools:

- **npm:** Handles the installation and management of the app’s dependencies (third-party tools and libraries).
- **Development Mode:** The app is tested locally using `npm run dev` for live updates during development.
- **Port Configuration:** The app’s backend server runs on port 3001, while the frontend (React) is served on port 3000.

This summary captures the current state of the project. As I continue to develop and refine the app, it may be updated to reflect any new features, updates, or changes in direction.