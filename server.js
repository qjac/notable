// start by requiring dependencies
const express = require('express');
// use the MongoClient to interact with your database
// from so: MongoClient in your example is just a Nodejs library that handles connecting to and interacting with a MongoDB database. 
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
// require that new db you set up
let db = require('./config/db');

// initialize app as an instance of Express, the framework
const app = express();

const port = 8000;

// express can't process URL encoded forms
// so get body-parser up n runnin
app.use(bodyParser.urlencoded({ extended: true }));

// NOW CONNECT YOUR NEW DB
MongoClient.connect(db.url, (err, database) => {
	if (err)  return console.log(err);
	// import new routes for use
	db = database.db('notable-demo');
	require('./app/routes')(app, db);

	// to get server running, tell app to listen for HTTP requests
	app.listen(port, () => {
		console.log('we are live on port ' + port);
	}); // run npm run dev to see if it worked!

});
