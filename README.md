# 🌍 WanderList

> **Your dream destinations, all in one place.**

WanderList is a single-page React application for exploring, saving, and managing the places you've always wanted to visit.

Whether it's a city you've been dreaming about, a hidden beach you've discovered online, or a country sitting at the top of your travel bucket list, WanderList gives you one place to keep track of it all. ✈️

---

## ✨ Features

* 🗺️ **Browse destinations** and view saved travel ideas
* ➕ **Add destinations** to your personal wishlist
* ✏️ **Edit destinations** as your plans evolve
* 🗑️ **Delete destinations** you no longer want to visit
* 🚦 **Client-side routing** for seamless navigation between pages
* 📱 **Responsive design** for different screen sizes
* 💾 **REST-style data management** using JSON Server

---

## 💡 The Problem

Travel wishlists have a habit of ending up everywhere: scattered across notes apps, screenshots, spreadsheets, browser bookmarks, and occasionally just floating around in our heads.

When travel plans finally start taking shape, finding those details again can become surprisingly difficult.

**WanderList** solves this by giving you one place to:

* Save destinations you want to visit
* Record why you want to go
* Update your plans as they evolve
* Keep your travel wishlist organized

No more *"I saw this place somewhere... what was it called again?"* 😅

---

## 🛠️ Tech Stack

| Technology           | Purpose                                      |
| -------------------- | -------------------------------------------- |
| **React 18**         | UI development and component logic           |
| **React Router DOM** | Client-side navigation and routing           |
| **JSON Server**      | Mock REST API and data persistence           |
| **Tailwind CSS**     | Utility-first styling and responsive layouts |

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

* [Node.js](https://nodejs.org/)
* npm

### Installation

Clone the repository and install the dependencies:

```bash
git clone <repo-url>
cd wanderlist
npm install
```

### Running the Application

WanderList uses **JSON Server** as its mock backend.

#### 1. Start the JSON Server

Open a terminal and run:

```bash
npx json-server --watch src/db/db.json --port 3001
```

The API will be available at:

```text
http://localhost:3001
```

#### 2. Start the React application

In a separate terminal:

```bash
npm start
```

The application will then be available at:

```text
http://localhost:3000
```

---

## 📍 Pages & Routes

| Route              | Page                 | Description                                              |
| ------------------ | -------------------- | -------------------------------------------------------- |
| `/`                | **Home**             | Welcome screen with links to browse or add destinations  |
| `/destinations`    | **Destinations**     | Displays saved destinations with edit and delete options |
| `/add-destination` | **Add Destination**  | Form for adding a new dream destination                  |
| `/edit/:id`        | **Edit Destination** | Pre-filled form for updating an existing destination     |

---

## 🧩 Components

### `DestinationCard`

Displays an individual destination, including its:

* Name
* Location
* Description
* Edit action
* Delete action

### `DestinationList`

Fetches destinations from the JSON Server API and renders a `DestinationCard` for each destination.

### `DestinationForm`

A controlled form used for both creating and editing destinations.

It handles:

* **POST** requests when adding destinations
* **PATCH** requests when editing destinations

---

## 🧭 Routing

WanderList uses **React Router DOM** to provide client-side navigation without requiring full browser page reloads.

Key React Router features include:

| Feature            | Purpose                                      |
| ------------------ | -------------------------------------------- |
| `BrowserRouter`    | Wraps the application and enables routing    |
| `Routes` / `Route` | Maps URLs to application components          |
| `Link`             | Provides navigation between pages            |
| `useNavigate`      | Enables programmatic navigation              |
| `useParams`        | Retrieves the destination `:id` from the URL |

---

## 🎨 Styling

WanderList uses **Tailwind CSS** for styling, with utility classes applied directly within JSX.

Responsive layouts are handled using Tailwind's breakpoint prefixes, allowing the interface to adapt to different screen sizes without relying on custom media queries.

### 🎨 Colour Palette

| Colour           | Hex       | Usage                        |
| ---------------- | --------- | ---------------------------- |
| **Navy**         | `#042C53` | Backgrounds and headings     |
| **Forest Green** | `#3B6D11` | Accents and calls-to-action  |
| **Light Green**  | `#7FB851` | Links and active states      |
| **Cream**        | `#F5F0E8` | Page background and surfaces |

---

## 📁 Project Structure

```text
wanderlist/
├── public/
├── src/
│   ├── components/
│   │   ├── DestinationCard
│   │   ├── DestinationForm
│   │   └── DestinationList
│   ├── pages/
│   ├── App.jsx
│   └── main.jsx
├── db.json
├── package.json
└── README.md
```

> **Note:** The exact project structure may vary depending on the current implementation.

---

## 🌱 Project Purpose

WanderList was created as a React learning project to practice building a component-based single-page application, working with REST APIs, managing form state, and implementing client-side routing.

It demonstrates the fundamentals of connecting a React frontend to a mock backend while keeping the application modular and responsive.

---

## 📸 Screenshots

*Add screenshots or a short demo GIF here to showcase the application.*

---

## 🔮 Future Improvements

Potential improvements for WanderList include:

* 🔐 User authentication and personal wishlists
* 🖼️ Destination images
* 🔎 Search and filtering
* ⭐ Favourite destinations
* 🗺️ Interactive maps
* 📅 Trip planning and travel dates
* ☁️ Replacing JSON Server with a production backend
* 📱 Progressive Web App (PWA) support

---

## 📄 License

This project was created for educational purposes.
