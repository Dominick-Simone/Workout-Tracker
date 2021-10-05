const { Schema } = require("mongoose");

const workoutSchema = new Schema(
    {
        user: [User],
        type: {
            type: String,
            required: true,
            minLength: 6,
            maxLength: 10
            
        },
        exerciseName: {
            type: String,
            required: true,
            maxLength: 50
        },
        duration: {
            type: Number,
            required: true
        },
        weight: Number,
        sets: Number,
        reps: Number,
        distance: Number,
    }
)
const Workout = model('workout', workoutSchema);

module.exports = { Workout }