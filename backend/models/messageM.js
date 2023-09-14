const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const messageSchema = new Schema({
  message: {
    type: String,
    required: true,
  },
});

const Message = mongoose.model("message", messageSchema);
module.exports = Message;
