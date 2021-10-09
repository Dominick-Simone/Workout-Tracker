const Workout = require("../models")

module.exports = {
    addWorkout(req, res) {
        Workout.create({})
        .then((workout) => res.json(workout))
        .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
          });
    },
    addExercise(req, res) {
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
        Workout.aggregate({
            $addFields: {
                totalDuration: {
                    $sum: "$exercise.duration"
                }
            }
        })
        .then((workout) => res.json(workout))
        .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
          });
    },
    getWorkoutsInRange(req,res) {
        Workout.aggregate([{
            $addFields: {
                totalDuration: {
                    $sum: "$exercises.duration"
                }
            }
        }])
        .sort({ day: -1 })
        .limit(7)
        .then((workout) => res.json(workout))
        .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
          });
    }
}
