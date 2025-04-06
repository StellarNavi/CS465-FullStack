// note to self: the purpose of this section is that this will be where we create the initial methods that will 
// integrate with MongoDB and retreive data for the application

// single controller that retrieves a list of all available trips
const mongoose = require('mongoose');
const Trip = require('../models/travlr'); //registers model
const Model = mongoose.model('trips');

// Get: /trips - lists all of the trips
//Regardless of outcome, the response must include an HTML status code
// and JSON message to the requesting client
const tripList = async(req, res) => {
    const q = await Model
        .find({}) // finds all with no filters =  returns all records
        .exec();

        // the below will show results of query in the console
        // console.log(q);

    if(!q)
    { //db returned no data
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
const tripsFindByCode = async(req, res) => {
    const q = await Model
        .find({'code': req.params.tripCode}) // finds with no filters a single record
        .exec();

        // the below will show results of query in the console
        // console.log(q);

    if(!q)
    { //db returned no data
        return res
            .status(404) // general 'Not Found' error
            .json(err);
    } else { //data found, returning trip list
        return res
            .status(200) // good/successful request
            .json(q);
    }
};

module.exports = {
    tripList,
    tripsFindByCode
};