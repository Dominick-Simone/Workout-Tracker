const { Schema } = require("mongoose");

const exerciseSchema = new Schema(
    {
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
const Exercise = model('exercise', exerciseSchema);

module.exports = { Exercise }