# Zerodha Clone

A full-stack clone of the Zerodha trading platform, built for educational purposes.  
This project includes a React frontend (with Vite), a Node.js/Express backend, and MongoDB for data storage.

---

## Features

- User dashboard with live orders, holdings, and positions
- Place buy and sell orders for stocks
- Holdings and positions management
- Responsive UI using React, Vite, and Bootstrap 5
- RESTful API with Express and MongoDB

---

## Tech Stack

- **Frontend:** React 19, Vite, Bootstrap 5
- **Backend:** Node.js, Express, MongoDB (Mongoose)
- **Other:** FontAwesome, Axios

---

## Project Structure

```
Zerodha/
│
├── backend/         # Express API and MongoDB models
│   ├── model/       # Mongoose models
│   ├── schemas/     # Mongoose schemas
│   ├── utils/       # Utility functions
│   ├── index.js     # Main server file
│   └── ...
│
├── dashboard/       # Main React frontend (Vite)
│   ├── src/
│   ├── public/
│   └── ...
│
├── frontend/        # (Optional) Landing page or marketing site
│   ├── src/
│   ├── public/
│   └── ...
│
└── README.md        # This file
```

---

## Getting Started

### Prerequisites

- Node.js (v18 or above)
- npm
- MongoDB (local or Atlas)

### Backend Setup

1. Go to the backend folder:
   ```sh
   cd backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file with your MongoDB URI:
   ```
   MONGO_URL=mongodb://localhost:27017/zerodha-clone
   ```
4. Start the backend server:
   ```sh
   npm start
   ```

### Frontend Setup

1. Go to the dashboard folder:
   ```sh
   cd dashboard
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the frontend:
   ```sh
   npm run dev
   ```
4. Open (http://localhost:5173) in your browser.

---

## API Endpoints

- `GET /allHoldings` — Get all holdings
- `GET /allPositions` — Get all positions
- `GET /allOrders` — Get all orders
- `POST /newOrder` — Place a new order (buy/sell)
- `GET /holdingsSummary` — Get holdings summary

---

## Customization

- Update images in `public/assets/images/`
- Modify styles in `public/CSS.css` or `src/index.css`
- Adjust React components in `src/`

---

## License

This project is for educational purposes only and is not affiliated with Zerodha.

---
