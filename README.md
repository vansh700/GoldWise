#Goldwise-A Jewellery Management System

** Team Members**
Sanyukt Bhatt
Ishand Rai
Luvin
Vansh Soni


## Short Project Description

GoldWise is a full-stack jewellery-store platform combining a slick client-side shopping experience with a secure, server-backed admin dashboard.

Shopping Front End
Visitors browse categories (rings, earrings, necklaces, coins), view detailed product pages, add items to a cart, and “checkout” via a form—all in a single-page style interface. Live metal-rate charts (gold, silver, platinum) are rendered with TradingView widgets and Chart.js, letting users pick grams, kilograms or ounces.

Admin Panel 
Secured by a password-protected login, the panel exposes backend-driven modules:

Product Management
– Full CRUD on jewelry items, with all changes written directly to MongoDB and reflected instantly on the public catalog.

Expense Calculator
– Record daily shop expenses (materials, labor, overhead). Totals by day, month or custom range are computed server-side, every entry lives in MongoDB, and you can download your expense ledger as a CSV file at any time.

Customer Portfolio
– Add/edit/delete customer profiles, track purchase histories and outstanding balances. Dashboard search/filter by name or date runs via backend queries, with all customer data stored in MongoDB for true persistence.
Live Gold-Price Charts via TradingView

Real-Time Data Feed
The GoldWise interface embeds TradingView’s Lightweight Charts and widget libraries to pull live spot-gold prices (XAU/USD) directly from major market data providers. As soon as the market ticks, the chart updates—intra-second—so both customers and admins see the freshest bid/ask levels without needing to refresh the page.

Multiple Timeframes & Units
Users can toggle between granular timeframes (1 min, 5 min, 15 min, 1 hr, 1 day) to watch micro-movements or longer trends. A unit-selector control lets you view rates per gram, kilogram or troy ounce; behind the scenes, TradingView delivers the USD/Ounce quote which is converted client-side into ₹/gm or ₹/kg based on the current USD/INR forex rate.

Interactive Chart Tools
TradingView’s built-in crosshair, zoom, pan and tooltip features allow traders or shoppers to inspect exact price points at any timestamp. Hovering shows open/high/low/close values, and you can draw trendlines or measure percentage moves directly on the canvas.

## Link to Video Explanation
[Watch the demo video](https://drive.google.com/file/d/10It3YTJr-RN357V0H_-dza2hFsIi3Yse/view?usp=drivesdk)

## Technologies Used
- HTML, CSS, JavaScript  
- Node.js, Express, MongoDB  
- Chart.js, TradingView widget  

## Steps to Run / Execute the Project
1. Clone the repo  
2. `npm install`  
3. Create a `.env` with your credentials  
4. `node server.js` (or `npm start`)  
5. Open `http://localhost:3000` in your browser 



