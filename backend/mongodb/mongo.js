const mongoose = require("mongoose");

mongoose
  .connect("mongodb://db:27017/Test1", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));
