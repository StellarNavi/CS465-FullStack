// Bring in the db connection and trip schema
const Mongoose = require('./db');
const Trip = require('./travlr');

//Read seed data from json file
// var fs = require('fs'); // commenting out in M5
// var trips = JSON.parse(fs.readFileSync('./data/trips.json','utf8'));

// Delete any existing records then insert the seed data from trips.json
const seedDB = async () => {
    await Trip.deleteMany({}); //deletes all since nothing was specified
    await Trip.insertMany(trips); // inserts all records present under trips
};

// close MongoDB connection and exit
seedDB().then(async () => {
    await Mongoose.connection.close();
    process.exit(0);
})