const noteRoutes = require('./note_routes');

// n Express, routes are wrapped in a function, which takes the Express instance and a database as arguments.
module.exports = function(app, db) {
	noteRoutes(app, db);
	// other route groups could go here, in the future
};
