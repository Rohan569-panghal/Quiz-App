const express = require("express");
const app = express();
const hostname = "0.0.0.0"; // Use 0.0.0.0 to bind server to all interfaces
const PORT = 5000;
const { databaseConnection } = require("./db/conn");
const quizroutes = require("./routes/quizeRoute");
const cors = require("cors");

// Middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use("/api/questions", quizroutes);

// Serve frontend build
app.use(express.static("public"));

// Start the server
app.listen(PORT, hostname, () => {
  console.log(`Server running on http://${hostname}:${PORT}`);
  databaseConnection();
});

