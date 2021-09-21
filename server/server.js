const express = require("express");
const cors = require("cors");

const app = express();
const expenses = require("./src/routes/expenses");
const PORT = process.env.PORT || 8080;

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));

  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.use("/api", expenses);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
