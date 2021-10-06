const router = require("express").Router()
const {
    addWorkout,
    addExercise,
    getWorkouts
} = require("../../controllers/workoutController")

router.route("/workouts").get(getWorkouts).post(addWorkout)
router.route("/workouts/:id").put(addExercise)

module.exports = router;