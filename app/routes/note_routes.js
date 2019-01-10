var ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db) {
	// read
	app.get('/notes/:id', (req, res) => {
		const id =req.params.id;
		const details = { '_id': new ObjectID(id) };
		db.collection('notes').findOne(details, (err, item) => {
			if (err) {
				res.send({'error': 'An error has occured. Could not read.' });
			} else {
				res.send(item);
			}
		});
	});

	app.post('/notes', (req,res) => {
		// create note here
		const note = { text: req.body.text, title: req.body.title};
		db.collection('notes').insert(note, (err,result) => {
			if (err) {
				res.send({ 'error': 'An error has occured. Could not create.' });
			} else {
				res.send(result.ops[0]);
			}
		});
	});
};