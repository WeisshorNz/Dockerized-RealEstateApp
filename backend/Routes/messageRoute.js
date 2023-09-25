const express = require("express");
const router = express.Router();

const messageController = require("../Controllers/messageController");
const listingController = require("../Controllers/listingController");

//Create a new message
router.post("/", messageController.createNewMessage);

//Delete a message
router.delete("/:id", messageController.deleteAMessage);

//Update a message by id
router.patch("/:id", messageController.updateAMessage);

//List all messages in database
router.get("/", messageController.getAllMessages);

//Get a specific message by id
router.get("/:id", messageController.findMessageById);

//List all listings in database
router.get("/", listingController.getAllListings);

//Get a specific listing by Bedrooms
router.get("/:Rooms", listingController.findListingByRooms);

module.exports = router;
