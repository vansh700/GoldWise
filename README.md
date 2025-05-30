#Goldwise-A Jewellery Management System

** Team Members**
Sanyukt Bhatt ,
Ishand Rai ,
Luvin ,
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


[drive link](https://drive.google.com/drive/folders/11VQwDX0_0b7OsTOE5vOBC0RIcFBGrBvu)
## Technologies Used
- HTML, CSS, JavaScript  
- Node.js, Express, MongoDB  
- Chart.js, TradingView widget  

## Steps to Run / Execute the Project
1. Clone the repo  
2. net start MongoDB
3. cd 1/backend
4. trial_cp
5. npm install
6. node server.js
7. Server running on port 5500

![Screenshot 2025-04-27 145543](https://github.com/user-attachments/assets/0f9d5cfa-c589-40fa-9650-ddf68681317c)

![Screenshot 2025-04-27 145601](https://github.com/user-attachments/assets/951ffeb1-a0ce-4da8-9d2b-65c8b4b6e8c8)

![Screenshot 2025-04-27 145623](https://github.com/user-attachments/assets/58167c15-65d9-4dd6-a035-6031080a8935)


![Screenshot 2025-04-27 145855](https://github.com/user-attachments/assets/4d03175d-73ca-486d-8292-0d5a36be4cc2)


![Screenshot 2025-04-27 145944](https://github.com/user-attachments/assets/02b6fd7c-a605-4a40-9395-f5907a397af8)


![Screenshot 2025-04-27 150020](https://github.com/user-attachments/assets/332cff76-f5f9-437c-9bcb-cdd181c2d0f6)


![Screenshot 2025-04-27 150036](https://github.com/user-attachments/assets/c578eb2b-3a74-4399-a562-1ad0d837daf0)










