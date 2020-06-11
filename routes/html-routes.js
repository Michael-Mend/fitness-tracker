// This file offers a set of html routes

// Dependencies
var path = require('path');

module.exports = function(app) {
	// Each of the below routes handles html pages.

	app.get('/', (req, res) => {
		// html route that loads index.html
		res.sendFile(path.join(__dirname, '../public/index.html'));
	});

	app.get('/exercise', (req, res) => {
		// html route that loads exercise.html
		res.sendFile(path.join(__dirname, '../public/exercise.html'));
	});

	app.get('/stats', (req, res) => {
		// html route that loads exercise.html
		res.sendFile(path.join(__dirname, '../public/stats.html'));
	});
};
