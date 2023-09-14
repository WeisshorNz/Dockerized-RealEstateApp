const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

require("./mongodb/mongo");

const messageRoute = require("./routes/messageRoute.js");
app.use("/message", messageRoute);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
