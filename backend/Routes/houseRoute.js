const express = require("express");
const router = express.Router();

const houseController = require("../Controllers/houseController");

// Search houses based on criteria
router.get("/search", houseController.searchHouses);

module.exports = router;
