// note to self: the purpose of this section is that this will be where we create the initial methods that will 
// integrate with MongoDB and retreive data for the application

// single controller that retrieves a list of all available trips
const mongoose = require('mongoose');
const Trip = require('../models/travlr'); //registers model
const Model = mongoose.model('trips');

// Get: /trips - lists all of the trips
//Regardless of outcome, the response must include an HTML status code
// and JSON message to the requesting client
const tripList = async (req, res) => {
    const q = await Model
        .find({}) // finds all with no filters =  returns all records
        .exec();

    // the below will show results of query in the console
    // console.log(q);

    if (!q) { //db returned no data
        return res
            .status(404) // general 'Not Found' error
            .json(err);
    } else { //data found, returning trip list
        return res
            .status(200) // good/successful request
            .json(q);
    }
};

// Get: /trips/:tripCode - lists of a single trip
//Regardless of outcome, the response must include an HTML status code
// and JSON message to the requesting client
const tripsFindByCode = async (req, res) => {
    const q = await Model
        .find({ 'code': req.params.tripCode }) // finds with no filters a single record
        .exec();

    // the below will show results of query in the console
    // console.log(q);

    if (!q) { //db returned no data
        return res
            .status(404) // general 'Not Found' error
            .json(err);
    } else { //data found, returning trip list
        return res
            .status(200) // good/successful request
            .json(q);
    }
};



const tripsAddTrip = async (req, res) => {
    const newTrip = new Trip({
        code: req.body.code,
        name: req.body.name,
        length: req.body.length,
        start: req.body.start,
        resort: req.body.resort,
        perPerson: req.body.perPerson,
        image: req.body.image,
        description: req.body.description
    });

    const q = await newTrip.save();

    if (!q) { //db returned no data...
        return res
            .status(400)
            .json(err);
    } else { // return new trip
        return res
            .status(201)
            .json(q);
    }

    //uncomment to show results in console
    console.log(q)
};

// PUT: /trips/:tripCode - Adds a new Trip 
// Regardless of outcome, response must include HTML status code 
// and JSON message to the requesting client
const tripsUpdateTrip = async (req, res) => {
    // Uncomment for debugging
    console.log(req.params); 
    console.log(req.body); 
    
    const q = await Model
        .findOneAndUpdate(
            { 'code': req.params.tripCode },
            { 
                code: req.body.code,
                name: req.body.name,
                length: req.body.length, 
                start: req.body.start, 
                resort: req.body.resort, 
                perPerson: req.body.perPerson, 
                image: req.body.image, 
                description: req.body.description 
            }
        )
        .exec();

        if(!q)
        { // Database returned no data    
            return res 
                .status(400) 
                .json(err);
        } else { // Return resulting updated trip
            return res 
                .status(201) 
                .json(q); 
        }
        // Uncomment the following line to show results of operation on the console 
        // console.log(q); };
    };


    module.exports = {
        tripList,
        tripsFindByCode,
        tripsAddTrip, // add your new method to the modules.exports list...
        tripsUpdateTrip
    };