const express = require("express");
const router = express.Router();
const Expense = require("../models/Expense");
const { writeSnapshot } = require("../utils/saveJson");

// ➕ Add expense
router.post("/", async (req, res) => {
  try {
    const { name, amount, date } = req.body;
    if (!name || amount === undefined) {
      return res.status(400).json({ error: "name and amount are required" });
    }
    const newExpense = await Expense.create({
      name,
      amount: Number(amount),
      date: date ? new Date(date) : undefined
    });
    await writeSnapshot();
    res.json(newExpense);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 📜 Get all expenses (+ total)
router.get("/", async (_req, res) => {
  try {
    const expenses = await Expense.find().sort({ createdAt: 1 });
    const total = expenses.reduce((sum, exp) => sum + exp.amount, 0);
    res.json({ expenses, total });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ❌ Delete expense by id
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Expense.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: "Not found" });
    await writeSnapshot();
    res.json({ message: "Expense deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// (Optional) 📥 Download live JSON snapshot
router.get("/export/json", async (_req, res) => {
  try {
    const expenses = await Expense.find().lean();
    const total = expenses.reduce((s, e) => s + e.amount, 0);
    res.json({ updatedAt: new Date().toISOString(), total, expenses });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
