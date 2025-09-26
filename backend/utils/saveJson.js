const fs = require("fs");
const path = require("path");
const Expense = require("../models/Expense");

async function writeSnapshot() {
  const dataDir = path.join(__dirname, "..", "data");
  if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir);
  const expenses = await Expense.find().lean();
  const total = expenses.reduce((s, e) => s + e.amount, 0);
  const snapshot = {
    updatedAt: new Date().toISOString(),
    total,
    expenses
  };
  fs.writeFileSync(
    path.join(dataDir, "expenses.json"),
    JSON.stringify(snapshot, null, 2),
    "utf-8"
  );
}

module.exports = { writeSnapshot };
