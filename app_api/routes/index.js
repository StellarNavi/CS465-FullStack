//Note to self: purpose is to activate the controller by adding a route to the controller so the webserver knows how to process the request 
const jwt = require('jsonwebtoken'); // Enable JSON Web Tokens
const express = require("express");
const router = express.Router();


// Method to authenticate our JWT 
function authenticateJWT(req, res, next) {
    // console.log('In Middleware');
    const authHeader = req.headers['authorization'];

    // console.log('Auth Header: ' + authHeader); 
    if (authHeader == null) {
        console.log('Auth Header Required but NOT PRESENT!');
        return res.sendStatus(401);
    }

    let headers = authHeader.split(' ');
    if (headers.length < 1) {
        console.log('Not enough tokens in Auth Header: ' + headers.length);
        return res.sendStatus(501);
    }

    const token = authHeader.split(' ')[1];
    // console.log('Token: ' + token); 
    if (token == null) {
        console.log('Null Bearer Token');
        return res.sendStatus(401);
    }
    // console.log(process.env.JWT_SECRET);
    // console.log(jwt.decode(token)); 
    const verified = jwt.verify(token, process.env.JWT_SECRET, (err, verified) => {
        if (err) {
            return res.sendStatus(401).json('Token Validation Error!');
        }
        req.auth = verified; // Set the auth paramto the decoded object 
    });
    next(); // We need to continue or this will hang forever 
}

const tripsController = require("../controllers/trips");
const authController = require("../controllers/authentication");

router.route("/register").post(authController.register);
router.route("/login").post(authController.login);

// define route for trips endpoint
router
    .route("/trips")
    .get(tripsController.tripList) // GET method for routes tripList
    // .post(tripsController.tripsAddTrip); //POST method for adding trips //add auth to post
    .post(authenticateJWT, tripsController.tripsAddTrip); //POST method for adding trips //add auth to post

//get method routes tripsFindByCode which requires a param
router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode)
    // .put(tripsController.tripsUpdateTrip); //add auth to post
    .put(authenticateJWT, tripsController.tripsUpdateTrip); //add auth to post

module.exports = router;