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
{
    toJSON: {virtuals: true}
}
);

workoutSchema.virtual("totalDuration").get(function() {
    return this.exercises.reduce((total, value) => {
        return total + value.duration;
    },0);
});


const Workout = model('workout', workoutSchema);

module.exports = Workout;