var ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db) {
	// read a single note
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
		// create a note here
		const note = { text: req.body.text, title: req.body.title};
		db.collection('notes').insert(note, (err,result) => {
			if (err) {
				res.send({ 'error': 'An error has occured. Could not create.' });
			} else {
				res.send(result.ops[0]);
			}
		});
	});

	// delete a note
	app.delete('/notes/:id', (req,res) => {
		const id = req.params.id;
		const details = { '_id': new ObjectID(id)};
		db.collection('notes').remove(details, (err, item) => {
			if (err) {
				res.send({'error': 'An error has occured. Could not delete.'});
			} else {
				res.send('Note ' + id + ' deleted!');
			}
		});
	});

	// update
	app.put('/notes/:id', (req, res) => {
		const id =req.params.id;

		console.log(req);
		console.log(req.params);

		const details = { '_id': new ObjectID(id) };
		const note = { text: req.body.text, title: req.body.title};
		db.collection('notes').update(details, note, (err, result) => {
			if (err) {
				res.send({'error': 'An error has occured. Could not update.' });
			} else {
				res.send(note);
			}
		});
	});
};