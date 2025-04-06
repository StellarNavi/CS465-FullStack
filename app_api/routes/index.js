//Note to self: purpose is to activate the controller by adding a route to the controller so the webserver knows how to process the request 
const express = require("express");
const router = express.Router();

const tripsController = require("../controllers/trips");

// define route for trips endpoint
router
    .route("/trips")
    .get(tripsController.tripList);

//get method routes tripsFindByCode which requires a param
router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode);

module.exports = router;