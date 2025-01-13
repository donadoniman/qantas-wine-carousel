# Qantas Wine Carousel

## Overview

The **Qantas Wine Carousel** is a React-based product carousel designed to display wine products. It features automatic slide transitions, manual navigation via dots, and responsive design. The project uses **Higher-Order Components (HOCs)** for separation of concerns and **Tailwind CSS** for styling.

---

## Features

- **Carousel**: Product Listing.
- **Loader and Error Handling**:
  - Displays a loading spinner while fetching data.
  - Shows an error message with a retry button on failure.
- **Higher-Order Components (HOCs)**:
  - `withDataFetching`: Handles API calls and manages loading/error states.
  - `withLoadingAndError`: Displays loaders and error messages.
  - `withDataEnhancement`: Enhances data by adding computed properties (e.g., discounts).
- **Responsive Design**: Fully responsive layout using Tailwind CSS.

---

## Installation

### Prerequisites

- Node.js (v14 or above)
- npm (v6 or above)

### Steps to Run the Project

1. Clone the repository:
   ```bash
   git clone https://github.com/donadoniman/qantas-wine-carousel.git
   cd qantas-wine-carousel

2. Install dependencies:
   ```bash
   npm install

3. Start the development server:
   ```bash
   npm start

The application will be available at http://localhost:3000.

### Running Tests

1. Run All Tests
    ```bash
    npm test

### Approach and Trade-offs

#### Approach

1. Component-Based Architecture:
    Modular components ensure maintainability and reusability.
    HOCs encapsulate functionality for data fetching, loading/error handling, and data enhancement.
2. Tailwind CSS:
    Provides a responsive and consistent styling approach.
3. Testing:
    Tests cover key functionality for core components and HOCs.

#### Trade-offs

1. HOCs over Hooks:
    HOCs ensure separation of concerns but could be replaced by hooks for a more modern approach.
2. Testing Focus:
    Tests focus on functionality rather than exhaustive edge cases.
3. Future Improvements
    1. Auto-play:
        Implement Auto Play functionality when the user interacts with the carousel.
    2. Infinite Scrolling:
        Add infinite scrolling for seamless user experience.
    3. Swipe Gestures:
        Support swipe gestures for touch devices.
    4. End to End Testing
        Create end-to-end testing with Playwright

### Author
Dona Doni Manuel
