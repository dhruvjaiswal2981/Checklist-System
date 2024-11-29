### Checklist System

- This project is a Checklist System built using Node.js for the backend and a minimal frontend. It evaluates input data fetched from an API against predefined rules and displays the results in a simple dashboard. The system is designed to be modular, clean, and easy to extend for future requirements.

## Features
- Fetches data from an API dynamically.
- Evaluates conditions using configurable checklist rules.
- Displays results in a clean and responsive dashboard.
- Modular codebase for easy maintenance and scalability.

## Project Structure
- Fill Structure
    ```bash
    checklist-system/
    │
    ├── backend/
    │   ├── index.js              # Entry point for the Node.js server
    │   ├── rulesConfig.js        # Configuration file for checklist rules
    │   └── helpers/
    │       └── evaluateRules.js  # Logic to evaluate rules dynamically
    │
    ├── frontend/
    │   ├── index.html            # HTML file for the dashboard
    │   ├── styles.css            # Optional CSS file
    │   └── scripts.js            # JS file for fetching and displaying results
    │
    └── README.md                 # Project documentation


## Setup Instructions
1. Clone the Repository
    ```bash
    git clone https://github.com/dhruvjaiswal2981/Checklist-System.git
    cd checklist-system

2. Backend Setup
    1.  Navigate to the backend directory:

        ```bash
        cd backend

    2. Install dependencies:

        ```bash
        npm install

    3. Run the server:

        ```bash
        node index.js
    - The server will run on http://localhost:3000.

3. Frontend Setup

    1. Navigate to the frontend directory:

        ```bash
        cd ../frontend

    2. Open the index.html file in your browser:

        ```bash
        open index.html
        or
        ```bash
        start index.html
    (Command depends on your operating system.)

## Checklist Rules
- The system evaluates the following rules against the input data:

1. Valuation Fee Paid:

    - isValuationFeePaid should be true.

2. UK Resident:

    - isUkResident should be true.

3. Risk Rating Medium:

    - riskRating should be "Medium".

4. LTV Below 60%:

    - Calculate Loan-to-Value (LTV) as:
        LTV =(Loan Required / Purchase Price) × 100

    - Ensure the value is below 60%.
Rules are stored in backend/rulesConfig.js for easy modification.  

## Future Enhancements
- Add user authentication for restricted access to the dashboard.
- Implement a database to store evaluation results.
- Create a more interactive UI using React or Angular.

## Deployment

- Live Demo: The application is hosted on Render.
- Access it here: https://checklist-system-gfhq.onrender.com