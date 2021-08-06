const mysql = require("mysql2");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Malaysia2023",
  database: "colivia",
});

exports.getExpenses = (req, res) => {
  const sqlSelect = "SELECT * FROM expenses";
  db.query(sqlSelect, (err, result) => {
    if (err) {
      console.log("ERROR GET: ", err);
    }
    res.status(200).json({
      success: true,
      data: result,
    });
  });
};

exports.addExpense = (req, res) => {
  const sqlInsert = "INSERT INTO expenses SET ?";
  db.query(sqlInsert, req.body, (err, result) => {
    console.log("RESULT: ", result);
    res.status(200).json({
      success: true,
    });
  });
};

// If i would've implemented update I would do something like down below
exports.updateExpense = (req, res) => {
  try {
    const { id, expense, amount } = req.body;
    const sqlUpdate =
      "UPDATE expenses SET expense = ?, amount = ? WHERE id = ?";
    db.query(sqlUpdate, [expense, amount, id], (err, result) => {
      if (err) console.log(err);
    });
  } catch (err) {
    if (err.name === "ValidationError") {
      const messages = Object.values(err.errors).map((val) => val.message);

      return res.status(400).json({
        success: false,
        error: messages,
      });
    } else {
      return res.status(500).json({
        success: false,
        error: "Server Error",
      });
    }
  }
};

exports.deleteExpense = (req, res) => {
  try {
    const id = req.params.id;
    const sqlDelete = "DELETE FROM expenses WHERE id = ?";
    db.query(sqlDelete, id, (err, result) => {
      if (err) console.log(err);
      res.status(200).json({
        success: true,
      });
    });

    if (!id) {
      return res.status(404).json({
        success: false,
        error: "No transaction found",
      });
    }
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};
