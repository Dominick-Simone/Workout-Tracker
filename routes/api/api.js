const express = require("express")
const router = express.Router()
const {
    addWorkout,
    addExercise,
    getWorkouts,
    getWorkoutsInRange
} = require("../../controllers/workoutController")

router.route("/workouts").get(getWorkouts).post(addWorkout)
router.route("/workouts/:id").put(addExercise)
router.route("/workouts/range").get(getWorkoutsInRange)

module.exports = router;
