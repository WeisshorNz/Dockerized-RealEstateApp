const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
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

const Listing = mongoose.model("listing", listingSchema);
module.exports = Listing;
