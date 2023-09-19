const express = require("express");
const router = express.Router();
const listingController = require("../Controllers/listingController");

//List all listings in database
router.get("/", listingController.getAllListings);

//Get a specific listing by Bedrooms
router.get("/:Rooms", listingController.findListingByRooms);

//Get filtered listings
router.get("/:filtered",listingController.filteredListings);

module.exports = router;
