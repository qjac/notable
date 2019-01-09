// start by requiring dependencies
const express =require('express');
// use the MongoClient to interact with your database
// from so: MongoClient in your example is just a Nodejs library that handles connecting to and interacting with a MongoDB database. 
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');

// initialize app as an instance of Express, the framework
const app = express();

