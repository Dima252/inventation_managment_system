# Invitation Management System

A full-stack application designed to manage the guest list, validate contact numbers, and handle WhatsApp template messaging for the upcoming wedding. 

The system ensures clean data entry through an automated validation loop before sending out official invitations and tracking RSVPs.

## 🏗️ Project Architecture

This repository is divided into two distinct environments:

* **`/frontend` (Next.js & Tailwind CSS):** The client-facing landing page for guests to view event details, as well as the Admin UI to upload, edit, and validate guest phone numbers.
* **`/backend` (NestJS, Prisma, & PostgreSQL):** The core Object-Oriented engine. It handles data persistence, runs the `libphonenumber` validation logic, and integrates with the Meta WhatsApp Cloud API.

## 🚀 Prerequisites

Before running this project, ensure you have the following installed:
* [Node.js](https://nodejs.org/) (v18 or higher)
* [PostgreSQL](https://www.postgresql.org/) (or Docker to run a local database container)
* A Meta Developer Account (for WhatsApp API access)

## 🛠️ Getting Started

Because this project separates the client and server, you will need to start both environments to run the full application.

### 1. Database Setup
Navigate to the backend and initialize the Prisma database schema:
```bash
cd backend
npx prisma migrate dev --name init