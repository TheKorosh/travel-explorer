# Travel Explorer

A responsive travel website built with **React** and **Vite**.

The project focuses on a clean travel-oriented interface with destination cards, popular attractions, navigation, search and favorite actions, and a newsletter section.

## ✨ Features

* Responsive travel website layout
* Hero section with navigation
* Top destinations section
* Popular attractions section
* Destination and attraction cards generated from JavaScript data
* Search and favorite action UI
* Newsletter subscription UI
* Responsive navigation layout
* Reusable React components
* SCSS-based styling

## 🛠️ Tech Stack

* **React**
* **Vite**
* **JavaScript (JSX)**
* **SCSS / Sass**
* **Font Awesome**
* **CSS Grid & Flexbox**

## 📁 Project Structure

```text
travel-explorer/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── attraction/
│   │   ├── destination/
│   │   ├── footer/
│   │   └── header/
│   ├── data/
│   ├── pages/
│   └── styles/
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone <your-repository-url>
cd travel-explorer
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Vite will provide a local development URL in the terminal.

### 4. Build for production

```bash
npm run build
```

### 5. Preview the production build

```bash
npm run preview
```

## 🧩 Main Components

The project is divided into reusable React components:

* **Header** — Navigation, logo, search, favorites, and menu UI
* **Destination** — Displays destination cards and related information
* **Attraction** — Displays popular attraction cards
* **Footer** — Footer navigation, newsletter section, and additional links

## 📦 Data

Destination and attraction content is kept separately from the UI components.

Cards are generated dynamically using JavaScript's `.map()` method instead of duplicating JSX for every item.

## 🎨 Styling

The project uses **SCSS** for styling.

Styles are organized by component where appropriate, with shared styles, variables, and other common styling utilities kept inside the main styles directory.

## 📌 Current Status

This project is currently focused on the **frontend UI and component structure**.

Some interactive elements, including search, favorites, carousel controls, navigation actions, and newsletter submission, are currently presented as UI elements and can be connected to application logic or an API in the future.

## 🔮 Possible Improvements

* Add React Router for page navigation
* Implement search functionality
* Implement favorite/wishlist state
* Add functional carousel controls
* Connect newsletter subscription to a backend/API
* Replace placeholder data with real destination and attraction data
* Improve accessibility for interactive elements
* Add loading and error states
* Add additional responsive breakpoints
* Add tests for reusable components

## 📄 License

This project is for learning and portfolio purposes.
