const Workout = require("../models")

module.exports = {
    addWorkout(req, res) {
        console.log("addWorkout")
        Workout.create({})
        .then((workout) => res.json(workout))
        .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
          });
    },
    addExercise(req, res) {
        console.log("addExercise")
        console.log(req.body)
        Workout.findByIdAndUpdate(req.params.id,
            {$push: {exercises: req.body}}
            )
        .then(workout => res.json(workout))
        .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
          });
    },
    getWorkouts(req,res) {
        Workout.find({})
        .then((workout) => res.json(workout))
    }
}