const House = require("../Models/houseModel");

module.exports = {
  searchHouses: async (req, res, next) => {
    try {
      // destructuring the parameters
      const { Type, minRent, maxRent, Rooms, Bathrooms, Carparks, Suburb } =
        req.query;

      //empty object to contain parameters
      let query = {};
      // adding the parameters to the query object
      if (Type) query.Type = Type;
      // adding suburb and regexp for case-insensitive
      if (Suburb) query.Suburb = new RegExp(Suburb, "i");

      //  Rent logic
      if (minRent || maxRent) {
        query.Rent = {};
        if (minRent && !isNaN(Number(minRent)))
          query.Rent.$gte = Number(minRent);
        if (maxRent && !isNaN(Number(maxRent)))
          query.Rent.$lte = Number(maxRent);
      }
      // adding rooms
      if (Rooms && !isNaN(Number(Rooms))) query.Rooms = { $gte: Number(Rooms) };
      //adding bathrooms
      if (Bathrooms && !isNaN(Number(Bathrooms)))
        query.Bathrooms = { $gte: Number(Bathrooms) };
      // adding carparks
      if (Carparks && !isNaN(Number(Carparks)))
        query.Carparks = { $gte: Number(Carparks) };

      //search in database
      const results = await House.find(query);
      res.send(results);
    } catch (error) {
      console.error(error.message);
      next(error);
    }
  },
};
