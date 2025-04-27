// server.js (updated with full CRUD operations)
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/jewelryDB", { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.log("MongoDB connection error:", err));

// Purchase Schema
const purchaseSchema = new mongoose.Schema({
  saleDate: { type: Date, required: true },
  customerName: { type: String, required: true },
  item: { type: String, required: true },
  quantity: { type: Number, required: true },
  unitCost: { type: Number, required: true },
  unitPrice: { type: Number, required: true },
  totalCost: Number,
  totalPrice: Number,
  paymentMethod: { type: String, required: true },
  profitLoss: Number
}, { timestamps: true });

const Purchase = mongoose.model("Purchase", purchaseSchema);

// API Routes
app.get("/api/purchases", async (req, res) => {
  try {
    const purchases = await Purchase.find().sort({ saleDate: -1 });
    res.json(purchases);
  } catch (error) {
    res.status(500).json({ message: "Error fetching purchases" });
  }
});

app.post("/api/purchases", async (req, res) => {
  try {
    const { saleDate, customerName, item, quantity, unitCost, unitPrice, paymentMethod } = req.body;
    
    const totalCost = unitCost * quantity;
    const totalPrice = unitPrice * quantity;
    const profitLoss = totalPrice - totalCost;

    const newPurchase = new Purchase({
      saleDate,
      customerName,
      item,
      quantity,
      unitCost,
      unitPrice,
      totalCost,
      totalPrice,
      paymentMethod,
      profitLoss
    });

    const savedPurchase = await newPurchase.save();
    res.status(201).json(savedPurchase);
  } catch (error) {
    res.status(400).json({ message: "Error creating purchase", error: error.message });
  }
});

app.put("/api/purchases/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { saleDate, customerName, item, quantity, unitCost, unitPrice, paymentMethod } = req.body;

    const totalCost = unitCost * quantity;
    const totalPrice = unitPrice * quantity;
    const profitLoss = totalPrice - totalCost;

    const updatedPurchase = await Purchase.findByIdAndUpdate(
      id,
      {
        saleDate,
        customerName,
        item,
        quantity,
        unitCost,
        unitPrice,
        totalCost,
        totalPrice,
        paymentMethod,
        profitLoss
      },
      { new: true }
    );

    if (!updatedPurchase) {
      return res.status(404).json({ message: "Purchase not found" });
    }

    res.json(updatedPurchase);
  } catch (error) {
    res.status(400).json({ message: "Error updating purchase", error: error.message });
  }
});

app.delete("/api/purchases/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedPurchase = await Purchase.findByIdAndDelete(id);

    if (!deletedPurchase) {
      return res.status(404).json({ message: "Purchase not found" });
    }

    res.json({ message: "Purchase deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: "Error deleting purchase", error: error.message });
  }
});

// Start server
const PORT = 5500;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});