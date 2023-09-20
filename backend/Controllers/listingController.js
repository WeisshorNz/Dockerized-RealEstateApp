const createError = require("http-errors");
const mongoose = require("mongoose");
const Listing = require("../Models/listingModel");

module.exports = {
    //api to get only filtered listings
  filteredListings: async (req, res, next) => {
    try {
        const query = {};
        if (req.query.Type) {
            query.Type = req.query.Type;
        }
        if (req.query.Suburb) {
            query.Suburb = req.query.Suburb;
        }
        // if (req.query.Rent) {
        //     query.Rent = parseFloat(req.query.Rent);
        if (req.query.Rooms) {
            query.Rooms = parseInt(req.query.Rooms);
        }
        if (req.query.Bathrooms) {
            query.Bathrooms = parseInt(req.query.Bathrooms);
        }
        if (req.query.Carparks) {
            query.Carparks = parseInt(req.query.Carparks);
        }
        // Only construct the $or query if there are query parameters
        if (Object.keys(query).length > 0) {
            const foundListings = await Listing.find({ $or: [query] });
            res.json(foundListings);
        } else {

            res.json([]);
        }
    } catch (error) {
        console.error(error.message);
        next(error);
    }
},

//api to get all listings in db
  getAllListings: async (req, res, next) => {
    try {
      const results = await Listing.find({});
      res.send(results);
    } catch (error) {
      console.error(error.message);
      next(error);
    }
  },

// api to get listings matching number of bedrooms as params
  findListingByRooms: async (req, res, next) => {
    const requestedRooms = parseInt(req.params.Rooms);
    try {
      const listings = await Listing.find({ Rooms: requestedRooms });
      if (listings.length === 0) {
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