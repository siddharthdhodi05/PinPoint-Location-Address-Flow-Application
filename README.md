# 🗺️ Address/Location Flow Application

## 📖 Overview

The **Address/Location Flow** application provides users with a real-time map interface 🗺️, where they can:

- **Search locations** 🔍
- **Get routes** 🚗
- **Save favorite addresses** 💾

This application leverages the **Google Cloud API** for powerful features such as:

- **Google Maps** 🌍
- **Geolocation** 📍
- **Directions API** 🚦
- **Places API** 🏙️

Additionally, it integrates **JWT authentication** 🔐 to allow users to securely access their saved addresses.

Built with the **MERN** stack (MongoDB, Express, React, Node.js) 💻, the project also incorporates **Redux Toolkit** ⚙️ for state management and **TailwindCSS** 🌟 for modern, responsive styling. The application also makes extensive use of **Google Cloud API** for geolocation and mapping capabilities 🌐.

---


## 🌟 Key Features

### 1. **🗺️ Google Map Integration**
   - Users can **view a map** embedded in the application, fetched using the **Google Cloud API** 🌐.
   - **@react-google-maps/api** is used to integrate the map into the React app, providing a **seamless and interactive** map experience 🎮.
   - The map **displays the user's location in real-time** 🕒, using the **Geolocation API** 📍.

### 2. **📍 Current Location Detection**
   - Users can **click a button** to locate their **current real-time location** on the map 🔘.
   - The application uses the **Geolocation API** to fetch the user’s coordinates and places a **marker** on the map 🔖.

### 3. **🔍 Location Search**
   - Users can **search for any location** around the world by typing in the search bar 🌎.
   - The application uses the **Google Places API** to fetch and display **search results** for locations with **auto-suggestions** ✍️ and **dynamic results** 🔄.

### 4. **🚗 Route Creation**
   - Users can **enter an origin and destination** to generate a route between them 🛣️.
   - The application uses the **Google Directions API** to calculate the **best route** between the two points and displays the route on the map 🗺️.

### 5. **💾 Save Favorite Addresses**
   - Users can **save addresses** they frequently visit or want to store for later use 🔒.
   - The saved addresses are stored in a **MongoDB database** 🗄️ and retrieved whenever the user logs in 🔑.
   - Users can **manage** their saved addresses (add, delete) within the app ✏️.

### 6. **🔐 JWT Authentication**
   - **JWT (JSON Web Token)** authentication is implemented for **secure login** 🔑 and **user sessions** 👤.
   - Users must log in to view and manage their **saved addresses** 🔒.
   - Secure routes are protected using JWT to ensure only **authenticated users** can access them ✅.


---
## 💻 Tech Stack

- **Frontend**:
  - **React**: Used for building the user interface. [![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)
  - **React-Router-Dom**: For handling routing and navigation between pages.
  - **Redux Toolkit**: For state management to handle user authentication and saved addresses.
  - **@react-google-maps/api**: For embedding Google Maps in the React app and handling map interactions.
  - **TailwindCSS**: For responsive and modern UI styling.

- **Backend**:
  - **Node.js**: Server-side JavaScript runtime for building the backend. [![Node.js](https://img.shields.io/badge/Node.js-20.5.1-green.svg)](https://nodejs.org/)
  - **Express.js**: Web framework for Node.js to build RESTful APIs. [![Express](https://img.shields.io/badge/Express-4.18.2-lightgrey.svg)](https://expressjs.com/)
  - **MongoDB**: NoSQL database for storing user data, including saved addresses. [![MongoDB](https://img.shields.io/badge/MongoDB-7.0.2-brightgreen.svg)](https://www.mongodb.com/)
  - **JWT (JSON Web Tokens)**: For secure user authentication.

- **API Integration**:
  - **Google Cloud API**: Includes services like Google Maps, Google Geolocation, Google Directions API, and Google Places API to enable location-based features.

---

## ⚙️ Installation

### Prerequisites

- [Node.js](https://nodejs.org/en/) installed on your machine.
- A **Google Cloud** account with enabled **Maps**, **Geolocation**, **Directions**, and **Places** APIs.
- **MongoDB** set up for storing the addresses.


### Clone the Repository

```bash
git clone <repository_url>
cd <project_directory>
```

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/en/) installed on your machine.
- A Google Cloud account with enabled **Maps**, **Geolocation**, **Directions**, and **Places** APIs.
- MongoDB set up for storing the addresses.

### Clone the Repository

```bash
git clone <repository_url>
cd <project_directory>
```

### Install Dependencies

Run the following command in both the frontend and backend directories to install the required dependencies:

```bash
npm install <dependencies>
```
## Setup Google cloud API
#### 1. Create a project in your Google Cloud Console.
#### 2. Enable the following APIs:
- Google Maps JavaScript API
- Geolocation API
- Directions API
- Places API
#### 3. Obtain your API key from the Google Cloud Console and set it in the environment variables.

---
### Set up Environment Variables
- Create a .env file in the root of both the frontend and backend directories and add the following:
---
- frontend:
```bash
VITE_GOOGLE_MAPS_API_KEY=<your_google_maps_api_key>
```
---
- backend:
```bash
MONGO_URI=<Your URI>
PORT=5003
SECRET_KEY=janfkajfdadaadadn1e344552fdkwejq32ijei2
```
## Run the Application

### Start the Backend Server:
Navigate to the backend directory and run:

```bash
cd backend
npm run dev
```

## Start the Frontend Server:
Navigate to the forntend directory and run:
```bash
cd frontend
npm run dev
```

