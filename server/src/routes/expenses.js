const express = require("express");
const router = express.Router();
const {
  getExpenses,
  addExpense,
  updateExpense,
  deleteExpense,
} = require("../controllers/expenses");

router.route("/get").get(getExpenses);
router.route("/insert").post(addExpense);
router.route("/update").put(updateExpense);

router.route("/delete/:id").delete(deleteExpense);

module.exports = router;
