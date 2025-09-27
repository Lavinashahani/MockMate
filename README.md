<div align="center">
  <img src="https://i.imgur.com/your-logo-image-code.png" alt="MockMate Logo" width="150"/>
  <h1>MockMate - AI Interview Coach</h1>
  <p>
    An AI-powered application designed to help users prepare for technical interviews using the MERN stack and the Gemini API.
  </p>
  <p>
    <a href="your-deployment-link-here"><strong>View Live Demo »</strong></a>
  </p>
</div>

<br />

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#key-features">Key Features</a></li>
    <li><a href="#tech-stack">Tech Stack</a></li>
    <li><a href="#getting-started">Getting Started</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<br />

## About The Project

<div align="center">
  <img src="https://i.imgur.com/your-project-screenshot-or-gif.gif" alt="Project Screenshot">
</div>

MockMate is an intelligent interview preparation platform designed to help aspiring software developers ace their technical interviews. It provides a dynamic and realistic mock interview experience by leveraging the power of Google's Gemini API to generate relevant, role-specific questions and answers in real-time. Users can track their progress through a personal dashboard, making interview prep more structured and effective.

<br />

## Key Features

* **🤖 AI-Powered Q&A:** Generates a unique set of technical questions and answers for each session using the Gemini API.
* **🧑‍💻 Personalized Sessions:** Users can specify their desired job role, experience level, and topics to get a tailored interview experience.
* **📊 Session Dashboard:** All interview sessions are saved, allowing users to review their performance and track progress over time.
* **🔐 User Authentication:** Secure login and registration system to protect user data and session history.
* **📱 Responsive Design:** A clean, modern, and fully responsive user interface built with Tailwind CSS.

<br />

## Tech Stack

This project is built with the MERN stack and other modern technologies.

* **Frontend:**
    * React.js
    * Tailwind CSS
* **Backend:**
    * Node.js
    * Express.js
* **Database:**
    * MongoDB (with Mongoose)
* **APIs & Authentication:**
    * Google Gemini API
    * JSON Web Tokens (JWT)

<br />

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have Node.js, npm, and MongoDB installed on your machine.

### Installation

1.  Clone the repository:
    ```sh
    git clone [https://github.com/your-username/mockmate.git](https://github.com/your-username/mockmate.git)
    ```
2.  Install backend dependencies:
    ```sh
    cd mockmate/backend
    npm install
    ```
3.  Install frontend dependencies:
    ```sh
    cd ../frontend
    npm install
    ```

### Environment Variables

You'll need to create a `.env` file in the `/backend` directory and add the following variables:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secret_jwt_key
GEMINI_API_KEY=your_google_gemini_api_key


### Running the Application

1.  Start the backend server (from the `/backend` directory):
    ```sh
    npm run dev
    ```
2.  Start the frontend development server (from the `/frontend` directory):
    ```sh
    npm run dev
    ```
Your application should now be running locally.

<br />
