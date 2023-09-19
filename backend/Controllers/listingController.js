const createError = require("http-errors");
const mongoose = require("mongoose");
const Listing = require("../Models/listingModel");

module.exports = {
  filteredListings: async (req, res, next) => {
    try {
      const Type = req.query.Type;
      const Suburb = req.query.Suburb;
      // const Rent = req.query.listingRent;
      const Rooms = parseInt(req.query.Rooms);
      const Bathrooms = parseInt(req.query.Bathrooms);
      const Carparks = parseInt(req.query.Carparks);

      const fListings = await Listing.find({
        Type: Type,
        Suburb: Suburb,
        // Rent: Rent, 
        Rooms: Rooms, 
        Bathrooms:Bathrooms,
        Carparks: Carparks, 
      });

      res.json(fListings);
    } catch (error) {
      console.error(error.message);
      next(error);
    }
  },


  getAllListings: async (req, res, next) => {
    try {
      const results = await Listing.find({});
      res.send(results);
    } catch (error) {
      console.error(error.message);
      next(error);
    }
  },

  findListingByRooms: async (req, res, next) => {
    const requestedRooms = parseInt(req.params.Rooms); // Convert to integer
    try {
      // Assuming you have a Listing model with a "Rooms" field in your database
      const listings = await Listing.find({ Rooms: requestedRooms });

      if (listings.length === 0) {
        // If no matching listings were found, return a 404 error
        throw createError(
          404,
          "No listings with the requested number of rooms found."
        );
      }

      res.json(listings);
    } catch (error) {
      console.error(error.message);
      if (error instanceof mongoose.CastError) {
        next(createError(400, "Invalid listing"));
      } else {
        next(error);
      }
    }
  },
};