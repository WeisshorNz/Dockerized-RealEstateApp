const express = require("express");
const createError = require("http-errors");
const dotenv = require("dotenv").config();
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Initialize DB
require("./mongo")();

const messageRoute = require("./Routes/messageRoute");
app.use("/message", messageRoute);

const listingRoute = require("./Routes/listingRoute");
app.use("/listing", listingRoute);

// 404 Error Handling Middleware
app.use((req, res, next) => {
  const err = createError(404, "Not found");
  next(err);
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  const status = err.status || 500;
  res.status(status);
  res.send({
    error: {
      status,
      message: err.message,
    },
  });
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}, Rock n Roll!`);
});
