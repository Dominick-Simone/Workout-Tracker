const { Schema, model } = require("mongoose");

const workoutSchema = new Schema(
{
    day: {
        type: Date,
        default: () => new Date()
    },
    exercises: [
        {
        type: {
            type: String,
            required: true,     
        },
        exerciseName: {
            type: String,
            required: true,
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
    ]
}, 
);


const Workout = model('workout', workoutSchema);

module.exports = Workout;
