# 💌 Local Event & Invitation Management System

A privacy-first, fully local web application built to manage contact lists, validate phone numbers, and schedule automated WhatsApp messages for events, campaigns, or large group coordinates. 

Instead of relying on a heavy cloud database, this system uses a local JSON engine to keep all contact data (especially phone numbers) completely private and stored strictly on your local hard drive.

## 🏗️ Architecture

* **Frontend:** Next.js (React) - *The User Dashboard*
* **Backend:** NestJS (Node.js) - *The Data Engine & Meta API Validator*
* **Database:** Local JSON File (`backend/data/guest_state.json`)

---

## 🚀 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### 1. Install Dependencies
Because the frontend and backend run on different engines, you need to install the packages for both.

**For the Backend:**
\`\`\`bash
cd backend
npm install
\`\`\`

**For the Frontend:**
\`\`\`bash
cd frontend
npm install
\`\`\`

### 2. Meta WhatsApp API Setup
To actually send messages, this application requires a Meta Developer Account and an official WhatsApp Business API connection.

1. Go to the [Meta Developer Portal](https://developers.facebook.com/) and create a new App.
2. Add the **WhatsApp** product to your app.
3. Generate an **Access Token** and locate your **Phone Number ID**.
4. In the `backend` folder, create a file named exactly `.env`.
5. Add your Meta credentials to the `.env` file like this:

\`\`\`env
# backend/.env
META_ACCESS_TOKEN="your_long_meta_access_token_here"
WHATSAPP_PHONE_ID="your_phone_number_id_here"
\`\`\`
*(Note: Never commit your `.env` file to GitHub. It is already protected by the `.gitignore` file).*

---

## 💻 How to Run the System

You will need **two separate terminal windows** open to run the full application.

**Terminal 1: Start the Backend (The Engine)**
\`\`\`bash
cd backend
npm run start:dev
\`\`\`
*The backend will run locally on http://localhost:3001*

**Terminal 2: Start the Frontend (The Website)**
\`\`\`bash
cd frontend
npm run dev
\`\`\`
*The frontend will run locally on http://localhost:3000*

---

## 📖 How to Use the App

1. **Upload the Contact List:** Drag and drop your `.csv` or `.txt` file into the frontend dashboard. The system will extract the names and phone numbers, clean up messy formatting, and gracefully catch any accidental duplicate numbers.
2. **The Validation Loop:** The backend uses Google's `libphonenumber` to mathematically verify each number, formatting them perfectly for the Meta/WhatsApp API. 
3. **Review Anomalies:** The dashboard will display any invalid numbers so you can manually fix them before broadcasting any messages.
4. **Trigger Phases:** Use the dashboard buttons to send messages exactly when you need them without relying on automated cloud timers. The messaging phases are fully customizable (e.g., Initial Outreach, 1-Month Reminder, Week-Of Details, Same-Day Updates).

---

## 🔒 A Note on Data Privacy
Because this system deals with real phone numbers, **contact data is never pushed to GitHub**. The local database is strictly ignored via the `.gitignore` file and lives safely in `backend/data/guest_state.json`. If you move to a new computer, you must manually transfer this JSON file to retain your contact states.