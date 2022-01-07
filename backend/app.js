const express = require("express");
const app = express();

const errorMiddleware = require("./middleware/error");

app.use(express.json());
// Route imports
const room = require("./routes/roomRoute");

app.use("/api/v1", room);

// Middleware for errors
app.use(errorMiddleware);

module.exports = app;
