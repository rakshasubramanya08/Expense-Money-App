const express = require("express");
const router = express.Router();
const Expense = require("../models/Expense");

// ➕ Add expense
router.post("/", async (req, res) => {
  try {
    const { name, amount, date } = req.body;
    const newExpense = new Expense({ name, amount, date });
    const savedExpense = await newExpense.save();
    res.json(savedExpense);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 📜 Get all expenses
router.get("/", async (req, res) => {
  try {
    const expenses = await Expense.find();
    const total = expenses.reduce((sum, exp) => sum + exp.amount, 0);
    res.json({ expenses, total });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ❌ Delete expense
router.delete("/:id", async (req, res) => {
  try {
    await Expense.findByIdAndDelete(req.params.id);
    res.json({ message: "Expense deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
