module.exports = function(app, db) {
	const collection = 

	app.post('/notes', (req,res) => {
		// create note here
		const note = { text: req.body.text, title: req.body.title};
		db.collection('notes').insert(note, (err,result) => {
			if (err) {
				res.send({ 'error': 'An error has occured' });
			} else {
				res.send(result.ops[0]);
			}
		});
	});
};