const { Schema } = require("mongoose");
const Exercise = require('./Exercise');

const workoutSchema = new Schema(
    {
        exercises: [Exercise]
    }
)
const Workout = model('workout', workoutSchema);

module.exports = { Workout }