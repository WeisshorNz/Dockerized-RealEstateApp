const mongoose = require("mongoose");

module.exports = () => {
  // Connect to MongoDB using the provided URI and options
  mongoose
    .connect(process.env.MONGODB_URI, {
      dbName: process.env.DB_NAME,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useFindAndModify: false,
    })
    .then(() => {
      console.log("MongoDB connected...");
    })
    .catch((error) => {
      console.error("Error connecting to MongoDB:", error.message);
    });

  // Event listeners for MongoDB connection status

  // When successfully connected
  mongoose.connection.on("connected", () => {
    console.log("Mongoose connected to the database...");
  });

  // When an error occurs
  mongoose.connection.on("error", (error) => {
    console.error("Mongoose connection error:", error.message);
  });

  // When the connection is disconnected
  mongoose.connection.on("disconnected", () => {
    console.log("Mongoose connection is disconnected...");
  });

  // Handling termination signals (e.g., Ctrl+C)
  process.on("SIGINT", () => {
    mongoose.connection.close(() => {
      console.log("Mongoose connection terminated due to app termination...");
      process.exit(0);
    });
  });
};
