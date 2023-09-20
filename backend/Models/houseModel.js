const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const houseSchema = new Schema({
  Type: String,
  Suburb: String,
  Rent: Number,
  Rooms: Number,
  Bathrooms: Number,
  Carparks: Number,
  image: String,
  Agent: String,
  Address: String,
});

const House = mongoose.model("house", houseSchema, "listings");
module.exports = House;
