// start by requiring dependencies
const express =require('express');
// use the MongoClient to interact with your database
// from so: MongoClient in your example is just a Nodejs library that handles connecting to and interacting with a MongoDB database. 
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');

// initialize app as an instance of Express, the framework
const app = express();

const port = 8000;

// import new routes for use
// empty object is cuz there's no db set up yet
require('./app/routes')(app, {});

// to get server running, tell app to listen for HTTP requests
app.listen(port, () => {
	console.log('we are live on port ' + port);
}); // run npm run dev to see if it worked!

