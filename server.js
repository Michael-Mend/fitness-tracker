// Requiring necessary npm packages
const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');

// Requiring .dotenv file
// require('dotenv').config();

//Setting up port
const PORT = process.env.PORT || 3000;

// Set models folder to db variable
const db = require('./models');

// Creating express app
const app = express();

//Configuring middleware needed for parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static('public'));

// Morgan middleware
app.use(logger('dev'));

//Starting database with mongoose
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout', {
	useNewUrlParser: true,
	useFindAndModify: false,
	useUnifiedTopology: true
});

//Routes
require('./routes/html-routes.js')(app);
require('./routes/api-routes.js')(app);

//Start server to listen
app.listen(PORT, () => console.log(`App running on http://localhost:%s/`, PORT));
