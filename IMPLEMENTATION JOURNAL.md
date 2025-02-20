# IMPLEMENTATION JOURNAL - Quiz App

## Submitted By
**Rohan**

## Submitted To
**Vipin Tripathi**

## Test Case Version
**1.0**

## Reviewer Name
**Vipin Tripathi**

---

## Goal

To enhance the backend for the Quiz Application by implementing the following features:

- **Dark Mode Context:** Add a toggle for Dark Mode with persistent state management.
- **Previous Button:** Navigate back to the previous question while retaining selected answers.
- **Selected Answer Feedback:** Highlight the selected answer with green for better visual feedback.
- **Fetch Data from MongoDB API:** Dynamically load quiz data from MongoDB.

---

## Table of Contents

1. [Prerequisites](#prerequisites)
   - [Hardware Requirements](#hardware-requirements)
   - [Software Requirements](#software-requirements)
   - [Network Requirements](#network-requirements)
2. [Steps](#steps)
   - [Step 1: Implement Dark Mode Context](#step-1-implement-dark-mode-context)
   - [Step 2: Add Previous Button for Navigation](#step-2-add-previous-button-for-navigation)
   - [Step 3: Highlight Selected Answers](#step-3-highlight-selected-answers)
   - [Step 4: Fetch Data from MongoDB API](#step-4-fetch-data-from-mongodb-api)
3. [Final Verification](#final-verification)

---

## Prerequisites

### Hardware Requirements
- System with at least **8GB RAM** and **2GHz processor**.
- Stable **internet connection**.

### Software Requirements
- **Node.js (v16+)**
- **MongoDB (v5+)**
- **React (v18+)**
- **Semantic UI for React**

### Network Requirements
- **MongoDB database connection string**
- **API server running locally or hosted**

---

## Steps

### Step 1: Implement Dark Mode Context

#### Commands Executed:

1. **Create the Dark Mode Context**  
2. **Wrap app with the DarkModeProvider**  
   - In `App.js` (or the root component), wrap the app with `DarkModeProvider`.
3. **Access the Dark Mode State and Toggle Function**  
   - In any component, access `isDarkMode` state and `toggleDarkMode` function using the `useDarkMode` hook.

#### Output Shown:
✔ Dark Mode toggles successfully across all pages, with themes applied dynamically.

#### Verify it is Deployed:
✔ Confirmed styles update correctly by switching Dark Mode on and off.

---

### Step 2: Add Previous Button for Navigation

#### Commands Executed:

- Updated the `Quiz.js` component:
  touch src/components/Quiz.js
 ### Output Shown:
✔ The "Previous" button navigates correctly to earlier questions.

Verify it is Deployed:
✔ Tested edge cases, ensuring the button is disabled on the first question.

### Step 3: Highlight Selected Answers
### Commands Executed:
- Updated the Quiz.js component:
nano src/components/Quiz.js
### Output Shown:
✔ Selected answers are visually highlighted, enhancing the user experience.

### Verify it is Deployed:
✔ Tested various answer selections to ensure correct styling and feedback.

### Step 4: Fetch Data from MongoDB API
### Commands Executed:
Setup MongoDB Connection:
mkdir backend/db
touch backend/db/connection.js
Install Dependencies:

npm install express mongoose
Define Quiz Schema in Backend:

In the backend directory, define the schema and the model.
touch backend/quizModel.js
Create API Routes for Quiz:

Define the API routes in index.js.
Start the Server:
node index
Output Shown:
✔ Fetched quiz data dynamically from MongoDB and rendered it in the frontend.

Verify it is Deployed:
✔ Connected to MongoDB and confirmed the API returns the correct data.

Final Verification
✅ Dark Mode: Verified by toggling themes and observing dynamic changes.
✅ Previous Button: Ensured smooth navigation and answer restoration.
✅ Answer Feedback: Confirmed visual feedback updates dynamically on selection.
✅ MongoDB API: Tested API with various data sets and confirmed real-time rendering.

