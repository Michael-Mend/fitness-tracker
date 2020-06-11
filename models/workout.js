// Require mongoose
const mongoose = require('mongoose');

// Create schema variable
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
	day: Date,

	exercises: [
		{
			type: {
				type: String
			},
			name: {
				type: String
			},
			distance: {
				type: Number
			},
			duration: {
				type: Number
			},
			weight: {
				type: Number
			},
			sets: {
				type: Number
			},
			reps: {
				type: Number
			}
		}
	]
});

WorkoutSchema.methods.workoutDay = function() {
	this.day = Date.now();
	return this.day;
};

const Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = Workout;
