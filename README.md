# CarePath-Patient-Health-Tracker
HealthTrack is a beginner-friendly, web-based application designed to help patients manage their health efficiently. The app offers essential features like health metrics tracking, medication reminders, and appointment scheduling, all integrated into a clean and user-friendly dashboard.

Features
1. User Registration and Login
Goal: Securely allow users to create accounts and log in.
Implementation:
Registration form validates user inputs and ensures unique usernames.
Login system authenticates users using session-based storage.
Tools:
HTML/CSS: Form design.
JavaScript: Session management and validation logic.
Files:
register.html and register.js for account creation.
login.html and login.js for authentication.
2. Health Metrics Tracking
Goal: Allow users to input and view health metrics like weight and blood pressure.
Implementation:
Forms for data input with validation for specific formats.
Real-time display of entered data on the dashboard.
Tools:
HTML/CSS: Layout of input forms.
JavaScript: Input validation and display logic.
Files:
dashboard.html and dashboard.js.
3. Medication Reminders
Goal: Users can set and manage reminders for medications.
Implementation:
Users can input medication name, dose, and time via a modal.
Reminders are displayed dynamically on the dashboard.
Tools:
HTML/CSS: Form layout.
JavaScript: Modal creation and reminder management.
Files:
dashboard.html and dashboard.js.
4. Appointment Scheduling
Goal: Enable users to schedule and view appointments.
Implementation:
A date picker form to input appointments.
Appointments are saved locally and displayed dynamically.
Tools:
HTML/CSS: Form and date picker interface.
JavaScript: Local storage and dynamic display.
Files:
dashboard.html and dashboard.js.
5. Dashboard
Goal: Provide an intuitive interface to manage health metrics, reminders, and appointments.
Implementation:
JavaScript dynamically updates the dashboard as users input data.
Tools:
HTML/CSS: Dashboard design.
JavaScript: Real-time updates.
Files:
dashboard.html and dashboard.js.
Project Setup
Clone the Repository
bash
Copy code
git clone [<repository_url>](https://github.com/catherinemckinley/CarePath-Patient-Health-Tracker.git)
Open the Project in a Browser
Navigate to index.html or login.html to start the app.
Usage
Register an Account:
Go to the registration page and fill out the form with your details.
Log In:
Enter your username and password to access the dashboard.
Manage Your Health:
Add health metrics, set medication reminders, and schedule appointments through the dashboard.
Future Enhancements
Implement persistent data storage using a backend or database.
Add email or SMS notifications for medication reminders.
Integrate graphs to visualize health metrics trends over time.
Contributors
Catherine McKinley, Pujan Desai, Pradnya Balamurugan, Will Jackson, Augustine Vu
